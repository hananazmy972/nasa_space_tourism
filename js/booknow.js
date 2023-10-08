document.getElementById("book-now").addEventListener("click", function(event){
    event.preventDefault();
    if (document.getElementById("name").value && document.getElementById("birthday").value && document.getElementById("country").value && document.getElementById("email").value && document.getElementById("planet").value && document.getElementById("agree").checked) {
      alert("Successfully registered!, we'll send you payment details via email.");
    } else {
      alert("Please fill out all required fields.");
    }
  });