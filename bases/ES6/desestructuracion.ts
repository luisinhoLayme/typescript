(() => {

  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  }

  const avengers: Avengers = {
    nick: 'Samul L. Jackson',
    ironman: 'Robert Downey Jr',
    vision: 'Pul Betany',
    activo: true,
    poder: 1222.33287
  }

  // const { poder, vision } = avengers;
  // console.log(poder.toFixed(2), vision.toUpperCase())
  const printAvenger = ({ ironman, ...resto }: Avengers) => {
    console.log(ironman, resto)
  }
  // printAvenger(avengers)

  const avengersArr: [string, boolean, number] = ['Luis', false, 222];

  const [ capitan, ironmam, ] = avengersArr;
  // console.log({ ironmam, capitan });


})()
