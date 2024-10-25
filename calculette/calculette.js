const boutons = document.querySelectorAll("button");
boutons.forEach((bouton, indice) => {
  bouton.addEventListener("click", () => {
    const resultat = document.querySelector("textarea");
    if (bouton.innerHTML.includes("fa-0")) {
      resultat.textContent += "0";
    } else if (bouton.innerHTML.includes("fa-1")) {
      resultat.textContent += "1";
    } else if (bouton.innerHTML.includes("fa-2")) {
      resultat.textContent += "2";
    } else if (bouton.innerHTML.includes("fa-3")) {
      resultat.textContent += "3";
    } else if (bouton.innerHTML.includes("fa-4")) {
      resultat.textContent += "4";
    } else if (bouton.innerHTML.includes("fa-5")) {
      resultat.textContent += "5";
    } else if (bouton.innerHTML.includes("fa-6")) {
      resultat.textContent += "6";
    } else if (bouton.innerHTML.includes("fa-7")) {
      resultat.textContent += "7";
    } else if (bouton.innerHTML.includes("fa-8")) {
      resultat.textContent += "8";
    } else if (bouton.innerHTML.includes("fa-9")) {
      resultat.textContent += "9";
    } else if (bouton.innerHTML.includes("fa-c")) {
      resultat.textContent = "";
    } else if (
      bouton.innerHTML.includes("fa-minus") &&
      invalidOperator(resultat.textContent, true)
    ) {
      resultat.textContent += "-";
    } else if (
      bouton.innerHTML.includes("fa-xmark") &&
      invalidOperator(resultat.textContent)
    ) {
      resultat.textContent += "*";
    } else if (
      bouton.innerHTML.includes("fa-divide") &&
      invalidOperator(resultat.textContent)
    ) {
      resultat.textContent += "/";
    } else if (
      bouton.innerHTML.includes("fa-plus") &&
      invalidOperator(resultat.textContent)
    ) {
      resultat.textContent += "+";
    } else if (
      bouton.innerHTML.includes("fa-equal") &&
      invalidOperator(resultat.textContent)
    ) {
      resultat.textContent = total(resultat.textContent);
    }
  });
});

function total(string) {
  const operateurs = ["+", "-", "*", "/"];
  const valeurs = [];
  const newOperateurs = [];
  let newString = string;

  for (const operateur of operateurs) {
    while (newString.includes(operateur)) {
      const index = newString.indexOf(operateur);
      const valeur = parseInt(newString.substring(0, index));
      valeurs.push(valeur);
      newOperateurs.push(operateur);
      newString = newString.substring(index + 1);
    }
  }
  if (newString) {
    valeurs.push(parseInt(newString));
  }

  if (valeurs.length > 1) {
    let totalValeur = valeurs[0];
    for (let i = 1; i < valeurs.length; i++) {
      const operateur = newOperateurs[i - 1];
      if (operateur === "+") {
        totalValeur += valeurs[i];
      } else if (operateur === "-") {
        totalValeur -= valeurs[i];
      } else if (operateur === "*") {
        totalValeur *= valeurs[i];
      } else if (operateur === "/") {
        totalValeur /= valeurs[i];
      }
    }
    return totalValeur;
  } else if (valeurs.length === 1) {
    return valeurs[0];
  } else {
    return 0;
  }
}

function invalidOperator(string, bool = false) {
  const operators = ["+", "-", "*", "/"];
  for (const operator of operators) {
    console.log(string.length);
    if (string.length == 0 && bool == true) {
      console.log(operator);
      return true;
    } else if (string.endsWith(operator) || string.length == 0) {
      return false;
    }
  }
  return true;
}
