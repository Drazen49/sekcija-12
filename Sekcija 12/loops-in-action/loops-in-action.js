//sum numbers

const calculateSumButtonElement = document.querySelector('button');


function calculateSum(){
    const userNumberElement = document.getElementById('user-number');
    const enteredNumber = userNumberElement.value;

    let sumUpToNumber = 0;

    for (let i=0;i<=enteredNumber;i++){
        sumUpToNumber = sumUpToNumber + i;
    }
    const result = document.getElementById('calculated-sum');
    result.textContent = sumUpToNumber;
}

calculateSumButtonElement.addEventListener('click', calculateSum);

const highlightLinksButtonElement = document.querySelector('#highlight-links button');

function highlightLinks(){
    const anchorElements = document.querySelectorAll('#highlight-links a');
    
    for (const anchorElement of anchorElements){
        anchorElement.classList.add('highlight'); 
    }
}

highlightLinksButtonElement.addEventListener('click', highlightLinks);