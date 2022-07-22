export function add(x: number, y: number): number {
    return x + y;
}

export function multiply(x: number, y: number): number {
    return x * y;
}


export function palindrome(str: string): boolean {
    return str === str.split('').reverse().join('');
}
