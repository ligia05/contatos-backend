// Simulando os contatos em uma variável
let contatos = [
    {
        "id": 1,
        "nome": "Kakashi Hatake",
        "emails": ["kakashi@anbu.com"],
        "telefones": ["99999-1111", "98888-1234"]
    },
    {
        "id": 2,
        "nome": "Sakura Haruno",
        "emails": ["sakura@konoha.com"],
        "telefones": ["99999-2222", "98888-3333"]
    },
    {
        "id": 3,
        "nome": "Hinata Hyuga",
        "emails": ["Hinata@hyugas.com"],
        "telefones": ["99999-3333", "98888-4444"]
    },
    {
        "id": 4,
        "nome": "Vovó Tsunade",
        "emails": ["tsunade@hokages.com"],
        "telefones": ["99999-4444", "98888-5555"]
    },
    {
        "id": 5,
        "nome": "Shikamaru Nara",
        "emails": ["shikamaru@konoha.com"],
        "telefones": ["99999-5555", "98888-6666"]
    },
    {
        "id": 6,
        "nome": "Ino",
        "emails": ["ino@yamanakas.com"],
        "telefones": ["99999-6666", "98888-7777"]
    },
    {
        "id": 7,
        "nome": "Choji Akimichi",
        "emails": ["choji@akimichis.com"],
        "telefones": ["99999-7777", "98888-8888"]
    }
]
let showContatos = (contatos) => {
    contatos.forEach(
        c => {
            let section = document.createElement('section');
            let htmlDosEmails = '';
            c.emails.forEach(
                e => {
                    htmlDosEmails += `<a href="mailto:${e}">${e}</a>`
                }
            );
            let htmlDosTels = '';
            c.telefones.forEach(
                t => {
                    htmlDosTels += `<li><a href="tel":${t}">${t}</a></li>`
                }
            );
            let html =
                `<h3>${c.nome}</h3>
    <div>
     ${htmlDosEmails}
    </div>
    <ul>
    ${htmlDosTels}
    </ul>
    <a href="#">Editar</a>`;
            section.innerHTML = html;
            // Adicionando a section do contato no main
            let main = document.querySelector("main")
            main.appendChild(section);



            // Capturar main (querySelector)
            // Adicionar a section ao main


        }
    )















}
let buscaContatos = (trecho) =>{
    let contatosfiltrados= contatos .filter(
c=>c.nome.includes(trecho)
    ) 
    showContatos(contatosfiltrados);
}

showContatos(contatos);