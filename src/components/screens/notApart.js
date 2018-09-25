function Message(msg, showUsername) {
    let container = document.createElement('div');
    let isMe = msg.email === user.email;
  
    container.style.textAlign = isMe ? 'right' : 'left';
    container.style.margin = '20px';
  
    container.innerHTML = `
     
      

        
        <div class="bubble ${isMe ? 'msg-bubble-right' : 'msg-bubble-left'}">
          <div>${msg.text}</div>
          <div class="msg-date-time">${moment(msg.date).format('MM/DD/YYYY hh:mm')}</div>
        </div>
      </div>
      
      
      
    `
    return container;
  }