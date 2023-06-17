// logo with canvas
document.addEventListener("DOMContentLoaded", function() {
    const c = document.getElementById('myCanvas');
    const ctx = c.getContext('2d');
    const img = document.getElementById("logoImage");

    img.onload = function() {
      ctx.drawImage(img, 10, 10);
      ctx.font = "bold 40px Arial";
      ctx.textAlign = 'center';
      ctx.fillStyle = "#964B00";
      ctx.textBaseline = 'middle';
      const text = 'COCO Jewelry';
      ctx.fillText(text, c.width/2, c.height/2);
    };
  });