interface Bird {
  type: "bird";
  fyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;

  switch (animal.type) {
    case "bird":
      speed = animal.fyingSpeed;
      break;

    case "horse":
      speed = animal.runningSpeed;
      break;
    default:
      break;
  }

  console.log("Moving at speed... " + speed);
}

moveAnimal({ type: "bird", fyingSpeed: 2000 });
moveAnimal({ type: "horse", runningSpeed: 3000 });
