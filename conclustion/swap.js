function swap(a, b) {
    b = b - a;
    a = a + b;
    b = a - b;
    return [a, b];
}