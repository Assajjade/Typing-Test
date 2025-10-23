# ⌨️ Typing Speed Test

Ini adalah aplikasi web sederhana yang dibuat untuk mengukur kecepatan dan akurasi mengetik Anda. Pengguna akan diberikan kutipan acak dan tes akan menghitung *Words Per Minute* (WPM) serta persentase akurasi mereka dalam 60 detik.

Proyek ini dibuat sebagai latihan untuk mengasah keterampilan JavaScript murni (Vanilla JS), manipulasi DOM, dan cara berinteraksi dengan API eksternal.

## ✨ Demo

![alt text](image.png)



---

## 🚀 Fitur

* **Kalkulasi WPM:** Menghitung Words Per Minute (WPM) berdasarkan standar global (5 karakter per kata).
* **Pelacakan Akurasi:** Menghitung persentase ketikan yang benar.
* **Timer Mundur:** Tes standar 60 detik.
* **Kutipan Acak:** Menggunakan API eksternal (`dummyjson.com`) untuk menyediakan kutipan yang selalu baru setiap kali tes dimulai ulang.
* **Validasi Real-time:** Memberikan umpan balik visual instan dengan mewarnai huruf yang benar (hijau) dan salah (merah).
* **Tombol Restart:** Memulai tes baru dengan kutipan baru kapan saja.

---

## 🛠️ Teknologi yang Digunakan

* **HTML5:** Untuk struktur dasar dan kerangka website.
* **CSS3:** Untuk styling, layout, dan antarmuka yang responsif.
* **JavaScript (Vanilla JS - ES6+):** Untuk semua logika inti aplikasi, termasuk:
    * Manipulasi DOM (membuat `<span>` untuk setiap huruf)
    * Event Listeners (`input`, `click`)
    * Fungsi Timer (`setInterval`)
    * API Fetch (menggunakan `async/await` untuk mengambil data kutipan)

---

## 🔌 API

Proyek ini menggunakan API gratis dari [dummyjson.com](https://dummyjson.com/docs/quotes) untuk mengambil kutipan acak.

---

## 🏁 Cara Menjalankan

Proyek ini tidak memerlukan *build step* atau instalasi khusus.

1.  Klon (clone) repositori ini:
    ```bash
    git clone https://github.com/Assajjade/Typing-Test.git
    ```
2.  Masuk ke direktori proyek:
    ```bash
    cd TYPING-TEST
    ```
3.  Buka file `index.html` di browser favorit Anda.