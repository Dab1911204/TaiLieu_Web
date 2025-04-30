//Tagged template literals
// function highlight( ...rest) {
//     console.log(rest)
// }
// var brand = 'F8'
// var course = 'JavaScript'
// highlight`Học lập trình ${brand} tại khóa học ${course}!`

function highlight([first, ...strings], ...values) {
    return values.reduce(
                            (acc, cur) => [...acc,`<span>${cur}</span>`,strings.shift()],[first]
                        )
}
var brand = 'F8'
var course = 'JavaScript'
var html = highlight`Học lập trình ${course} tại khóa học ${brand}!`
console.log(html)