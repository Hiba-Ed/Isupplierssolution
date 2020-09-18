'use strict'

/*
|--------------------------------------------------------------------------
| SupplierSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class SupplierSeeder {
  async run () {
    await Database.from('suppliers_info').insert({
      name: 'Century Shop',
      address: '21 Pine Street, New York',
    })
    await Database.from('suppliers_info').insert({
      name: 'Hall Center',
      address: '22 King Street, Jersey',
    })
  }
}

module.exports = SupplierSeeder
