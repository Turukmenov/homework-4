let characters;

fetch('data/peoples.json')
    .then(response => response.json())
    .then(data => {
        characters = data;
        showCharacter();
    })
    .catch(error => console.error('Ошибка загрузки данных:', error));

function showCharacter(index) {
    const character = characters[index];
    document.getElementById("name").textContent = `${character.name}`;
    document.getElementById("age").textContent = `${character.age}`;
    document.getElementById("bio").textContent = `${character.bio}`;
}


const part2 = document.querySelector('.btn2')

part2.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "data/part2.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()

    request.onload = () => {
        const data = JSON.parse(request.response)
        document.querySelector('.season').innerHTML = data.season
        document.querySelector('.year').innerHTML = data.year
    }
}