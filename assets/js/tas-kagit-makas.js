
let oyuncuHamlesi = prompt("hamlenizi giriniz (taş, kağıt veya makas)");
console.log('Oyuncu hamlesi: ' + oyuncuHamlesi);

let bilgisayarınHamlesi = ["taş", "kağıt", "makas"].at(Math.floor(Math.random()*3));


console.log("Bilgisayarın hamlesi: " + bilgisayarınHamlesi);

if (oyuncuHamlesi === bilgisayarınHamlesi) {
    console.log("Berabere kaldınız!");
} else if (
    (oyuncuHamlesi === "taş" && bilgisayarınHamlesi === "makas") ||
    (oyuncuHamlesi === "kağıt" && bilgisayarınHamlesi === "taş") ||
    (oyuncuHamlesi === "makas" && bilgisayarınHamlesi === "kağıt")
) {
        console.log("Sen Kazandın :)");
    } else {
        console.log("Üzgünüm Kaybettin :(");
}