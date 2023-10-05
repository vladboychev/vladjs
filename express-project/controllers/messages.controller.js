function getMessages(req, res) {
    res.send('<ul><li>Express delivery..</li></ul>');
}

function postMessage(req, res) {
    console.log('Delivered..;');
}


module.exports = {
    getMessages,
    postMessage,
};