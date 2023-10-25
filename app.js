const photos = [];

document.getElementById('captureBtn').addEventListener('click', () => {
    // Simulate taking a photo with dog detection
    const photo = 'dog.jpg'; // Replace with actual photo
    photos.push(photo);
    displayPhotos();
});

function displayPhotos() {
    const photosDiv = document.getElementById('photos');
    photosDiv.innerHTML = '';

    photos.forEach((photo, index) => {
        const photoDiv = document.createElement('div');
        photoDiv.className = 'photo';
        photoDiv.innerHTML = `
            <img src="${photo}" alt="Dog Photo">
            <button onclick="deletePhoto(${index})">Delete</button>
        `;
        photosDiv.appendChild(photoDiv);
    });
}

function deletePhoto(index) {
    photos.splice(index, 1);
    displayPhotos();
}
