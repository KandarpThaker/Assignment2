var sImages = document.querySelector('body ul li');
var lImages = document.querySelector('body figure');
sImages.innerHTML = '';
lImages.innerHTML = '';
var sImage = ['images/flowers-pink-small.jpg','images/flowers-purple-small.jpg','images/flowers-red-small.jpg','images/flowers-white-small.jpg','images/flowers-yellow-small.jpg'];
var lImage = ['images/flowers-pink-large.jpg','images/flowers-purple-large.jpg','images/flowers-red-large.jpg','images/flowers-white-large.jpg','images/flowers-yellow-large.jpg'];
for(var i = 0; i < sImage.length;i++){
    var input = `<img src= ${sImage[i]} alt="" width="240" height="160" />`;
    var listItem = document.createElement('li');
        listItem.innerHTML = input;
        sImages.appendChild(listItem);
        
}
sImages.addEventListener('click',fImage);
function fImage(){
    for(var i = 0;i < lImage.length;i++){
    var input1 = `<img src= ${lImage[i]} alt="" width="1200" height="800" />`;
    var figureItem = document.createElement('figure');
    figureItem.innerHTML = input1;
    lImages.appendChild(figureItem);
    }
}
