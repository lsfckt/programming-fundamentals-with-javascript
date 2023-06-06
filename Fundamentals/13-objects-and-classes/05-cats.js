function cats(array) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow `);
        }
    }

    for (const index of array) {
        let info = index.split(' ');

        let name = info[0];
        let age = Number(info[1]);

        let cat = new Cat(name, age)

        cat.meow();
    }
}
cats(['Mellow 2', 'Tom 5']);