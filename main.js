let myArray = [];
for (let i = 0; i < 100; i++) {
  myArray.push(Math.floor(Math.random() * 100));
}

let bilanganGenap = myArray.slice(0, 50);
let bilanganGanjil = myArray.slice(50, 100);

let inibilanganGenap = [];
let inibilanganGanjil = [];

for (let i = 0; i < bilanganGenap.length; i++) {
  if (bilanganGenap[i] % 2 == 0) {
    inibilanganGenap.push(bilanganGenap[i]);
  }
}

for (let i = 0; i < bilanganGanjil.length; i++) {
  if (bilanganGanjil[i] % 2 == 1) {
    inibilanganGanjil.push(bilanganGanjil[i]);
  }
}

let genapMin = inibilanganGenap[0];
let genapMax = inibilanganGenap[0];
let genapTotal = 0;
for (let i = 0; i < inibilanganGenap.length; i++) {
  if (inibilanganGenap[i] < genapMin) {
    genapMin = inibilanganGenap[i];
  }
  if (inibilanganGenap[i] > genapMax) {
    genapMax = inibilanganGenap[i];
  }
  genapTotal += inibilanganGenap[i];
}
let genapAverage = genapTotal / inibilanganGenap.length;

let ganjilMin = inibilanganGanjil[0];
let ganjilMax = inibilanganGanjil[0];
let ganjilTotal = 0;
for (let i = 0; i < inibilanganGanjil.length; i++) {
  if (inibilanganGanjil[i] < ganjilMin) {
    ganjilMin = inibilanganGanjil[i];
  }
  if (inibilanganGanjil[i] > ganjilMax) {
    ganjilMax = inibilanganGanjil[i];
  }
  ganjilTotal += inibilanganGanjil[i];
}
let ganjilAverage = ganjilTotal / inibilanganGanjil.length;


console.log("100 indeks acak: " + myArray);
console.log("indeks Bilangan genap: " + inibilanganGenap);
console.log("indeks Bilangan ganjil: " + inibilanganGanjil);

console.log("Bilangan genap:");
console.log("MIN: " + genapMin);
console.log("MAX: " + genapMax);
console.log("TOTAL: " + genapTotal);
console.log("AVERAGE: " + genapAverage);

console.log("Bilangan ganjil:");
console.log("MIN: " + ganjilMin);
console.log("MAX: " + ganjilMax);
console.log("TOTAL: " + ganjilTotal);
console.log("AVERAGE: " + ganjilAverage);

