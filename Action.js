var Titular = "Ordonez";

var imagnenes = document.getElementsByTagName("img");
let name ;

for( var i = 0 ; i < imagnenes.length ; i++)
{
    name = imagnenes.item(i).src.split('/');
    imagnenes.item(i).src = Titular + "/" + name[name.length -1] ;
}

document.addEventListener("DOMContentLoaded",()=>
{
    const carousel = document.querySelectorAll('.carousel');
    M.Carousel.init(carousel,{
        duration: 150
    });
})




