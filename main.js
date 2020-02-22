console.log("Your JS is connected!")

const dinos = [{
    id: 'dino1',
    name: 'Lori',
    type: 'T Rex',
    age: 30,
    owner: 'Zoe',
    adventures: [],
    health: 100,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
  },
  {
    id: 'dino2',
    name: 'Simon',
    type: 'Velociraptor',
    age: 10,
    owner: 'Zoe',
    adventures: [],
    health: 100,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
  },
  {
    id: 'dino3',
    name: 'Lev',
    type: 'Stegosaurous',
    age: 50,
    owner: 'Luke',
    adventures: [],
    health: 100,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61fC04pumjL._AC_SL1001_.jpg'
  }];


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
    console.log(divId, textToPrint)
};

const closeSingleViewEvent = () => {
    printToDom('single-view', '');
    printDinos(dinos)
}

const viewSingleDino = () => {
    let domString = ''
    domString +=     `<button id="close-single-view" class="btn btn-outline-dark single-dino"><i class="fas fa-times-circle"></i></button>`
    printToDom('kennel', '');
    printToDom('single-view', domString);
    document.getElementById('close-single-view').addEventListener('click', closeSingleViewEvent)
}


const singleDinoAddEvents = () => {
    const dinoViewButtons = document.getElementsByClassName('single-dino');
    for(let i = 0; i < dinoViewButtons.length; i++){
dinoViewButtons[i].addEventListener('click', viewSingleDino)
    }
}

const printDinos = (dinoArray) => {
    let domString = '';
    for (let i = 0; i < dinoArray.length; i++){

        domString +=     `<div class="col-4">`
        domString +=     `<div class="card">`
        domString +=     `<img src="${dinoArray[i].imageUrl}" class="card-img-top" alt="...">`
        domString +=     `<div class="card-body">`
        domString +=     `<h5 class="card-title">${dinoArray[i].name}</h5>`
        domString +=     `<p class="card-text">${dinoArray[i].health}</p>`
        domString +=     `<button class="btn btn-outline-dark single-dino"><i class="fas fa-eye"></i></button>`
        domString +=     `</div>`
        domString +=     `</div>`
        domString +=     `</div>`
    }
    printToDom('kennel', domString)
    singleDinoAddEvents();
}

// const formCollapse = () => {
//     document.getElementById('collapseOne').classList.remove('show');
// }

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
        image: document.getElementById('dino-image').value,
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