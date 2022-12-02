window.onload = function locationDisplayDropDown() {
  // load the dropdown list
  const dropDownList = document.getElementById("locationList");
  let length = locationsArray.length;
  for (let i = 0; i < length; i++) {

    // create the option element
    let theOption = document.createElement("option");

    // set the text and value of the option you created
    theOption.textContent = locationsArray[i];
    theOption.value = locationsArray[i];

    // append the option as a child of (inside) the
    // select element
    dropDownList.appendChild(theOption);
  }
};

window.onload = function locationDisplayDropDown() {
  // load the dropdown list
  const dropDownList = document.getElementById("locationList");
  let length = locationsArray.length;
  for (let i = 0; i < length; i++) {

    // create the option element
    let theOption = document.createElement("option");

    // set the text and value of the option you created
    theOption.textContent = locationsArray[i];
    theOption.value = locationsArray[i];

    // append the option as a child of (inside) the
    // select element
    dropDownList.appendChild(theOption);
  }
};