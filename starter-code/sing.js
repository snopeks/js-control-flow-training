console.log("sing.js loaded");

function bottlesOfBeer(){
  var times = prompt("how many verses do you want to hear?")
  var bottles = "bottles";
  for(i=times; i > 0; i--){
    var messageA = ` ${i} ${bottles} of beer on the wall,
    ${i} ${bottles} of beer! Take one down and pass it around,`
    console.log(messageA)

    if(i === 2){
      bottles = "bottle"
    }
    var messageB = `${i-1} ${bottles} of beer on the wall!`;
    if (i === 1){
      messageB = "no more bottles of beer on the wall";
    }
    console.log(messageB)
  }
}

bottlesOfBeer()