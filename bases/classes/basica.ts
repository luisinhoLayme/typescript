(() => {

  class Avenger {

    // private name: string;
    // private team: string;
    // public realName?: string;
    static avgAge: number = 35;
    // los static solo pueden se acedidas utiliando la clase, no meniante instancias de la misma
    static getAvgAge() {
      return this.name;
    }

    constructor(
      private name: string,
      private team: string,
      public realName?: string,
    ) { }

    public bio() {
      return `${ this.name } (${this.team})`
    }

  }

  // const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
  // console.log( antman );

  // console.log( Avenger.getAvgAge() )

})()
