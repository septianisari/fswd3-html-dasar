var tanya = true;
while (tanya) {

    //menangkap pilihan player
    alert('HAI SELAMAT DATANG DI GAME ');
    alert('Mau Main? Sllahkan Pilih!');
    var suit = prompt('PILIHAN : BATU , GUNTING , KERTAS');

    //menangkap pilihan computer
    //membangkitkan bilangan random

    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'BATU';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'GUNTING';
    } else {
        comp = 'KERTAS';
    }

    //menentukan rules
    //menentukan rules
    var hasil = '';
    if (suit == comp) {
        hasil = 'SERI';
    } else if (suit == 'BATU') {
        hasil = (comp == 'KERTAS') ? 'MENANG' : 'KALAH!';
    } else if (suit == 'GUNTING') {
        hasil = (comp == 'KERTAS') ? 'MENANG' : 'KALAH!';
    } else if (suit == 'KERTAS') {
        hasil = (comp == 'BATU ') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'memasukan pilihan  yang salah!';
    }
    //tampilkan hasilnya

    alert('KAMU : ' + suit + '\nKOMPUTER : ' + comp +
        '\nHASILNYA : KAMU ' + hasil);
    tanya = confirm('MAIN LAGI?');
}
alert('TERIMAKASIH SUDAH BERMAIN!!');