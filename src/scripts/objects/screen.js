const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                            <img src="${user.avatarUrl}" alt="foto do perfil do usuário"/>
                            <div class="data">
                                <h1>${user.name ?? 'Não possui nome cadastrado 😕'}</h1>
                                <p>${user.bio ?? 'Não possui bio 😟'}</p>
                                <p>👥 ${user.followers} seguidores ▫ ${user.following} seguindo</p>
                            </div>
                      </div>`
        let repositoriesItems = ''
        user.repositories.forEach(repo =>  repositoriesItems += `<li><a href="${repo.html_url}" target="_blank">${repo.name}
            <ul class="repo-metrics">
                <li>🍴${repo.forks_count}</li>
                <li>⭐${repo.stargazers_count}</li>
                <li>👀${repo.watchers_count}</li>
                <li>👩‍💻${repo.language}</li>
            </ul>
            </a></li>`);

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `
            <div class= "repositories section">
                <h2>Repositories</h2>
                <ul>${repositoriesItems}</ul>
            </div>`
        }

        let eventsList = ''
        if(user.events.length > 0) {
            user.events.forEach(event => {
                if(event.type === 'PushEvent') {
                    eventsList += `<li><a href="${event.repo.html_url}">${event.repo.name}</a><span>- Commit Message: ${event.payload.commits[0].message}</span></li>`
                } else if (event.type === 'CreateEvent') {
                    eventsList += `<li><a href="${event.repo.html_url}">${event.repo.name}</a></li>`
                }
            })
        }

        this.userProfile.innerHTML += `<div class= "events"><h2>Events</h2><ul>${eventsList}</ul></div>`
    },
    renderNotFound(){
        this.userProfile.innerHTML = '<h3>Usuário não encontrado</h3>'
    }
}

export {screen}
