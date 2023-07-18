const timeOut = 1000
const checking = () => console.log(`check`)

let interval = setInterval(checking, timeOut)
clearInterval(interval)

setTimeout(() => clearInterval(interval), 3000)