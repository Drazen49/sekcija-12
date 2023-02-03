const firstButtonElement = document.querySelector('button');
const secondButtonElement = document.getElementById('change-bg-btn');


// function removeParagraph(){
//   console.dir(firstButtonElement);
// }

// function changeBackgroundColor(event){
//   console.dir(event.target);
// }

// firstButtonElement.addEventListener('click', removeParagraph);
// secondButtonElement.addEventListener('click', changeBackgroundColor);



const firstParagraphElement = document.body.children[2].children[1]; 
console.dir(firstParagraphElement);
const thirdParagraphElement = document.body.children[2].children[3]; 
console.dir(thirdParagraphElement);


function removeParagraph(){
  thirdParagraphElement.remove();
}

function changeBackgroundColor(){
  firstParagraphElement.className = 'plavae';
}

firstButtonElement.addEventListener('click', removeParagraph);
secondButtonElement.addEventListener('click', changeBackgroundColor);