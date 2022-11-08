const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/sub/first.txt','utf-8')
const second = readFileSync('./content/sub/second.txt','utf-8')

writeFileSync('./content/result-sync.txt',`here is the result: ${first}, ${second} \n` ,{flag:'a'})