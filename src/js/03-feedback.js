import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form')

let saveFeedBackForm;

form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onBtnSubmit);

function onInputChange (event) {
  // console.log('email', form.email.value);
  // console.log('message', form.message.value);

  const feedBackForm = {
    email: form.email.value,  
    message: form.message.value,        
  };  
  console.log('feedBackForm', feedBackForm);

  const feedBackFormJSON = JSON.stringify(feedBackForm);
  localStorage.setItem('STORAGE_KEY', feedBackFormJSON);
  console.log('STORAGE_KEY', localStorage.getItem('STORAGE_KEY'));  
};

function checkStorageContent() {
  saveFeedBackForm = localStorage.getItem('STORAGE_KEY');
  let parseFeedBackForm = JSON.parse(saveFeedBackForm);
  // console.log('parseFeedBackForm', parseFeedBackForm);
  if (saveFeedBackForm) {    
    form.email.value = parseFeedBackForm.email;
    form.message.value = parseFeedBackForm.message;
  };
}

checkStorageContent();

function onBtnSubmit() {  
  console.log(localStorage.getItem('STORAGE_KEY'));
  form.email.value = '';
  form.message.value = '';
  saveFeedBackForm = localStorage.clear();
  // console.log('STORAGE_KEY_null', localStorage.getItem('STORAGE_KEY')); 
};
