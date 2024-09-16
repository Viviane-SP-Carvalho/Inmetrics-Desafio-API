const { faker } = require('@faker-js/faker');

export const createFakeUser = () => {
  return  {
    accountType: "USER",
    address: "string",
    allowOffersPromotion: true,
    aobUser: true,
    cityName: "string",
    country: "AUSTRALIA_AU",
    email: (faker.internet.email()).toLowerCase(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    loginName: faker.person.firstName(),
    password: "Fu12345678",
    phone: faker.phone.number({ style: 'national' }),
    stateProvince: "string",
    zipcode: "string"  
  };
}