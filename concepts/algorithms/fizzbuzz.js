const fizzBuzz = (number) => {
    // 回傳用，把FizzBuzz的結果放在裡面
    let fizzBuzzedNumArray = [];

    for (let i = 1; i <= number; i++) { // [注意] 要從1開始，spec問題
        if (i % 15 === 0) {
            fizzBuzzedNumArray.push("FizzBuzz")
        }
        else if (i % 3 === 0)
            fizzBuzzedNumArray.push("Fizz")
        else if (i % 5 === 0)
            fizzBuzzedNumArray.push("Buzz")
        else
            fizzBuzzedNumArray.push(i)
    }
    return fizzBuzzedNumArray
}

fizzBuzz(20) //?
fizzBuzz(6) //?