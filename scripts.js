class Human {
	constructor(name, gender) {
		this.name = name;
		this.gender = gender;
	}
}

class Apartment {
	humanArr = [];

	addHuman(human) {
		this.humanArr.push(human);
	}
}

class House {
	apartmentArr = [];

	constructor(apartmentsCount) {
		this.apartmentsCount = apartmentsCount;
	}

	addApartment(apartment) {
		if (this.apartmentsCount > this.apartmentArr.length) {
			this.apartmentArr.push(apartment);
		} else {
			console.log("Error");
		}
	}
}

const human1 = new Human("John", "Male");
const human2 = new Human("Sam", "Male");
const human3 = new Human("Hanna", "Female");
const human4 = new Human("Sophia", "Female");
const human5 = new Human("Robert", "Male");

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

const house = new House(3);

// Add humans to apartment1
apartment1.addHuman(human1);
apartment1.addHuman(human2);
apartment1.addHuman(human4);

// Add humans to apartment2
apartment2.addHuman(human2);
apartment2.addHuman(human1);

// Add humans to apartment3
apartment3.addHuman(human3);
apartment3.addHuman(human5);

// Add apartments to house
house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3);

// Show apartmant count in house
console.log(house.apartmentArr);
