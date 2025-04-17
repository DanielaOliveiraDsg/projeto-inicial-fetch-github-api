//importando user
import { getUser} from "./services/user.js";
//importando repositories
import { getRepos} from "./services/repositories.js";
//importando events
import { getEvents } from "./services/events.js"


//importanto o objetos
import{user} from './objects/user.js'
import{screen} from './objects/screen.js'

//evento - botão conectado ao search e seu valor
document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if (validadeEmptyInput(userName)) return
    getUserData(userName);
})

//evento - enter dentro do search para fazer a busca(como o botão). Melhora user experience
//keyup é usado para disparar com um tecla / e é de evento
//não precisa pegar o elemento input pq já está sendo chamado
//precisa selecionar a tecla enter do teclado, se não o evento dispara com qualquer tecla
document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value;
    //código para selecionar a tecla enter
    const key = e.which || e.keyCode;
    //código para testar se a tecla selecionada é mesmo o enter (13)
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
    
        if (validadeEmptyInput(userName)) return //se não colocar o return, ele dá o alerta, mas segue o código ao invés de parar

         //chamando a mesma função que pega o profile
        getUserData(userName);
    }
})

//validando a busca vazia
function validadeEmptyInput(userName) {
    if (userName.length === 0) {
        alert('Preencha o campo com o nome do usuário do GitHub!')
        return true
    }
}


//apresentar os dados na tela
async function getUserData(userName) {

    const userResponse = await getUser(userName)

    console.log(userResponse);

    if (userResponse.message === 'Not Found') {
        screen.renderNotFound();
        return
    }

    const repositoriesResponse = await getRepos(userName)

    const eventsResponse = await getEvents(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)

    screen.renderUser(user)
}
