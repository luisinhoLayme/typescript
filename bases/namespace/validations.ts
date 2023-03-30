
namespace Validations {

  export const validateText = (text: string): boolean => {
    return (text.length > 3) ? true : false;
  }

  export const validateDate = (myDate: Date):boolean => {
    return (isNaN(myDate.valueOf()))
      ? false
      : true;
  }

}

// You are at video 2, Inicio de proyecto de módulos y webpack

console.log(Validations.validateText('Lui'));
