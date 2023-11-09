import {isEscapeKey, isEnterKey} from './util.js';
import {renderSimilarList, clearSimilarList} from './similar-list.js';
import './user-form.js';

const userModalElement = document.querySelector('.setup');
const userModalOpenElement = document.querySelector('.setup-open');
const userModalCloseElement = document.querySelector('.setup-close');

const onPopupEscKeydown = (evt) => {
  if(isEscapeKey(evt)) { // вынесли условие в отдельную функцию
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal() {
  userModalElement.classList.remove('hidden');
  /* создаем обработчик события нажатия клавиши ESC в момент клика по .setup-open */
  document.addEventListener('keydown', onPopupEscKeydown); // callback-фунция должна быть передана по ссылке, чтобы потом можно было именно её удалить при удалении события
  renderSimilarList();
}

function closeUserModal() {
  userModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown); // удаляем обработчик события... удалим именно тот обработчик, т. к. callback-функция передана по ссылке
  clearSimilarList();
}

userModalOpenElement.addEventListener('click', () => {
  openUserModal();
});

/* чтобы учесть проблему, когда верстка несемантичная, т.е. элемент? на который мы кликаем не является ни ссылкой, ни кнопкой... мы предусматриваем обработку события, когда мы нажмем на элементе Enter. А в .html-файле указываем элементу tabindex, чтобы он был в фокусе */
userModalOpenElement.addEventListener('keydown', (evt) => {
  if(isEnterKey(evt)) { // вынесли условие в отдельную функцию
    openUserModal();
  }
});

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

userModalCloseElement.addEventListener('keydown', (evt) => {
  if(isEnterKey(evt)) { // вынесли условие в отдельную функцию
    closeUserModal();
  }
});
