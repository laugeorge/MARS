// ! BE SURE TO MERGE WITHOUT OVERLAPPING
// all code starts on 51
















































//! ================== KIM'S CODE =====================//

// *     ---------- SUCCESSFUL LOGIN -----------      //

$(document).ready(function() {
    // This file just does a GET request to figure out which user is logged in and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
        $('#mission-length').text(data.createdAt);
    });
});


// ================================================== //

// *     ---------- CURIOSITY CODE -------------     //

var curiosity = ['Mast Camera', 'Chemistry and Camera complex', 'Navigation cameras', 'Antenne UHF', 'RTG', 'Rover Environmental Monitoring Station', 'Hazard avoidance cameras', 'Antenne gran gain', 'Dynamic Albedo of Neutrons', 'Radiation assessment detector', 'Sample Analysis at Mars', 'Dust Removal Tool', 'Chemistry and Mineralogy Spectrometer', 'Mars Hand Lens Imager', 'Alpha Particle X-ray Spectrometer', 'Mars Descent Imager', 'Robotic arm'];

// pick a random thing to break
function randRange(rover) {
    var whatsBroken = rover[Math.floor(rover.length * Math.random())];
    return whatsBroken;
}

function randTime(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function addToList() {
    var a = randRange(curiosity);

    var brokenThing = {
        user_id: 1,
        task: `repair ${a}`
    };

    console.log(brokenThing);

    $.ajax('/api/todo', {
        type: 'POST',
        data: brokenThing
    }).then(
        function() {
            console.log('created new todo');
        }
    )

    setTimeout(addToList, randTime(50000, 150000));
}

addToList();

// =================================================== //

// *     ------------ CHAT APP ---------------   //

function getChats(){
    $.get('/api/chats',function(chats){
        for(var i=0; i<chats.length; i++){
            $('#chats').append('<p><b>'+chats[i].full_name+'</b> <small><i>'+chats[i].time+'</i></small></p> <p>'+chats[i].message+'</p><hr style="border: 1px dashed rgba(255, 0, 0, 0.4); margin-left: 10px; margin-right: 10px">');
        };

        $('#chats').append('<form class="form-inline">    <label class="sr-only" for="inlineFormInputName2">Message</label>    <input type="text" class="form-control mb-2 mr-sm-2 chat" id="inlineFormInputName2" placeholder="> Type Message"> <button type="button" class="btn btn-primary mb-2" id="chat-submit" onclick="submitChat()">Send Chat</button></form>')

    });
}

getChats();

function submitChat(){
    var newChat = {
        user_id: 4,
        message: $('.chat').val().trim()
    };

    console.log(newChat);

    $.ajax('/api/chat', {
        type: 'POST',
        data: newChat
    }).then(
        function(){
            console.log('created new chat');
        }
    )
};

//! ================== POOJA'S CODE ========================//

//* ----------- Display NASA Pic of the Day ------------//
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

// ==================================================== //