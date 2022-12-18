function dice (){
    return Math.floor(Math.random()*6)+1
  }
  
  function rollTheDices(tiridemarmellata) {
    let oggetto = {
      sum: 0,
      values: [],
    } 
    for (let i = 0; i < tiridemarmellata; i++) {
      oggetto.values.push(dice())
      oggetto.sum += dice();
    }
    return oggetto
  }
  console.log(rollTheDices(2));


  function isTodayMyBirthday(data) {
    const myBd = new Date("12/10/1996");
    myBd.setHours(0, 0, 0, 0);
    const enteredDate = new Date (data);
    enteredDate.setHours(0, 0, 0, 0);
    if (myBd === enteredDate){return true}
    else {return false}
  }
  
  console.log(isTodayMyBirthday("12/10/1996"));
