class Car {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    displayCarInfo(): void {
      console.log(`${this.make} ${this.model} (${this.year})`);
    }
  }
  const myCar = new Car("Toyota", "Camry", 2022);
myCar.displayCarInfo(); // Output: Toyota Camry (2022)
