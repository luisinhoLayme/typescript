(() => {

  type Avenger = {
    name: string,
    weapon: string
  }

  const ironman: Avenger = {
    name: 'Ironman',
    weapon: 'Armorsuit'
  }
  const capitanAmerica: Avenger = {
    name: 'Capitan America',
    weapon: 'escudo'
  }
  const thor: Avenger = {
    name: 'Thor',
    weapon: 'Mojlnir'
  }

  const avengers: Avenger[] = [ironman, capitanAmerica, thor];

  for (const avenger of avengers) {
    // console.log(avenger.name, avenger.weapon);

  }

})()
