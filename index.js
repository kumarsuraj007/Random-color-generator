const containerEl = document.querySelector('.container');
for (i = 0; i < 30; i++) {
    const colorEl = document.createElement('div');
    colorEl.classList.add('color-container');
    containerEl.appendChild(colorEl);
}

const colorContainerEl = document.querySelectorAll('.color-container');
console.log(colorContainerEl)

function getColors () {
    colorContainerEl.forEach((colorCon) => {
        const newColorCode = randomColor();
        colorCon.style.backgroundColor = `#${newColorCode}`;
        colorCon.innerText = `#${newColorCode}`
    })
}

function randomColor () {
    const chars = '0123456789abcdef';
    const colorCodeLength = 6;
    let colorCode = "";
    for (i=0; i < colorCodeLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;
}

getColors();

