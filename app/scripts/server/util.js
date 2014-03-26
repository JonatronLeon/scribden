exports.initPromiseCallback = function(deferred, res) {
    deferred.then(function(value) {
        res.json({
            result: value,
            error: undefined
        });        
    }, function(reason) {
        res.json({
            result: undefined,
            error: reason
        });
    });
}

exports.uploadFile = function(req, res) {
    // @TODO: move to config file
    var s3BucketName = process.env.PARAM1 || '';
    var awsAccessKeyID = process.env.AWS_ACCESS_KEY_ID || '';
    var awsSecretKey = process.env.AWS_SECRET_KEY || '';
    
    var shaObj = require('../../lib/jsSHA-release-1.42/src/sha_dev.js');
    var sha = shaObj.sha();
    var objectName = req.params.s3objectname;
    var mimeType = req.params.s3objecttype;
    var expires = Math.round((Date.now() / 1000) + 100); // PUT request to S3 must start within 100 seconds
    
    var amzHeaders = 'x-amz-acl:public-read'; // set the public read permission on the uploaded file
    var stringToSign = 'PUT\n\nimage/' + mimeType + '\n' + expires + '\n' + amzHeaders + '\n/' + s3BucketName + '/uploads/' + objectName;
    var jsSHA = new sha(stringToSign, 'TEXT');
    var hmac = jsSHA.getHMAC(awsSecretKey, 'TEXT', 'SHA-1', 'B64');
    var sig = encodeURIComponent(hmac);
    var url = 'https://' + s3BucketName + '.s3.amazonaws.com/uploads/' + objectName;
    
    res.json({
        signed_request: encodeURIComponent(url + '?AWSAccessKeyId=' + awsAccessKeyID + '&Expires=' + expires + '&Signature=' + sig),
        url: url
    });
}
