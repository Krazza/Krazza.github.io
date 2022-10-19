const header = document.querySelector("#header");
const headerNav = document.querySelector("#headerNav");
const toTopBttn = document.querySelector("#toTopBttn");
const menuBttn = document.querySelector("#menuBttn");

document.addEventListener("scroll", function()
{
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        toTopBttn.style.display = "block";
        
    } else
    {
        toTopBttn.style.display = "none";
    }

});

toTopBttn.addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

menuBttn.addEventListener("click", function(){
    
    if(headerNav.classList.contains("responsive"))
    {
        //document.body.style.overflow = '';
        headerNav.classList.remove("responsive");
    } else
        headerNav.classList.add("responsive");
        //document.body.style.overflow = 'hidden';
});