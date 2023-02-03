// console.log(window);

//console.dir(window.document);
//document.body.children[1].children[0].href = 'https://google.com';


let anchorElement = document.getElementById('externi-link');
anchorElement.href = "https://google.com";

anchorElement = document.querySelector('p a');
anchorElement.href = 'https://www.youtube.com/';


let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = ' Ovo vodi ka google-u.';


let prviParagraf = document.querySelector('p');
prviParagraf.append(newAnchorElement); 

let prviH1Element = document.querySelector('h1');

prviH1Element.remove();

prviParagraf.parentElement.append(prviParagraf);

prviParagraf.innerHTML = 'Cao ovo je drazen pise u <strong>java skript</strong>';
