'use strict';

const btnEl = document.querySelector('.btn');
const fillEl = document.querySelector('.fill');

function search() {
    fetch('https://api.github.com/orgs/' + fillEl.value)
        .then(orgResponse => orgResponse.json())
        .then(orgData => {
            console.log('Info de la org: ', orgData);
            const org = orgData.repos_url;
            return fetch(org);
        })
        .then(reposResponse => reposResponse.json())
        .then(reposData => {
            console.log('Repositorios de la org:', reposData);
            const ul = document.querySelector('ul');
            const repos = reposData;
            let listContent = ""
            for(const repo of repos){
                const repoConten = `<li>${repo.name}</li>`;
                listContent += repoConten;
            }
            ul.innerHTML = listContent;
        }   
    )      
}
btnEl.addEventListener('click', search);