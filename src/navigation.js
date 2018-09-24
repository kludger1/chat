import { mountChatScreen, mountLoadingScreen, mountLoginScreen, mountSignUpScreen } from './components';


function navigate(screen) {
    switch (screen) {
        case 'loading-screen':
            mountLoadingScreen();
            break;

        case 'login-screen':
            mountLoginScreen();
            break;

        case 'sign-up-screen':
            mountSignUpScreen();
            break;

        case 'chat-screen':
            mountChatScreen();
            break;

        default:
            $('root').html('');
            break;
    }
}

export default navigate
