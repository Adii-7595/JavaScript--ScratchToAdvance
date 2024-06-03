//Arithmetic Operator
//Unary(++,--)
//Assignment(=,+=,-=,*=,%=)
//Comparison(<,>,<=,>=,==,!=)
//Logical(&&,||)

let a=10
let b= 8
console.log(a+b)
console.log(a*b)
console.log(a-b)
console.log(a/b)
console.log(a%b)
console.log(a**b)

console.log(a--,a++,++a,--a,b--,b++,++b,--b)
//Assignment

b = a
console.log(b,a)

//Comparison Operator

let age = 20;
console.log(age>=18);
console.log(age!=18);
console.log(age<=18);
console.log(age==18);

//type operator
console.log('1'==1)
console.log(0 =='')
console.log(0 == false)
console.log(null == undefined)

console.log('1'===1)
console.log(0 ==='')
console.log(0 === false)
console.log(null === undefined)

//comparison for non-numbers
console.log('a'=='A')
console.log('A'=='A')
console.log('b'<'c')
console.log('a'<'B')
console.log('a'!='z')
console.log('a'>'r')
//a<b<c<d.......<z      unicode comparison symbols characters i.e non-number
//A<B<C<D<E.......<Z