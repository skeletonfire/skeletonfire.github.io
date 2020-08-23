var h1=document.querySelector("h1");
var body=document.querySelector(".class1");

document.addEventListener("click",function(){
    switch(getRandomInt(5))
    {
        case 0:
            body.classList.toggle("class2");
            h1.classList.toggle("class2");
            break;
        case 1:
            body.classList.toggle("class4");
            h1.classList.toggle("class4");
            break;
        case 2:
            body.classList.toggle("class6");
            h1.classList.toggle("class6");
            break;
        case 3:
            body.classList.toggle("class8");
            h1.classList.toggle("class8");
        case 4:
            body.classList.toggle("class10");
            h1.classList.toggle("class10");
    }
})

function getRandomInt(max) 
{
    return Math.floor(Math.random() * Math.floor(max));
}