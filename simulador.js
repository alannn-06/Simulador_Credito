function calcular(){
    let cmpIngresos = document.getElementById("txtIngresos");
    let cmpEgresos = document.getElementById("txtEgresos");
    let ingresos = parseFloat(cmpIngresos.value);
    let egresos = parseFloat(cmpEgresos.value);
    let resultadoDisponible = calcularDisponible(ingresos, egresos);
    let lblResultado = document.getElementById("spnDisponible");
    lblResultado.textContent = resultadoDisponible.toFixed(2);
    
    let capacidad = calcularCapacidadPago(resultadoDisponible);
    let lblCapacidad = document.getElementById("spnCapacidadPago");
    lblCapacidad.textContent = capacidad.toFixed(2);

    let cmpMonto = document.getElementById("txtMonto");
    let cmpPlazo = document.getElementById("txtPlazo");
    let cmpTasa = document.getElementById("txtTasaInteres");
    let monto = parseInt(cmpMonto.value);
    let plazo = parseInt(cmpPlazo.value);
    let tasa = parseInt(cmpTasa.value);
    let interesTotal = calcularInteresSimple(monto, plazo, tasa);
    let lblIntereses = document.getElementById("spnInteresPagar");
    lblIntereses.textContent = interesTotal.toFixed(2);

    let totalPrestamo = calcularTotalPagar(monto, interesTotal);
    let lblPrestamo = document.getElementById("spnTotalPrestamo");
    lblPrestamo.textContent = totalPrestamo.toFixed(2);

    let cuota = calcularCuotaMensual(totalPrestamo, plazo);
    let lblCuota = document.getElementById("spnCuotaMensual");
    lblCuota.textContent = cuota.toFixed(2);

    let credito = aporbarCredito(capacidad, cuota);
    let lblCredito = document.getElementById("spnEstadoCredito");
    if(credito == true){
        lblCredito.textContent = "CRÉDITO APROBADO";
    }else{
        lblCredito.textContent = "CRÉDITO RECHAZADO";
    }
}