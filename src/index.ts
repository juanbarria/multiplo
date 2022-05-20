let btnMultiplo = document.getElementById("btnMultiplo");
btnMultiplo.addEventListener("click", () => {
  let numero1: number = Number(dato1.value);
  let numero2: number = Number(dato2.value);
  calcular (numero1, numero2);

  function calcular(numero1: number, numero2: number) {
    if (numero1 % numero2 === 0) {
      console.log(numero1, "ES número múltiplo de ", numero2);
    } else {
      if (numero1 % numero2 > 0) {
        console.log(numero1, "NO es número múltiplo de ", numero2);
      }
    }
  }
});
