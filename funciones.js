function calcularDisponible(ingresos, egresos){
    let valorDisponible = ingresos - egresos;
    if(ingresos - egresos < 0){
        return 0;
    }else{
        return valorDisponible;
    }
}

function calcularCapacidadPago(montoDisponible){
    let capacidadPago = montoDisponible/2;
    return capacidadPago;
}

function calcularInteresSimple(monto, plazoAnios, tasa){
    let interes = monto * plazoAnios *(tasa/100)  ;
    return interes;
}

function calcularTotalPagar (monto, interes){
    let valorTotal = monto + interes +100;
    return valorTotal;
}

function calcularCuotaMensual(total, plazoAnios){
    let cuotaMensual = total / (plazoAnios*12);
    return cuotaMensual;
}

function aporbarCredito(capacidadPago, cuotaMensual){
    if(capacidadPago > cuotaMensual){
        return true;
    }else{
        return false;
    }
}
