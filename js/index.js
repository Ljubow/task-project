//console.log(document); // 1.Обернуть весь код в document dom ready
//console.log(window);
//console.log(window.cars);
// 2. Почитать про свойства и методы дом елемента
const cars = {
    "id": 10,
    "name": "cars",
    "children": [{
            "id": 20,
            "name": "BMW",
            "link": "https://www.bmw.com",
            "models": "Sedan, Sports Activity Coupe, Touring, Sports Activity Vehicle, Convertible, Hatch, Coupe, Tourer, Gran Turismo, BMW i, Gran Coupe",
            "url": "img/BMW-3-Series-Sedan_ModelCard.png",
            "children": [{
                    "id": 31,
                    "name": "BMW 3 Series Sedan",
                    "top_speed": 210,
                    "price": 40.000,
                    "fuel": 7.7,
                    "url": "BMW-3-Series-Sedan_ModelCard.png"
                },
                {
                    "id": 32,
                    "name": "BMW 330e plug-in hybrid",
                    "top_speed": 210,
                    "price": 34.235,
                    "fuel": 7.7,
                    "url": "bmw-iperformance-330e-flyout-890x501.png"
                },
                {
                    "id": 33,
                    "name": "BMW 5 Series Sedan",
                    "top_speed": 250,
                    "price": 62.400,
                    "fuel": 8.1,
                    "url": "bmw-modelfinder-g30-posi-stage2-890x501.png"
                },
                {
                    "id": 35,
                    "name": "BMW X4 M40i",
                    "top_speed": 247,
                    "price": 65.000,
                    "fuel": 8.3,
                    "url": "bmw-mperformance-x4-m40i-flyout-890x501.png"
                },
                {
                    "id": 36,
                    "name": "BMW X6",
                    "top_speed": 25,
                    "price": 63.495,
                    "fuel": 8.6,
                    "url": "BMW-X6_ModelCard.png"
                },
                {
                    "id": 38,
                    "name": "The BMW 2 Series Convertible",
                    "top_speed": 250,
                    "price": 48.345,
                    "fuel": 8.3,
                    "url": "BMW-2series-cabrio-modelfinder-stage2-890x501-01.png"
                },
                {
                    "id": 39,
                    "name": "BMW M240i Convertible",
                    "top_speed": 250,
                    "price": 45.500,
                    "fuel": 8.3,
                    "url": "BMW-2series-cabrio-modelfinder-stage2-890x501-03.png"
                },
                {
                    "id": 40,
                    "name": "BMW 4 Series Convertible",
                    "top_speed": 250,
                    "price": 76.200,
                    "fuel": 8.8,
                    "url": "BMW-4-Series-Convertible-ModelCard.png.jpg"
                }
            ]
        },
        {
            "id": 21,
            "name": "Mercedes-Benz",
            "link": "https://www.mbusa.com",
            "models": "Sedans & Wagons, Coupes, SUVs, Convertibles & Roadsters, Hybrid & Electric",
            "url": "img/2017-C-SEDAN-AV-D.png",
            "children": [{
                    "id": 42,
                    "name": "C-CLASS SEDAN",
                    "top_speed": 241,
                    "price": 40.250,
                    "fuel": 8.1,
                    "url": "2017-C-SEDAN-AV-D.png"
                },
                {
                    "id": 43,
                    "name": "E-Class Sedan",
                    "top_speed": 241,
                    "price": 52.950,
                    "fuel": 7.7,
                    "url": "2017-E-SEDAN-AV-D.png"
                },
                {
                    "id": 44,
                    "name": "S-Class Sedan",
                    "top_speed": 430,
                    "price": 96.600,
                    "fuel": 7.7,
                    "url": "2017-S-SEDAN-AV-D.png"
                },
                {
                    "id": 46,
                    "name": "CLA 250 Coupe",
                    "top_speed": 258,
                    "price": 32.700,
                    "fuel": 8.1,
                    "url": "2017-CLA-COUPE-AV-D.png"
                },
                {
                    "id": 47,
                    "name": "C-Class Coupe",
                    "top_speed": 258,
                    "price": 43.200,
                    "fuel": 8.1,
                    "url": "2017-C-COUPE-AV-D.png"
                },
                {
                    "id": 48,
                    "name": "E-Class Coupe",
                    "top_speed": 273,
                    "price": 58.900,
                    "fuel": 8.3,
                    "url": "2018-E-E400-COUPE-D.png"
                },
                {

                    "id": 81,
                    "name": "GLA SUV",
                    "top_speed": 243,
                    "price": 33.400,
                    "fuel": 7.7,
                    "url": "2018-GLA-GLA250-SUV-AV-D.png"
                },
                {
                    "id": 50,
                    "name": "GLC SUV",
                    "top_speed": 258,
                    "price": 40.050,
                    "fuel": 7.7,
                    "url": "2017-GLC-SUV-AV-D.png"
                },
                {
                    "id": 51,
                    "name": "GLC Coupe",
                    "top_speed": 265,
                    "price": 46.600,
                    "fuel": 8.1,
                    "url": "2017-GLC-COUPE-AV-D.png"
                }
            ]
        },
        {
            "id": 22,
            "name": "Volkswagen",
            "link": "http://www.vw.com/",
            "models": "SEDANS, SUVs, WAGONS, COMPACTS, CONVERTIBLES",
            "url": "img/iris.png",
            "children": [{
                    "id": 53,
                    "name": "Passat S",
                    "top_speed": 170,
                    "tuel": 6.7,
                    "price": 22.440,
                    "url": "iris.png"
                }, {
                    "id": 54,
                    "name": "Passat R-Line",
                    "top_speed": 170,
                    "fuel": 6.7,
                    "price": 23.975,
                    "url": "iris (1).png"
                }, {
                    "id": 55,
                    "name": "Passat SE",
                    "top_speed": 195,
                    "fuel": 6.7,
                    "price": 25.495,
                    "url": "iris (2).png"
                },
                {
                    "id": 57,
                    "name": "S (Later availability)",
                    "top_speed": 235,
                    "fuel": 6,
                    "price": 30.500,
                    "url": "iris (3).png"
                }, {
                    "id": 58,
                    "name": "Launch Edition",
                    "top_speed": 250,
                    "fuel": 6.8,
                    "price": 33.500,
                    "url": "iris (4).png"
                }, {
                    "id": 59,
                    "name": "Launch Edition with 4MOTION",
                    "top_speed": 250,
                    "fuel": 7.7,
                    "price": 35.300,
                    "url": "iris (5).png"
                },
                {

                    "id": 61,
                    "name": "Bettle SEL",
                    "top_speed": 170,
                    "fuel": 5.8,
                    "price": 25.975,
                    "url": "iris (6).png"
                }, {
                    "id": 62,
                    "name": "Golf Wolfsburg",
                    "top_speed": 170,
                    "fuel": 6,
                    "price": 21.595,
                    "url": "iris (7).png"
                }, {
                    "id": 63,
                    "name": "Golf GTI Sport",
                    "top_speed": 220,
                    "fuel": 7.1,
                    "price": 27.995,
                    "url": "iris (8).png"
                }
            ]
        }
    ]
};


