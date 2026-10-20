let produk = {
    barang : "Mouse Wireless",
    harga : 200000,
    stok:100,
    diskon:0.10,

    infoProduk: function (){
        return(
            "Barang :" + this.barang +"\n"+
            "Harga :" + this.harga + "\n"+
            "Stok :" + this.stok + "\n"+
            "Diskon :" + this.diskon

        )
      },

    hargaDiskon: function (){
        let hargaAkhir = this.harga - (this.harga * this.diskon);
        return hargaAkhir;
      },

    beliProduk: function(jumlah) {
    if (this.stok <= 0) {
        console.log("Stok produk kini habis, segera restock!");
    } else if (jumlah > this.stok) {
        console.log(`Stok tidak cukup! Sisa stok: ${this.stok}`);
    } else {
        this.stok -= jumlah;
        console.log(`Pembelian berhasil! Anda membeli ${jumlah} ${this.barang}.`);
        console.log("Sisa stok sekarang: " + this.stok);
    }
}
    }

console.log(produk.infoProduk());
console.log("Harga setelah diskon: " + produk.hargaDiskon());
produk.beliProduk(1);
produk.beliProduk(99);
produk.beliProduk(102);




