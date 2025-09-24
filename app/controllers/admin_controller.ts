import type { HttpContext } from '@adonisjs/core/http'
import Contact from '#models/contact'

export default class AdminController {

  public async index({ view }: HttpContext) {
    // Récupérer tous les messages (les plus récents en premier)
    const messages = await Contact.query().orderBy('created_at', 'desc')

    // Envoyer les messages à la vue Edge
    return view.render('pages/messages', { messages })
  }
}
