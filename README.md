# ![icon](Tandakurung%20Node%20v0.3.1/TNicon.png) Tandakurung Node  
  
![tampilan diagram](Tandakurung%20Node%20v0.3.1/kumpulan%20project/previewTN.png)  
  
Tandakurung Node adalah web application untuk visual programming, yaitu menggunakan nodes berwarna berisi coding & gambar. Nodes yang saling terhubung (garis) memudahkan prograammer memahami alur code yang dibuat. Nodes menggunakan sistem parent & children, yaitu nodes berisi nodes. Setiap node berisi 2 teks, yaitu pembuka & penutup.  
  
Hasil berupa teks biasa dan bisa dilihat di halaman export. Di dalam halaman export, user tidak bisa langsung edit. User harus click teks yang ingin diedit, lalu pindah ke halaman Edit node.  
  
silakan kunjungi [Tandakurung Node v0.3.1](https://angkasamuhammad.github.io/TandakurungNode/Tandakurung%20Node%20v0.3.1/Tandakurung%20Node.html)  
Silakan [click](https://github.com/AngkasaMuhammad/TandakurungNode/tree/main/Tandakurung%20Node%20v0.3.1/kumpulan%20project) beberapa contoh project berupa file JSON  
  
### 1. Halaman Utama  
![Halaman Utama](Tandakurung%20Node%20v0.3.1/img/Halaman%20Utama.png)  
Grid putih dan sumbu X dan Y sebagai background  
Node berbentuk persegi dengan nama dan border berwarna  
Menu di bawah kiri  
Teks input "Judul" sebagai nama node yang tampil di atas node yang sedang aktif/dipilih
Teks input "Warna" sebagai warna border node yang sedang aktif/dipilih
### 2. Halaman Petunjuk  
![Halaman Petunjuk](Tandakurung%20Node%20v0.3.1/img/Halaman%20Petunjuk.png)  
### 3. Halaman Simpan Project  
![Halaman Simpan Project](Tandakurung%20Node%20v0.3.1/img/Halaman%20Simpan%20Project.png)  
Teks input "Nama file project" sebagai nama file yang akan disimpan  
Textarea berisi deskripsi project  
Button Simpan menyimpan project  
Button Kembali menuju ke halaman utama  
### 4. Halaman Export  
![Halaman Export](Tandakurung%20Node%20v0.3.1/img/Halaman%20Export.png)  
Teks input "Nama file export" sebagai nama file yang akan diexport  
Button Simpan menyimpan project  
Button Kembali menuju ke halaman utama  
Teks berwarna merupakan hasil yang akan diexport, tersusun dari semua node sesuai warnanya   
Indent children diberi +1 tab dari indent parentnya
### 5. Halaman Edit Node  
![Edit Node](Tandakurung%20Node%20v0.3.1/img/Halaman%20Edit%20Node.png)  
Terdapat textarea pembuka (atas) dan penutup (bawah), menampilkan teks dari node yang sedang aktif/dipilih
### 6. Halaman Buka Gallery  
![Buka Gallery](Tandakurung%20Node%20v0.3.1/img/Halaman%20Buka%20Gallery.png)  
Tabel gambar & nama file gambar
Button "+" import gambar ke gallery
Button "-" menghapus gambar dari baris yang sedang aktif/dipilih (hijau)
