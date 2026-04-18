function calcularDisponible(ingresos, egresos){

    let valorDisponible = ingresos - egresos;

    if(ingresos - egresos < 0){
        return 0;
    }else{
        return valorDisponible;
    }
}