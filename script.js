const catButton = document.getElementById('catButton');
const catContainer = document.getElementById('catContainer');

const catPhotosFolder = "C:\\Users\\Habib\\OneDrive\\Desktop\\c++\\linolandweb\\LINOBB";

function generateRandomCat() {
  // Clear the previous cat photo
  catContainer.innerHTML = '';

  // Generate a random number within a range of cat photo names
  const randomCatNumber = Math.floor(Math.random() * 10) + 1;

  // Construct the random cat photo path
  const randomCatPhotoPath = `${catPhotosFolder}/cat${randomCatNumber}.png`;

  // Create an image element
  const catImage = document.createElement('img');

  // Set the image source to the randomly chosen cat photo from the folder
  catImage.src = randomCatPhotoPath;

  // Append the image to the container
  catContainer.appendChild(catImage);
}

catButton.addEventListener('click', generateRandomCat);
