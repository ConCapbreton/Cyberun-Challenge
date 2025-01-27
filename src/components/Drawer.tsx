import React, { useState } from 'react';
import FormComp from './Form';
import { Button, Drawer } from 'antd';
import { DrawerProps } from '../models/models';

const DrawerComp: React.FC<DrawerProps> = (props) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} style={{display: "block", marginBottom: "1rem",}}>
        {props.title}
      </Button>
      <Drawer title={props.title} onClose={onClose} open={open} width={700}>
        <FormComp schema={props.schema} uischema={props.uischema} initialData={props.initialData}/>
      </Drawer>
    </>
  );
};

export default DrawerComp;