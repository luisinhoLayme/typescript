(() => {

  // Funciones Basicas
  function sumar (a:number, b:number):number {
    return a + b;
  }

  const contar = ( heroes:string[] ):number => {
    return heroes.length;
  }

  var superHeroes: string[] = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
  contar(superHeroes);

  // Parametros por defecto
  const llamarBatman = ( llamar:boolean = false ) => {
    if( llamar ) {
      console.log('Batiseñal activada');
    }
  }
  llamarBatman()

  //Rest
  const unirHeroes = (...personas:string[]): string => {
    return personas.join(', ');
  }

  //Tipo funcion
  const noHaceNada = (numero:number, texto:string, booleano:boolean, arreglo:string[]):void => {}

  //Crear el tipo de funcion que acepte la funcion 'noHaceNada'
  var noHaceNadaTampoco: (n:number, s:string, b:boolean, a:string[]) => void;

  noHaceNadaTampoco = noHaceNada


})()
