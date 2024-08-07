function idade(birthdate){
    // Validar idade
    var birthdate = new Date(birthdate);
    var today = new Date();
    var age = today.getFullYear() - birthdate.getFullYear();
    var monthDiff = today.getMonth() - birthdate.getMonth();
    
    //se a idade for menor que o mês e dia do ano em que estamos diminui um da idade
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age-1;
    }

    //verifica se a idade é menor que 18, senão maior
    if (age < 18) {
        return false;
    } else {
        return true;
    }
}

module.exports = {idade}

