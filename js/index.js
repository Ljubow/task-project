//console.log(document); // 1.Обернуть весь код в document dom ready
//console.log(window);
//console.log(window.cars);
// 2. Почитать про свойства и методы дом елемента
function ready() {
    console.log('Dom ready');
    const cars = {
        "id": 10,
        "name": "cars",
        "children": [{
            "id": 20,
            "name": "BMW",
            "link": "https://www.bmw.com",
            "top_speed": 210,
            "fuel": 7.7,
            "car": "BMW 3 Series Sedan",
            "url": "img/BMW-3-Series-Sedan_ModelCard.png",
            "children": [{
                    "id": 30,
                    "name": "Sedans",
                    "children": [{
                        "id": 31,
                        "name": "BMW 3 Series Sedan",
                        "top_speed": 210,
                        "price": 40.000,
                        "fuel": 7.7,
                        "url": "BMW-3-Series-Sedan_ModelCard.png",
                    }]
                },
                {
                    "id": 34,
                    "name": "Sports Activity Coupes",
                    "children": [{
                        "id": 41,
                        "name": "BMW X4",
                        "top_speed": 247,
                        "price": 46.545,
                        "fuel": 8.3,
                        "url": "BMW-X4_ModelCard.png"
                    }]
                },
                {
                    "id": 37,
                    "name": "Convertibles",
                    "children": [{
                        "id": 38,
                        "name": "The BMW 2 Series Convertible",
                        "top_speed": 250,
                        "price": 48.345,
                        "fuel": 8.3,
                        "url": "BMW-2series-cabrio-modelfinder-stage2-890x501-01.png"
                    }]
                }
            ]
        }, {
            "id": 21,
            "name": "Mercedes-Benz",
            "link": "https://www.mbusa.com",
            "top_speed": 241,
            "fuel": 8.1,
            "car": "C-CLASS SEDAN",
            "url": "img/2017-C-SEDAN-AV-D.png",
            "children": [{
                    "id": 41,
                    "name": "Sedans & Wagons",
                    "children": [{
                        "id": 42,
                        "name": "C-CLASS SEDAN",
                        "top_speed": 241,
                        "price": 40.250,
                        "fuel": 8.1,
                        "url": "2017-C-SEDAN-AV-D.png"
                    }]
                },
                {
                    "id": 45,
                    "name": "Coupes",
                    "children": [{
                        "id": 46,
                        "name": "CLA 250 Coupe",
                        "top_speed": 258,
                        "price": 32.700,
                        "fuel": 8.1,
                        "url": "2017-CLA-COUPE-AV-D.png"
                    }]
                },
                {
                    "id": 49,
                    "name": "SUVs",
                    "children": [{
                        "id": 81,
                        "name": "GLA SUV",
                        "top_speed": 243,
                        "price": 33.400,
                        "fuel": 7.7,
                        "url": "2018-GLA-GLA250-SUV-AV-D.png"
                    }]
                }
            ]
        }, {
            "id": 22,
            "name": "Volkswagen",
            "link": "http://www.vw.com/",
            "top_speed": 170,
            "fuel": 6.7,
            "car": "Passat S",
            "url": "img/iris.png",
            "children": [{
                    "id": 52,
                    "name": "Sedans",
                    "children": [{
                        "id": 53,
                        "name": "Passat S",
                        "top_speed": 170,
                        "fuel": 6.7,
                        "price": 22.440,
                        "url": "iris.png"
                    }]
                },
                {
                    "id": 56,
                    "name": "SUVs",
                    "children": [{
                        "id": 57,
                        "name": "S (Later availability)",
                        "top_speed": 235,
                        "fuel": 6,
                        "price": 30.500,
                        "url": "iris (3).png"
                    }]
                },
                {
                    "id": 60,
                    "name": "COMPACTS",
                    "children": [{
                        "id": 61,
                        "name": "Bettle SEL",
                        "top_speed": 170,
                        "fuel": 5.8,
                        "price": 25.975,
                        "url": "iris (6).png"
                    }]
                }
            ]
        }]
    };

    let content = '';
    const len = cars.children.length;
    for (i = 0; i < len; i++) {

        content += `<div class="card-deck">` +
            `<div class='card text-white bg-secondary mb-3' style='max-width: 350px;'>` +
            `<img class='scard-img-top' src='${cars.children[i].url}' alt='Card image cap'>` +
            `<div class='card-body'>` +
            `<div class='card-header'><div>${cars.children[i].name}</div></div>` +
            `<p class='card-name'><div class='row'><div class='col-sm-12'>Link :</div><div class='col-sm-12'>${cars.children[i].link}</div></div></p>` +
            `<button type='button' class='btn btn-outline-light' data-toggle='modal'  id='myBtn' data-target=${cars.children[i].name}>View Models</button></br></br>` +
            `<button type='button' class='btn btn-outline-light' data-toggle='collapse' data-target='#${cars.children[i].id}'>More</button>` +
            `</div>` +
`<div id='${cars.children[i].name}' class='modal'>` +
            `<div id='${cars.children[i].id}' class='collapse'>` +
            `<p class='card-link'><div class='row'><div class='col-sm-6'>Link:</div><div class='col-sm-6'>${cars.children[i].link}</div></div></p>` +
            `<p class='card-top_speed'><div class='row'><div class='col-sm-6'>Top-speed:</div><div class='col-sm-6'>${cars.children[i].top_speed}</div></div></p>` +
            `<p class='card-fuel'><div class='row'><div class='col-sm-6'>Fuel:</div><div class='col-sm-6'>${cars.children[i].fuel}</div></div></p>` +
            `</div>` +
            `</div>` +
            `</div>`;
    }
    const elem = document.getElementById('first');
    console.log(elem);
    elem.innerHTML = content;

    let modelsC = '';
    const ln = cars.children.children;
    for (i = 0; i < ln; i++) {
        modelsC += `<div>${cars.children.children[i].id}</div>`;
    }


    const btn = document.getElementById("myBtn");
    if (btn.addEventListener) {
        btn.addEventListener("click", myFunction);
    }

    function myFunction() {

let modalContent=document.querySelector('div.modal-body');
        modalContent.innerHTML = modelsC;
        $('#modal').modal();
    }
    // const element = document.getElementById('modal')
    // element.innerHTML=modalContent;
};


document.addEventListener('DOMContentLoaded', ready);
