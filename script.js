$("#spring").click(setSpring);
$("#summer").click(setSummer);
$("#autumn").click(setAutumn);
$("#winter").click(setWinter);

function setSpring()  {
  $("body").css("background-image", "url('images/springblur.jpg')");
  $("img").attr("src", "images/spring.jpg");
  $("h1").text("Spring");
  $("a").attr("href", "https://www.youtube.com/watch?v=mFWQgxXM_b8").attr("target", "_blank");
}

function setSummer()  {
  $("body").css("background-image", "url('images/summerblur.jpg')");
  $("img").attr("src", "images/summer.jpg");
  $("h1").text("Summer");
  $("a").attr("href", "https://www.youtube.com/watch?v=VC3qO2V1AXY").attr("target", "_blank");
}

function setAutumn()  {
  $("body").css("background-image", "url('images/autumnblur.jpg')");
  $("img").attr("src", "images/autumn.jpg");
  $("h1").text("Autumn");
  $("a").attr("href", "https://www.youtube.com/watch?v=8Q8ez-hGsuU").attr("target", "_blank");
}

function setWinter()  {
  $("body").css("background-image", "url('images/winterblur.jpg')");
  $("img").attr("src", "images/winter.jpg",);
  $("h1").text("Winter");
  $("a").attr("href", "https://www.youtube.com/watch?v=U3O7Xb2bgsY").attr("target", "_blank");
}
