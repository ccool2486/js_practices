const fizzBuzz = (number) => {
    let fizzBuzzedNumArray = [];

    for (let i = 0; i <= number; i++) {
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