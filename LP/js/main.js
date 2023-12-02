function validar(){
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let numero = document.getElementById('numero').value

    if(nome.value=="" && email.value=="" && numero.value==""){
        alert('todos os campos precisam estar preenchidos!')
    }else{
        confirm(`Olá ${nome} seus dados foram enviados com sucesso, confirme se estão corretos, se estiverem corretos nós lhe enviaremos as informações \n
        email: ${email}.
        número: ${numero}.`)
    }
}

document.getElementById("btn-enviar").addEventListener('click',function(event){
    validar()
})