import {createWizards} from './data.js';
const SIMILAR_WIZARD_COUNT = 4;

const userDialog = document.querySelector('.setup');

userDialog.classList.remove('hidden');
userDialog.querySelector('.setup-similar').classList.remove('hidden');

const similarListElement = userDialog.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template')
                                .content
                                .querySelector('.setup-similar-item');  

const similarWizards = createWizards(SIMILAR_WIZARD_COUNT);

const similarListFragment = document. createDocumentFragment();

similarWizards.forEach(({name, coatColor, eyesColor}) => {
    const wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = name;
    wizardElement.querySelector('.wizard-coat').style.fill = coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = eyesColor;
    similarListFragment.appendChild(wizardElement);
});

similarListElement.appendChild(similarListFragment);