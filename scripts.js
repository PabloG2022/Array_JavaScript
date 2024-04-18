//primeiro chama todos ID's do HTML pra depois criar as funções
let input = document.getElementById("input-principal") //busca o ID do HTML input-principal 
let botao = document.getElementById("botao-adicionar")//etc..
let listaCompleta = document.getElementById("tarefas")// mapear uma lista LI

// por boas práticas cria uma função para cada tarefa

let arrayDeTarefas = [] //array de tarefas começa vazio

function mostrarNaTela(){  
    let novaLista = " " //criou a variável novaLista, agora vai criar a atividade 

    arrayDeTarefas.forEach( tarefa => {  //forEach pra varrer o que estiver dentro do arrydeTarefas
         novaLista = novaLista + `      
            <li class="item-tarefa"> 
                <p >${tarefa}</p>
            </li>
        `
    })

    listaCompleta.innerHTML = novaLista  //innerHtML envia pro HTML
}

function cliqueiNoBotao(){
    arrayDeTarefas.push(input.value) // push serve para jogar o que está dentro () e acrescentar no array no console
    mostrarNaTela()
}


botao.addEventListener("click", cliqueiNoBotao)//addEventListener serve pra chamar um evento após uma acão "click"

//Debugando;1° primeira coisa a fazer é criar as classes let e chamar o HTML getelementbyId cada uma com sua função "botão, input, lista etc..." 
//2° cria função vazia cliqueiNoBotão(){, depois chama a variavel botao.addEventListener e chamar o evento de click mostar cliqueiNoBotão
//3° mostrar o que está dentro do input no terminal; embaixo da função cliqueiNoBotão escreva console.log(input.value) para inprimir o que foi digitado
//4°colocar um array dentro da função CliqueiNoBotao, lá coloca arrayDeTarefas.push(input.value) o push faz isso
//5° cria a função "mostarNaTela" para monstar o que está dentro do arrayDetarefas
//6° crir a variável novaLista vazia para receber as informaçoes do arrayDeTarefas
//7° criar arrayDeTarefas.forEach coloca o nome que desejar "tarefa" e coloca => {
//8° insira novaLista = novaLista +    
//7° inserir a informação dentro do html com o inner.HTML

