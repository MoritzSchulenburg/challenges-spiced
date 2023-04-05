function getAnimal(animal) {
  if (animal === "cats") {
    return "I totally love cats!";
  } else if (animal === "dogs") {
    return `I like dogs!`;
  } else {
    return "I do not like animals at all!";
  }
}
console.log(getAnimal("cats"));
console.log(getAnimal("dogs"));
console.log(getAnimal("lion"));
console.log(getAnimal());
