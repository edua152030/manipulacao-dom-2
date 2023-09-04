const cards = document.querySelectorAll('.card')
cards.forEach(card => {
    card.style.backgroundColor = '#e07137'
})

const tituloCards = document.querySelectorAll('.titulo-card')
tituloCards.forEach(titleCard => {
    titleCard.style.color = '#2b385b'
    titleCard.innerText = 'Meu Card'
    titleCard.style.marginTop = '25px'
})

const descricoesCards = document.querySelectorAll('.descricao-card')
descricoesCards.forEach(descricoes => {
    descricoes.style.color = '#ffffff'
    descricoes.innerText = 'Titulo alterado pelo java script'
    descricoes.style.marginTop = '25px'
})

const editar = document.querySelectorAll('.botao-editar');

editar.forEach(editBtn => {
    editBtn.setAttribute('style', `
        background-color: #2e9634;
        border-radius: 15px;
        color: #ffffff;
        padding: 5px;
        margin-top: 25px;
        border: none;
    `);
    
    editBtn.setAttribute('onclick', 'editarCard()');
});

function editarCard() {
    if(confirm ('deseja editar')){
    alert('Cliquei no editar'); 
    }
    alert('cancelou editar')
};



const apagar = document.querySelectorAll('.botao-apagar')
apagar.forEach(apagarBtn => {
    apagarBtn.setAttribute('style',`
    background-color: #ae0909;
    border-radius: 15px;
    color: #ffffff;
    padding: 5px;
    margin-top: 25px;
    border: none;`
)
    apagarBtn.setAttribute('onclick', 'apagarBtnf()')
})
function apagarBtnf(){
    if(confirm ('deseja excluir')){
    alert('cliquei no apagar')
}else{
    alert('nao vai apagar')
}}
