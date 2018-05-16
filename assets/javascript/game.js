var computerNumber = Math.floor((Math.random() * 120) + 19)
var crystalValue1 = Math.floor((Math.random() * 12) + 1)
var crystalValue2 = Math.floor((Math.random() * 12) + 1)
var crystalValue3 = Math.floor((Math.random() * 12) + 1)
var crystalValue4 = Math.floor((Math.random() * 12) + 1)
var totalScore = []
var wins = 0
var losses = 0
console.log(totalScore)
$(document).ready(function () {

    $("#randomnumber").append(computerNumber);

    $(".crystal1").on("click", function () {
        alert(crystalValue1);
        totalScore.push(crystalValue1);
    });

    $(".crystal2").on("click", function () {
        alert(crystalValue2);
        totalScore.push(crystalValue2);

    });

    $(".crystal3").on("click", function () {
        alert(crystalValue3);
        totalScore.push(crystalValue3);

    });

    $(".crystal4").on("click", function () {
        alert(crystalValue4);
        totalScore.push(crystalValue4);

    });

});

