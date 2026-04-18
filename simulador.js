function calcular(){
    let cmpIngresos = document.getElementById("txtIngresos");
    let cmpEgresos = document.getElementById("txtEgresos");
    let ingresos = parseFloat(cmpIngresos.value);
    let egresos = parseFloat(cmpEgresos.value);
    let resultadoDisponible = calcularDisponible(ingresos, egresos);
    let lblResultado = document.getElementById("spnDisponible");
    lblResultado.textContent = resultadoDisponible.toFixed(2);
}