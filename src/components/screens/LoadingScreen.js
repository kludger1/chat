import $ from 'jquery';
import {session} from '../../auth'

function mountLoadingScreen() {
  $('#root').html(LoadingScreen());

  setTimeout(() => {
    session();
  }, 3000);
}

function LoadingScreen() {
  let container = document.createElement('div');

  container.id = 'loading-screen';
  container.classList.add('loading-screen');
  container.innerHTML = `
  <div id="page-wrapper">
  <div class="loading">LOADING</div>
</div>
  `;

  return container;
}

export default mountLoadingScreen;