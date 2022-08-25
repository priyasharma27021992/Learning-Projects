//sort ['1/2/2019', '11/12'2013', '1/1/1980', '11/1/1934'];

const sortDate = (arr) => {
  return arr.sort(function (a, b) {
    return new Date(a) - new Date(b);
  });
};

console.log(sortDate(["1/2/2019", "11/12/2013", "1/1/1980", "11/1/1934"]));
