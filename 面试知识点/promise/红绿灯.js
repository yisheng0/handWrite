function light(col, delay) {
    return new Promise(function (resolve) {
        setTimeout(() => { col(); resolve() }, delay)

    }
    )
}
const red = () => { console.log('red') }
const green = () => { console.log('green') }
const yellow = () => { console.log('yellow') }

let step = () => {
    Promise.resolve()
        .then(
            () => light(red, 3000)
                .then(
                    () => light(green, 2000)
                )
                .then(
                    () => light(yellow, 1000)
                )
        )

}
step()