const ready = () => {
    let content = '';
    for (let i = 0; i < cars.children.length; i++) {
        content += `<div class="card-deck">` +
            `<div class='card text-white bg-secondary mb-3' style='max-width: 20rem;'>` +
            `<img class='scard-img-top' src='${cars.children[i].url}' alt='Card image cap'>` +
            `<div class='card-body'>` +
            `<div class='card-header'><div>${cars.children[i].name}</div></div>` +
            `<p class='card-name'><div class='row'><div class='col-sm-12'>` +
            `Link :</div><div class='col-sm-12'>${cars.children[i].link}</div></div></p>` +
            `<button type='button' id='myBtn' class='btn btn-outline-light' data-toggle='modal'` +
            `data-id='${cars.children[i].id}' data-target='${cars.children[i].id}'>View Models</button></br></br>` +
            `<div  id='${cars.children[i].id}' class='modal'></div>` +
            `<button type='button' class='btn btn-outline-light' data-toggle='collapse'` +
            `data-target='#${cars.children[i].name}'>More</button>` +
            `<div id='${cars.children[i].name}' class='collapse'>` +
            `<p class='card-link'><div class='row'><div class='col-sm-4'>` +
            `Models:</div><div class='col-sm-4'>${cars.children[i].models}</div></div></p>` +
            `</div>` +
            `</div>` +
            `</div>` +
            `</div>`;
    }

    const header = document.getElementById('exampleModalLabel');
    // TODO: get content of modal
    const body = document.getElementById('modalContent');
    const modal = document.getElementById('modal');
    const elem = document.getElementById('cars-list');
    elem.innerHTML = content;
    elem.addEventListener('click', function(e) {
        // console.log(e.target.getAttribute('data-id'))
        const typeId = e.target.getAttribute('data-id');
        if (!typeId) return;
        const car = cars.children.find((type) => {
            return type.id == typeId;
        });
        header.innerHTML = car.name;

        // TODO: write loop for car.children - models
        let models = '';
        for (i = 0; i < car.children.length; i++) {
            models += `<li class="list-group-item list-group-item-info"><div class='row'><div class='col-md-6'>` +
                      `Models:</div><div class='col-md-6 ml-auto'>${car.children[i].name}</div></div></li>` +
                      `<li class="list-group-item list-group-item-dark"><div class='row'><div class='col-md-6'>` +
                      `Price:</div><div class='col-md-6 ml-auto'>${car.children[i].price}$</div></div></li>`

        }
        body.innerHTML = models;
        //  add final string of models to modal content
        $('#modal').modal();
    })
}
document.addEventListener('DOMContentLoaded', ready);
