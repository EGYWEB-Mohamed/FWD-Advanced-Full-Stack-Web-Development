const a = 5;
const b = ('2 Medo' as unknown) as number;
const c = "Medo" as number;

let mult = (num1:number , num2:number) => {
  return num1 * num2;
}

console.log(mult(a,c))