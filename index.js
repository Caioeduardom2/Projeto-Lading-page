var setaDireita = document.getElementById("setadireita")
var leonardo = document.getElementById("leonardo");
var samantha = document.getElementById("samantha");
var bruna = document.getElementById("bruna");
var setaEsquerda = document.getElementById("setaesquerda") 

function RolarParaDireita() {
    leonardo.style.display = "none";
    samantha.style.display = "flex";
    setaEsquerda.style.display =" flex"
    setaDireita.style.display =" none"  
}
function RolarparaEsquerda(){
    leonardo.style.display ="flex"
    samantha.style.display ="none"
    setaEsquerda.style.display ="none"
    setaDireita.style.display ="flex"
}

