const infos = [
  {
    id: "0",
    name: "MOON",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    img: "./imgs/destinationPhotos/Moon.png",
    distance: "384,400 KM",
    time: "3 DAYS"
  },
  {
    id: "1",
    name: "MARS",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    img: "./imgs/destinationPhotos/Mars.png",
    distance: "225 MIL. KM",
    time: "9 MONTHS"
  },
  {
    id: "2",
    name: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    img: "./imgs/destinationPhotos/Europa.png",
    distance: "628 MIL. KM",
    time: "3 YEARS"
  },
  {
    id: "3",
    name: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    img: "./imgs/destinationPhotos/Titan.png",
    distance: "1.6 BIL. KM",
    time: "7 YEARS"
  }
];

const objStringfy = JSON.stringify(infos);
const data = JSON.parse(objStringfy);

function pageDefiner2(x) {
  document.getElementById("name").innerHTML = `<p>${data[x].name}</p>`;
  document.getElementById(
    "description"
  ).innerHTML = `<p>${data[x].description}</p>`;
  document.getElementById("image").innerHTML = `<img src="${data[x].img}">`;
  document.getElementById("distance").innerHTML = `<p>${data[x].distance}</p>`;
  document.getElementById("time").innerHTML = `<p>${data[x].time}</p>`;
}

pageDefiner2(0);
