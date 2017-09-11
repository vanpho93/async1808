// bat dong bo -> su dung cac tai nguyen nam ngoai chuong trinh
// dong bo -> su dung cac gia tri nam trong chuong trinh

const fs = require('fs');

// fs.readFile('./x.txt', 'utf8', (err, str) => {
//     console.log(err, str);
// });

function read(filename) {
    let x;
    fs.readFile(filename, 'utf8', (err, str) => {
        console.log(str);
    });
    return x;
}

console.log(read('./x.txt')) // Khoa Pham Training
