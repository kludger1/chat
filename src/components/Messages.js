import moment from 'moment'

function Message(msg, showUsername) {
  let container = document.createElement('div');
  let isMe = msg.email === user.email;

  container.style.textAlign = isMe ? 'right' : 'left';
  container.style.margin = '20px';

  container.innerHTML = `



  
    
    <div class="msg-container">

    <div style="display: flex; justify-content: ${isMe ? 'flex-end' : 'flex-start'}"> 
    ${
      !isMe ? 
  `<img id = "profile-img"src="${msg.photoURL ? msg.photoURL : './images/logo.png'}"/>` 
      : ''
    }

    <div class="bubble ${isMe ? 'msg-bubble-right' : 'msg-bubble-left'}">
    <div class="msg-text">${msg.text}</div>
    ${showUsername ? 
      `<div class="msg-name">
        ${msg.email.split('@')[0]}
      </div>` 
      : ''}
        <div class="msg-date-time">${moment(msg.date).format('MM/DD/YYYY hh:mm')}</div>
        </div>
    </div>





    
    
    
  `
  return container;
}

export default Message