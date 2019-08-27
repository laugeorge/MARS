$(document).ready(function() {
    setTimeout(function() {
      $('.alpha').addClass('in');
    },1000)
  })

  // sign in 

  function openFormSignIn() {
    document.getElementById("myFormSignIn").style.display = "block";
  }

  
  function closeFormSignIn() {
    document.getElementById("myFormSignIn").style.display = "none";
  }


  function openFormSignUp() {
    document.getElementById("myFormSignUp").style.display = "block";
  }

  
  function closeFormSignUp() {
    document.getElementById("myFormSignUp").style.display = "none";
  }