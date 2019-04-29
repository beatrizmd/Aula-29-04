var tabela = document.querySelector("table")

// var linhas = document.querySelectorAll("tr")
// console.log(linhas[1])

var linhas = tabela.querySelectorAll("tr")

for (var i = 1; i < linhas.length; i++) {
    linhas[i].addEventListener("dblclick",function(event) {
      event.target.parentNode.remove()

    })
    calcularIMC(linhas[i])
}

function calcularIMC(linha) { 
    var tds = linha.querySelectorAll("td")

    var tdAltura = tds[1]
    var tdPeso = tds[2]

    var altura = tdAltura.textContent
    altura = parseFloat(altura)

    var peso = parseFloat(tdPeso.textContent)

    var IMC = peso / (altura * altura)

    var tdIMC = tds[3]
    tdIMC.textContent = IMC.toFixed(2)
//toFixed(2) = duas casas depois da vírgula

if(IMC >= 30)
    tdIMC.style.color = "red"
}

function adicionarPessoa() {
    var campoNome = document.getElementsByName("Nome") [0]
    var campoAltura = document.getElementsByName("Altura") [0]
    var campoPeso = document.getElementsByName ("Peso") [0]

    var pessoa = {
        nome: campoNome.value,
        altura: campoAltura.value,
        peso: campoPeso.value

    }

    var novaLinha = document.createElement("tr")

    var celulaNome = document.createElement("td")
    var celulaAltura = document.createElement("td")
    var celulaPeso = document.createElement("td")
    var celulaIMC = document.createElement("td")

    novaLinha.appendChild(celulaNome)
    novaLinha.appendChild(celulaAltura)
    novaLinha.appendChild(celulaPeso)
    novaLinha.appendChild(celulaIMC)

    tabela.appendChild(novaLinha)

    celulaNome.textContent = pessoa.nome
    celulaAltura.textContent = pessoa.altura
    celulaPeso.textContent = pessoa.peso

    campoNome.value = ""
    campoAltura.value = ""
    campoPeso.value = ""

    calcularIMC(novaLinha)

}

