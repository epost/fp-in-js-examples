var R = require('ramda')

var xs = [1,2,3,4,5,20]

console.log('xs = ', xs)

var inc = x => x+1
var twice = x => x*2

var xs2 = R.map(inc, xs)
console.log('xs2 = ', xs2)

// R.compose and R.pipe take their arguments in reverse order
var xs2b = R.map(R.compose(twice, inc), xs)
// var xs2b = R.map(R.pipe(inc, twice), xs)
console.log('xs2b = ', xs2b)

var xs3 = R.filter(x => x>2, xs)
console.log('xs3 = ', xs3)

var foo = (x, y) => x+1

// 'reduce' is usually called 'fold'
var xs4 = R.reduce(foo, 0, xs)
console.log('xs4 = ', xs4)

var div1 = window.document.getElementById('div1')
div1.innerHTML = '<ul> <li>1</li> <li>2</li> <li>3</li> </ul>'

var liify = n => '<li>' + n.toString() + '</li>'
var lis = R.map(liify, xs)
console.log(lis)
var lizt = R.reduce((s1, s2) => s1 + s2, '', lis)
var ul1 = '<ul>' + lizt + '</ul>'
console.log('ul1 =', ul1)

div1.innerHTML = ul1
