const botao = document.querySelector("button")

function generateNumber(){



    const inputEntre = Math.ceil(document.querySelector(".input-entre").value)
    const inputE = Math.floor(document.querySelector(".input-e").value)

if (inputEntre > inputE) {
    alert("o valor minimo tem que ser menor que o valor máximo")
    
}

else{
    const result = Math.floor(Math.random()*( inputE - inputEntre + 1)) + inputEntre;
    
    alert(result)
}
}


botao.addEventListener("click",generateNumber )

