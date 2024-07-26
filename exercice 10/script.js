//votre code ici
function printNumbers(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += i + ' ';
    }
    return result.trim(); // Supprime l'espace en trop à la fin
}

// Exemple d'utilisation :
/* console.log(printNumbers(5));  Résultat : "1 2 3 4 5" */

 export default printNumbers; 