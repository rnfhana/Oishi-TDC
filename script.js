function addToCart(productName, price) {
    // Simulasikan menambahkan produk ke keranjang
    alert(`Anda telah menambahkan ${productName} dengan harga Rp${price} ke keranjang Anda!`);
    // Di sini Anda bisa menambahkan logika lebih lanjut seperti memperbarui daftar belanja di localStorage atau API lainnya
}

function openWhatsApp1() {
    const phoneNumber = '6289677199199'; // Ganti dengan nomor WhatsApp tujuan
    const message = 'Saya ingin memesan Nasi Kepal Ayam Teriyaki'; // Pesan otomatis

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Buka tautan WhatsApp dalam tab atau jendela baru
    window.open(whatsappLink, '_blank');
}

function openWhatsApp2() {
    const phoneNumber = '6289677199199'; // Ganti dengan nomor WhatsApp tujuan
    const message = 'Saya ingin memesan Nasi Kepal Ayam Lada Hitam'; // Pesan otomatis

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Buka tautan WhatsApp dalam tab atau jendela baru
    window.open(whatsappLink, '_blank');
}