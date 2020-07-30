'use strict';

// let button = document.querySelectorAll('.button-one');
// arrColor = ['81cab3', 'f2d889', '8ad0ba', 'e6e27c', '8ecee3', '9488d8', 'b3b9c0', 'b8e08e'];

let grid = document.querySelector('.grid');
// console.log(grid);

let arrColor = ['#99CCFF', '#f2d889', '#8ad0ba', '#e6e27c', '#8ecee3', '#9488d8', '#9966FF', '#b8e08e', '#CC66CC'];

for (let i = 0; i < 9; i++) {
    let newDiv = document.createElement('div');
    
    newDiv.classList.add('button-one');
    newDiv.id = `${[i]}`;
    
    newDiv.style.backgroundColor = `${arrColor[i]}`;
    
    grid.append(newDiv);
};

let audioPlay = (e) => {
    // console.log(e.target.id);
    // var audio = new Audio(`/midiProject/audio/${e.target.id}kick.wav`);
    var audio = new Audio(`/audio/${e.target.id}kick.wav`)
    audio.play();
};


let targetDiv = document.querySelectorAll('.button-one');
console.log(targetDiv);

targetDiv.forEach(el => {
    el.addEventListener('click', audioPlay);
});


// switch(e.target.id) {
//     case 0:
//         alert('ебать ты топовый');
// }
// newDiv.addEventListener('click', (e) => {
//     console.log(e.target.id);
//     // switch(e.target.id) {
//     //     case 0: 
//     //     alert('Клик1');
//     //     break;
//     // };
// });


