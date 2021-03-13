var Titular = "Ordonez";

/*
var imagnenes = document.getElementsByTagName("img");
let name ;

for( var i = 0 ; i < imagnenes.length ; i++)
{
    name = imagnenes.item(i).src.split('/');
    imagnenes.item(i).src = Titular + "/" + name[name.length -1] ;
}
*/

document.addEventListener("DOMContentLoaded",()=>
{
    var carousel = document.querySelector('#work');
    var caro = new bootstrap.Carousel(carousel,{

        interval: 5000,
    })


    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: 'left',
        draggable: true,
        inDuration: 250,
        outDuration: 250
    });
})




