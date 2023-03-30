(() => {

  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number):string;
  }
  // You are at vidio 5, Interfaces para las funciones.

  interface Human {
    ege: number;
  }

  class Mutant implements Xmen, Human {
    // esto no funcio investigar
    // public ege: number;
    // public name: string;
    // public realName: string;

    // esto si funciono xd nab jajaj :)
    constructor(
      public ege: number,
      public name: string,
      public realName: string,
    ) {}

    mutantPower(id: number) {
      return this.name;
    }
  }

})()
