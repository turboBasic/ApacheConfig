import gulp from 'gulp'
import GulpSSH from 'gulp-ssh'


const apache = {
    src: [
        './apache2.conf' ,
        './sites-available/*'
    ],
    base: '.',
    dest: '/etc/apache2'
}

const apacheDocroot = {
    src: './html/**/*',
    dest: '/var/www/html'
}

const config = {
    host: 'd8',
    port: 22,
    username: 'root',
    //privateKey: '~/.ssh/id_rsa',
    agent: process.env["SSH_AUTH_SOCK"]
}

const gulpSSH = new GulpSSH ({
    ignoreErrors: false,
    sshConfig: config
})

const copyApacheConfig = () =>
    gulp.src(apache.src, {base: apache.base,  dot: true})
    .pipe(
        gulpSSH.dest(apache.dest)
    )

const copyApacheDocroot = () =>
    gulp.src(apacheDocroot.src, {dot: true})
    .pipe(
        gulpSSH.dest(apacheDocroot.dest)
    )

export const copyApache = gulp.parallel(copyApacheConfig, copyApacheDocroot)

export const restartApache = () =>
    gulpSSH.exec(
        [ 'systemctl restart apache2' ],
        { filePath: 'commands.log' }
    )
    .pipe(gulp.dest('logs'))


export const build = gulp.series(copyApache, restartApache)

export default build