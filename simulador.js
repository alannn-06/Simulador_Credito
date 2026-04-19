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

function validarCampo(input) {
    const valor = input.value.trim();
    const id = input.id;
    const error = document.getElementById("error_" + id);

    error.textContent = "";

    // Validar vacío
    if (valor === "") {
        error.textContent = "Este campo no puede estar vacío";
        return;
    }

    // Validar solo números
    if (!/^\d+$/.test(valor)) {
        error.textContent = "Solo se permiten números";
        return;
    }

    // Validaciones específicas por campo
    switch (id) {
        case "txtIngresos":
        case "txtEgresos":
        case "txtMonto":
            if (valor.length > 5) {
                error.textContent = "Máximo 5 dígitos";
            }
            break;

        case "txtTasaInteres":
            if (valor.length > 3) {
                error.textContent = "Máximo 3 dígitos";
            }
            if (parseInt(valor) > 100) {
                error.textContent = "La tasa de interés no puede ser mayor a 100%";
            }
            break;

        case "txtPlazo":
            if (parseInt(valor) > 10) {
                error.textContent = "El plazo máximo es 10 años";
            }
            break;
    }
}