/***********
Problem: Blackjack

Create a function named `blackJack()` that accepts two parameters:
playerCardScore (number)
dealerCardScore (number)

Return whichever value is nearest (or equal) to 21 without going over. Return 0 if both scores go over 21.

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. blackJack(19, 21)

   Result: 21

2. blackJack(22, 22)

   Result: 0

3. blackJack(19, 22)

   Result: 19

3. blackJack(21, 21)

   Result: 21

************/
console.log('Problem 1:')

// Add your code below this line
const playerCardScore = 19
const dealerCardScore = 22


function blackJack(x, y) {
  if (y > 21 && x > 21) {
    return 0
} else if ( y <= 21 && y > x || y <= 21 && y !== x) {
    return y
} else if (x <= 21 && x > y || x <= 21 && x !== y  ) {
    return x
} else ( x <= 21 && y <= 21 && (x === y ))
  return "This hand is a push."
}

console.log(blackJack(playerCardScore, dealerCardScore))
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Scrabble Scorer

Create a function named `scrabbleScore()` that accepts a parameter called "word". The function should use the following table to calculate the Scrabble score of a provided word:

```
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. scrabbleScore("cabbage")
   Note: c = 3, a = 1 (twice), b = 3 (twice), g = 2, e = 1

   Expected Result: 14

2. scrabbleScore("javascript")

   Expected Result: 24

3. scrabbleScore("function")

   Expected Result: 13

************/
console.log('Problem 2:')

// Add your code below this line

  scores = { 'A' : 1, 'B' : 3, 'C' : 3, 'D' : 2, 'E' : 1, 'F' : 4, 'G' : 2, 'H' : 4, 'I' : 1, 'J' : 8, 'K' : 5, 'L' : 1, 'M' : 3, 'N' : 1, 'O' : 1, 'P' : 3, 'Q' : 10, 'R' : 1, 'S' : 1, 'T' : 1, 'U' : 1, 'V' : 4, 'W' : 4, 'X' : 4, 'Y' : 4, 'Z' : 10 };
function scrabbleScore(word) {
    word = word.toUpperCase();
  let sum = 0;
  for (i = 0; i < word.length; ++i) {
      sum += scores[word.charAt(i)] || 0;
  }
  return(sum);
}
console.log(scrabbleScore("function"))


// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Palindromes

Palindromes are words which read the same forward as backwards. For example, "madam" and "noon" are both palindromes.

Create a function named `isPalindrome()` that accepts a parameter called "word". The function will return true if the word is a palindrome and false if it is not.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. isPalindrome("noon")

   Expected Result: true

2. isPalindrome("racecar")

   Expected Result: true

3. isPalindrome("moon")

   Expected Result: false

4. isPalindrome("run")

   Expected Result: false

************/
console.log('Problem 3:')

// Add your code below this line
function isPalindrome(word) {
  const originalStr = word.toLowerCase()
  const reverseStr = originalStr.split('').reverse().join('')
  return reverseStr === originalStr
}

console.log(isPalindrome('racecar'))
// Add your code above this line


/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Double Letter Checker

Create a function that takes a "word" as a parameter and returns true if the word has two consecutive identical letters.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. doubleLetters("loop")

   Expected Result: true

2. doubleLetters("rune")

   Expected Result: false

3. doubleLetters("apple")

   Expected Result: true

************/
console.log('Problem 4:')

// Add your code below this line


function doubleLetters(word) {

  let final = word.split("")
  let duplicate = word.split("")

  for(i = 1; i < final.length; i++) {
    if(final[i] === duplicate[i + 1])
      return true
      else
      return false
    }
}

console.log(doubleLetters('apple'))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Word Counter

Create a function named `wordCount()` that accepts a parameter called "phrase" which counts the number of occurrences of each word in that phrase

For example, the phrase: "olly olly in come free" should result in output that looks similar to the following:

```
olly: 1
in: 1
come: 1
free: 1
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. wordCount("olly olly in come free")

   Result:

   olly: 2
   in: 1
   come: 1
   free: 1

2. wordCount("Baby shark, doo doo doo doo doo doo")

   Result:

   baby: 1
   shark: 1
   doo: 6

3. wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall")

   Result:

   humpty: 2
   dumpty: 2
   sat: 1
   a: 2
   on: 1
   fall: 1
   great: 1
   had: 1
   wall: 1
************/
console.log('Problem 5 - bonus:')

// Add your code below this line

function wordCount(phrase) {
  let words = phrase.replace([","], "").split(" ")
  let phraseCount = {}

  words.forEach((word) => {
    if (phraseCount[word] === undefined) {
      phraseCount[word] = 1
    } else {
      phraseCount[word] = phraseCount[word] + 1
    }
  })
  return phraseCount

}
console.log(wordCount("Baby shark, doo doo doo doo"))


// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
