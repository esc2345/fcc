function rot13(str) {
  const CODE_A = 'A'.charCodeAt(0);
  return str.split('').map((x) => {
    return (/[A-Z]/.test(x)) ? String.fromCharCode((x.charCodeAt(0) - CODE_A + 13) % 26 + CODE_A) : x;
  }).join('');
}

console.log(rot13("SERR PBQR PNZC"));
