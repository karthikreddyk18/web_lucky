function printDivisors(n)
{
    for (var i = 1; i*i < n; i++) {
        if (n % i == 0)
            console.log(i + " ");
    }
    for (var i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
        if (n % i == 0)
            console.log( n / i + " ");
    }
}

// Driver program to test above function

    console.log("The divisors of 100 are: \n");
    printDivisors(100);