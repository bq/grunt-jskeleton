module.exports.tasks = {
    aws_s3: {
        deploy: {
            files: [{
                action: 'upload',
                expand: true,
                cwd: 'dist',
                src: ['**'],
                exclude: [
                    '**/*.html',
                    'src/resources/locales/*.json'
                ],
                dest: '',
                params: {
                    CacheControl: '2592000'
                }
            }, {
                action: 'upload',
                expand: true,
                cwd: 'dist',
                src: [
                    '**/*.html',
                    'src/resources/locales/*.json'
                ],
                dest: ''
            }]
        }
    }
};
