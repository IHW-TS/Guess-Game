var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var m3 = document.getElementById("m3");

var q1 = Math.floor(Math.random() * 100) + 1;
var tentative = 0;
var guessed_nums = [];

function play() {
    var user_guess = document.getElementById("guess").value;
    if (user_guess < 1 || user_guess > 100) {
        alert("Entrer un nombre entre 1 et 100.");
    } else {
        guessed_nums.push(user_guess);
        tentative += 1;

        if (tentative > 3) {
            m3.textContent = "Vous avez échoué " + tentative + ".";
            document.getElementById("my_btn").disabled = true;

        } else if (user_guess < q1) {
            m1.textContent = "Trop Bas!";
            m2.textContent = "Nombre de tentative : " + tentative;
            m3.textContent = "Le nombre entré est : " + guessed_nums;
        } else if (user_guess > q1) {
            m1.textContent = "Trop Haut!";
            m2.textContent = "Nombre de tentative : " + tentative;
            m3.textContent = "Le nombre entré est : " + guessed_nums;
        } else if (user_guess == q1) {
            m1.textContent = "Bien joué !!! Vous l'avez trouvé !!!";
            m2.textContent = "Le nombre est : " + q1;
            m3.textContent = "Vous avez réussi en " + tentative + ".";
            document.getElementById("my_btn").disabled = true;
        }
    }
}