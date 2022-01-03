module.exports = function toReadable(number) {
    const numbersToTwenty = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const numberToNty = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) {
        return "zero";
    }

    if (number > 0 && number < 20) {
        return numbersToTwenty[number];
    }

    if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            return numberToNty[number / 10];
        } else {
            let twoNumbers = number.toString();
            return (
                numberToNty[+twoNumbers[0]] +
                " " +
                numbersToTwenty[+twoNumbers[1]]
            );
        }
    }

    if (number >= 100 && number < 1000) {
        if (number % 100 === 0) {
            return numbersToTwenty[number / 100] + " hundred";
        } else {
            let threeNumbers = number.toString();
            if (+threeNumbers[2] === 0) {
                return (
                    numbersToTwenty[+threeNumbers[0]] +
                    " hundred " +
                    numberToNty[+threeNumbers[1]]
                );
            } else {
                if (number % 100 >= 1 && number % 100 < 20) {
                    return (
                        numbersToTwenty[+threeNumbers[0]] +
                        " hundred " +
                        numbersToTwenty[+threeNumbers.slice(1)]
                    );
                } else {
                    return (
                        numbersToTwenty[+threeNumbers[0]] +
                        " hundred " +
                        numberToNty[+threeNumbers[1]] +
                        " " +
                        numbersToTwenty[+threeNumbers[2]]
                    );
                }
            }
        }
    }
};
