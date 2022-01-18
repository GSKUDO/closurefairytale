function alterarfonte(){
  let tamanho = 16; 
  return function(sinal){
    if (sinal === "more") {
      tamanho++;
    }else if (sinal === "minus"){
      tamanho--;
    }
    document.body.style.fontSize = tamanho + "px"
  }
}

const fonte = alterarfonte();

