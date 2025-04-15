const ctx = document.getElementById('js--chart--1');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Playstation', 'DS', 'Wii', 'Xbox 360', 'PSP', 'Gamecube'],
        datasets: [{
            label: 'Aantal Verkocht in miljoen',
            data: [55, 28, 23, 33, 15, 79],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// clock gemaakt met tutorial online link: https://www.youtube.com/watch?v=4ul3q-cEhvU&ab_channel=CodeTraversal

let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}

setInterval(displayTime, 1000);


// temperatuur op dit moment van mn BO opdracht

const buitentemperatuur = document.getElementById("js--actuelebuitentemp");
const weatherType = document.getElementById("js--weatherType");

function updateWeatherData() {
    fetch("https://weerlive.nl/api/weerlive_api_v2.php?key=demo&locatie=Amsterdam")
        .then(response => response.json())
        .then(realTempData => {
            const tempData = realTempData.liveweer[0];
            const temperature = tempData.temp;
            buitentemperatuur.innerText = temperature + "°C";
            weatherType.innerText = tempData.samenv;
        });
}

updateWeatherData();

// nog een tutorial gevolgd voor een rekenmachine link: https://www.youtube.com/watch?v=LX8_z1nvqk4

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})

function GetPokemon() {

    let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, bug = 0, ghost = 0, steel = 0,
        water = 0, grass = 0, electric = 0, psychic = 0, ice = 0, dragon = 0, dark = 0, fairy = 0, unkown = 0, shadow = 0;

    const labels = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel",
        "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy", "unkown", "shadow"];

    for (i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * 500 + 1)
        let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + random)

            .then(function (response) {
                return response.json();
            })
            .then(function (pokemon) {
                switch (pokemon.types[0].type.name) {
                    case "normal":
                        normal = normal + 1;
                        break;
                    case "fighting":
                        fighting = fighting + 1;
                        break;
                    case "flying":
                        flying = flying + 1;
                        break;
                    case "poison":
                        poison = poison + 1;
                        break;
                    case "ground":
                        ground = ground + 1;
                        break;
                    case "rock":
                        rock = rock + 1;
                        break;
                    case "bug":
                        bug = bug + 1;
                        break;
                    case "ghost":
                        ghost = ghost + 1;
                        break;
                    case "steel":
                        steel = steel + 1;
                        break;
                    case "water":
                        water = water + 1;
                        break;
                    case "grass":
                        grass = grass + 1;
                        break;
                    case "electric":
                        electric = electric + 1;
                        break;
                    case "psychic":
                        psychic = psychic + 1;
                        break;
                    case "ice":
                        ice = ice + 1;
                        break;
                    case "dragon":
                        dragon = dragon + 1;
                        break;
                    case "dark":
                        dark = dark + 1;
                        break;
                    case "fairy":
                        fairy = fairy + 1;
                        break;
                    case "unknown":
                        unknown = unkown + 1;
                        break;
                    case "shadow":
                        shadow = shadow + 1;
                        break;
                }
            }).then(function(){
                graph.data.datasets[0].data = [normal, fighting, flying, poison, ground, rock, bug, ghost, steel,
                    water, grass, electric, psychic, ice, dragon, dark, fairy, unkown, shadow];
                graph.update();
            })            
            
    }
    const ctx2 = document.getElementById("js--chart--2");
    const graph = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'pokemon types',
                data: [normal, fighting, flying, poison, ground, rock, bug, ghost, steel,
                    water, grass, electric, psychic, ice, dragon, dark, fairy, unkown, shadow],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
}
GetPokemon();