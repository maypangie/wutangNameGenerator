
function generateWuTangName() {
  
    const options = {
      weather: ["Shadow", "Thunder", "Storm", "Silent"],
      animal: ["Tiger", "Dragon", "Hawk", "Wolf", "Panther"],
      music: ["Jazz", "Rock", "Groove", "Rhythm", "Hype"],
      time: ["Morning", "Twilight", "Midnight", "Dusk", "Dawn"],
      superpower: ["Phantom", "Specter", "Force", "Mystic", "Legend"]
    };
  
    // Get selected answers from the form
    const weather = document.getElementById("weather").value;
    const animal = document.getElementById("animal").value;
    const music = document.getElementById("music").value;
    const time = document.getElementById("time").value;
    const superpower = document.getElementById("superpower").value;
  
    // Create an array based on user answers
    const nameParts = [
      options.weather[Math.floor(Math.random() * options.weather.length)],
      options.animal[Math.floor(Math.random() * options.animal.length)],
      options.music[Math.floor(Math.random() * options.music.length)],
      options.time[Math.floor(Math.random() * options.time.length)],
      options.superpower[Math.floor(Math.random() * options.superpower.length)]
    ];
  
    // Select 2-3 random parts to form the final name
    const wuTangName = nameParts
      .sort(() => 0.5 - Math.random())  // Shuffle array
      .slice(0, 3)                      // Select first 3 elements
      .join(" ");
  
    // Display the generated Wu-Tang name
    document.getElementById("output").innerText = `Your Wu-Tang name is: ${wuTangName}`;
  }
  