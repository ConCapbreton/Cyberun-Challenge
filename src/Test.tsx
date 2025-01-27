//https://jsonforms.io/faq/
//Shows how to make a custom renderer

import { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
//import { vanillaCells } from '@jsonforms/vanilla-renderers';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';


import schema from './shema.json'
import uischema from './uischema.json'

// const schema = {
//   type: 'object',
//   properties: {
//     name: {
//       type: 'string',
//       minLength: 1,
//     },
//     done: {
//       type: 'boolean',
//     },
//     due_date: {
//       type: 'string',
//       format: 'date',
//     },
//     recurrence: {
//       type: 'string',
//       enum: ['Never', 'Daily', 'Weekly', 'Monthly'],
//     },
//   },
//   required: ['name', 'due_date'],
// };
// const uischema = {
//   type: 'VerticalLayout',
//   elements: [
//     {
//       type: 'Control',
//       label: false,
//       scope: '#/properties/done',
//     },
//     {
//       type: 'Control',
//       scope: '#/properties/name',
//     },
//     {
//       type: 'HorizontalLayout',
//       elements: [
//         {
//           type: 'Control',
//           scope: '#/properties/due_date',
//         },
//         {
//           type: 'Control',
//           scope: '#/properties/recurrence',
//         },
//       ],
//     },
//   ],
// };
const initialData = {
  "provideAddress": true,
  "vegetarian": false
};

const Test = () => {
  const [data, setData] = useState(initialData);

  return (
    <JsonForms
      schema={schema}
      uischema={uischema}
      data={data}
      
      renderers={materialRenderers}
      cells={materialCells}
      onChange={({ data }) => setData(data)}
    />
  )
}

export default Test
