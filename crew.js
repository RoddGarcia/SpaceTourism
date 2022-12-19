const infos = [
  {
    id: "0",
    role: "Commander",
    name: "Douglas Hurley",
    function:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    img: "./imgs/crewPhotos/douglasHurley.png"
  },
  {
    id: "1",
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    function:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    img: "./imgs/crewPhotos/markShuttleworth.png"
  },
  {
    id: "2",
    role: "Pilot",
    name: "Victor Glover",
    function:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    img: "./imgs/crewPhotos/victorGlover.png"
  },
  {
    id: "3",
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    function:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    img: "./imgs/crewPhotos/anoushehAnsari.png"
  }
];

const objStringfy = JSON.stringify(infos);
const data = JSON.parse(objStringfy);

function pageDefiner(x) {
  document.getElementById("personRole").innerHTML = `<p>${data[x].role}</p>`;
  document.getElementById("personName").innerHTML = `<p>${data[x].name}</p>`;
  document.getElementById(
    "personFunction"
  ).innerHTML = `<p>${data[x].function}</p>`;
  document.getElementById(
    "personImage"
  ).innerHTML = `<img src="${data[x].img}">`;
}
