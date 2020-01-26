import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import SamplesFilter from '../../views/Samples/components/SamplesFilter';

export interface ConfirmationDialogRawProps {
  classes: Record<'paper', string>;
  id: string;
  keepMounted: boolean;
  value: string;
  open: boolean;
  onClose: (value?: string) => void;
}

export default function ConfirmationDialogRaw(props: ConfirmationDialogRawProps) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = useState(valueProp);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Dialog
      maxWidth="sm"
      aria-labelledby="filter-samples"
      open={open}
      {...other}
    >
      <DialogContent >
        <SamplesFilter />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOk} >
          Buscar
        </Button>
      </DialogActions>
    </Dialog>
  );
}