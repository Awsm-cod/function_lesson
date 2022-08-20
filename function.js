function tekCift(sayi) {
    return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
}

console.log(tekCift(5));
console.log(tekCift(2));

const sayi = +prompt("Bir Sayi giriniz");
console.log(tekCift(sayi));