import $ from 'jquery'
import navigate from '../../navigation'
import { signUpWithEmailAndPassword } from '../../auth'
import { isValidEmail, isValidPassword } from '../../validate'



function mountSignUpScreen() {
  $('#root').html(SignUpScreen());
  initSignUpScreenListeners();
}

function SignUpScreen() {
  let container = document.createElement('div');

  container.id = 'sign-up-screen';
  container.classList.add('sign-up-screen');
  container.innerHTML = `
    <div class="signUp-container">


        <div class="signUp-container-body">
            <div class="login-box">
                <div class="logo">
                    <img class = "signUp-img" src="./images/login-images/Logo.svg" alt="A logo that has a black capital K and L.">
                </div>
                <div class="fold"></div>
                <div class="fold2"></div>
                <form>
                <div id="error-message">
                </div>
                    <div class="text-area">
                        <input id="email" type="text"  placeholder="EMAIL">
                        <input  id="password" type="password"  placeholder="PASSWORD">
                        <input id="password-confirmation"type="password"  placeholder="RETYPE PASSWORD">
                    </div>

                   

                    <div class="button-container">
                        <input id="back-btn" type="submit" value="BACK">
                        <input id="sign-up-btn" type="submit" value="SIGN UP">
                    </div>
                </form>
            </div>
        </div>

    </div>
    `;

  return container;
}

function initSignUpScreenListeners() {
  $('#back-btn').on('click', function () {
    navigate('login-screen');
  });

  $('#sign-up-btn').on('click', function () {
    let email = $('#email').val();
    let password = $('#password').val();
    let passwordConfirmation = $('#password-confirmation').val();

    if (!isValidEmail(email)) {
      document.getElementById('error-message').innerHTML = 'Invalid e-mail'
    }
    else if (!isValidPassword(password)) {
      document.getElementById('error-message').innerHTML = 'Invalid password'
    }
    else if (password !== passwordConfirmation) {
      document.getElementById('error-message').innerHTML = 'Passwords do not match'
    }
    else {
      signUpWithEmailAndPassword(email, password);
    }

  });
}


export default mountSignUpScreen
