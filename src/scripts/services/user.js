//importando variáveis
import { baseUrl} from "../variables.js";

//função que retorna os dados do github do usuário
async function getUser(userName){
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
}

export {getUser}