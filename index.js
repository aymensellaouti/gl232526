// console.log(1);
// setTimeout(() => {
//     console.log(2)
// }, 0);
// console.log(3);

const ampoule = document.querySelector('.ampoule');

// setInterval(
//     () => {
//         ampoule.classList.toggle('on');
//         ampoule.classList.toggle('off');
//     },1500
// )

const regions = ['Djerba', 'Sousse', 'Sfax', 'Beja', 'Gafsa', 'Kasserine', 'Nabeul'];
const ol = document.querySelector('.regions');
let index = 0;
setInterval(() => {
    if(!(index % regions.length)) {
        ol.innerHTML = '';
    }
    let region = document.createElement('li');
    region.innerHTML = regions[index % regions.length];
    ol.insertBefore(region, ol.firstChild);
    index++;
}, 1000);


ol