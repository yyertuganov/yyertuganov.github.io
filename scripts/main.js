const myHeading = document.querySelector('h1');
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/yergali.jpg') {
      myImage.setAttribute('src','images/juanjo.jpg');
      myHeading.textContent = 'This is Juanjo';
    } else {
      myImage.setAttribute('src','images/yergali.jpg');
      myHeading.textContent = 'This is Yergali';
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myButton.onclick = function() {
    alert('Hi there');
  }
