//importando variáveis
import {baseUrl, maxItems } from "../variables.js";

//função que retorna os eventos do github do usuário
async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${maxItems}`)
    return await response.json()
}

export {getEvents};