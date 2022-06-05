// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
const createDate = function (param1, param2) {
  let arrDates = [];
  for (let i = 0; i < param1.length; i++) {
    let convertDates = new Date(param1[i]) / 1000;
    arrDates.push(convertDates);
  }
  let resultArrDates = arrDates.sort();
  let result;
  if (param2 === undefined) {
    result = resultArrDates.join("-");
  } else {
    result = resultArrDates[param2].toString();
  }
  return result;
};

// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE
  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));
  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
