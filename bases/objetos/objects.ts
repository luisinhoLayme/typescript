(() => {

  let flash: { name: string, ege?: number, powers: string[], getName?: ()=>string } = {
    name: 'Barry Allen',
    ege: 22,
    powers: ['Super velocidad', 'Viajar en el tiempo']
  }

  let superman: { name: string, ege?: number, powers: string[], getName?: ()=>string } = {
    name: 'Clark Kent',
    ege: 88,
    powers: ['Super velocidad', 'Viajar en el tiempo']
  }



  // flash = {
  //   name: 'Clark Kent',
  //   // ege: 88,
  //   powers: ['Super fuerza'],
  //   getName() {
  //     return this.name;
  //   }
  // }

  // console.log( flash.getName?.());


})()
