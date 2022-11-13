const jumlahKata = (string) => {
  const cut = [...string];
  cut.pop();
  const joined = cut.join("");
  const container = [];
  const stringLow = joined
    .toLowerCase()
    .replace(".")
    .replace(",")
    .replace("-")
    .split(" ");

  for (let i = 0; i < stringLow.length; i++) {
    for (let j = 0; j < stringLow[i].length; j++)
      if (stringLow[i].charCodeAt(j) < 97 || stringLow[i].charCodeAt(j) > 122) {
        container.push(1);
        continue;
      }
  }
  return stringLow.length - container.length;
};
console.log(jumlahKata("Saat meng*ecat tembok, Agung dib_antu oleh Raihan."));
console.log(jumlahKata("Berapa u(mur minimal[ untuk !mengurus ktp?"));
console.log(
  jumlahKata("Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.")
);
