import React, { useContext } from 'react';
import { SamplesTableToolbarProps, useToolbarStyles } from '../SamplesConfig';
import { Toolbar, Button, Tooltip } from '@material-ui/core';
import Context from '../../../utils/context';
import TuneIcon from '@material-ui/icons/Tune';
import LaunchIcon from '@material-ui/icons/Launch';

const SamplesTableToolbar = (props: SamplesTableToolbarProps) => {
    const classes = useToolbarStyles();
    const { setOpenDialogSamples } = useContext(Context);
    const { numSelected } = props;

    return (
        <Toolbar
            className={classes.root}
        >
            <div className={classes.title}>
                <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    startIcon={<LaunchIcon />}
                    disabled={numSelected === 0}>
                    Exportar
        </Button>
            </div>

            <Tooltip title="Filter list">
                <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    startIcon={<TuneIcon />}
                    onClick={() => setOpenDialogSamples(true)}
                >
                    Filtrar
              </Button>
            </Tooltip>
        </Toolbar>
    );
};

export default SamplesTableToolbar;