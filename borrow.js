function borrow(s) {
  return s.toLowerCase().replace(/\W/g,'');
}

// function borrow(s) {
//   let alpha = 'abcdefghijklmnopqrstuvwxyz';
//   let retStr = "";

//   for (let i = 0; i < s.length; i++) {
//     let char = s[i].toLowerCase();
//     if (alpha.includes(char)) {
//       retStr += char;
//     }
//   }

//   return retStr;
// }