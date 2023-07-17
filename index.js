const questions = [
    `where do u live?`,
    `where do u have to give to me?`,
    `what do you want to do about me?`,
]

const ask = (index = 0) => {
    process.stdout.write(questions[index] + '\n') 
}

ask()

const answers = []


process.stdin.on('data', data => {
    answers.push(data.toString().trim())
    if(answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`voce completou o questionario`)
})