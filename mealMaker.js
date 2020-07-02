const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(myAppetizers) {
    this._courses.appetizers = myAppetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(myMains) {
    this._courses.mains = myMains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(myDesserts) {
    this._courses.desserts = myDesserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizers = this.getRandomDishFromCourse("appetizers");
    const mains = this.getRandomDishFromCourse("mains");
    const desserts = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizers.price + mains.price + desserts.price;
    return ` Your meal is ${appetizers.name}, ${mains.name}, 
       and ${desserts.name}, ... The price is ${totalPrice} `;
  },
};
menu.addDishToCourse("appetizers", "Salad", 12);
menu.addDishToCourse("appetizers", "wings", 8);
menu.addDishToCourse("appetizers", "fries", 5);

menu.addDishToCourse("mains", "rice", 12);
menu.addDishToCourse("mains", "sandwitch", 8);
menu.addDishToCourse("mains", "steak", 5);

menu.addDishToCourse("desserts", "sweet", 12);
menu.addDishToCourse("desserts", "juice", 8);
menu.addDishToCourse("desserts", "sandesh", 5);

let meal = menu.generateRandomMeal();
console.log(meal);
