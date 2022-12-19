const infos = [
  {
    id: "0",
    name: "",
    description: "",
    img: ""
  },
  {
    id: "1",
    name: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usally to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 meters tall, it's quite an awe-inspiring sight on the launch pad!",
    img: "./imgs/technologyPhotos/launchvehicle.png"
  },
  {
    id: "2",
    name: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    img: "./imgs/technologyPhotos/spaceport.jpg"
  },
  {
    id: "3",
    name: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained. ",
    img: "./imgs/technologyPhotos/spacecapsule.png"
  }
];

const objStringfy = JSON.stringify(infos);
const data = JSON.parse(objStringfy);

function pageDefiner(x) {
  document.getElementById("TechName").innerHTML = `<p>${data[x].name}</p>`;
  document.getElementById(
    "TechDescription"
  ).innerHTML = `<p>${data[x].description}</p>`;
  document.getElementById("TechImage").innerHTML = `<img src="${data[x].img}">`;
}

let butaoEscolhido = undefined;

function escolher(nbutao) {
  if (butaoEscolhido != undefined) {
    document.getElementById(butaoEscolhido).classList.remove("btn_nota_ativa");
    console.log("foi");
  }
  butaoEscolhido = `button${nbutao}`;
  document.getElementById(butaoEscolhido).classList.add("btn_nota_ativa");
  console.log("foi");
}
