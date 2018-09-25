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


        <div class="container-body">
            <div class="login-box">
                <div class="logo">
                    <img src="./images/Logo.svg" alt="A logo that has a black capital K and L.">
                </div>
                <div class="fold"></div>
                <div class="fold2"></div>
                <form action="#">
                    <div class="text-area">
                        <input id="email" type="text" name="email" placeholder="EMAIL">
                        <input  id="password" type="password" name="password" placeholder="PASSWORD">
                        <input id="password-confirmation"type="password" name="password" placeholder="RETYPE PASSWORD">
                    </div>

                   

                    <div class="button-container">
                        <input id="back-btn" type="submit" value="BACK">
                        <input id="sign-up" type="submit" value="SIGN UP">
                    </div>
                </form>
            </div>
        </div>

    </div>
    `;
  
    return container;
  }
  
  function initSignUpScreenListeners() {
    $('#back-btn').on('click', function() {
      navigate('login-screen');
    });
  
    $('#signup-btn').on('click', function(){
      let email = $('#email').val();
      let password = $('#password').val();
      let passwordConfirmation = $('#password-confirmation').val();
  
      if (!isValidEmail(email)) {
        alert('Invalid e-mail');
      }
      else if (!isValidPassword(password)) {
        alert('Invalid password');
      }
      else if (password !== passwordConfirmation) {
        alert('Passwords do not match');
      }
      else {
        signUpWithEmailAndPassword(email, password);
      }
      
    });
  }