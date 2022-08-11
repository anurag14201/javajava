function animalCount(miles) {
    animalDensityFirst10Miles = 10;
    animalDensitySecound10Miles = 50;
    if (miles <= 10) {
        const count = miles * animalDensityFirst10Miles;
        return count;
    }
    else if (miles <= 20) {
        const firstDensemAnimal = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10;
        const secoundDenseAnimal = restMiles * animalDensitySecound10Miles;
        const totalAnimals = firstDensemAnimal + secoundDenseAnimal;
        return totalAnimals;
    }
}
const animalWatch = animalCount(13);
console.log(animalWatch);