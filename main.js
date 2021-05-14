var fam= ["ananya.jpg","father.jpg","mother.jpg","grandma.jpg","grandpa.jpg"];
var reason=["ananya","visu-dad","shalini-mom","jaya-grandma","loganathan-grandpa"];
var i=0;
function nextbutton()
{
     document.getElementById("imagefamily").src=fam[i];
document.getElementById("home").innerHTML=reason[i];
 i++;
 if(i==5){
      i=0;
 }
}