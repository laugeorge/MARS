// ! BE SURE TO MERGE WITHOUT OVERLAPPING
// Kim starts at 51
















































// curiosity rover parts
var curiosity = ['Mast Camera', 'Chemistry and Camera complex', 'Navigation cameras', 'Antenne UHF', 'RTG', 'Rover Environmental Monitoring Station', 'Hazard avoidance cameras', 'Antenne gran gain', 'Dynamic Albedo of Neutrons', 'Radiation assessment detector', 'Sample Analysis at Mars', 'Dust Removal Tool', 'Chemistry and Mineralogy Spectrometer', 'Mars Hand Lens Imager', 'Alpha Particle X-ray Spectrometer', 'Mars Descent Imager', 'Robotic arm'];

var broken = {
    task: randRange(rover),
    role_id: 1
};

// pick a random thing to break
function randRange(rover) {
    var whatsBroken = rover[Math.floor(rover.length * Math.random())];
    return whatsBroken;
}

function addToList() {
    var a = randRange(curiosity);

    if (broken.length>0){
        for(var i=0; i<broken.length; i++){
            if (broken[i] != a){
                broken.push(a);
            }
        }
    } else {
        broken.push(a);
    }
}

var interval = setInterval(function(){
    // method to be executed

}, 5000);


clearInterval(interval);
