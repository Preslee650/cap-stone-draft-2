Capstone 2 Project:
Create a website that allows users to search for national parks and mountains using html, css, and javascript.


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
