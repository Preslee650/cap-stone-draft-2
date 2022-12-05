window.onload = function () {
  // load the dropdown list
  locationDisplayDropDown();
  parksTypeDropDown();
  nationalParksDropDown();
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
  // looks up items in dropdowns options collection
  if (locationList.selectedIndex >= 0) {
    let text = locationList.options[locationList.selectedIndex].text;
    let value = locationList.value;
    /*  // test
    alert(`Selected: ${text} \nValue: ${value}`);   */
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
  if (parksTypeList.selectedIndex >= 0) {
    let text = parksTypeList.options[parksTypeList.selectedIndex].text;
    let value = parksTypeList.value;
  }
};

function nationalParksDropDown() {
  // load the dropdown list
  const dropDownList3 = document.getElementById("nationalParksList");
  let length = nationalParksArray.length;
  for (let i = 0; i < length; i++) {

    // create the option element
    let theOption3 = new Option(nationalParksArray[i].LocationName, nationalParksArray[i].LocationName);

    // append the option as a child of (inside) the
    // select element
    dropDownList3.appendChild(theOption3);
  }
  if (locationList.selectedIndex >= 0) {
    let text = nationalParksList.options[nationalParksList.selectedIndex].text;
    let value = nationalParksList.value;
  }
};


/* reminders: use alert("Selected: " + text + "\nValue: " + value); to test javascript. break every thing down in pseudo code */