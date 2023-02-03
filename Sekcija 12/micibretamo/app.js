let paragraphElement = document.querySelector('p');

function changeParagraphText(event){
    paragraphElement.textContent = 'Clicked!';
    console.log('Paragraph clicked!');
    console.log(event);
}

paragraphElement.addEventListener('click', changeParagraphText);

let inputElement = document.querySelector('input');

function vratiKorisnikovUpis(event){
    // let uneseniTekst = inputElement.value;
    // console.log(uneseniTekst);
    // console.log(event);
    let uneseniTekst = event.target.value;
    console.log(uneseniTekst);
    console.log(event);
}

inputElement.addEventListener('input', vratiKorisnikovUpis);
