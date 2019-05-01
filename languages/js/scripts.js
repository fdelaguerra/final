let grid = document.getElementsByClassName('subgrid');
//let button = document.querySelector('#button');
let hidden = document.getElementsByClassName('hide');
let section = document.getElementsByTagName('section');
let articles = section.children

//select link
let l1 = document.querySelector('#l1');
let l2 = document.querySelector('#l2');
let l3 = document.querySelector('#l3');
let l4 = document.querySelector('#l4');
let l5 = document.querySelector('#l5');
let l6 = document.querySelector('#l6');

//select feature
let f1 = document.querySelector('#f1');
let f2 = document.querySelector('#f2');
let f3 = document.querySelector('#f3');
let f4 = document.querySelector('#f4');
let f5 = document.querySelector('#f5');
let f6 = document.querySelector('#f6');

//back links
let b1 = document.querySelector('#b1');
let b2 = document.querySelector('#b2');
let b3 = document.querySelector('#b3');
let b4 = document.querySelector('#b4');
let b5 = document.querySelector('#b5');
let b6 = document.querySelector('#b6');

document.addEventListener('DOMContentLoaded', () => {
        let i = 0;
        while (i < grid.length) {
          grid[i].classList.replace('subgrid', 'hide');
          i++;
        }
    }
//template
/*
button.addEventListener('click', () => {
  let i = 0;
  while (i < grid.length);
    grid[i].classList.replace('subgrid', 'hide');
  	i++;

})
*/
b1.addEventListener('click',() => {
    f1.classList.replace('subgrid', 'hide');
})

b2.addEventListener('click',() => {
    f2.classList.replace('subgrid', 'hide');
})

b3.addEventListener('click',() => {
    f3.classList.replace('subgrid', 'hide');
})

b4.addEventListener('click',() => {
    f4.classList.replace('subgrid', 'hide');
})

b5.addEventListener('click',() => {
    f5.classList.replace('subgrid', 'hide');
})

b6.addEventListener('click',() => {
    f6.classList.replace('subgrid', 'hide');
})

//1
l4.addEventListener('click', () => {
  let i = 0;
  while (i < grid.length) {
    grid[i].classList.replace('subgrid', 'hide');
    i++;
  }
  f4.classList.replace('hide', 'subgrid');
}
)
