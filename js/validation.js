const querystring = window.location.search;
const urlParams = new URLSearchParams(querystring);
const log = urlParams.get('login');
const mdp = urlParams.get('pass');
const statu = document.getElementById('reponse');

if (log == 'Aladin' && mdp == 'grobof06') {

    statu.classList.add('valid');
    statu.innerText = "Vous êtes connecter";
    console.log('je suis connecter');
} else {

    statu.classList.add('invalid');
    statu.innerText = "Veuillez réessayer";
    console.log('ladesh');
}