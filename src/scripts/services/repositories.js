//importando variáveis
import {baseUrl, maxItems } from "../variables.js";

//função que retorna os repositórios do github do usuário
async function getRepos(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${maxItems}`)
    return await response.json()
}

export {getRepos}