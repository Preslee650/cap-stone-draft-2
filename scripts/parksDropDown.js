window.onload = function () {
  // CALLING MY DROP-DOWN FUNCTIONS WHEN PAGE LOADS UP
  locationDisplayDropDown();
  parksTypeDropDown();
  nationalParksDropDown();
};

// DISPLAYING LOCATION DATA ARRAY IN DROP-DOWN
function locationDisplayDropDown() {
  const dropDownList = document.getElementById("locationList");
  let length = locationsArray.length;
  for (let i = 0; i < length; i++) {

    // CREATING OPTION ELEMENT
    let theOption = new Option(locationsArray[i], locationsArray[i]);

    // APPEND THE OPTION AS A CHILD OF (INSIDE) THE SELECT ELEMENT. BASICALLY STORING OPTIONS INSIDE DROP-DOWN
    dropDownList.appendChild(theOption);
  }
}

// DISPLAYING PARK TYPE DATA ARRAY IN DROP-DOWN
function parksTypeDropDown() {
  const dropDownList2 = document.getElementById("parksTypeList");
  let length = parkTypesArray.length;
  for (let i = 0; i < length; i++) {

    let theOption2 = new Option(parkTypesArray[i], parkTypesArray[i]);

    dropDownList2.appendChild(theOption2);
  }

  // DETERMINES INDEX NUMBER OF SELECTED OPTION. BASICALLY DETERMINES AND LOOKS UP THE SELECTED OPTION
  if (parksTypeList.selectedIndex >= 0) {
    let text = parksTypeList.options[parksTypeList.selectedIndex].text;
    let value = parksTypeList.value;
  }
};

// DISPLAYING NATIONAL PARKS DATA ARRAY IN DROP-DOWN
function nationalParksDropDown() {
  if (locationList.selectedIndex >= 0) {
    let text = locationList.options[locationList.selectedIndex].text;
    selectedLocationValue = locationList.value;
  }

  // FILTERING DROP-DOWN RESULTS
  let parksByLocation = nationalParksArray.filter(park => park.State == selectedLocationValue);

  const parksDropDown = document.getElementById("nationalParksList");
  parksDropDown.innerHTML = ""
  let length = parksByLocation.length;
  for (let i = 0; i < length; i++) {

    // CREATING OPTIONS BY ONLY GETTING LOCATION NAME INFO FROM THE ARRAY
    let theOption3 = new Option(parksByLocation[i].LocationName, parksByLocation[i].LocationName);

    parksDropDown.appendChild(theOption3);
  }
  // CALLING FUNCTION TO RENDER FILTERED DISPLAY CARDS
  renderParksCards(parksByLocation);
};