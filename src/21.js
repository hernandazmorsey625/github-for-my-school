function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  let i = 5;
  while (i * i < n) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}

function fibonacci(n) {
  if (n <= 1) return n;

  let a = 0, b = 1;
  for (let i = 2; i < n; i++) {
    [a, b] = [b, a + b];
  }

  return b;
}
