$(document).ready(function () {
    var computerNumber = Math.floor((Math.random() * 120) + 19)
    var crystalValue1 = Math.floor((Math.random() * 12) + 1)
    var crystalValue2 = Math.floor((Math.random() * 12) + 1)
    var crystalValue3 = Math.floor((Math.random() * 12) + 1)
    var crystalValue4 = Math.floor((Math.random() * 12) + 1)
    var wins = 0
    var losses = 0
    var total = 0
    var adder = 0

    var reset = function () {
        total = 0;
        adder = 0;
        $(".totalScore").text(total);
        computerNumber = Math.floor((Math.random() * 120) + 19)
        crystalValue1 = Math.floor((Math.random() * 12) + 1)
        crystalValue2 = Math.floor((Math.random() * 12) + 1)
        crystalValue3 = Math.floor((Math.random() * 12) + 1)
        crystalValue4 = Math.floor((Math.random() * 12) + 1)
        $("#randomNumber").text(computerNumber);
    }




    var gameOver = function () {
        total = parseInt(total);
        if (total === computerNumber) {
            wins++;
            $(".win").text(wins);
            alert("You Win!");
            reset();


        }
        if (total > computerNumber) {
            losses++;
            $(".loose").text(losses);
            alert("Sorry Try Again!");
            reset();
        }


    }

    var game = function () {

        $("#randomNumber").text(computerNumber);

        $(".crystal1").on("click", function () {
            adder = crystalValue1;
            total += adder;
            $(".totalScore").text(total);
            gameOver();
        });

        $(".crystal2").on("click", function () {
            adder = crystalValue2;
            total += adder;
            $(".totalScore").text(total);
            gameOver();
        });

        $(".crystal3").on("click", function () {
            adder = crystalValue3;
            total += adder;
            $(".totalScore").text(total);
            gameOver();

        });

        $(".crystal4").on("click", function () {
            adder = crystalValue4;
            total += adder;
            $(".totalScore").text(total);
            gameOver();

        });
    }
    game();



});

