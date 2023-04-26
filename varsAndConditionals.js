/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between the Packers & the Bears
*/ 

let packersOffense = 7;
let bearsOffense = 15;

if(packersOffense > bearsOffense){
    console.log(`Packers offense is better.`)
} else if(bearsOffense > packersOffense){
    console.log(`Bears offense is better.`)
} else {
    console.log(`They're equally successful offensive teams`)
}

let packersDefense = 100;
let bearsDefense = 100;

if(packersDefense <= bearsOffense){
    console.log('Touchdown for the Bears!')
} else {
    packersDefense -= bearsOffense
    console.log(`The Packers Defense is now ${packersDefense}`)
}

packersDefense += 55;

if (packersDefense <= bearsOffense){
    console.log('Touchdown for the Bears!')
} else {
    packersDefense -= (bearsOffense)
    console.log(`The Packers Defense is now ${packersDefense}`)
}

if((packersDefense + 30) >= 100){
    packersDefense = 100
} else {
    packersDefense += 30
}

console.log(`The Packers Defense is now ${packersDefense}`)

let bearsHailMary = true; 

if(bearsHailMary){
    packersDefense -= 45
    console.log('The Bears Score a touchdown')
} else {
    console.log('The Bears Punt')
}

// for(let i = 0; i < 5; i++){
//     packersDefense -= (bearsOffense)
//     console.log(`The Packers Defense is now ${packersDefense}`)
// }

// for(let i = 0; i < 5; i++){
//     if(packersDefense <= 0){
//         console.log('The Bears score a touchdown!')
//     } else {
//         packersDefense -= (bearsOffense)
//         console.log(`The Packers Defense is now ${packersDefense}`)
//     }
// }

while(packersDefense > 0){
    packersDefense -= bearsOffense
    console.log(`The Packers Defense is now ${packersDefense}`)
    if(packersDefense <= 0){
        console.log('Packers give up a touchdown')
    }
}