const { readFile, writeFile } = require('fs')
console.log('start')
readFile('./content/sub/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    // console.log(result)
    const first = result
    readFile('./content/sub/first.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        // console.log(result)
        const second = result
        writeFile('./content/result-async.txt',
            `here is the result : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }
        )
    })
})
console.log('starting next one')