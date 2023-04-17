// Select all the cards and loop through them
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  //Items within each card
  const sneaker = card.querySelector(".sneaker img");
  
  //Moving Animation Event
  card.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

    // Sneaker Animation
    let xSneaker = e.pageX - sneaker.offsetWidth ;
    let ySneaker = e.pageY - sneaker.offsetHeight ;
    sneaker.style.left = xSneaker + "px";
    sneaker.style.top = ySneaker + "px";
  });

  //Animate In
  card.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
  
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
   
  });

  //Animate Out
  card.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  });
});
