console.log(window.location.href);

pictures_url = window.location.href.replace("index.html", "bilder/");
var background = document.getElementById("background");
console.log(pictures_url);

//http://127.0.0.1:5500/Lasse-GM/bilder/scp-13460002.jpg

var folder = "bilder/";
var bool = false;

setInterval(() => {
  bool = !bool;
  let imgSrc = bool ? "hero-bg2.jpg" : "hero-bg.jpg"; // Toggle image
  $(".parallax-slider").addClass("transitioning-src"); // Add class to begin transition
  setTimeout(() => {
    $(".parallax-slider")
      .attr("src", `https://website.com/images/${imgSrc}`)
      .removeClass("transitioning-src");
  }, 400); // Ensure timeout matches transition time, remove transition class
}, 6000);
function switch_p(pictures) {
  let single = pictures[Math.round(Math.random() * pictures.length - 1)];
  let full = window.location.href + "bilder/" + single;

  var $img = $('<img src="' + full + '">');
  console.log(full);
  $img.bind("load", function() {
    background.setAttribute("src", full);

    setTimeout(() => {
      switch_p(pictures);
    }, time_b * 1000);
  });
}
$.ajax({
  url: folder,
  success: function(data) {
    console.log(data);
    switch_p(data);
  }
});
