function palindrome(str) {
  let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  console.log(cleanStr);
  for(let i=0;i < cleanStr.length / 2; i++){
    if (cleanStr[i] != cleanStr[cleanStr.length - i - 1]){
      return false;
    }
  }
  return true;
}

palindrome("eye");
