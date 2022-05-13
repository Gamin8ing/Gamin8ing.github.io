const button = document.querySelector('.container button')

button.addEventListener('click', (e)=>{
    let overlay = document.createElement('span')
    let l= e.clientX - button.getBoundingClientRect().left;
    let t= e.clientY - button.getBoundingClientRect().top;
    overlay.style.cssText = `
    position: absolute;
    height: 350px;
    width: 350px;
    top: ${t}px;
    left: ${l}px;
    transform: translate(-50%, -50%);
    background-color: rgb(61, 168, 255);
    z-index: -1;
    border-radius: 50%;
    opacity: 0;
    animation: button_anim 1s ease`

    overlay.addEventListener('animationend', (e)=>{
        e.target.remove();
    })

    button.appendChild(overlay)
})