const hobbiesArray = [
    { name: 'volleyball', lengthInYearsAtHobby: 25 },
    { name: 'cooking', lengthInYearsAtHobby: 15 },
    { name: 'swimming', lengthInYearsAtHobby: 11 }
];


function printHobbyInfo(hobby) {
    console.log(` ${hobby.name} has been an interest for ${hobby.lengthInYearsAtHobby} years`)
}

for (let hobby of hobbies) {
    printHobbyInfo(hobby);
}
