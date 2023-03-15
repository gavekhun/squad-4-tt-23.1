import api from '../Api'

interface registerData{
    email:string;
    cpf:string;
    name: string;
    phoneNumber:string;
    address: string;
}

//colocar um atributo chamado 'lastname', pra gente poder chamar só o name na tela de perfil e não ter problema com a galerinha do nome composto


export default{
    async createUser (data:registerData){
        try{
            const response= api.post('/User',data)
            return response
        }
        catch(e){
            console.log(e)
        }
    }
}