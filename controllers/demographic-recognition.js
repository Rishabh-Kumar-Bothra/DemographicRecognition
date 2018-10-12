var request = require('request')

module.exports = function(ImageStream) {
    return new Promise((resolve , reject ) => {
        request.post({
            url: 'https://api.deepai.org/api/demographic-recognition',
            headers: {
                'Api-Key': process.env.API_KEY
            },
            formData: {
                'image': ImageStream
            }
        }, (err, httpResponse, body) => {
            if (err) {
                return reject(err)
            }

            let apiAns = JSON.parse(body)
            console.log(apiAns);

            if(apiAns.err)
                return reject(apiAns)

            return resolve(apiAns)
        })
    })
}
