const path = require('path');

exports.downloadFile = (req, res) => {
    const file = path.join(__dirname, '..', 'upload/Marie_Beaujeu_CV.pdf')
    res.download(file, function(err) {
        if(err) {
            console.log(err);
            return res.status(500).json(err);
        } else {
            return res.status(200);
        }
    });
}