function shoppingTime(memberId, money) {
  // you can only write your code here!
  /*
  Sepatu brand Stacattu seharga 1500000
Baju brand Zoro seharga 500000
Baju brand H&N seharga 250000
Sweater brand Uniklooh seharga 175000
Casing Handphone seharga 50000
  */
var items = [
    {
      name: "sepatu Stacattu",
      price: 1500000
    },
    {
      name: "baju Zoro",
      price: 500000
    },
    {
      name: "baju H&N",
      price: 250000
    },
    {  
      name: "sweater Uniklooh",
      price: 175000
    },
    {
      name: "Casing Handphone",
      price: 50000
    }
]
var jawab ="";
var sisaUang=money;
var totalBelanja = 0;
if (memberId === undefined || memberId === ''){
  return jawab= "Mohon maaf, toko X hanya berlaku untuk member saja";
  } else if (money <=50000){
  return jawab= "Mohon maaf, uang tidak cukup";
  } else {
    var object={};
    var list=[];
    object.memberId = memberId;
    object.money = money;
    object.listPurchased= list
    for (var i=0; i<items.length; i++) {
      if(sisaUang>=items[i].price) {
      sisaUang = sisaUang - items[i].price
      list.push(items[i].name)
      }
    }
    object.changeMoney = sisaUang;
  }
  return object;
}


// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja