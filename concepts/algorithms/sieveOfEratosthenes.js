/**
 * 需求： 列出這個數字以下的，不能被整除的數字 
 */
function sieveOfEratosthenes(n) {
    // 作一個陣列，放入true or false，代表數值能否被整除
    var primes = []; //? 
    for (var i = 0; i <= n; i++) {
        primes[i] = true;
    }

    primes[0] = false; // 0是false
    primes[1] = false; // 1是false

    for (var i = 2; i <= Math.sqrt(n); i++) { // Math.sqrt(n)是效能優化用的
        for (j = 2; i * j <= n; j++) {
            primes[i * j] = false;
        }
    }
    primes
    var result = [];
    for (var i = 0; i < primes.length; i++) {
        if (primes[i]) result.push(
            
        );
    }

    return result; //?
}

sieveOfEratosthenes(49); //?