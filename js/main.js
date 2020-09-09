const bubbles = document.querySelectorAll(".bubble") // get all the bubble class elements

bubbles.forEach((bubble) =>
    window.addEventListener("load", () => {
        bubble.classList.add("hide") // on window.load, add class 'hide' to each bubble
    })
)

bubbles.forEach((bubble, index) =>
    window.addEventListener("load", () => {
        setTimeout(() => {
            bubble.classList.remove("hide") // show the element
            bubble.classList.add("slide-up") // add slide-up class that transform: translateY() from 50px to 0 px
        }, index * 1000) // automatic stepped delay for each bubble
    })
)
