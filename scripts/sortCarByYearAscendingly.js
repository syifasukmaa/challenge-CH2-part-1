function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  // 1. membuat function menggunakan algoritma quick sort
  function quickSort(arr) {
    // console.log(arr.length);

    // 2. base case untuk rekursif quicksort leftArr dan rightArr, jika array kurang atau sama dengan 1
    if (arr.length <= 1) {
      return arr;
    }

    // 3. mengambil pivot dari data array yg ada ditengah
    const pivot = arr[Math.floor(arr.length / 2)];
    //console.log(pivot)

    // 4. membuat array kosong untuk menampung data baru
    let leftArr = [];
    let rightArr = [];
    let equalArr = [];

    // 5. melakukan mengecek satu per satu data array
    for (const car of arr) {
      // 6. jika tahun mobil lebih kecil pivot
      if (car.year < pivot.year) {
        // 7. masukan data ke array baru sebelah kiri
        leftArr.push(car);
      } else if (car.year > pivot.year) {
        // 8. jika tahun mobil lebih besar pivot

        // 9. masukan data ke array baru sebelah kanan
        rightArr.push(car);
      } else if (car.year === pivot.year) {
        // 10. jika tahun mobil sama dengan pivot

        // 11. masukan data ke array baru bagian tengah
        equalArr.push(car);
      }
    }
    // console.log(leftArr, '====', equalArr , '====', rightArr);

    // 12. melakukan rekursif untuk array baru sebelah kiri dan kanan dan menggunakan spread operator untuk mengelurkan data pada array dan digabungkan kembali leftArr, equalArr dan rightArr menjadi array
    return [...quickSort(leftArr), ...equalArr, ...quickSort(rightArr)];
  }

  console.log(quickSort(result));

  // Rubah code ini dengan array hasil sorting secara ascending
  
  // 13. mengembalikan hasil dari fungsi quicksort dengan parameter dari result
  return quickSort(result);
}
