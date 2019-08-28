// alert('signup');

$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var usernameInput = $("input#reg-username-input");
    var passwordInput = $("input#reg-password-input");
    var firstnameInput = $("input#fname-input");
    var lastnameInput = $("input#lname-input");
    var jobtitleInput = $("input#jobtitle-input");

    // When the signup button is clicked, we validate the username and password are not blank
    signUpForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            first_name: firstnameInput.val().trim(),
            last_name: lastnameInput.val().trim(),
            job_title: jobtitleInput.val().trim(),
            username: usernameInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.username|| !userData.password) {
            return;
        }
        // If we have an username and password, run the signUpUser function
        signUpUser(userData.first_name, userData.last_name, userData.job_title, userData.username, userData.password);
        usernameInput.val("");
        passwordInput.val("");
        firstnameInput.val("");
        lastnameInput.val("");
        jobtitleInput.val("");
    });
    
        // Does a post to the signup route. If succesful, we are redirected to the home page
        // Otherwise we log any errors
        function signUpUser(first_name, last_name, job_title, username, password, createdAt) {
            $.post("/api/signup", {
                first_name: first_name,
                last_name: last_name,
                job_title: job_title,
                username: username,
                password: password,
                createdAt: createdAt
            }).then(function(data) {
                window.location.replace(data);
                // If there's an error, handle it by throwing up a boostrap alert
            }).catch(handleLoginErr);
        }
    
        function handleLoginErr(err) {
            $("#alert .msg").text(err.responseJSON);
            $("#alert").fadeIn(500);
        }
});