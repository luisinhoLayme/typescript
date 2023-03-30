(() => {

  type Hero = {
    name: string;
    ege?: number;
    powers: number[];
    getName?: () => string
  }

  let myCustomVariable:(string | number | Hero) = 'Luisinho';
  console.log(typeof myCustomVariable);

  myCustomVariable = 20;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: 'Bruce',
    ege: 43,
    powers: [1]
  }
  console.log(typeof myCustomVariable);
  console.log(myCustomVariable);

})()
