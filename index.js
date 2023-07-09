gsap.to(".selector", {
    x: 100,
    y: 150,
    background: 'blue',
    duration: 1, //speed
    repeat: 5, // повторения
    repeatDelay: .3,// задержка перед повторениями
    stagger: .5, // задержка для эллементов с одним классом
    ease: "power2.inOut", // Стиль перехода
    paused: false, // анимация на паузе
    onCompleted: function () {
        console.log(true) // функция для 
    }
})