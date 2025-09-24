/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const HomeController=()=>import('#controllers/home_controller');
const ContactController=()=>import('#controllers/contacts_controller');
const AdminController=()=>import('#controllers/admin_controller');


router.get('/',[HomeController, 'home']).as('home')
router.post('/home', [ContactController, 'store']).as('contact.store')
router.get('/messages', [AdminController, 'index']).as('admin')
