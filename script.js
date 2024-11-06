let image1 = document.getElementById("image1")
let image2 = document.getElementById("image2")


let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")


p2.classList.add("ma_class")

setInterval ( () => {
    image2.classList.toggle("ma_class")
    p1.classList.toggle("ma_class")
    p2.classList.toggle("ma_class")
    p1.classList.toggle("propriete")
    p2.classList.toggle("propriete")
}, 5000)