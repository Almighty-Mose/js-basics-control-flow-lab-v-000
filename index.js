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
  city === "NYC" ? "OK, sounds good" : "No go."
}