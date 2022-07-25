
// if("image/jpeg" == blob.type){
//     funcGetExif();
// }else{
//     let reader = new FileReader();
//     reader.readAsArrayBuffer(blob);
//     reader.onload = () => {
//         const unit16 = Array.prototype.map.call(new Uint8Array(reader.result), x => ('00' + x.toString(16)).slice(-2)).join('');
//         if(unit16.substr(12, 8) === "45786966"){
//             funcGetExif();
//         }else{
//             callback(null);
//             return;
//         }
//     };
// }

import fs from "fs"
const res = fs.readFileSync("test.png")
console.log(res);
const unit16 = Array.prototype.map.call(new Uint8Array(res), x => ('00' + x.toString(16)).slice(-2)).join(' ');
// determine if the image is a jpeg
// const unit16 = "66";
try {
    if (unit16.substr(0, 5) === "ff d8" && unit16.substr(unit16.length - 5, 5) === "ff d9") {
        const index = unit16.indexOf(" ff c0 ");
        const header = unit16.slice(0, index);
        console.log(header);
        console.log(header.substr(header.indexOf(" ff e1 ") + 13, 11));
    }
} catch (error) {
    console.log(error);
}

