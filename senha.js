
function validatePassword(password) {
    // Requisitos de senha
    var hasUpperCase = /[A-Z]/.test(password);
    var hasNumber = /[0-9]/.test(password);
    var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    
    // Verificar se todos os requisitos são atendidos
    if (hasUpperCase && hasNumber && hasSpecialChar) {
        return true;
    } else {
        return false;
    }
}

function confSnha(password, confirmPassword){
    //verifica se senha é igual confirmação de senha
    if (password !== confirmPassword) {
        return false;
    } else {
        return true;
    }

}

module.exports = {validatePassword, confSnha}