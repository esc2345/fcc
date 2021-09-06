function titleCase(str) {
  return str.toLowerCase().replace(/(^| )([a-z])/g,(x)=>x.toUpperCase());
}

console.log(titleCase("I'm a little tea pot"));
