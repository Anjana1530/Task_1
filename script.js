const gallery = document.getElementById("gallery");
const loadButton = document.getElementById("load-art");

function generateArt() {
  gallery.innerHTML = ""; // Clear previous images

  // Use placeholder images (you can replace these with AI-generated images later)
  for (let i = 0; i < 12; i++) {
    const artCard = document.createElement("div");
    artCard.className = "art-card";

    // For now, use Lorem Picsum for random images
    const img = document.createElement("img");
    img.src = `https://picsum.photos/400/300?random=${Math.floor(
      Math.random() * 1000
    )}`;
    img.alt = "AI Art";

    artCard.appendChild(img);
    gallery.appendChild(artCard);
  }
}

loadButton.addEventListener("click", generateArt);

// Generate initial gallery on load
generateArt();
