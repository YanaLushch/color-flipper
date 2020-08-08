var colors = ['#0074d9', '#7fdbff', '#39cccc', '#3d9970', '#2ecc40', '#01ff70', '#ffdc00'];
var generatedColor = [];
var arrayForHex = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var toChangeColor = document.querySelector('button');
var mainBody = document.querySelector('main')
var colorDisplay = document.querySelector('.color_changing')
var pickedColor = PickColor();
var simpleMode = document.querySelector('.simple_mode')
var hexMode = document.querySelector('.hex_mode')
var mode = document.querySelectorAll('.mode')
var logo = document.querySelector('.logo')

hexMode.addEventListener('click', function(){
    displayToggle(this);
    toChangeColor.addEventListener('click', function(){
        //firstly we have to empty array so the new color could be generated in the array
        generatedColor = [];
        //we call back the function which pushes our new generated color in an empty array and we add it to our pickedColor variable
        pickedColor = generatedColor.push(randomColor());
        changeDisplayed(generatedColor)
    })
})
simpleMode.addEventListener('click', function(){
    displayToggle(this);
    toChangeColor.addEventListener('click', function(){
        //each time we generate new random color
        pickedColor = PickColor();
        //update the display value with new random color
        changeDisplayed(pickedColor)
    })
}) 

for (let i = 0; i < mode.length; i++) {
    mode[i].addEventListener('mouseover', function(){
        mode[i].classList.add('mode_changed')
    })
    mode[i].addEventListener('mouseout', function(){
        mode[i].classList.remove('mode_changed')
    })
}

toChangeColor.addEventListener('click', function(){
    //each time we generate new random color
    pickedColor = PickColor();
    //update the display value with new random color
    changeDisplayed(pickedColor)
})

//this function picks random color from the defined array of colors - for simple hex game
function PickColor () {
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}
//this function generates random array - of one color
function randomColor(){
    const getN = () => arrayForHex[Math.floor(Math.random()*arrayForHex.length)];
    return '#'+ getN() + getN() + getN() + getN() + getN() + getN();
};
function changeDisplayed(color) {
    //update the display value with new random color
    colorDisplay.textContent = color;
    //update backgroundcolor with new random colo
    mainBody.style.backgroundColor = color;
    //update button background color with new random color
    toChangeColor.style.backgroundColor = color;
    //Color Flipper - Logo changes into the color
    logo.style.color = color;
    //Displayed color its color changed nto generated color
    colorDisplay.style.color = color;
    //in the Click me button - we add black claa and whenever user leaves this area - class removes
    toChangeColor.classList.add('black');
    toChangeColor.addEventListener('mouseout', function(){
        toChangeColor.classList.remove('black'); 
    })
}
function displayToggle(button) {
    button.classList.add('toggle_changed')
    if (button === hexMode) {
        simpleMode.classList.remove('toggle_changed')
    } else if (button === simpleMode) {
        hexMode.classList.remove('toggle_changed')
    } 
}