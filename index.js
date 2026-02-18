// console.log(1);
// setTimeout(() => {
//     console.log(2)
// }, 0);
// console.log(3);
const olNumbers = document.querySelector('#numbers');
olNumbers.addEventListener('click', (e) => {
    let li = e.target;
    li.style.color = ( li.style.color == 'red') ? 'yellow' : 'red'; 
})
const body = document.querySelector('body');
body.addEventListener('dblclick', (e) => {
    e.target.parentNode.removeChild(e.target);
})
const a = document.querySelector('a');
a.addEventListener('click', (e) => {
    if (!confirm('haya zid 7thana chwaya, sur t7ab tokhrej :)')) {
        e.preventDefault();
    }
})

const ampoule = document.querySelector('.ampoule');
ampoule.addEventListener('click', (e) => {
    console.log(e);
    
    ampoule.classList.toggle('on');
    ampoule.classList.toggle('off');
})
// setInterval(
//     () => {
//         ampoule.classList.toggle('on');
//         ampoule.classList.toggle('off');
//     },1500
// )

const regions = ['Djerba', 'Sousse', 'Sfax', 'Beja', 'Gafsa', 'Kasserine', 'Nabeul'];
const ol = document.querySelector('.regions');
let index = 0;
// setInterval(() => {
//     if(!(index % regions.length)) {
//         ol.innerHTML = '';
//     }
//     let region = document.createElement('li');
//     region.innerHTML = regions[index % regions.length];
//     ol.insertBefore(region, ol.firstChild);
//     index++;
// }, 1000);


ol