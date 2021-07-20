function scuberGreetingForFeet(ride) {
  if (ride <= '400') {
    return "This one is on me!"
  } else if (ride > '2000' && ride <= '2500') {
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do."
  }
}

function ternaryCheckCity(spot) {
  return spot === 'NYC' ? "Ok, sounds good." : "No go.";

}
//   function switchOnCharmFromTip(money) {
//     switch (money) {
//       case 'generous': return "Thank you so much."
//       case 'not as generous': return "Thank you."
//       default: return "Bye."
//     }
//   }
// }


function switchOnCharmFromTip(money) {
  switch (money) {
    case 'generous':
      return "Thank you so much."
      break;
    case 'not as generous':
      return "Thank you."
      break;
    default:
      return "Bye.";
  }
}