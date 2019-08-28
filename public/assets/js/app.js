// ! BE SURE TO MERGE WITHOUT OVERLAPPING
// Kim starts at 51, Pooja at 85





// // ==================================== GEORGE'S CODE ============================================//

$(".submit").on("click", function(event) {
    event.preventDefault();

    if ($("#task-name").val() !== "") {
      // Here we grab the form elements

      //how to i put an If statement 
      // HOW DO I att the check uncheck 
      const newTask = {
        // taskName: $("#task-name").val().trim(),
        // personToPerform: $("#reserve-person").val().trim()
        user_id: $('#reserve-person').val().trim(),
        taskName: $('#task-name').val().trim()

      };

      console.log(newTask);

      // This line is the magic. It"s very similar to the standard ajax function we used.
      // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
      // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
      // depending on if a tables is available or not.

        $.post("/api/tables", newTask,
          function(data) {

            // Clear the form when submitting
            $("#task-name").val("");
            $("#reserve-person").val("");
          });
      
      //UPDATE1 Task to fade out
      $(document).on('dblclick','li', function(){
          $(this).toggleClass('strike').fadeOut('slow');    
        });
    } 
    else 
    alert ("Please enter task...")

  });

  $('#task-name').keyup(function() {

    var empty = false;
    $('#task-name').each(function() {
        if ($(this).val().length == 0) {
            empty = true;
        }
    });

    if (empty) {
        $('#submit-btn').attr('disabled', 'disabled');
    } else {
        $('#submit-btn').removeAttr('disabled');
    }
  });


  // Update1 to display taskToDo
  function runTableQuery() {
    // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
    $.ajax({ url: "/api/tables", method: "GET" })
      .then(function(tableData) {

        // Here we then log the tableData to console, where it will show up as an object.
        console.log(tableData);
        console.log("------------------------------------");

        // Loop through and display each of the customers
        for (var i = 0; i < tableData.length; i++) {

          // Get a reference to the tableList element and populate it with tables
          var tableList = $("#tableList");

          // Then display the fields in the HTML (Section Name, Date, URL)
          var listItem = $("<li class='list-group-item mt-4'>");

          listItem.append(
            $("<h3>").text("Table #" + (i + 1)),
            $("<hr>"),
            $("<h4>").text("Task: " + tableData[i].taskName),
            // $("<h4>").text("Name: " + tableData[i].personToPerform)
            $("<h4>").text("Name: " + tableData[i].user_id)

          );

          tableList.append(listItem);
        }
      });
  }

  // Update a function later to trash all tasks
  // This function resets all of the data in our tables. This is intended to let you restart a demo.
  function clearTable() {
  alert("Clearing task...");

    // Clear the tables on the server and then empty the elements on the client
    $.ajax({ url: "/api/clear", method: "POST" }).then(function() {
      $("#tableList").empty();
    });
  }

  $("#clear").on("click", clearTable);


  // Run Queries!
  // ==========================================
  runTableQuery();



















// // ==================================== KIM'S CODE ============================================//

// // *              ------------------- CURIOSITY CODE ------------------------                  //

//***************************** UPDATE FROM GEORGE *****************//
var curiosity = ['Mast Camera', 'Chemistry and Camera complex', 'Navigation cameras', 'Antenne UHF', 'RTG', 'Rover Environmental Monitoring Station', 'Hazard avoidance cameras', 'Antenne gran gain', 'Dynamic Albedo of Neutrons', 'Radiation assessment detector', 'Sample Analysis at Mars', 'Dust Removal Tool', 'Chemistry and Mineralogy Spectrometer', 'Mars Hand Lens Imager', 'Alpha Particle X-ray Spectrometer', 'Mars Descent Imager', 'Robotic arm'];

// pick a random thing to break
function randRange(rover) {
    var whatsBroken = rover[Math.floor(rover.length * Math.random())];
    return whatsBroken;
}


function addToList() {
    var a = randRange(curiosity);

//********* UPDATE FROM GEORGE: IS THIS user_id:1, not id:1 ********//
    var brokenThing = {
        taskName: `fix Curiosity's ${a}`,
        user_id: 1
    };

    console.log(brokenThing);

    $.ajax('/api/tables', {
        type: 'POST',
        data: brokenThing
    }).then(
        function() {
            console.log('created new todo');
            // location.reload();
        }
    )
    setTimeout(addToList, 60000);

}
addToList();

// ============================== UPDATE FROM GEORGE; KIMS CODE =======================//
// var curiosity = ['Mast Camera', 'Chemistry and Camera complex', 'Navigation cameras', 'Antenne UHF', 'RTG', 'Rover Environmental Monitoring Station', 'Hazard avoidance cameras', 'Antenne gran gain', 'Dynamic Albedo of Neutrons', 'Radiation assessment detector', 'Sample Analysis at Mars', 'Dust Removal Tool', 'Chemistry and Mineralogy Spectrometer', 'Mars Hand Lens Imager', 'Alpha Particle X-ray Spectrometer', 'Mars Descent Imager', 'Robotic arm'];

// // pick a random thing to break
// function randRange(rover) {
//     var whatsBroken = rover[Math.floor(rover.length * Math.random())];
//     return whatsBroken;
// }


// function addToList() {
//     var a = randRange(curiosity);

// ********* UPDATE FROM GEORGE: IS THIS user_id:1, not id:1 ********//
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

$.get('/api/chats',function(chats){
    for(var i=0; i<chats.length; i++){
        $('#chats').append('<p><b>'+chats[i].full_name+'</b> <small><i>'+chats[i].time+'</i></small></p> <p>'+chats[i].message+'</p><hr style="border: 1px dashed rgba(255, 0, 0, 0.4); margin-left: 10px; margin-right: 10px">');
    };

    $('#chats').append('<form class="form-inline">    <label class="sr-only" for="inlineFormInputName2">Message</label>    <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="> Type Message"> <button type="submit" class="btn btn-primary mb-2 chat-submit" onclick="submitChat()">Send Chat</button></form>')

});

function submitChat(){
    $('.chat-submit').on('click', function(event){

    });
};

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