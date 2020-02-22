console.log("Your JS is connected!")

const dinos = [];

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
    console.log('hi from new dino, brandNewDino');
};

const init = () => {
    document.getElementById('submit-new-dino').addEventListener('click', newDino);
    
}

init();