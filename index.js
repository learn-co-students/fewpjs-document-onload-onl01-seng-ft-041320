// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById('text').innerHTML = 'This is really cool!';
    console.log('This should load after');
  });

  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );