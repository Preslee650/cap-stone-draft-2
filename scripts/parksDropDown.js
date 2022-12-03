window.onload = function () {
  // load the dropdown list
  locationDisplayDropDown();
  parksTypeDropDown();
};
function locationDisplayDropDown() {
  // load the dropdown list
  const dropDownList = document.getElementById("locationList");
  let length = locationsArray.length;
  for (let i = 0; i < length; i++) {

    // create the option element
    let theOption = new Option(locationsArray[i], locationsArray[i]);

    // append the option as a child of (inside) the
    // select element
    dropDownList.appendChild(theOption);
  }
};

function parksTypeDropDown() {
  // load the dropdown list
  const dropDownList2 = document.getElementById("parksTypeList");
  let length = parkTypesArray.length;
  for (let i = 0; i < length; i++) {

    // create the option element
    let theOption2 = new Option(parkTypesArray[i], parkTypesArray[i]);

    // append the option as a child of (inside) the
    // select element
    dropDownList2.appendChild(theOption2);
  }
};

/* const statesList = document.getElementById("statesList");
let length = states.length;
for (let i = 0; i < length; i++) {
// create the option element and set the text and // value at the same time
let theOption = new Option(states[i], abbrev[i]);
// append the option as a child of (inside) the // select element statesList.appendChild(theOption);
} */