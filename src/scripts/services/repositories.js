//importando variáveis
import {baseUrl, repositoriesCount } from "../variables.js";

//função que retorna os repositórios do github do usuário
async function getRepos(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesCount}`)
    return await response.json()
}

export {getRepos}