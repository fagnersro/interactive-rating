function privateScope() {
const ratingContainer1 = document.querySelector('#rating-container');
const ratingContainer2 = document.querySelector('#rating-container-two');

const reatingAll = document.querySelectorAll('.reating');
const btnSubmit = document.querySelector('#submit');
let   printResult = document.querySelector('#result')


let selected = null;

reatingAll.forEach((btn) => {
  btn.addEventListener('click', () => selected = btn.value);

  btnSubmit.addEventListener('click', function (){
    if (selected) {
      ratingContainer1.style.display = 'none';
      ratingContainer2.style.display = 'flex';
      valueSelection();
    }
  })

});

function valueSelection() {
  printResult.textContent = `You selected ${selected} out of 5`;
}

};
privateScope();
