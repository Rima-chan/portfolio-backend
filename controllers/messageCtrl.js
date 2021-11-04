require('dotenv').config();



const Message = require('../models/message');
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

exports.createNewMessage = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const list = process.env.CORS_DOMAIN.split(',');
    console.log(list)
    if (name === '' || email === '' || message === '') {
        return res.status(400).json({error: 'Missing parameters'});
    }
    if (!EMAIL_REGEX.test(email)) {
        return res.status(400).json({error: 'Invalid email'});
    } else {
        const newMessage = new Message({
            name: name,
            email: email,
            message: message
        });
        newMessage.save()
          .then(() => res.status(201).json({message: 'Message created'}))
          .catch(error => {
              res.status(500).json({error: 'Cannot save message in DB ' + error})
          })
    }
}
