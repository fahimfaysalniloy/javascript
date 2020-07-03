const allButtons =document.querySelectorAll('button');
const cards = document.querySelector('.cards');
const outermodal = document.querySelector('.modal-outer');
const innermodal = document.querySelector('.modal-inner');

function handleButtonClick(e){
  outermodal.classList.add('open');
  const currentdiv = e.target.closest('.card');
  const desc = currentdiv.dataset.description;
  innermodal.innerHTML=`
  this is ${desc}

  `;





}

allButtons.forEach((button)=>cards.addEventListener('click',handleButtonClick));

function removemodal(){
  outermodal.classList.remove('open');
}

outermodal.addEventListener('click',isoutside);
function isoutside(e){
  const isoutside =! e.target.closest('.modal-inner');
  if(isoutside){
    removemodal();
  }


}





