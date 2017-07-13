/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

// Define cards - K, Q, J, A
// Iterate through hand array
// add items in array together
// Ace is special - can be 1 or 11
//     Define Ace as 11
//     If hand is greater than 21, set Ace equal to 1

var hand = [2, 5, 8]

function handValue(hand) {
  let J = ''
  let Q = ''
  let K = ''
  let A = ''
  let total = 0
  let card = []

  for (var i = 0; i < hand.length; i += 1) {
    card.push(hand[i])

    if (hand[i] === 'J') {
      J = 10
      card.pop(hand[i])
      card.push(J)
    }
    if (hand[i] === 'Q') {
      Q = 10
      card.pop(hand[i])
      card.push(Q)
    }
    if (hand[i] === 'K') {
      K = 10
      card.pop(hand[i])
      card.push(K)
    }
    if (hand[i] === 'A') {
      A = 11
      card.pop(hand[i])
      card.push(A)
    }

    if (hand[i] === 'A' && total > 20) {
      A = 1
      card.pop(hand[i])
      card.push(A)
    }

    if (hand[i] === '2') {
      card.pop(hand[i])
      card.push(2)
    }
    if (hand[i] === '3') {
      card.pop(hand[i])
      card.push(3)
    }
    if (hand[i] === '4') {
      card.pop(hand[i])
      card.push(4)
    }
    if (hand[i] === '5') {
      card.pop(hand[i])
      card.push(5)
    }
    if (hand[i] === '6') {
      card.pop(hand[i])
      card.push(6)
    }
    if (hand[i] === '7') {
      card.pop(hand[i])
      card.push(7)
    }
    if (hand[i] === '8') {
      card.pop(hand[1])
      card.push(8)
    }
    if (hand[i] === '9') {
      card.pop(hand[1])
      card.push(9)
    }
  }

  for (var j = 0; j < card.length; j++) {
    total += card[j]
  }

  while (total > 22) {
    total -= 10
  }
  return total
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
