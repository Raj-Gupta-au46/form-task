const submitButton = document.getElementById("submit-button");
const form = document.querySelector("form");

submitButton.addEventListener("click", function() {
  
  const inputs = form.querySelectorAll("input");
  let allFieldsFilled = true;
  

for (let i = 0; i < inputs.length; i++){
  if (inputs[i].value.trim() === "") {
    allFieldsFilled = false;
    break;
  }
}

if (allFieldsFilled) {
    alert("Submitted successfully!");
    console.log("Submit button clicked");
  } else {
    alert("Please fill in all fields.");
  }
});