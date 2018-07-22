import gulp from 'gulp'
import GulpSSH from 'gulp-ssh'


const apache = {
    src: './apache2.conf',
    dest: '/etc/apache2'
}

const config = {
    host: 'd8',
    port: 22,
    username: 'root',
    //privateKey: '~/.ssh/bb88_id_rsa',
    agent: process.env["SSH_AUTH_SOCK"]
}

const gulpSSH = new GulpSSH ({
    ignoreErrors: false,
    sshConfig: config
})

export const copyApache = () =>
    gulp.src(apache.src)
    .pipe(
        gulpSSH.dest(apache.dest)
    )

export const restartApache = () =>
    gulpSSH.exec(
        [ 'systemctl restart apache2' ],
        { filePath: 'commands.log' }
    )
    .pipe(gulp.dest('logs'))


export const build = gulp.series(copyApache, restartApache)

export default build