import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
    public async home ({view}:HttpContext){
        return view.render('pages/home')
    }
}