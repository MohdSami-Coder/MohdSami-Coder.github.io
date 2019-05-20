function isPrime(num){
  if(num <= 1){
    return false;
  }
  for(let i = 2; i <= num - 1; i = i + 1){
    if(num % i == 0){
      return false;
    }
  }
  return true;
}

function generatePrimes(n){
  let primes = [];
  let counter = 1;

  while(primes.length != n){
    if(isPrime(counter)){
      primes.push(counter);
    }
    counter = counter + 1;
  }
  return primes;
}

console.log(isPrime(23));
console.log(isPrime(51));

console.log(generatePrimes(11));
console.log(generatePrimes(5));