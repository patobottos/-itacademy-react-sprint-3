// Exercise 7

function validate() {
  let error = 0;

  // Get the input fields
  let fName = document.getElementById("fName");
  let fLastN = document.getElementById("fLastN");
  let fEmail = document.getElementById("fEmail");
  let fPassword = document.getElementById("fPassword");
  let fAddress = document.getElementById("fAddress");
  let fPhone = document.getElementById("fPhone");

  //Regular Expressions
  let regExpfName = /^[A-Za-z]{3,}$/g;
  let regExpfLastN = /^[A-Za-z]{3,}$/g;
  let regExpfEmail =
    /^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([A-Za-z]{2,5})$/g;
  let regExpfPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}/g;
  let regExpfAddress = /^.{3,}$/g;
  let regExpfPhone = /^\d{9}$/g;

  //Validate each field (in case of mistake, test == false)
  let testfName = regExpfName.test(fName.value);
  let testfLastN = regExpfLastN.test(fLastN.value);
  let testfEmail = regExpfEmail.test(fEmail.value);
  let testfPassword = regExpfPassword.test(fPassword.value);
  let testfAddress = regExpfAddress.test(fAddress.value);
  let testfPhone = regExpfPhone.test(fPhone.value);

  // Get the error elements
  let errorfName = document.getElementById("errorfName");
  let errorLastN = document.getElementById("errorLastN");
  let errorEmail = document.getElementById("errorEmail");
  let errorPassword = document.getElementById("errorPassword");
  let errorAddress = document.getElementById("errorAddress");
  let errorPhone = document.getElementById("errorPhone");

  // Validate fields entered by the user: name, last name, email, password, address, phone, and show sign in case of error

  if (!testfName) {
    fName.style.borderColor = "red";
    errorfName.style.display = "block";
    error++;
  }

  if (!testfLastN) {
    fLastN.style.borderColor = "red";
    errorLastN.style.display = "block";
    error++;
  }

  if (!testfEmail) {
    fEmail.style.borderColor = "red";
    errorEmail.style.display = "block";
    error++;
  }

  if (!testfPassword) {
    fPassword.style.borderColor = "red";
    errorPassword.style.display = "block";
    error++;
  }

  if (!testfAddress) {
    fAddress.style.borderColor = "red";
    errorAddress.style.display = "block";
    error++;
  }

  if (!testfPhone) {
    fPhone.style.borderColor = "red";
    errorPhone.style.display = "block";
    error++;
  }

  if (error > 0) {
    alert("1 or more errors detected! Please, verify fields.");
  } else {
    alert("Everything's OK!");
  }
}
