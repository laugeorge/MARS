// ! BE SURE TO MERGE WITHOUT OVERLAPPING
// Kim starts at 51
















































// curiosity rover parts
var curiosity = ['Mast Camera', 'Chemistry and Camera complex', 'Navigation cameras', 'Antenne UHF', 'RTG', 'Rover Environmental Monitoring Station', 'Hazard avoidance cameras', 'Antenne gran gain', 'Dynamic Albedo of Neutrons', 'Radiation assessment detector', 'Sample Analysis at Mars', 'Dust Removal Tool', 'Chemistry and Mineralogy Spectrometer', 'Mars Hand Lens Imager', 'Alpha Particle X-ray Spectrometer', 'Mars Descent Imager', 'Robotic arm'];

// pick a random thing to break
function randRange(rover) {
    var whatsBroken = rover[Math.floor(rover.length * Math.random())];
    return whatsBroken;
}

function addToList() {
    var a = randRange(curiosity);

    var brokenThing = {
<<<<<<< HEAD
        task: `fix Curiosity's ${a}`,
        id: 1
=======
        user_id: 1,
        task: `fix ${a}`
>>>>>>> 5123f90166c1a1c7d6760d8ed3c9758f5f5de03c
    };

    console.log(brokenThing);

<<<<<<< HEAD
    $.ajax('/api/todo', {
=======
    $.AJAX('/api/todo', {
>>>>>>> 5123f90166c1a1c7d6760d8ed3c9758f5f5de03c
        type: 'POST',
        data: brokenThing
    }).then(
        function() {
            console.log('created new todo');
            location.reload();
        }
    )

    setTimeout(addToList, 10000);
}

addToList();