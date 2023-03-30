(() => {

  interface Client {
    name: string;
    ege?: number;
    address: Address;
    getFullAddress(id: string):string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: 'Luisinho',
    ege: 25,
    address: {
      id: 123,
      zip: 'KH3 SUD',
      city: 'Ottawa'
    },
    getFullAddress(id: string) {
      return this.address.city
    }
  }

  const client2: Client = {
    name: 'Melisa',
    ege: 30,
    address: {
      city: 'Toronto',
      id: 233,
      zip: 'KD2 US2'
    },
    getFullAddress(id: string) {
      return this.address.city
    }
  }



})()
