function performOperations() {
  var inputNumbers = document.getElementById("inputNumbers").value;
  var numbers = inputNumbers.split(",").map(Number);

  var positiveSum = 0;
  var positiveCount = 0;
  var minNumber = Number.POSITIVE_INFINITY;
  var minPositiveNumber = Number.POSITIVE_INFINITY;
  var lastEvenNumber = -1;
  var firstPrimeNumber = -1;
  var integerCount = 0;

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positiveSum += numbers[i];
      positiveCount++;

      if (numbers[i] < minPositiveNumber) {
        minPositiveNumber = numbers[i];
      }
    }

    if (numbers[i] < minNumber) {
      minNumber = numbers[i];
    }

    if (numbers[i] % 2 === 0) {
      lastEvenNumber = numbers[i];
    }

    if (isPrime(numbers[i]) && firstPrimeNumber === -1) {
      firstPrimeNumber = numbers[i];
    }

    if (Number.isInteger(numbers[i])) {
      integerCount++;
    }
  }

  var swapResult = swapValues(numbers);

  var sortedArray = numbers.slice().sort(function (a, b) {
    return a - b;
  });

  var positiveCountMessage = "Number of positive numbers: " + positiveCount;
  var positiveSumMessage = "Sum of positive numbers: " + positiveSum;
  var minNumberMessage = "Minimum number: " + minNumber;
  var minPositiveNumberMessage =
    "Minimum positive number: " +
    (minPositiveNumber !== Number.POSITIVE_INFINITY ? minPositiveNumber : -1);
  var lastEvenNumberMessage =
    "Last even number: " + (lastEvenNumber !== -1 ? lastEvenNumber : -1);
  var swapMessage = "Swapped array: " + swapResult;
  var sortedArrayMessage = "Sorted array: " + sortedArray.join(", ");
  var firstPrimeNumberMessage =
    "First prime number: " + (firstPrimeNumber !== -1 ? firstPrimeNumber : -1);
  var integerCountMessage = "Number of integers in the array: " + integerCount;
  var comparisonMessage =
    "Positive numbers count vs Negative numbers count: " +
    compareCounts(positiveCount, numbers.length - positiveCount);

  document.getElementById("positiveCount").textContent = positiveCountMessage;
  document.getElementById("positiveSum").textContent = positiveSumMessage;
  document.getElementById("minNumber").textContent = minNumberMessage;
  document.getElementById("minPositiveNumber").textContent =
    minPositiveNumberMessage;
  document.getElementById("lastEvenNumber").textContent = lastEvenNumberMessage;
  document.getElementById("swapMessage").textContent = swapMessage;
  document.getElementById("sortedArray").textContent = sortedArrayMessage;
  document.getElementById("firstPrimeNumber").textContent =
    firstPrimeNumberMessage;
  document.getElementById("integerCount").textContent = integerCountMessage;
  document.getElementById("comparison").textContent = comparisonMessage;
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function swapValues(numbers) {
  var position1 = parseInt(prompt("Enter the first position to swap:"));
  var position2 = parseInt(prompt("Enter the second position to swap:"));

  if (
    position1 < 0 ||
    position1 >= numbers.length ||
    position2 < 0 ||
    position2 >= numbers.length
  ) {
    return "Invalid positions!";
  }

  var temp = numbers[position1];
  numbers[position1] = numbers[position2];
  numbers[position2] = temp;

  return numbers.join(", ");
}

function compareCounts(positiveCount, negativeCount) {
  if (positiveCount > negativeCount) {
    return "Positive numbers are more than negative numbers.";
  } else if (positiveCount < negativeCount) {
    return "Negative numbers are more than positive numbers.";
  } else {
    return "Positive numbers and negative numbers are equal.";
  }
}
