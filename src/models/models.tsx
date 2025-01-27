import schema from '../schema/schema.json'
import secondSchema from '../schema/secondSchema.json'
import uischema from '../uischema/uischema.json'
import secondUISchema from '../uischema/secondUISchema.json'

export interface DrawerProps {
  title: string,
  schema: typeof schema | typeof secondSchema
  uischema: typeof uischema | typeof secondUISchema
  initialData?: {
    "provideAddress": boolean,
    "vegetarian": boolean
  }
}

export interface FormProps {
  schema: typeof schema | typeof secondSchema
  uischema: typeof uischema
  initialData?: {
    "provideAddress": boolean,
    "vegetarian": boolean
  }
}