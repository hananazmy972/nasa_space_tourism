var quiz = [
    {
      question: "Is extreme heat preferable to extreme cold?",
      yes: "Venus",
      no: "Uranus"
    },
    {
      question: "Is a planet with a vibrant and colorful appearance more attractive to you?",
      yes: "Neptune",
      no: "Mercury"
    },
    {
      question: "Would you like to visit a planet with multiple moons?",
      yes: "Saturn",
      no: "Mercury"
    },
    {
      question: "Do you prefer a planet with a higher level of surface gravity than Earth's?",
      yes: "Jupiter",
      no: "Mars"
    },
    {
      question: "Is a planet with unique geological features and landscapes appealing to you?",
      yes: "Saturn",
      no: "Uranus"
    },
    {
        question: "Do you prefer a planet with a solid surface?",
        yes: "Mercury",
        no: "Saturn"
      },
      {
        question: "Do you prefer a planet with a thin atmosphere?",
        yes: "Mars",
        no: "Venus"
      },
      {question: "Would you like to visit a planet with visible rings?",
        yes: " Saturn",
        no: "Neptune"
      },
      {
        question: "Is a planet with a dense atmosphere appealing to you?",
        yes: "Jupiter",
        no: "Mars"
      },
      {
        question: "Do you prefer a planet with a longer day than Earth's 24 hours?",
        yes: "Venus",
        no: "Mercury"
      }
      ,{
        question: "Is a planet with active volcanic activity intriguing to you? ",
        yes: "Jupiter",
        no: "Saturn"
      },{
        question: "Would you like to visit a planet with a high possibility of liquid water?",
        yes: "Mars",
        no: "Mercury"
      },{
        question:"Do you prefer a planet with a lower gravitational pull than Earth's?",
        yes: "Mars",
        no: "Jupiter"
      },
      {
        question: "Are you interested in exploring a planet known for its icy terrain and subsurface ocean?",
        yes: "Jupiter",
        no: "Mercury"
      },{
        question: "Would you like to visit a planet with a complex system of planetary rings?",
        yes: "Uranus",
        no: "Neptune"
      },{
        question: "Do you prefer a planet with a relatively moderate climate compared to extreme temperature variations?",
        yes: "Venus",
        no: "Saturn"
      },{
        question: "Do you prefer a planet that has earth veiw and not far from earth?",
        yes: "Venus",
        no: "Neptune"
      }


  ];
  
  var points = {
    Mercury: 0,
    Venus: 0,
    Mars: 0,
    Jupiter: 0,
    Saturn: 0,
    Uranus: 0,
    Neptune: 0,
  
  };
  
  var currentQuestion = 0;
  
  function answer(choice) {
    if (choice === "yes") {
      points[quiz[currentQuestion].yes]++;
    } else {
      points[quiz[currentQuestion].no]++;
    }
  
  // Function to display the result image
  function displayResultImage(planetName) {
    const imageContainer = document.getElementById("result-image");
    const image = document.createElement("img");
    image.src = planetName.toLowerCase() + ".jpg";
    image.alt = planetName;
  
    image.style.maxWidth = "50%";
    image.style.display = "block";
    image.style.margin = "0 auto";
  
    imageContainer.appendChild(image);
  }
    currentQuestion++;
  
    if (currentQuestion < quiz.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showQuestion() {
    var questionContainer = document.getElementById("question");
    questionContainer.innerHTML = quiz[currentQuestion].question;
  } function showResult() {
    var resultContainer = document.getElementById("result");
    resultContainer.style.display = "block";

    var destinationContainer = document.getElementById("destination");
    var maxPoints = 0;
    var destination = "";

    for (var planet in points) {
        if (points.hasOwnProperty(planet) && points[planet] > maxPoints) {
            maxPoints = points[planet];
            destination = planet;
        }
    }

    destinationContainer.innerHTML = destination;

    var planetImage = document.getElementById("planet-image");

    switch (destination) {
        case "Mercury":
            planetImage.src = "../images/quiz/mer.jpg";
            document.getElementById("planet-description").innerHTML = "Mercury is the smallest planet in our solar system It is the closest planet to the sun. It makes one trip around the Sun once every 87.969 days.";
            break;
        case "Venus":
            planetImage.src = "../images/quiz/ven.jpg";
            document.getElementById("planet-description").innerHTML = "Venus is the second planet from the sun and is often referred to as Earth's sister planet due to their similar size and composition.";
            break;
        case "Mars":
   planetImage.src = "../images/quiz/mars.jpg";
            document.getElementById("planet-description").innerHTML = "Mars is the fourth planet from the sun and is often referred to as the Red Planet due to its reddish appearance in the night sky.";
            break;
        case "Jupiter":
            planetImage.src = "../images/quiz/jup.jpg";
            document.getElementById("planet-description").innerHTML = "Jupiter is the largest planet in our solar system and has a unique atmosphere that contains colorful bands of clouds and raging storms, including the famous Great Red Spot.";
            break;
        case "Saturn":
            planetImage.src = "../images/quiz/sat.jpg";
            document.getElementById("planet-description").innerHTML = "Saturn is known for its beautiful rings, which are made up of ice particles, rocks, and dust.";
            break;
        case "Uranus":
            planetImage.src = "../images/quiz/ura.jpg";
            document.getElementById("planet-description").innerHTML = "Uranus is an ice giant and is unique among all planets in our solar system because it rotates on its side.";
            break;
        case "Neptune":
            planetImage.src = "N../images/quiz/nep.jpg";
            document.getElementById("planet-description").innerHTML = "Neptune is an ice giant and has a unique atmosphere that contains high-speed winds that can reach up to 1,200 miles per hour.";
            break;
        default:
            planetImage.src = "";
    }

    if (destination !== "") {
        planetImage.style.display = "block";
}
}
 showQuestion();