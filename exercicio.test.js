//SENHA
const {validatePassword,confSnha} = require ('./senha')

it('Verificar se senha está na regra',()=>{
    expect(validatePassword('R!3')).toBe(true) 
})

it('Verificar se senha não está na regra',()=>{
    expect(validatePassword('reirei')).toBe(false) 
})

it('Verificar se senha não está na regra de caracter',()=>{
    expect(validatePassword('rR3')).toBe(false) 
})

it('Verificar se senha não está na regra de número',()=>{
    expect(validatePassword('rR!')).toBe(false) 
})

it('Verificar se senha não está na regra de letra maiúscula',()=>{
    expect(validatePassword('32!r')).toBe(false) 
})

it('Verificar se senha e conf de senha são iguais',()=>{
    expect(confSnha('rR3!','rR3!')).toBe(true) 
})

it('Verificar se senha e conf de senha são diferentes',()=>{
    expect(confSnha('rR3!' , 'rR3')).toBe(false) 
})



//IDADE
const {idade} = require ('./idade')

it('Usuario maior de idade',()=>{
    expect(idade('mar 20, 2006')).toBe(true)  //PRECISA SER ESCRITO O MES EM INGLES
})

it('Usuario menor de idade',()=>{
    expect(idade('mar 20, 2017')).toBe(false)  //PRECISA SER ESCRITO O MES EM INGLES
})


//ENVIAR FEEDBACK
const {enviar} = require ('./enviar')

it('Verifico se todos os campos estão certamente preenchidos para enviar',()=>{
    expect(enviar('rR!3','rR!3','mar 20, 2006')).toBe(true)  //SE TODOS ESTÃO CORRETAMENTE PREENCHIDOSAO MEMSO TEMPO PARA ENVIAR FORM
})

it('Verifico se todos o campo conf senha está preechido de forma errada',()=>{
    expect(enviar('rR!3','rR!5','mar 20, 2006')).toBe(false)  //SE TODOS ESTÃO CORRETAMENTE PREENCHIDOSAO MEMSO TEMPO PARA ENVIAR FORM
})


it('Verifico se todos o campo idade está preechido de forma errada',()=>{
    expect(enviar('rR!5','rR!5','mar 20, 2020')).toBe(false)  //SE TODOS ESTÃO CORRETAMENTE PREENCHIDOSAO MEMSO TEMPO PARA ENVIAR FORM
})



