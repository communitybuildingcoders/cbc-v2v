const inputs = document.getElementsByName("input");
const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("contact-form");

let formData = {};

inputs.forEach((input, i) => {
  inputs[i].addEventListener("input", (e) => {
   
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

submitBtn.addEventListener("click", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  let finalFormData = formData;
  let subject, body;
  if(!form.checkValidity()){
    alert('All Inputs with a star are required')
  }else{

  subject ='vet2vet: ' + formData.firstName;
  body = "company: " + formData.company;
  body += "\nEmail: " + formData.email;
  body += "\nTelephone: " + formData.telephone;
  body += formData.volunteer
    ? "\nVolunteer: " + formData.volunteer
    : "\nVolunteer: No";
  body += formData.sponsor  ?  "\nSponsor: " + formData.sponsor : "\nSponsor: No";
  body += "\nMessage: " + formData.message;

  console.log(formData);

  console.log(body);

  form.setAttribute(
    "action",
    "mailto:communitybuildingcoders@gmail.com?subject=" +
      subject +
      "&body=" +
      encodeURIComponent(body)
  );
   form.submit();
  }
}
