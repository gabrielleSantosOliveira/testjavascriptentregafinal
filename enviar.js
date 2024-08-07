const {idade} = require('./idade')
const {validatePassword} = require('./senha')
const {confSnha} = require('./senha')


function enviar(password, confirmPassword , birthdate){
    const idades = idade(birthdate)
    const senhaConfi = validatePassword(password)
    const confSenha = confSnha(confirmPassword, password)

    //se senha está corretamente preenchida, se idade é maior que 18, se conf de senha é igual a senha
    if(senhaConfi == true && idades == true && confSenha == true){
        return true;
    } else {
        return false;
    }
}

module.exports = {enviar}