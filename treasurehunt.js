var ranDomNum = Math.floor(Math.random() * 9);
const treasure = (location) => {
//  alert(location);
  if (location == ranDomNum ) {
    alert("Jackpot");
  } else {
    alert("Nah");
  }
}
