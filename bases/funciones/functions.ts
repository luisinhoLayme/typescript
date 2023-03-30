(() => {

  const hero: string = 'Flash';

  function returnName():string {
    return hero;
  }

  const activateBatisegnal = ():string => {
    return 'Bati acivada!';
  }

  console.log(typeof activateBatisegnal)

  const heroName = returnName();

})()
