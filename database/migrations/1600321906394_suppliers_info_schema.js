'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SuppliersInfoSchema extends Schema {
  async up () {
    const exists = await this.hasTable('suppliers_info')
    if(!exists){
      this.create('suppliers_info', (table) => {
        table.increments('id')
        table.string('name', 100)
        table.string('address', 255)
      })
    }
  }

  async down () {
    const exists = await this.hasTable('suppliers_info')
    if(exists){
      this.drop('suppliers_info')
    }
  }
}

module.exports = SuppliersInfoSchema