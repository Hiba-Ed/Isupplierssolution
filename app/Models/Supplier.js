'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Supplier extends Model {
  static get table() {
    return 'suppliers_info' 
  }
  static get createdAtColumn() { 
    return false
  }
  static get updatedAtColumn() { 
    return false
  }
}

module.exports = Supplier