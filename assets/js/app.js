
let currentSlide = 0;
const items = document.querySelectorAll(".carousel-item");

// Array to store movie data
const movies = [
  {
    title: "Spider-Man: No Way Home",
    rating: "8.2 (12,827) | 2021 | 1 hour 55 minutes | Sci-fi",
    description: "Scelerisque sed ultricies tristique.",
    imageUrl: "assets/image/Spiderman.png",
  },
  {
    title: "Avengers: Endgame",
    rating: "8.4 (15,827) | 2019 | 3 hours 2 minutes | Action",
    description: "The Avengers assemble once more.",
    imageUrl: "assets/image/Avengers.jpg",
  },
  {
    title: "Shang-Chi",
    rating: "7.5 (10,827) | 2021 | 2 hours 12 minutes | Action",
    description: "Shang-Chi must confront his past.",
    imageUrl: "assets/image/ShangChi.png",
  },
  {
    title: "Aquaman",
    rating: "7.0 (9,827) | 2018 | 2 hours 23 minutes | Action",
    description:
      "Arthur Curry learns that he is the heir to the underwater kingdom of Atlantis.",
    imageUrl: "assets/image/Aquaman.jpg",
  },
  {
    title: "Black Panther",
    rating: "7.3 (15,827) | 2018 | 2 hours 14 minutes | Action",
    description: "Challa must defend his throne.",
    imageUrl: "assets/image/BlackPanther.png",
  },
  {
    title: "Wonder Woman",
    rating: "7.4 (12,000) | 2017 | 2 hours 21 minutes | Action",
    description: "Diana Prince embarks on a journey to save the world.",
    imageUrl: "assets/image/WonderWoman.png",
  },
  {
    title: "Guardians of the Galaxy",
    rating: "8.0 (20,000) | 2014 | 2 hours 1 minute | Action",
    description: "A group of intergalactic criminals must pull together.",
    imageUrl: "assets/image/Guardians.png",
  },
  {
    title: "Inception",
    rating: "8.8 (18,000) | 2010 | 2 hours 28 minutes | Sci-fi",
    description:
      "A thief who steals corporate secrets must perform the impossible.",
    imageUrl: "assets/image/Inception.png",
  },
  {
    title: "The Dark Knight",
    rating: "9.0 (24,000) | 2008 | 2 hours 32 minutes | Action",
    description: "Batman must face the Joker.",
    imageUrl: "assets/image/DarkKnight.png",
  },
  {
    title: "Dune",
    rating: "8.0 (10,000) | 2021 | 2 hours 35 minutes | Sci-fi",
    description:
      "Paul Atreides must navigate the dangerous desert planet.",
    imageUrl: "assets/image/Dune.png",
  },
];

function showSlide(index) {
  items.forEach((item, i) => {
    item.classList.remove("active");
    item.style.opacity = "0.5";
    // Update banner with the corresponding movie data
    if (i === index) {
      item.classList.add("active");
      item.style.opacity = "1";
      selectMovie(
        movies[i].title,
        movies[i].rating,
        movies[i].description,
        movies[i].imageUrl
      );
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % items.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + items.length) % items.length;
  showSlide(currentSlide);
}

// Set the initial slide
showSlide(currentSlide);

function selectMovie(title, rating, description, imageUrl) {
  document.getElementById("movie-title").innerText = title;
  document.getElementById("movie-rating").innerText = rating;
  document.getElementById("movie-description").innerText = description;
  document.getElementById("movie-image").children[0].src = imageUrl;
}

// Event listener to set the clicked item as the current slide
items.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

document.getElementById('hamburger').addEventListener('click', function() {
  const navbarLinks = document.getElementById('navbar-links');
  navbarLinks.classList.toggle('active');
});
