import type { HttpContext } from '@adonisjs/core/http'
import Contact from '#models/contact'
import { contactValidator } from '#validators/contact'

export default class ContactsController {
  public async store({ request, response, session }: HttpContext) {
    try {
      console.log('📨 Début de la réception du formulaire de contact')
      
      const data = await request.validateUsing(contactValidator)
      console.log('✅ Données validées avec succès:', data)
      
      await Contact.create(data)
      console.log('💾 Contact sauvegardé en base de données')

      session.flash('success', 'Message envoyé avec succès!')
      return response.redirect().toRoute('home')

    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi du message:', error)
      
      // Gestion spécifique des erreurs de validation
      if (error.messages) {
        console.log('📋 Erreurs de validation:', error.messages)
        // Stocker les données soumises pour pré-remplir le formulaire
        session.flashAll()
        // Stocker les erreurs de validation
        session.flash('errors', error.messages)
        // Stocker les anciennes valeurs pour les réafficher
        session.flash('old', request.all())
      }
      
      return response.redirect().back()
    }
  }
}