const imgInput1 = document.getElementById('img1');
const imgInput2 = document.getElementById('img2');
const audioSelect = document.getElementById('audioSelect');

const img1 = document.getElementById('imageLeft');
const img2 = document.getElementById('imageRight');
const imageContainer = document.getElementById('images');
const audio = document.getElementById('audio');
const button = document.getElementById('mergeButton');

// Load uploaded images
imgInput1.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    img1.src = URL.createObjectURL(file);
    img1.style.display = "block";
  }
});

imgInput2.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    img2.src = URL.createObjectURL(file);
    img2.style.display = "block";
  }
});

// Button click event
button.addEventListener('click', () => {
  if (!img1.src || !img2.src) {
    alert("Please upload both images.");
    return;
  }

  // Set audio source
  audio.src = audioSelect.value;

  // Remove gap between images
  imageContainer.style.gap = '0px';

  // Start shake animation
  img1.classList.add('shake');
  img2.classList.add('shake');

  // Play selected audio
  audio.play();

  // Remove shake effect when audio ends
  audio.onended = () => {
    img1.classList.remove('shake');
    img2.classList.remove('shake');
  };
});