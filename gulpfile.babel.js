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
    agent: process.env["SSH_AUTH_SOCK"]
}

const gulpSSH = new GulpSSH ({
    ignoreErrors: false,
    sshConfig: config
})

const copyApache = () =>
    gulp.src(apache.src)
    .pipe(
        gulpSSH.dest(apache.dest)
    )

const restartApache = () =>
    gulpSSH.exec(
        [ 'systemctl restart apache2' ],
        { filePath: 'commands.log' }
    )
    .pipe(gulp.dest('logs'))


const build = gulp.series(copyApache, restartApache)

export default build