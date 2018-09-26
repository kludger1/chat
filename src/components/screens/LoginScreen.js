import $ from 'jquery'
import navigate from '../../navigation'
import { createPersistantSession, logInWithGoogle, loginWithFacebook, loginWithEmailAndPassword } from '../../auth'

function mountLoginScreen() {
    $('#root').html(LoginScreen());
    initLoginScreenListeners();
}

function LoginScreen() {
    let container = document.createElement('div');

    container.id = 'login-screen';
    container.classList.add('login-screen');
    container.innerHTML = `
  <div class="login-container">


        <div class="login-container-body">
            <div class="login-box">
                <div class="logo">
                    <img class = "logo-img" src="./images/login-images/Logo.svg" alt="A logo that has a black capital K and L.">
                </div>
                <div class="fold"></div>
                <div class="fold2"></div>
                <form action="#">
                <div id="error-message">
                </div>
                    <div class="text-area">
                        <input type="text" name="email" placeholder="EMAIL" id= "email">
                        <input type="password" name="password" placeholder="PASSWORD" id="password">
                    </div>

                    <div class="social-buttons">
                        <button id="fb-btn" type="submit"> <img class="fg-img" src="./images/login-images/fb.png"> LOGIN WITH FACEBOOK </button>
                  <button id="google-btn" type="submit"> <img class="google-img" src="./images/login-images/google.png"> LOGIN WITH GOOGLE </button>
                    </div>

                    <div class="button-container">
                    <input id="login-sign-up" type="submit" value="SIGN UP">
                        <input id="login-sign-in" type="submit" value="SIGN IN">
                    </div>
                </form>
            </div>
        </div>

    </div>



  `;

    return container;
}

function initLoginScreenListeners() {
    $('#google-btn').on('click', function () {
        createPersistantSession(logInWithGoogle);
    })
    // .keypress(function () {
    //     document.getElementById('google-btn').style.opacity = 1
    // });

    $('#fb-btn').on('click', function () {
        createPersistantSession(loginWithFacebook);
    });

    $('#login-sign-in').on('click', function () {
        createPersistantSession(loginWithEmailAndPassword);
    });

    $('#login-sign-up').on('click', function () {
        navigate('sign-up-screen');
    });

   
}

export default mountLoginScreen;