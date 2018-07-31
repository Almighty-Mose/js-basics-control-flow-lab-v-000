// Write your code in this file!
function scuberGreetingForFeet(num) {
  let result
  if (num < 400) {
    result = "This one is on me!";
  } else if (num > 2000 && num < 2500) {
    result = "I will gladly take your thirty bucks.";
  } else if (num > 2500) {
    result = "No can do.";
  }
  return result
}

function ternaryCheckCity(city) {
  return (city === 'NYC' ? "Ok, sounds good." : "No go.")
}

function switchOnCharmForTip(tipAmount) {
  let response
  switch (tipAmount) {
    case 'Generous':
      response = "Thank you so much."
      break;
    case ''
  }
  
}