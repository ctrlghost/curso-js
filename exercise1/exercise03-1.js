function exercise03(){

    let indice = 0;
    let name, age, skill, race, country;
     while (indice < 3) {
        name = prompt("What is your name?");
        age = prompt("What is your age?");
        skill = prompt("What is your main skill?");
        race = prompt("What is your race?");
        country = prompt("What is your country of origin?");
        indice = indice + 1;
     }

     console.log("Name: " + name + "Age: " + age + "Race: " + race + "Skill: " + skill + "Country: " + country);
}