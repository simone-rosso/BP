import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { TextField, RadioGroup, FormControlLabel, Radio, Slider, Typography } from '@material-ui/core';

function valuetext(value: number) {
  return `${value}°C`;
}

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 30,
    label: '30',
  },
  {
    value: 100,
    label: '100',
  },
];

export default function MaterialUIPickers() {

  const [value, setValue] = React.useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <TextField
          label="Filtrar"
        /*   label="Filtrar por Nombre / Referencia / Localización" */
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker"
          label="Fecha"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
      <Grid container >
        <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
          <FormControlLabel
            value="top"
            control={<Radio color="primary" />}
            label="Cualitativo"
            labelPlacement="end"
          />
          <FormControlLabel
            value="top"
            control={<Radio color="primary" />}
            label="Cuantitativo"
            labelPlacement="end"
          />
        </RadioGroup>
      </Grid>
      <Grid container>
        <RadioGroup
          row
          aria-label="position"
          name="position"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="top"
            control={<Radio color="primary" />}
            label="S-somatic-coliphage"
            labelPlacement="end"
          />
          <FormControlLabel
            value="top"
            control={<Radio color="primary" />}
            label="F-specific-coliphages"
            labelPlacement="end"
          />
          <FormControlLabel
            value="top"
            control={<Radio color="primary" />}
            label="T-total-coliphages"
            labelPlacement="end"
          />
        </RadioGroup>
      </Grid>
      <Grid container>
        <Typography
          id="discrete-slider-restrict"
          gutterBottom
        >
          Resultados
      </Typography>
        <Slider
          defaultValue={20}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-custom"
          valueLabelDisplay="auto"
          marks={marks}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}