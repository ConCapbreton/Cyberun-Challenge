import schema from '../schema/shema.json'
import uischema from '../uischema/uischema.json'

export interface DrawerProps {
  title: string,
  schema: typeof schema
  uischema: typeof uischema
  initialData: {
    "provideAddress": boolean,
    "vegetarian": boolean
  }
}

export interface FormProps {
  schema: typeof schema
  uischema: typeof uischema
  initialData: {
    "provideAddress": boolean,
    "vegetarian": boolean
  }
}