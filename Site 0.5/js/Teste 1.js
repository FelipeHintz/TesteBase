function createSplash() {
  var canvas = document.getElementById('splashCanvas1');
  var ctx = canvas.getContext('2d');
  var imgXCoord = 0;
  var img = new Image();
  img.src='data:image/png;base64,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';
  img.onload = function() {
    onResize();
    canvas.height = img.height;
    startGlitch();
  };

  window.addEventListener('resize', onResize);

  function onResize() {
    var width = window.innerWidth;
    canvas.width = Math.max(Math.min(width, 600), img.width);
    imgXCoord = (canvas.width/2) - (img.width/2);
  }

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function startGlitch() {
    window.setInterval(function() {
      // Don't always clear the canvas to give a smear/ghost affect
      if (random(0, 1) > 0.1) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      glitchImage(1);

      setTimeout(function() {
        var magnitude = random(0, 1) > 0.1 ? 0 : 1;
        glitchImage(magnitude);
      }, random(0, 200));
    }, 400);
  }

  function glitchImage(magnitude) {
    if (magnitude == null) {
      magnitude = 1;
    }
    var amount = random(0, 10);
    var imgWidth = img.width;
    var imgHeight = img.height;

    // Move segments around
    for (var i = 0; i < amount; i++) {
      var shiftX = random(-50 * magnitude, 50 * magnitude);
      var shiftY = random(-10 * magnitude, 10 * magnitude);
      var shiftStartY = random(0, imgHeight);
      var spliceWidth = imgWidth - shiftX;
      var spliceHeight = (imgHeight/3) + random(-imgHeight/3, imgHeight/3) * magnitude;

      if (random(0, 1) > 0.3) {
        // remove the segment being shifted
        ctx.clearRect(0, shiftStartY, canvas.width, spliceHeight);
      }

      //  redraw the segment, shifted
      ctx.drawImage(img,
        0, shiftStartY, spliceWidth, spliceHeight,
        imgXCoord + shiftX, shiftStartY + shiftY, spliceWidth * random(0.9, 1.1), spliceHeight);
    }

    var imageData = ctx.getImageData(10, 10, canvas.width, canvas.height);

    var length = imageData.data.length;
    var rFactor, gFactor, bFactor, aFactor;
    var lastColorSwitch = 0;
    var colorSwitchSize = random(length/10, length);
    
	 // Colour-shift the image
    var j = 0;
    while (j < length) {
      // switch to a different colour every so often
      if (lastColorSwitch == 0 || (j - lastColorSwitch > colorSwitchSize && Math.random() > 0.5)) {
        rFactor = random(0, 1);
        gFactor = random(0, 1);
        bFactor = random(0.5, 1.2);
        aFactor = random(0.2, 0.5);

        if (random(0, 1) > 0.1) {
          aFactor = random(0.8, 1);
        }

        lastColorSwitch = j + 1;
      }

      imageData.data[j++] *= rFactor;
      imageData.data[j++] *= gFactor;
      imageData.data[j++] *= bFactor;
      imageData.data[j++] *= aFactor;
    }

    ctx.putImageData(imageData, 0, 0);
  }
}

document.addEventListener('DOMContentLoaded', createSplash);
