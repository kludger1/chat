import $ from 'jquery'
import { createPersistantSession,logInWithGoogle} from '../../auth'

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
                    <img src="./images/login-images/Logo.svg" alt="A logo that has a black capital K and L.">
                </div>
                <div class="fold"></div>
                <div class="fold2"></div>
                <form action="#">
                    <div class="text-area">
                        <input type="text" name="email" placeholder="EMAIL">
                        <input type="password" name="password" placeholder="PASSWORD">
                    </div>

                    <div class="social-buttons">
                        <button id="fb-btn" type="submit"> <img class="fg-img" src="./images/login-images/fb.png"> LOGIN WITH FACEBOOK </button>
                  <button id="google-btn" type="submit"> <img class="google-img" src="./images/login-images/google.png"> LOGIN WITH GOOGLE </button>
                    </div>

                    <div class="button-container">
                        <input id="sign-in" type="submit" value="SIGN IN">
                        <input id="sign-up" type="submit" value="SIGN UP">
                    </div>
                </form>
            </div>
        </div>

    </div>



  `;

  return container;
}

function initLoginScreenListeners() {
  $('#google-btn').on('click', function(){
    createPersistantSession(logInWithGoogle);
  });
}

export default mountLoginScreen;