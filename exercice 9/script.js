function checkAge(age) {
    if (age < 18) {
        return "vous êtes mineur";
    } else if (age >= 65) {
        return "vous êtes senior";
    } else {
        return "vous êtes majeur";
    }
}

console.log(checkAge(22));// Affiche vous etes majeur
console.log(checkAge(13));// Affiche vous etes mineur
console.log(checkAge(70));// Affiche vous etes senior


export default checkAge;