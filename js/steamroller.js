/*
Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/
function steamrollArray(arr) {
  let ans = [].concat(...arr);
  while(ans.some(Array.isArray)){
    ans = [].concat(...ans);
  }
  console.log(ans);
  return ans;
}
steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, [[2,3]], [[4]]]);
