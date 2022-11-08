const path = require('path')

//info about user
// const currentOs={
//     name: os.type() ,
//     repease:os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }

const filePath = path.join('/content','sub','test.txt')
console.log(filePath)


const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content','sub','test.text')
console.log(absolute)