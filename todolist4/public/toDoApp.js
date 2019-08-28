// BELOW CODE IS CRITICAL. IT HANDLES HOW FORM DATA IS SENT TO OUR SERVER

  // In this code below we create the Front-end JavaScript which "POSTS" our form data to our express server.
  // In essence, when the user hits submit, jQuery grabs all of the fields then sends a post request to our api
  // Our api recognizes the route (/api/tables)... and then runs the associated code (found in api-routes.js).
  // In this case the associated code "saves" the data to the table-data.js file or waitinglist-data.js file */}

  $(".submit").on("click", function(event) {
    event.preventDefault();

    // Here we grab the form elements
    // var newTask = {
    //   taskName: $("#task-name").val().trim(),
    //   personToPerform: $("#reserve-person").val().trim()

    // };
    
    const newTask = {
      
    }



    console.log(newTask);

    // This line is the magic. It"s very similar to the standard ajax function we used.
    // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
    // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
    // depending on if a tables is available or not.

    $.post("/api/tables", newTask,
      function(data) {

        // // If a table is available... tell user they are booked.
        // if (data) {
        //   alert("Yay! You are officially booked!");
        // }

        // // If a table is available... tell user they on the waiting list.
        // else {
        //   alert("Sorry you are on the wait list");
        // }

        // Clear the form when submitting
        $("#task-name").val("");
        $("#reserve-person").val("");
      });

  });

  // Update1 to get taskToDo
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
            $("<h3>").text("Task: " + tableData[i].taskName),
            $("<h4>").text("Name: " + tableData[i].personToPerform)

          );

          tableList.append(listItem);
        }
      });
  }

  // Update a function later to trash all tasks
  // This function resets all of the data in our tables. This is intended to let you restart a demo.
  function clearTable() {
  alert("Clearing...");

    // Clear the tables on the server and then empty the elements on the client
    $.ajax({ url: "/api/clear", method: "POST" }).then(function() {
      $("#waitList").empty();
      $("#tableList").empty();
    });
  }

  $("#clear").on("click", clearTable);


  // Run Queries!
  // ==========================================
  runTableQuery();