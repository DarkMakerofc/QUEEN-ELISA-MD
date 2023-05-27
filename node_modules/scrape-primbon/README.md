# scrape-primbon

## Instalation :
```
npm i scrape-primbon
```

## Usage:
```js
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
```

## Example
```js
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()

//Nomer Hoki
primbon.nomer_hoki('6288292024190').then((res) => {
    console.log(res)
})

//Penafsiran Mimpi
primbon.tafsir_mimpi('pipis').then((res) => {
    console.log(res)
})

//Ramalan Jodoh
primbon.ramalan_jodoh('Dika', '7', '7', '2005', 'Novia', '1', '12', '2004').then((res) => {
    console.log(res)
})

//Ramalan Jodoh Bali
primbon.ramalan_jodoh_bali('Dika', '7', '7', '2005', 'Novia', '1', '12', '2004').then((res) => {
    console.log(res)
})

//Ramalan suami istri
primbon.suami_istri('Dika', '7', '7', '2005', 'Novia', '1', '12', '2004').then((res) => {
    console.log(res)
})

// Ramalan Cinta
primbon.ramalan_cinta('Dika', '7', '7', '2005', 'Novia', '1', '12', '2004').then((res) => {
    console.log(res)
})

// Arti Nama
primbon.arti_nama('Dika').then((res) => {
    console.log(res)
})

// Kecocokan Nama
primbon.kecocokan_nama('Dika', '7', '7', '2005').then((res) => {
    console.log(res)
})

// Kecocokan Nama Pasangan
primbon.kecocokan_nama_pasangan('Dika', 'Novia').then((res) => {
    console.log(res)
})

// Ramalan tanggal jadian pernikahan
primbon.tanggal_jadian_pernikahan('7', '6', '2019').then((res) => {
    console.log(res)
})

// Sifat usaha bisnis
primbon.sifat_usaha_bisnis('7', '7', '2005').then((res) => {
    console.log(res)
})

// Rejeki Hoki Weton
primbon.rejeki_hoki_weton('7', '7', '2005').then((res) => {
    console.log(res)
})

//Pekerjaan Weton
primbon.pekerjaan_weton_lahir('7', '7', '2005').then((res) => {
    console.log(res)
})

//zodiak 
primbon.zodiak('gemini').then((res) => {
    console.log(res)
})

```

Dan masih banyak lagi