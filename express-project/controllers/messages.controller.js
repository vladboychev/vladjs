const path = require('path');

function getMessages(req, res) {
    res.render('messages', {
        title: 'Messages to my friends',
        friend: 'Eric Clapton',
    })
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'postman.jpg'));
}

function postMessage(req, res) {
    console.log('Delivered..;');
}


module.exports = {
    getMessages,
    postMessage,
};