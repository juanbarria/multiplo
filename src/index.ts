let btnMultiplo = document.getElementById("btnMultiplo");
function esMultiplo (numero1 : number, numero2 : number) : boolean {
  return ((numero1 % numero2) === 0 );
  };
btnMultiplo.addEventListener("click", () => {
  let numero1: number = Number(dato1.value);
  let numero2: number = Number(dato2.value);

  if ( esMultiplo (numero1, numero2) ) {
    console.log (numero1, "ES número múltiplo de ", numero2);
    } else {
    console.log (numero1, "NO es número múltiplo de ", numero2);
    }
});