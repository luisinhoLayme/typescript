(() => {

  const fullName = (firstName:string, lastName?:string): string => {
    return `${ firstName } ${lastName || 'xd'}`;
  }

  const name = fullName('Tony');
  console.log( name );

})()
