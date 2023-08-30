const generateBtn = document.getElementById("generate-password")
const passwords = document.querySelectorAll(".password-container")

let letter = [
    "A","a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9, "<", ">", "?", "!", "@", "#", "$", "%", "^", "&", "(", ")", "-", "+", ";", ":"
]


function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * letter.length)
    return randomNumber
}

generateBtn.addEventListener("click", function() {

    passwords.forEach(function(password) {
        let result = ""
    
        for (let i = 0; i < 14; i++) {
            result += letter[getRandomNumber()]
        }
    
        password.value = result
    })

})