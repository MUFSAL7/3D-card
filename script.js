let container = document.querySelector('.container')
let card = document.querySelector('.card')
let cardImage = document.querySelector('.card img')
let cardCircle = document.querySelector('.card .card-circle')
let cardDetails = document.querySelector('.card .card-details')


container.addEventListener('mousemove', (e)=>{
    // console.log(e);
    let xAxis = (window.innerWidth / 2 - e.pageX)/22
    let yAxis = (window.innerHeight / 2 - e.pageY)/22
    
    card.style.transform =  `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
})

container.addEventListener('mouseenter' , (e)=>{
  
    cardDetails.style.transform = "translate"


})

card.addEventListener('mouseenter' , (e)=>{
  
    cardImage.style.transform = "translateZ(100px) scale(1.4)"
    cardCircle.style.background= "#e5d9d9"

})
card.addEventListener('mouseleave' , (e)=>{
  
    cardImage.style.transform = "translateZ(100px) scale(1.0)"
    cardCircle.style.background= "#f1e7e7"


})
container.addEventListener('mouseleave' , (e)=>{
    card.style.transition = "all ease 0.2s"

    card.style.transform = "rotateX(0deg) rotateY(0deg)"
    // cardImage.style.transform = "translateZ(0px) rotateY(0deg)"

    
})

