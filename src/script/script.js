const planets = [
  {
    name: "Mercury",
    size: 50,
    color: "#b0b0b0",
    fact: "Smallest planet with extreme temperature variations.",
    mass: "0.33 × 10²⁴ kg",
    distance: "57.9 million km",
    orbit: "88 Earth days",
  },
  {
    name: "Venus",
    size: 120,
    color: "#d4a373",
    fact: "Hottest planet with a toxic, thick atmosphere.",
    mass: "4.87 × 10²⁴ kg",
    distance: "108.2 million km",
    orbit: "225 Earth days",
  },
  {
    name: "Earth",
    size: 130,
    color: "#2c92d7",
    fact: "Only known planet to support complex life.",
    mass: "5.97 × 10²⁴ kg",
    distance: "149.6 million km",
    orbit: "365.25 days",
  },
  {
    name: "Mars",
    size: 80,
    color: "#c1440e",
    fact: "Home to the largest volcano, Olympus Mons.",
    mass: "0.64 × 10²⁴ kg",
    distance: "227.9 million km",
    orbit: "687 Earth days",
  },
  {
    name: "Jupiter",
    size: 300,
    color: "#d49a6a",
    fact: "Largest planet with a massive storm system.",
    mass: "1,898 × 10²⁴ kg",
    distance: "778.3 million km",
    orbit: "11.86 Earth years",
  },
  {
    name: "Saturn",
    size: 250,
    color: "#f3d19c",
    fact: "Known for its spectacular ring system.",
    mass: "568 × 10²⁴ kg",
    distance: "1.43 billion km",
    orbit: "29.46 Earth years",
  },
  {
    name: "Uranus",
    size: 200,
    color: "#78c4d4",
    fact: "Tilted on its side, rotating perpendicular to orbit.",
    mass: "86.8 × 10²⁴ kg",
    distance: "2.87 billion km",
    orbit: "84 Earth years",
  },
  {
    name: "Neptune",
    size: 190,
    color: "#2f3bd1",
    fact: "Windiest planet with speeds up to 2,100 km/h.",
    mass: "102 × 10²⁴ kg",
    distance: "4.50 billion km",
    orbit: "164.79 Earth years",
  },
];

const slider = document.getElementById("planetSlider");
const planet1 = document.getElementById("planet1");
const planet2 = document.getElementById("planet2");
const planetName = document.getElementById("planetName");
const planetFact = document.getElementById("planetFact");
const planetMass = document.getElementById("planetMass");
const planetDistance = document.getElementById("planetDistance");
const planetOrbit = document.getElementById("planetOrbit");

function updatePlanets(index) {
  const selectedPlanet = planets[index - 1];
  const earth = planets[2];

  // Update Planet 1
  planet1.style.width = `${selectedPlanet.size}px`;
  planet1.style.height = `${selectedPlanet.size}px`;
  planet1.style.background = selectedPlanet.color;
  planet1.innerHTML = `<span class="planet-label">${selectedPlanet.name}</span>`;

  // Update Planet 2 (Earth)
  planet2.style.width = `${earth.size}px`;
  planet2.style.height = `${earth.size}px`;
  planet2.style.background = earth.color;
  planet2.innerHTML = `<span class="planet-label">Earth</span>`;

  // Update Information
  planetName.textContent = selectedPlanet.name;
  planetFact.textContent = selectedPlanet.fact;
  planetMass.textContent = selectedPlanet.mass;
  planetDistance.textContent = selectedPlanet.distance;
  planetOrbit.textContent = selectedPlanet.orbit;
}

slider.addEventListener("input", (e) => {
  updatePlanets(parseInt(e.target.value));
});

// Initialize
updatePlanets(1);
