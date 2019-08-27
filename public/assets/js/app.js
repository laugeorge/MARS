// ! BE SURE TO MERGE WITHOUT OVERLAPPING
// Kim starts at 51, Pooja at 85
















































// // ==================================== KIM'S CODE ============================================//

// // *              ------------------- CURIOSITY CODE ------------------------                  //

// var curiosity = ['Mast Camera', 'Chemistry and Camera complex', 'Navigation cameras', 'Antenne UHF', 'RTG', 'Rover Environmental Monitoring Station', 'Hazard avoidance cameras', 'Antenne gran gain', 'Dynamic Albedo of Neutrons', 'Radiation assessment detector', 'Sample Analysis at Mars', 'Dust Removal Tool', 'Chemistry and Mineralogy Spectrometer', 'Mars Hand Lens Imager', 'Alpha Particle X-ray Spectrometer', 'Mars Descent Imager', 'Robotic arm'];

// // pick a random thing to break
// function randRange(rover) {
//     var whatsBroken = rover[Math.floor(rover.length * Math.random())];
//     return whatsBroken;
// }

// function addToList() {
//     var a = randRange(curiosity);

//     var brokenThing = {
//         task: `fix Curiosity's ${a}`,
//         id: 1
//     };

//     console.log(brokenThing);

//     $.ajax('/api/todo', {
//         type: 'POST',
//         data: brokenThing
//     }).then(
//         function() {
//             console.log('created new todo');
//             location.reload();
//         }
//     )

//     setTimeout(addToList, 10000);
// }

// addToList();

// // -------------------------------------------------------- //

// *     ------------ CHAT APP ---------------   //

$.get('/api/chats',function(chatData){
    for(var i=0; i<chatData; i++){
        $('#chats').append('<p><b>'+chatData[i].full_name+'</b> <small><i>'+chatData[i].time+'</i></small></p> <p>'+chatData[i].message+'</p>');
    };
});


// ================================== POOJA CODE =============================================//

//* Display NASA Pic of the Day
var url = "https://api.nasa.gov/planetary/apod?api_key=wubu1AknV9GHmkasgZcqPrAx1T6mI7G3bq9DNbqh";


$.ajax({
    url: url,
    success: function(result){
    if("copyright" in result) {
            $("#copyright").text("Image Credits: " + result.copyright);
    }
    else {
            $("#copyright").text("Image Credits: " + "Public Domain");
    }
    
    if(result.media_type == "video") {
            $("#apod_img_id").css("display", "none"); 
            $("#apod_vid_id").attr("src", result.url);
    }
    else {
            $("#apod_vid_id").css("display", "none"); 
            $("#apod_img_id").attr("src", result.url);
    }
    $("#reqObject").text(url);
    $("#returnObject").text(JSON.stringify(result, null, 4));  
    $("#apod_explaination").text(result.explanation);
    $("#apod_title").text(result.title);

    console.log ( result.url);
    $('#apod_img_id').css('background-image', `url(${result.url})`);

    }

});