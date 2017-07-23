
document.getElementById("btn1").addEventListener("click", function(){
  const quotePic = Math.floor(Math.random() * 36);
  document.getElementById("img-frame").src = "FIT/" + quotePic + ".jpg";
});
