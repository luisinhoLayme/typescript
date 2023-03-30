(() => {

  let avenger: any = 123;
  let exists;
  let power;

  avenger = 'Dr Strange';
  // console.log( avenger.charAt(0) )

  // asiendo casteo as
  console.log( (avenger as string).charAt(0) )

  avenger = 1233.78789;
  // asiendo casteo <number>
  console.log( <number>avenger.toFixed(2) )

  console.log(exists)
  console.log(power)

})()
