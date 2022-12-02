window.onload = function () {
  // load the dropdown list
  const dropDownList = document.getElementById("mountainsList");
  let length = mountainsArray.length;
  for (let i = 0; i < length; i++) {

    // create the option element
    let theOption = document.createElement("option");

    // set the text and value of the option you created
    theOption.textContent = mountainsArray[i].name;
    theOption.value = mountainsArray[i].name;

    // append the option as a child of (inside) the
    // select element
    dropDownList.appendChild(theOption);
  }
};