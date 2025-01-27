import { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import { FormProps } from '../models/models';

const FormComp: React.FC<FormProps> = (props) => {
  const [data, setData] = useState(props.initialData);

  return (
    <JsonForms
      schema={props.schema}
      uischema={props.uischema}
      data={data}
      renderers={materialRenderers}
      cells={materialCells}
      onChange={({ data }) => setData(data)}
    />
  )
}

export default FormComp
