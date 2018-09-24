import $ from 'jquery'
import { signOut } from '../../auth'
import Message from '../Messages'




$("#yourDivID").on('scroll', function(){
    scrolled=true;
});



function mountChatScreen() {
    let db = firebase.database();
    let messages = db.ref('messages/');

    $('#root').html(ChatScreen());
    initChatScreenListeners(messages);
}

function ChatScreen() {
    let container = document.createElement('div');


    container.id = 'chat-screen';
    container.classList.add('chat-screen');
    container.innerHTML = `
    <div class="container">
    <div class="container-body">

        <div class="chat-header">
            <p> Hello ${window.user.email.split('@')[0]} </p>

            <button id="exit-btn">
                <img src="./images/chat-screen-images/exit.png" alt="A black arrow going through a maze.">
            </button>
        </div>

        <div class="chat-body" id="chat-messages"></div>

        <div class="chat-message-box">
            <input type="text" class="chat-input-msg" id="chat-input-msg" />
            <button id="send-btn">
                <img src="./images/chat-screen-images/send-img.png" alt="A black arrow">
            </button>

        </div>

    </div>
</div>

    `;

    return container;
}

function initChatScreenListeners(messages) {

    let sendMessage = () => {
        let date = new Date();
        let text = $("#chat-input-msg").val();

        messages.push({
            uid: user.uid,
            email: user.email,
            photoURL: user.photoURL,
            date: date,
            text: text
        });

        $("#chat-input-msg").val('');
    }

    $('#exit-btn').on('click', signOut);
    $('#send-btn').on('click', sendMessage);

    $('#chat-input-msg').keypress(function (e) {
        if (e.keyCode === 13) {
            sendMessage();
        }
    }).keyup(function () {
        // we are going to do some cool stuff here 
    });

    messages.on('value', function (snapshot) {
        let msgs = snapshot.val();

        $('#chat-messages').html('');

        for (let mid in msgs) {
            let msg = msgs[mid];

            $('#chat-messages').append(Message(msg));
        }

        scroll()
    });
}


function scroll() {
    let height = $('#chat-messages')[0].scrollHeight;
    $('#chat-messages').scrollTop(height);
  }
export default mountChatScreen

