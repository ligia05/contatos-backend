

let elementoTitulo= document.querySelector('.titulo');
console.log(elementoTitulo);
elementoTitulo.textContent = "MST"

elementoTitulo.classList.add = ("luta");
let elementoMain = document.createElement('main')
document.body.appendChild(elementoMain);
setTimeout (
    ()=>{document.body.removeChild(elementoMain)},
    3000
)
setTimeout (
    ()=>{elementoTitulo.remove()},
    5000
)
let arrayDeTds = document.querySelectorAll('td');
arrayDeTds.forEach(
    td=>{
        td.style.border ="1px black solid";
        td.style.padding="5px"
        td.style.backgroundColor = '#EEE';
    }
)
let elementoLista = document.getElementById('listaDeletras');
let campoSenha =  document.getElementsByName('senha')[0];
campoSenha.value = '123456';