function bonusSystem(commands) {

    const studentsCount = Number(commands.shift());
    const lecturesCount = Number(commands.shift());
    const additionalBonus = Number(commands.shift());

    let maxBonus = 0;
    let hisAttendances = 0;

    for (let i = 0; i < studentsCount; i++) {
        const attendances = Number(commands[i]);
        const totalBonus = attendances / lecturesCount * (5 + additionalBonus);

        if (maxBonus < totalBonus) {
            maxBonus = totalBonus;
            hisAttendances = attendances;
        }

    };

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${hisAttendances} lectures.`);
}
bonusSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]
);