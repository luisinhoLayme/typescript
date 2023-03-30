(() => {

  type Hero = {
    name: string;
    ege?: number;
    powers: string[];
    getName?: () => string
  }

  let flash: Hero = {
    name: 'Barry Allen',
    ege: 22,
    powers: ['Super velocidad', 'Viajar en el tiempo']
  }

  let superman: Hero = {
    name: 'Clark Kent',
    ege: 88,
    powers: ['Super velocidad', 'Viajar en el tiempo'],
    getName() {
      return this.name
    }
  }

})()
