const displayContainer = document.querySelector('#display-container')
const memeForm = document.querySelector('#meme-form')

memeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (memeForm.elements.imageUrl.value) {
        generateMeme();
    }
})

function generateMeme() {
    const meme = document.createElement('div')
    meme.classList.add('meme')
    const upperText = document.createElement('h3')
    upperText.classList.add('text-top')
    const lowerText = document.createElement('h3')
    lowerText.classList.add('text-bottom')
    const overLay = document.createElement('div')
    overLay.classList.add('over-lay')
    const crossSign = document.createElement('span')
    crossSign.classList.add('cross')
    crossSign.innerHTML = "&#10006"
    overLay.append(crossSign)
    upperText.innerText = memeForm.elements.textTop.value.toUpperCase();
    lowerText.innerText = memeForm.elements.textBottom.value.toUpperCase();
    meme.style.backgroundImage = `url("${memeForm.elements.imageUrl.value}")`
    meme.append(upperText)
    meme.append(lowerText)
    meme.append(overLay)
    displayContainer.append(meme)
    textTop.value = "";
    textBottom.value = "";
    imageUrl.value = "";
}

displayContainer.addEventListener('click', function (e) {
    if (e.target.nodeName === "SPAN") {
        e.target.parentElement.parentElement.remove();
    }
    e.target.parentElement.remove();

})


const mememe = () => (

    console.log('ssddd')

}


// for testinfg github