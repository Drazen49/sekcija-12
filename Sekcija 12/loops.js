for (let i = 0;i<=10;i++) {
console.log(i);
}
const korisnici = ['Vukasin', 'Ana', 'Vojin'];


for (let korisnik of korisnici){
    console.log(korisnik);
}

const loggedInKorisnik = {
    name: 'Miljan',
    godine: 24,
    adminJe: true
};

for (const keys in loggedInKorisnik){
    console.log(keys);
    console.log(loggedInKorisnik[keys]);
}

let jelZavrseno = false;

while (!jelZavrseno) {
    console.log(jelZavrseno);
    jelZavrseno = confirm('Da li je zavrseno vise?');
}


