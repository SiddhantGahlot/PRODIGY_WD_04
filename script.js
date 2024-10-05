function expandPic() {
    var modal = document.getElementById("modal");
    var fullPic = document.getElementById("fullPic");
    var profilePic = document.getElementById("profile-pic");
    
    fullPic.src = profilePic.src;
    modal.style.display = "block";
  }
  
  function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  