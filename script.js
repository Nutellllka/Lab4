const variant = 36;
const targetIndex = (variant % 10) + 1;

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('body *');
    const firstElement = elements[targetIndex - 1];
    const secondElement = elements[targetIndex];

    let firstClickState = false;
    let secondClickState = false;

    firstElement.addEventListener('click', () => {
        firstClickState = !firstClickState;
        firstElement.classList.toggle('clicked', firstClickState);
    });

    secondElement.addEventListener('click', () => {
        secondClickState = !secondClickState;
        secondElement.classList.toggle('clicked-alt', secondClickState);
    });
});

function addImage() {
    const imgContainer = document.getElementById('cityImage');
    if (!imgContainer) {
        const newImage = document.createElement('img');
        newImage.id = 'cityImage';
        newImage.src = 'https://uamedtourskz.com/storage/images/0b72f48967d33b504c7b742bba050f4d.jpg';
        newImage.alt = 'Фото Одеси';
        newImage.width = 600;
        document.body.insertBefore(newImage, document.querySelector('.button-container'));
    }
}

function increaseSize() {
    const img = document.getElementById('cityImage');
    if (img) {
        img.width += 50;
    }
}

function decreaseSize() {
    const img = document.getElementById('cityImage');
    if (img && img.width > 50) {
        img.width -= 50;
    }
}

function removeImage() {
    const img = document.getElementById('cityImage');
    if (img) {
        img.remove();
    }
}
