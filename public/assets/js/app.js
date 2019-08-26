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
        task: `fix Curiosity's ${a}`,
        user_id: 1
    };

    console.log(brokenThing);

    $.ajax('/api/todo', {
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