//need a list of filtered parks. empty cards container. then we add new cards based on parks parameter.
function renderParksCards(parks) {
    let cardsMain = document.getElementById('cardsContainer')
    //emptying cards container
    cardsMain.replaceChildren()
    //wrapping cardTemplate in a loop.
    let length = parks.length;
    for (let i = 0; i < length; i++) {
    let park = parks[i]

        const cardTemplate = `<div class="card" style="width: 18rem;">
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