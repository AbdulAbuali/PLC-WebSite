1 var Responsive =
{
init: function()
{
3 var link = document.getElementsByClassName("topnav");
4 $(link).bind("click", clickListener);
5 function clickListener()
{
document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}// end of clickListener function
}// end of init function
}; //end of object
2 Responsive.init();
