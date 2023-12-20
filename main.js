let monto = parseInt(prompt('ingrese el monto del credito'));

let cuotas = parseInt(prompt('ingrese la cantidad de cuotas:'));

tasaInteres = parseInt(prompt('ingrese la tasa de interes'));

function calcularCredito(cuotas,monto, tasaInteres){
    let interesMensual = tasaInteres/12;
    let interes = monto *(interesMensual*cuotas/100);
    let montoTotal= monto+interes;
    let valorCuota= montoTotal/cuotas;

    return montoTotal;
    
}
const calcularCuota = (montoTotal, cuotas)=>{
    let cuota = montoTotal/cuotas;
    return cuota;

}

console.log('El monto total del cretito es:' + calcularCredito(cuotas,monto,tasaInteres));
console.log('El valor de la cuota es '+ calcularCuota(calcularCredito(cuotas,monto,tasaInteres),cuotas));

alert('El monto total del credito es: ' +calcularCredito(cuotas,monto,tasaInteres)+'. ' 
+ ' El valor de la cuota es '+calcularCuota(calcularCredito(cuotas,monto,tasaInteres),cuotas) );