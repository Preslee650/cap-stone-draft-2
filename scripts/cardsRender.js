// EMPTIES CARD CONTAINER THEN WE ADD NEW CARDS BASED ON PARKS PARAMETER
function renderParksCards(parks) {
    let cardsMain = document.getElementById('cardsContainer')

    // EMPTYING CARDS CONTAINER
    cardsMain.replaceChildren()

    // WRAPPING CARD TEMPLATE IN A LOOP
    let length = parks.length;
    for (let i = 0; i < length; i++) {
        let park = parks[i]

        const cardTemplate = `<div class="card">
            <img class="card-img" src="/images/Bond-StoryImage_3.jpg">
            <div class="card-body">
                <h5 class="card-title">${park.LocationName}</h5>
                <p class="card-descrip">${park.Address}</p>
            </div>
        </div>`

        //innerHTML
        cardsMain.insertAdjacentHTML("beforeend", cardTemplate)
    }

}