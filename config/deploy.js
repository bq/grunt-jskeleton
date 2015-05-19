module.exports.tasks = {
    aws_s3: {
        options: {
            region: 'eu-west-1',
            uploadConcurrency: 5,
            gzip: true,
            excludedFromGzip: ['*.png', '*.jpg', '*.jpeg', '*.ico', '*.mp4', '*.avi', '*.mp3', '*.ogg', '*.ogm', '*.webm', '*.webp']
        },
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
