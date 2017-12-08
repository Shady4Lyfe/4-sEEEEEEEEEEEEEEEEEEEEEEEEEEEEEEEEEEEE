$("#spring").click(setSpring);
$("#summer").click(setSummer);
$("#autumn").click(setAutumn);
$("#winter").click(setWinter);

function setSpring()  {
  $("body").css("background-image", "url('images/springblur.jpg')");
  $("#sprpic").attr("src", "images/spring.jpg");
}

function setSummer()  {
  $("body").css("background-image", "url('images/summerblur.jpg')");
  $("#sumpic").attr("src", "images/summer.jpg");
}

function setAutumn()  {
  $("body").css("background-image", "url('images/autumnblur.jpg')");
  $("#autpic").attr("src", "images/autumn.jpg");
}

function setWinter()  {
  $("body").css("background-image", "url('images/winterblur.jpg')");
  $("#winpic").attr("src", "images/winter.jpg");
}
