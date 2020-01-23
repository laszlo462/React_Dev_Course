// function square(x) {
//     return x * x
// }

// console.log(square(3))

// //const squareArrow = (x) => {
// //    return x * x
// //}

// const squareArrow = (x) => x * x

// console.log(squareArrow(4))

const getFirstNameVerbose = (fullName) => {
    return fullName.split(' ')[0]
}
console.log(getFirstNameVerbose('Steve Szabo'))

const getFirstNameShorthand = (fullName) => fullName.split(' ')[0]
console.log(getFirstNameShorthand('Steve Szabo'))