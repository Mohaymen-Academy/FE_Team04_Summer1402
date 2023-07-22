const xSymbol = document.getElementById("x-symbol");
const ads = document.getElementById("ads");


xSymbol.addEventListener('click' ,()=>{
    
    ads.style.display = "none";
});


const header = document.querySelector('#blue_nav');
const navbar = document.querySelector('#navbar');
const aos = document.querySelector('#aos');
const image = document.querySelector('#img');
const text = document.querySelector('#text');

function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Waited for " + time);
        }, time);
    });
}


document.addEventListener("scroll", async () => {
  

  let scrollDirection;
  let previousScrollPosition = document.documentElement.scrollTop;
  await sleep(100);
  const currentScrollPosition = document.documentElement.scrollTop;

  if (currentScrollPosition > previousScrollPosition) {
    scrollDirection = "down";
  } else if (currentScrollPosition < previousScrollPosition) {
    scrollDirection = "up";
  }

  const scrolledHeight = document.documentElement.scrollTop;
  if (scrollDirection === "down"){

     header.style.transform = "translateY(-5rem)";
     navbar.style.transform = "translateY(-5rem)";
    aos.classList.add("fadeIn");
     
 

       
    }
  if (scrollDirection === "up") {
   header.style.transform = "translateY(0)"; 
   navbar.style.transform = "translateY(0)";
   aos.classList.remove("fadeIn");

    

  }
});
