'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Supplier = use('App/Models/Supplier')

Route.on('/').render('welcome')
Route.get('/suppliers' , async () => {
  return await Supplier.all()
})
Route.get('/supplier_create', async () => {
  const row = new Supplier()
  row.name = 'Hiba'
  row.address = 'Khurshid'
  await row.save()
  return 'Supplier created!'
})
Route.get('/supplier_update/:id', async ({ params }) => {
  const id = params.id
  const row = await Supplier.find(id)
  row.name = 'Mama'
  row.address = 'Mia'
  await row.save();
  return 'Supplier updated!'
})
Route.get('/supplier_delete', async () => {
  const row = await Supplier.find(3)
  await row.delete()
  return 'Supplier deleted!'
})