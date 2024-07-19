// Primeiramente, é importante mapear e falar pro javascript quem é quem.
let btnNext = document.querySelector('.next') // Botão next definido
let btnBack = document.querySelector('.back') // Botão back definido
let container = document.querySelector('main')

let lista = document.querySelector('.lista') // A classe '.lista' é o container de todos os h1, imgs principais e parágrafos principais. É uma NodeLista
let thumb = document.querySelector('.thumb') // A classe '.thumb' é o container de todas as thumbs que ficam no canto da tela.


// Aqui é onde e como vai ser chamado a função para ativar o botão next e back.
// sintaxe: botao.quandoclicar = () => chamar função [nome da função('...')]
// Ou seja, nesse caso, quando clicar no botão next = () => chamar a função de movimentar os itens que tenha a classe .next/back
btnNext.onclick = () => moveItensOnClick('next')
btnBack.onclick = () => moveItensOnClick('back')


// Nessa função é dada o parâmetro do tipo do botão (next ou back)
function moveItensOnClick(type){

    // Selecionado todos os itens que tem dentro do container .lista
    let listItems = document.querySelectorAll('.lista .lista-item')
    // Selecionado todos os itens que tem dentro do container .thumb
    let thumbItems = document.querySelectorAll('.thumb .thumb-item')

    // Se(o tipo for verdadeiramente igual a 'next') faça{
    //      lista.adicionarnocomeçodalista(itens do container lista [0])
    //      thumb.adicionarnocomeçodalista(itens do container thumb [0])
    // }
    if(type === 'next'){
        // quem ta na posição 0, vai ser movido
        lista.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])
        // adicionar uma classe (no css)
        container.classList.add('next')

    // senão faça { 
    
    //  }
    } else {
        //  lista.adicionarnofinaldalista(itens do container lista[length - 1 = tanto de itens do container - 1])
        //  thumb.adicionarnofinaldalista(itens do container thumb[length - 1 = tanto de itens do container - 1])
        // Para que não seja definido um número x de itens, e que não seja alterado no código ao adicionar mais listas, é definido o comando .length, pois automaticamente o js vai detectar quantos itens tem.
        // O -1 é porque por exemplo, o listItems tem 4 elementos filhos, mas o js começa contar com 0, então pro JS, o último elemento é o número 3, e não 4. Por isso a gente pega o .length (4 itens) - 1, para que fique alinhado com a contagem do JS
        lista.prepend(listItems[listItems.length - 1])
        thumb.prepend(thumbItems[thumbItems.length - 1])
        // adicionar uma classe (no css)
        container.classList.add('back')
    }

    // setTimeout é um TEMPORIZADOR
    // Nesse caso, é 3 segundos, tem que colocar 3000 pois o metodo está em milisegundo
    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000);
}