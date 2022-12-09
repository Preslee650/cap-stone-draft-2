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


<img width="1440" alt="Home Page" src="https://user-images.githubusercontent.com/116032312/206597649-08fef319-cd68-42c0-a98a-50ab52f32849.png">
<img width="1440" alt="National Parks Page" src="https://user-images.githubusercontent.com/116032312/206597675-74c4e83b-ca44-43a5-ac72-4108d7245242.png">
<img width="1440" alt="Mountains Page" src="https://user-images.githubusercontent.com/116032312/206597694-6a7d24d1-06b9-4135-b652-ad426c2fe57b.png">
