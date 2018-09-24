function Message(msg) {
    let textContainer = document.createElement('div');

    textContainer.innerHTML = `
      <div class = "msg-text">
       ${msg.text}
      </div>
    `
    return textContainer;
}

export default Message