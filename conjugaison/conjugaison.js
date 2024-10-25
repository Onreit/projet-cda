const button = document.querySelector("button");
const options = document.querySelectorAll("option");
const input = document.querySelector("input");
const listeConjuguer = document.querySelector("#listeConjuguer");
button.addEventListener("click", () => {
  for (option of options) {
    if (
      option.selected &&
      input.value &&
      input.value.endsWith("er")
    ) {
      const listeVerbe = conjugaison(input.value, option.value);
      if (listeVerbe.length > 0) {
        listeConjuguer.textContent = null;
        var listes = document.createElement('ul')
        for (const verbe of listeVerbe) {
            var liste = document.createElement('li')
            console.log(liste)
            console.log(listes)
            console.log(verbe)
            liste.textContent = verbe
            listes.appendChild(liste)
        }
        listeConjuguer.appendChild(listes)
      }
    }
  }
});

function checkVerb(string) {
  if (string.endsWith("ger")) return 1;
  if (string.endsWith("cer")) return 2;
  return 0;
}

function conjugaison(string, time) {
  var newVerb = string.substring(0, string.length - 2);
  var otherVerb = newVerb.substring(0, string.length - 1);
  const verbTab = [];
  if (time == "present") {
    verbTab.push(`Je ${newVerb}e`);
    verbTab.push(`Tu ${newVerb}es`);
    verbTab.push(`Il/Elle ${newVerb}e`);
    if (!checkVerb(string)) {
      verbTab.push(`Nous ${newVerb}ons`);
    } else if (checkVerb(string) == 1) {
      verbTab.push(`Nous ${otherVerb}eons`);
    } else if (checkVerb(string) == 2) {
      verbTab.push(`Nous ${otherVerb}çons`);
    }
    verbTab.push(`Vous ${newVerb}ez`);
    verbTab.push(`Ils/Elles ${newVerb}ent`);
  } else if (time == "futur") {
    verbTab.push(`Je ${newVerb}erai`);
    verbTab.push(`Tu ${newVerb}eras`);
    verbTab.push(`Il/Elle ${newVerb}era`);
    verbTab.push(`Nous ${newVerb}erons`);
    verbTab.push(`Vous ${newVerb}erez`);
    verbTab.push(`Ils/Elles ${newVerb}eront`);
  } else if (time == "imparfait" && !checkVerb(string)) {
    verbTab.push(`Je ${newVerb}ais`);
    verbTab.push(`Tu ${newVerb}ais`);
    verbTab.push(`Il/Elle ${newVerb}ait`);
    verbTab.push(`Nous ${newVerb}ions`);
    verbTab.push(`Vous ${newVerb}iez`);
    verbTab.push(`Ils/Elles ${newVerb}aient`);
  } else if (time == "imparfait" && checkVerb(string) == 1) {
    verbTab.push(`Je ${newVerb}eais`);
    verbTab.push(`Tu ${newVerb}eais`);
    verbTab.push(`Il/Elle ${newVerb}eait`);
    verbTab.push(`Nous ${newVerb}ions`);
    verbTab.push(`Vous ${newVerb}iez`);
    verbTab.push(`Ils/Elles ${newVerb}eaient`);
  } else if (time == "imparfait" && checkVerb(string) == 2) {
    verbTab.push(`Je ${otherVerb}çais`);
    verbTab.push(`Tu ${otherVerb}çais`);
    verbTab.push(`Il/Elle ${otherVerb}çait`);
    verbTab.push(`Nous ${newVerb}ions`);
    verbTab.push(`Vous ${newVerb}iez`);
    verbTab.push(`Ils/Elles ${otherVerb}çaient`);
  }
  return verbTab;
}
