function getShortMessages(messages) {
  return messages.filter(shortMessageFilter).map(getMessage);
}

function shortMessageFilter(messageObj) {
  return messageObj.message.length < 50;
}

function getMessage(messageObj) {
  return messageObj.message;
}

module.exports = getShortMessages;

