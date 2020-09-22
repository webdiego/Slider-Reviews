const reviews = [
  {
    id:1,
    name: "Diego Md",
    job : "Web Developer",
    img : "./img/a.jpg",
    text : "Some quick example text to build on the card title and make up the bulk of the card's content."
  },

  {
    id:2,
    name: "Jessy May",
    job : "Web Designer",
    img : "./img/b.jpg",
    text : "Some quick example text to build on the card title and make up the bulk of the card's content?"
  },

  {
    id:3,
    name: "Jenny Jenny",
    job : "Designer",
    img : "./img/c.jpg",
    text : "Some quick example text to build on the card title and make up the bulk of the card's content!"
  }


];

//GET ELEMENT
const img = document.getElementById("img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

//BUTTON
const nextBtn = document.getElementById("right");
const prevBtn = document.getElementById("left");


//LOAD AND SHOP PEOPLE
let currentItem = 0;

window.addEventListener('DOMContentLoaded', () =>{
 
  showPerson(currentItem)

});



function showPerson(person){
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}



//BUTTON ACTION
nextBtn.addEventListener('click',function() {
   
 currentItem++;

 if(currentItem > reviews.length - 1){
   currentItem = 0 ;
 }
 showPerson(currentItem);
})

prevBtn.addEventListener('click',function() {
  currentItem--;
  
  if(currentItem < 0 ){
    currentItem = reviews.length - 1 ;
  }
  showPerson(currentItem);
 })