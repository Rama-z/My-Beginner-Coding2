const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal > nilaiAkhir) {
        return 'Nilai akhir harus lebih besar dari nilai awal';
    } else if (dataArray.length < 5) {
        return 'Jumlah angka dalam dataArray harus lebih dari 5'
    }
    let result = [];
    for (i = 0; i < dataArray.length; i++) {
        if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
            result.push(dataArray[i])
        }
    }
    result.sort(function (a, b) {
        return a - b
    });
    return result;
}

const hasil = seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])
console.log(hasil);