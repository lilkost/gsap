
//step 1
// gsap.to(".selector", {
//     // x: 100,
//     // y: 150,
//     // background: 'blue',
//     // duration: 1, //speed
//     // repeat: 5, // повторения
//     // repeatDelay: .3,// задержка перед повторениями
//     // stagger: .5, // задержка для эллементов с одним классом
//     // ease: "power2.inOut", // Стиль перехода
//     // paused: false, // анимация на паузе
//     // onCompleted: function () {
//     //     console.log(true) // функция для 
//     // }
// })
//step 2

// const showObj = (selector, obj) => {
//     const el = document.querySelector(selector);
//     el.innerHTML = JSON.stringify({
//         sub: obj.sub,
//         sponsor: obj.sponsor,
//         delta: obj.delta,
//         color: obj.color,
//     }, null, '')

// }

// const myObj = {
//     sub: 6000,
//     sponsor: 5,
//     delta: .5,
//     color: '#c4c4c4',
// }
// gsap.to(myObj, {
//     sub: 100000,
//     sponsor: 5,
//     delta: .5,
//     color: '#000',
//     duration: 10,
//     delay: 5,
//     onUpdate: function () {
//         showObj('.selector', myObj)
//     }
// })


// stepp 4
const title = document.querySelector('.title')
const leter = title.innerHTML.trim().split('');

title.innerHTML = ''
title.style.opacity = '1'


const spanArray = leter.map(
    leter => {
        const item = document.createElement('span');
        item.classList.add('letter');
        item.innerHTML = leter;
        title.appendChild(item);
        const rect = item.getBoundingClientRect();
        item.style.left = rect.left + 'px';
        item.x = rect.left;
        item.style.top = rect.top + 'px';
        item.y = rect.top;

        return item;
    }
)
console.log(spanArray)

spanArray.forEach(item => {
    item.style.position = 'absolute';
})

setTimeout(() => {
    gsap.to('.letter', {
        duration: 1,
        opacity: 1,
        top: 100,
        delay: function (i, el) {
            return i * .1
        },
        left: function (i, el) {
            return el.x + i * 10
        },
        color: `rgb(136,206,2)`
    })
}, 1000)