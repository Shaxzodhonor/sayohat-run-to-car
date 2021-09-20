var elForm = document.querySelector(".form-js");
var elInput = document.querySelector(".input-js");
var runDisplay =document.querySelector(".run");
var byscleDisplay =document.querySelector(".byscle");
var carDisplay =document.querySelector(".car");

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    var elValue = parseFloat(elInput.value, 10);
    var resultRun = elValue / 4;
    var resultByscle = elValue / 20;
    var resultCar = elValue / 95;
    runDisplay.textContent = resultRun.toFixed(1) + " soat";
    byscleDisplay.textContent = resultByscle.toFixed(1) + " soat";
    carDisplay.textContent = resultCar.toFixed(2) + " soat";

})