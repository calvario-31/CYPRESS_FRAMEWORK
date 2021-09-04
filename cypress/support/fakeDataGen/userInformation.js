import faker from 'faker'

export const userInformation = {
    "firstname": faker.name.firstName(),
    "lastname": faker.name.lastName(),
    "zipcode": faker.address.zipCode()
}