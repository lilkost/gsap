
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

const showObj = (selector, obj) => {
    const el = document.querySelector(selector);
    el.innerHTML = JSON.stringify({
        sub: obj.sub,
        sponsor: obj.sponsor,
        delta: obj.delta,
        color: obj.color,
    }, null, '')

}

const myObj = {
    sub: 6000,
    sponsor: 5,
    delta: .5,
    color: '#c4c4c4',
}
gsap.to(myObj, {
    sub: 100000,
    sponsor: 5,
    delta: .5,
    color: '#000',
    duration: 10,
    delay: 5,
    onUpdate: function () {
        showObj('.selector', myObj)
    }
})
