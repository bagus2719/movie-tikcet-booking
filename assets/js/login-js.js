document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    // Ambil data dari form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Lakukan validasi atau autentikasi
    console.log("Username:", username);
    console.log("Password:", password);

    // Tindakan selanjutnya (misalnya, menampilkan pesan sukses atau mengarahkan ke halaman lain)
    alert("Login berhasil!");
    // window.location.href = "homepage.html"; // Redirect ke halaman utama setelah login
});

// Fungsi untuk mengarahkan ke halaman registrasi
function redirectToRegister() {
    window.location.href = "../register.html"; // Ganti dengan jalur ke halaman registrasi Anda
}
