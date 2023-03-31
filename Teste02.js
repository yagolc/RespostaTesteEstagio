let a = 0;
let b = 1;
let c = 0;
let n = 20
let flag = false;

if (n == 0 || n == 1) {
    console.log("O número informado pertence à sequência de Fibonacci.");
    flag = true;
}

while (c < n) {
    c = a + b;
    if (c == n) {
        console.log("O número informado pertence à sequência de Fibonacci.");
        flag = true;
        break;
    }
    a = b;
    b = c;
}

if (!flag) {
    console.log("O número informado não pertence à sequência de Fibonacci.");
}
