(() => {

  class Avenger {
    constructor(
      public name: string,
      public realName: string,
    ) {
      // console.log('Constructor Avenger llamado!!');

    }
    protected getFullName() {
      return `${ this.name } ${ this.realName }`
    }
  }

  class Xmen extends Avenger {
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean
    ) {
      super(name, realName)
      // console.log('Constructor Xmen llamado!!');
    }

    get fullName() {
      return `${ this.name } - ${ this.realName }`
    }
    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error('El nombre debe de ser mayor a 3 letra');
      }
      this.name = name;
    }

    getFullNameDesdeXmen() {
      super.getFullName()
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan', true)
  wolverine.fullName = 'Luisinho'
  // console.log(wolverine.fullName);
  // wolverine.getFullNameDesdeXmen()


  const newAvenger = new Avenger('hola', 'jflsj')



})()
