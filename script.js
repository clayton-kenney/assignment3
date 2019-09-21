
    //Select random image from folder, and then change html to display image
    function cute () {
      let left = "";
      let right= "";
      let path = "/images/"
      //generates random number inclusive, taking min & max as arguments
    function getRandom(min, max) {
      return Math.floor((Math.random() * (max-min+1))+min);
    }
    left = getRandom(1,13);
    right = getRandom(1,13);
    //ensure left and right are different
    if (left==right) {
      right = getRandom(1,13);
      };
    document.getElementById('leftDog').src = path + left + ".jpg";
    document.getElementById('rightDog').src = path + right + ".jpg";
    };
    document.getElementById('moredogs').onclick = cute;
    

