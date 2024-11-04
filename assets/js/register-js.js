function showPopup(title, description, imageUrl) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-description").innerText = description;
    document.getElementById("popup-image").style.backgroundImage = `url('${imageUrl}')`; // Menampilkan gambar film
    document.getElementById("popup").style.display = "block"; // Tampilkan pop-up
}

function closePopup() {
    document.getElementById("popup").style.display = "none"; // Sembunyikan pop-up
}

function redirectToLogin() {
    // Implementasi untuk redirect ke halaman login
    window.location.href = "../login.html"; // Ubah dengan jalur halaman login Anda
}
