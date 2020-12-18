let phLevels = [4.8]
let phCorrespondance = [1]
let phArray = []

//Creating array of ph levels
for(let i = 4.9; i <= 7.4; i += 0.1) {
    phLevels.push(Math.round(i * 10) / 10 )
}

//Creating Correspondance Levels
for(let i = 5; phCorrespondance.length < phLevels.length; i += 5) {
    phCorrespondance.push(i)
}

//Creating an array of objects
phLevels.map((ph, i) => {
    const phObj = ({
        level: ph,
        phCorrespondance: phCorrespondance[i]
    })
    phArray.push(phObj)
})

//Showing you in the console
console.log(phArray)