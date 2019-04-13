module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    grunt.registerMultiTask('dist', function () {
        const map = {}
        this.files.forEach((f) => {
            f.src.forEach((filepath) => {
                const name = filepath.replace('src/', '').replace('.js', '');
                map[name] = name.replace('/', '.');
                const origin = grunt.file.read(filepath, { encoding: 'utf8' });
                // console.log(origin);
                grunt.file.write(filepath.replace('src', 'dist'), origin.replace(/(require\(')\.?\.\/(.*\))/, '$1$2'));
            })
        })
    });
    grunt.initConfig({
        screeps: {
            options: {
                email: '545792860@qq.com',
                password: 'yangzhe200',
                branch: 'default',
                ptr: false
            },
            dist: {
                src: ['src/*.js']
            }
        },
        dist: {
            src: ['src/**/*.js']
        }
    });
    grunt.registerTask('default', ['screeps'])
}