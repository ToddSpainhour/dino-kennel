
const dinos = [{
    id: 'dino1',
    name: 'Lori',
    type: 'T Rex',
    age: 30,
    owner: 'Zoe',
    adventures: [],
    health: 99,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
  },
  {
    id: 'dino2',
    name: 'Simon',
    type: 'Velociraptor',
    age: 10,
    owner: 'Zoe',
    adventures: [],
    health: 1,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
  },
  {
    id: 'dino3',
    name: 'Lev',
    type: 'Stegosaurous',
    age: 50,
    owner: 'Luke',
    adventures: [],
    health: 45,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
  }];


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const closeSingleViewEvent = () => {
    printToDom('single-view', '');
    printDinos(dinos)
}

const viewSingleDino = (e) => {
    
    const dinoId = e.target.closest('.card').id;
    const selectedDino = dinos.find((x) => dinoId ===x.id);
    console.log('selectedDino', selectedDino);
    let domString = '';
            domString +=     `<button id="close-single-view" class="btn btn-outline-dark single-dino"><i class="fas fa-times-circle"></i></button>`
                
            domString += `<div class="container">`
            domString +=     `<div class="row">`

            domString +=         `<div class="col-6">`
            domString +=             `<img src="${selectedDino.imageUrl}" class="img-fluid" alt="">`
            domString +=         `</div>`

            domString +=         `<div class="col-6">`
            domString +=             `<h2>${selectedDino.name} </h2>`
            domString +=             `<h3>${selectedDino.type} </h3>`
            domString +=             `<p>${selectedDino.age} </p>`
            domString +=             `<p>${selectedDino.owner} </p>`
            domString +=             `<p>${selectedDino.health} </p>`
            domString +=         `</div>`

            domString +=     `</div>`
            domString += `</div>`
    
    printToDom('kennel', '');
    printToDom('single-view', domString);
    document.getElementById('close-single-view').addEventListener('click', closeSingleViewEvent);
}

const singleDinoAddEvents = () => {
    const dinoViewButtons = document.getElementsByClassName('single-dino');
    for(let i = 0; i < dinoViewButtons.length; i++){
        dinoViewButtons[i].addEventListener('click', viewSingleDino)
    }
}

const dinoHealth = (e) =>{
    const dinoId = e.target.closest('.card').id;
    const dinoPosition = dinos.findIndex((p) => p.id ===dinoId);
    if(dinos[dinoPosition].health < 100) {
        dinos[dinoPosition].health += 1;
    }
    printDinos(dinos)

}

const petEvents = () => {
    const dinoPetButtons = document.getElementsByClassName('dino-photo');
    for(let i = 0; i < dinoPetButtons.length; i++){
        dinoPetButtons[i].addEventListener('mouseleave', dinoHealth)
    }
}

const feedMe = (e) => {
    const dinoId = e.target.closest('.card').id;
    const dinoPosition = dinos.findIndex((p) => p.id ===dinoId);
    
    if(dinos[dinoPosition].health < 90) {
        dinos[dinoPosition].health += 10;
        printDinos(dinos)
    } else if (dinos[dinoPosition].health > 89 && dinos[dinoPosition].health < 100) {
        dinos[dinoPosition].health = 100;
        printDinos(dinos);
    };
        // printDinos(dinos))
}

const feedEvents = () => {
    const dinoFeedButtons = document.getElementsByClassName('feed-button');
    for(let i = 0; i < dinoFeedButtons.length; i++){
        dinoFeedButtons[i].addEventListener('click', feedMe)
    }
}

const deleteDinoEvent = (e) => {
    const dinoId = e.target.closest('card'.id);
    const dinoPosition = dinos.findIndex((p) => p.id ===dinoId);
    dinos.splice(dinoPosition, 1);
    printDinos(dinos);
    console.log("trash can!");
}

const deleteEvents = () => {
    const dinoDeleteButtons = document.getElementsByClassName('delete-dino');
    for(let i = 0; i < dinoDeleteButtons.length; i++){
dinoDeleteButtons[i].addEventListener('click', deleteDinoEvent)
    }
}

const printDinos = (dinoArray) => {
    let domString = '';
    for (let i = 0; i < dinoArray.length; i++){

        domString +=     `<div class="col-4">`
        domString +=     `<div id="${dinoArray[i].id}" class="card">`
        domString +=     `<img src="${dinoArray[i].imageUrl}" class="card-img-top dino-photo" alt="...">`
        domString +=     `<div class="card-body">`
        domString +=     `<h5 class="card-title">Name: ${dinoArray[i].name}</h5>`
        domString +=     `<p class="card-text">Health: ${dinoArray[i].health}</p>`
        domString +=     `<button class="btn btn-outline-dark feed-button"><i class="fas fa-utensils"></i></button>`
        domString +=     `<button class="btn btn-outline-dark single-dino"><i class="fas fa-eye"></i></button>`
        domString +=     `<button class="btn btn-outline-danger delete-dino"><i class="fas fa-trash-alt"></i></button>`
        domString +=     `</div>`
        domString +=     `</div>`
        domString +=     `</div>`
    }
    printToDom('kennel', domString)
    singleDinoAddEvents();
    petEvents();
    deleteEvents();
    feedEvents();
}

const newDino = (e) => {
    e.preventDefault();
    const brandNewDino = {
        id: `dinos${dinos.length +1}`,
        name: document.getElementById('dino-name').value,
        type: document.getElementById('dino-type').value,
        age: document.getElementById('dino-age').value,
        owner: document.getElementById('dino-owner').value,
        adventures: [],
        health: 100,
        imageUrl: document.getElementById('dino-image').value,
    }
    dinos.push(brandNewDino);
    document.getElementById('new-dino-form').reset();
    document.getElementById('collapseOne').classList.remove('show');
    printDinos(dinos);
    console.log('hi from new dino, brandNewDino');
};

const init = () => {
    document.getElementById('submit-new-dino').addEventListener('click', newDino);
    printDinos(dinos)
    
}

init();