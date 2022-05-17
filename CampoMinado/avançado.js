document.addEventListener('DOMContentLoaded', () => {
  //tudo o que estiver entre esses colchetes só vai ser lido depois que todo o html for lido, mas será lido antes do que o CSS e não esperará coisas como imagens carragarem. Se usássemos o 'DOMContentLoad', ele iria ser lido após os recursos, tais como imagens.

  let width = 20
  let height = 24
  let bombas = 99 
  let quadrados = []
  let derrota = false

  const tabuleiro = document.querySelector('.tabuleiro')
  //Nesse caso, o querySelector está atribuindo a classe 'tabuleiro' a constante 'tabuleiro', o que também poderia ser feito pelo 'GetElementByID', mas é preferível utilizar o querySelector porque assim é possível acessar os objetos pelo id, classe ou outro método de identificação, sendo mais abrangente.

  function tabuleiroo() {
    const arrayBombas = Array(bombas).fill('Bomba') //cria uma array com a quantidade de elementos equivalente ao valor da variável em questão (10), e depois preenche cada um com o valor dentro de 'fill', sendo que esse valor vira a classe da variavel
    const arrayVazia = Array(width * height - bombas).fill('Acertou') //cria os quadrados que não terão bombas

    const total = arrayVazia.concat(arrayBombas) //une as arrays vazia e bombas, assim formando o jogo
    console.log(total)

    const randomizacao = total.sort(() => Math.random() - 0.5)

    for (let i = 0; i < width * height; i++) {
      const quadrado = document.createElement('div') //isso vai criar divs até que o loop for pare, e elas serão atribuídas a constante 'quadrado'
      quadrado.setAttribute('id', i) //Dando um id a constante 'quadrado' através do 'setAttribute'
      quadrado.classList.add(randomizacao[i])
      tabuleiro.appendChild(quadrado) //passa a constante 'quadrado' como parâmetros
      quadrados.push(quadrado)

      //onclick
      quadrado.addEventListener('click', function (e) {
        onclick(quadrado)
      })
    }

    for (let i = 0; i < quadrados.lenght; i++) {
      let bombasPerto = 0
      const cantoEsquerdo = i % width === 0
      const cantoDireito = i % width === width - 1
      if (quadrados[i].classList == 'valid') {
        if (
          i > 0 &&
          !cantoEsquerdo &&
          quadrados[i - 1].classList.contains('Bomba')
        )
          bombasPerto++ //bomba esquerda
        if (
          i > 7 &&
          !cantoDireito &&
          quadrados[i + 1 - width].classList.contains('Bomba')
        )
          bombasPerto++ //bomba nordeste
        if (i > 8 && quadrados[i - width].classList.contains('Bomba'))
          bombasPerto++ //bomba norte
        if (
          i > 9 &&
          !cantoEsquerdo &&
          quadrados[i - 1 - width].classList.contains('Bomba')
        )
          bombasPerto++ //bomba noroeste
        if (
          i < 78 &&
          !cantoDireito &&
          squares[i + 1].classList.contains('Bomba')
        )
          bombasPerto++ //bomba direita
        if (i < 72 && quadrados[i + width].classList.contains('Bomba'))
          bombasPerto++ //bomba sul
        if (
          i < 72 &&
          !cantoEsquerdo &&
          quadrados[i - 1 + width].contains('Bomba')
        )
          bombasPerto++ //bomba sudoeste
        if (
          i < 72 &&
          !cantoDireito &&
          quadrados[i + 1 + width].contains('Bomba')
        )
          bombasPerto++ //bomba sudeste
        quadrados[i].setAttribute('data', bombasPerto)
      }
    }
  }

  tabuleiroo()

  function onclick(quadrado) {
    let idQuadradoAtual = quadrado.id
    if (derrota) return
    if (quadrado.classList.contains('Verificado') || quadrado.classList.contains('Bandeira')) return
    if (quadrado.classList.contains('Bomba')) {
      document.write('Game Over')
    } else {
      let bombasPerto = quadrado.getAttribute('data')
      if (bombasPerto != 0) {
        quadrado.classList.add('Verificado')
        quadrado.innerHTML = bombasPerto
        return
      }
    } 
    checagem(quadrado, idQuadradoAtual) ;{
  }
  quadrado.classList.add('Verificado')
  }


  function checagem(quadrado, idQuadradoAtual) {
    const cantoEsquerdo = (idQuadradoAtual % width === 0)
    const cantoDireito = (idQuadradoAtual & width - 1)
  }

  function timer() {
    var segundos = 0;
    var cronometro = setInterval(function() {
      document.querySelector('#timer-jogo').innerHTML= '00:00' + segundos;
      sec++;
      if (sec < 0) {
        clearInterval(cronometro);
      }
    }, 1000);
  }
})
