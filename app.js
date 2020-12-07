const inputs = document.getElementsByName("input");
const submit = document.getElementById("submit");

let formData = {};

inputs.forEach((input, i) => {
  inputs[i].addEventListener("input", (e) => {
    const value = e.currentTarget;
    const id = e.target.id;
    if (inputs[i].type === "checkbox") {
      checkbox = inputs[i].checked ? "Yes" : "No";
      formData[inputs[i].id] = checkbox;
    } else {
      if (inputs[i].value !== "") {
        formData[inputs[i].id] = inputs[i].value;
      }
    }
  });
});

submit.addEventListener("click", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  let finalFormData = formData;
  console.log(finalFormData);
  return finalFormData;
}
