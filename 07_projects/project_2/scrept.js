const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const hight = parseInt(document.querySelector("#hight").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (isNaN(hight) || hight <= 0) {
    results.innerHTML = `Please give a valid height`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid weight`;
  } else {
    const bmi = (weight / (hight / 100) ** 2).toFixed(2);

    // show the result
    let category = "";
    if (bmi < 18.6) {
      category = "Underweight 😟";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = "Normal 😊";
    } else {
      category = "Overweight 😅";
    }

    results.innerHTML = `<span>Your BMI is: ${bmi} (${category})</span>`;
  }
});
