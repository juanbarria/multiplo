let btnMultiplo = document.getElementById("btnMultiplo");

btnMultiplo.addEventListener("click", () => {
  let numero1: number = Number(dato1.value);
  let numero2: number = Number(dato2.value);

  function esMultiplo(numero1: number, numero2: number) {
    return numero1 % numero2 === 0;
  }

  function calcular(numero1: number, numero2: number) {
    if (esMultiplo(numero1, numero2)) {
      console.log(numero1, "ES número múltiplo de ", numero2);
    } else {
      console.log(numero1, "NO es número múltiplo de ", numero2);
    }
  }

  calcular(numero1, numero2);
});
