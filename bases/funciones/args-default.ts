(() => {

  const fullName = (firstName:string, lastName?:string, upper:boolean = false): string => {
    if(upper) {
      return `${ firstName } ${lastName || 'xd'}`.toUpperCase();
    } else {
      return `${ firstName } ${lastName || 'xd'}`;
    }
  }

  const name = fullName('Tony', 'Star', true);
  console.log( { name } );

})()
