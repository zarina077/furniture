const Bar = document.querySelector(".bar")
const hideMenu = document.querySelector(".hideMenu")
const Return = document.querySelector(".Return")
const active = document.querySelector(".active")
Bar.addEventListener("click",()=>{
    hideMenu.classList.add("active")
    Bar.classList.remove("active")

})
Return.addEventListener("click",()=>{
    hideMenu.classList.remove("active")
    })
    // ----------
    const Barstwo = document.querySelector(".bar")
const hideSecondBarMenu = document.querySelector(".hideMenu")
// const Return = document.querySelector(".Return")
const activ = document.querySelector(".active")

Barstwo.addEventListener("click",()=>{
    hideSecondBarMenu.classList.add("active")
    Barstwo.classList.remove("active")

})
// Return.addEventListener("click",()=>{
//     hideMenu.classList.remove("active")
//     })
// ==========////////////////////////
const carusel = [...document.querySelectorAll(".Caruasel_Part")];
const To_left = [...document.querySelectorAll(".To_left")];
const To_right =[...document.querySelectorAll(".To_right")];

carusel.forEach((item, i)=>{
let containerDimensions = item.getBoundingClientRect();
let containerWidth = containerDimensions.width;
To_right[i].addEventListener("click",()=>{
    item.scrollLeft += containerWidth/3.2;
})
To_left[i].addEventListener("click",()=>{
    item.scrollLeft -= containerWidth/3.2;
})
});

// ===============//////////////////
const firstGroup =  document.querySelector(".first")
const SecondGroup =  document.querySelector(".second")
const ThirtGroup =  document.querySelector(".thirt")
console.log(firstGroup, SecondGroup, ThirtGroup);

SecondGroup.style.display ="none"
ThirtGroup.style.display ="none"



const ShopByRoom = document.querySelector(".ShopByRoom")
const ShopByCategory = document.querySelector(".ShopByCategory")
const ShopByStyle = document.querySelector(".ShopByStyle")

    ShopByRoom.addEventListener("click",()=>{
        // firstGroup.classList.remove("hidden")
        // firstGroup.classList.add("show")
        // ThirtGroup.classList.add("hidden")
        // SecondGroup.classList.add("hidden")
        firstGroup.style.display ="flex";
        
    
SecondGroup.style.display ="none"
ThirtGroup.style.display ="none"
    
    })
    ShopByCategory.addEventListener("click",()=>{
     
        firstGroup.style.display ="none";
        SecondGroup.style.display ="flex"
        ThirtGroup.style.display ="none"
    })
    ShopByStyle.addEventListener("click",()=>{
        firstGroup.style.display ="none";
        
    
        SecondGroup.style.display ="none"
        ThirtGroup.style.display ="flex"
      

    
    })

    const BarsTwo = document.querySelector(".Barstwo")
    const Pagefifth = document.querySelector(".Pagefifth_hover_Menus")
    BarsTwo.addEventListener("click",()=>{
        Pagefifth.classList.toggle("show")
    })




