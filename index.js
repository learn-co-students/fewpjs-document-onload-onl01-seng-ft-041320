document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    updateText()
  });

  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

  function updateText() {
      document.getElementById('text').textContent = "This is really cool!"
  }