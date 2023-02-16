import {isEscapeKey, isEnterKey} from './util.js';
import {renderSimilarList, clearSimilarList} from './similar-list.js';
import './user-form.js';

const userModalElement = document.querySelector('.setup');
const userModalOpenElement = document.querySelector('.setup-open');
const userModalCloseElement = document.querySelector('.setup-close');

const onPopupEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal() {
  userModalElement.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
  renderSimilarList();
}

function closeUserModal() {
  userModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
  clearSimilarList();
}

userModalOpenElement.addEventListener('click', () => {
  openUserModal();
});

userModalOpenElement.addEventListener('keydown', (evt) => {
  if(isEnterKey(evt)) {
    openUserModal();
  }
});

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

userModalCloseElement.addEventListener('keydown', (evt) => {
  if(isEnterKey(evt)) {
    closeUserModal();
  }
});

// временно показываем окно для разработки
// openUserModal();
