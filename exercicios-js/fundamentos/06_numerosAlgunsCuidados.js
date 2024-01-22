/*
Estranhesas javascript:
divisão por 0 = Infinity
permite fazer operações com tipos diferentes "10" / 2
diferenta do PHP no js "show!" * 2 = NaN
imprecisão em numeros muito pequenos 0.1 + 0.7 ! 0.8 = 0.7999999999999999
toFixed e literais dentro de parentese (10.458745).toFixed(2)
console.log("10" + 2); //Cuidado  aqui ele vao concatenar resultado = 102
*/
console.log(7 / 0);
console.log("10" / 2);
console.log("10" + 2); //Cuidado  aqui ele vao concatenar resultado = 102
console.log("show!" * 2); //"show!" * 2 = NaN
console.log(0.1 + 0.7);
console.log((10.458745).toFixed(2)); //formantando numero
console.log((0.7999999999999999).toFixed(2)); //formantando numero



