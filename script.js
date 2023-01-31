let names = ["Kismat","bunny", "janu", "Aanchal", "Utsav", "dhruv"]

names.forEach(element => {
    if (element.startsWith('j') || element.startsWith('J')) {
        console.log(`Goodbye ${element}`)
    } else {
        console.log(`Hello ${element}`)
    }
});