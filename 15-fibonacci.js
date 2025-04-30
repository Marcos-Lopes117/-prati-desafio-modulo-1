/* Pressione ctrl+alt+j, selecione javascript e aperte ENTER. 
o terminal entregará os 10 primeiros números da sequencia fibonacci*/ 

    let a = 0;
    let b = 1;
    let resultado = 0;
    console.log("sequencia fibonacci de 10 algaritmos")
    console.log(b)

    for (let i = 2; i <= 10; i++) {
      resultado = a + b;
      a = b;
      b = resultado;
      console.log(resultado) 
    }
    
  
  
  