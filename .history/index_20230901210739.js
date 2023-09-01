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

  var integerCountMessage =
    "Number of integers in the array: " + countIntegers();

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
  documentgetElementById("comparison").textContent = comparisonMessage;
}

function countIntegers() {
  var inputNumbers = document.getElementById("inputNumbers").value;
  var inputArray = inputNumbers.split(",").map(Number);
  var integerCount = 0;

  for (var i = 0; i < inputArray.length; i++) {
    if (Number.isInteger(inputArray[i])) {
      integerCount++;
    }
  }

  return integerCount;
}

function swapValues(numbers) {
  var firstIndex = 0;
  var lastIndex = numbers.length - 1;

  while (firstIndex < lastIndex) {
    var temp = numbers[firstIndex];
    numbers[firstIndex] = numbers[lastIndex];
    numbers[lastIndex] = temp;

    firstIndex++;
    lastIndex--;
  }

  return numbers.join(", ");
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

function compareCounts(count1, count2) {
  if (count1 > count2) {
    return "Positive numbers count is greater than negative numbers count.";
  } else if (count1 < count2) {
    return "Positive numbers count is less than negative numbers count.";
  } else {
    return "Positive numbers count is equal to negative numbers count.";
  }
}
