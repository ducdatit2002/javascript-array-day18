function performOperations() {
  var inputNumbers = document.getElementById("inputNumbers").value;
  var numbers = inputNumbers.split(",").map(Number);

  var positiveSum = 0;
  var positiveCount = 0;
  var minNumber = Number.POSITIVE_INFINITY;
  var minPositiveNumber = Number.POSITIVE_INFINITY;
  var lastEvenNumber = -1;
  var firstPrimeNumber = -1;

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
  }

  var swapResult = swapValues(numbers);

  var sortedArray = numbers.slice().sort(function (a, b) {
    return a - b;
  });

  var integerCountMessage = "Number of integers in the array: " + countIntegers(numbers);
  
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

function countIntegers(numbers) {
  var inputNumbers = prompt("Enter numbers (comma-separated):");
  var inputArray = inputNumbers.split(",").map(Number);
  var integerCount = 0;

  for (var i = 0; i < inputArray.length; i++) {
    if (Number.isInteger(inputArray[i])) {
      integerCount++;
    }
  }

  return integerCount;
}

// Các hàm còn lại không thay đổi