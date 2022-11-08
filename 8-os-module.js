const os = require('os')

//info about user
const currentOs={
    name: os.type() ,
    repease:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs)

