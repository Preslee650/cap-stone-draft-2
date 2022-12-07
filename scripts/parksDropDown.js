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
}

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
  if (locationList.selectedIndex >= 0) {
    let text = locationList.options[locationList.selectedIndex].text;
    selectedLocationValue = locationList.value;
  }
  let parksByLocation = nationalParksArray.filter(park => park.State == selectedLocationValue);
  // load the dropdown list
  const parksDropDown = document.getElementById("nationalParksList");
  parksDropDown.innerHTML = ""
  let length = parksByLocation.length;
  for (let i = 0; i < length; i++) {

    // create the option element
    let theOption3 = new Option(parksByLocation[i].LocationName, parksByLocation[i].LocationName);

    // append the option as a child of (inside) the
    // select element
    parksDropDown.appendChild(theOption3);
  }
  renderParksCards(parksByLocation);
};