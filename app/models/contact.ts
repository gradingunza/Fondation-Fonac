import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'


export default class Contact extends BaseModel {
  @column({ isPrimary: true })
  public id !: number

  @column()
  public name !: string

  @column()
  public email !: string

  @column()
  public message !: string

  @column.dateTime({ autoCreate: true })
  public createdAt !: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt !: DateTime
}