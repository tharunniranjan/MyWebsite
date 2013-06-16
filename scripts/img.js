var currPic=1;

var totPics=3;

var keepTime;
function setupPicChange()

{ keepTime=setTimeout("changePic()", 3000); }

function changePic()

{ currPic++; if(currPic>totPics) currPic=1;

document.getElementById("picture").src="pic"+currPic+".jpg";

setupPicChange(); }
