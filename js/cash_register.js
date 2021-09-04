class Register {
  /* using cents to avoid precision issues */
  constructor(cid) {
    /* assumes cash in drawer is in ascending currency value */
    this.cid = [];
    this.cidTotal = 0;
    for (let row in cid){
      let currency = cid[row][0];
      let amount = parseInt(cid[row][1] * 100);
      this.cid.push([currency, amount]);
      this.cidTotal += amount;
    }
  }

  cashValues = {
    'PENNY': 1,
    'NICKEL': 5,
    'DIME' : 10,
    'QUARTER' : 25,
    'ONE': 100,
    'FIVE': 500,
    'TEN': 1000,
    'TWENTY': 2000,
    'ONE HUNDRED': 10000
  }

  _calculateChange(need){
    let change = [];
    for (let i=this.cid.length - 1; i>=0; i--){
      let [currency, amount] = this.cid[i];
      let value = this.cashValues[currency];
      //console.log(`need=${need}, cid amount=${amount}, value=${value}`);
      while (need >= value && this.cid[i][1] > 0){
        need -= value;
        this.cid[i][1] -= value;
        if (change.length==0 || change[change.length-1][0]!=currency){
          change.push([currency, 0]);
        }
        change[change.length-1][1] += value;
      }
    }
    if (need > 0) change = [];
    return change;
  }

  getChange(changeNeeded){
    let need = parseInt(changeNeeded * 100);
    let status, change;
    if(need > this.cidTotal){
      status = "INSUFFICIENT_FUNDS";
      change = [];
    }
    if(need == this.cidTotal){
      status = 'CLOSED';
      change = this.cid;
    }
    if(need < this.cidTotal){
      status = 'OPEN';
      change = this._calculateChange(need);
      if (change.length == 0) status = "INSUFFICIENT_FUNDS";
    }
    for (let i in change){
       change[i][1] /= 100;
    }
    return {'status':status, 'change':change};
  }

}

function checkCashRegister(price, cash, cid) {
  let register = new Register(cid);
  let status = register.getChange(cash - price);
  //console.log(status);
  return status;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
