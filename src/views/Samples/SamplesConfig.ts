import { makeStyles, createStyles, Theme } from "@material-ui/core";
import { Order } from "../../utils/sort";
import ISampleModel from "../../models/ISample";

export interface ISampleRow {
    date: string,
    ref: string,
    type: string,
    parameters: string,
    localization: string,
    result: string,
    _id: string,
}

export interface HeadCell {
    disablePadding: boolean;
    id: keyof ISampleRow;
    label: string;
    numeric: boolean;
}

export const headCells: HeadCell[] = [
    { id: 'date', numeric: false, disablePadding: true, label: 'FECHA' },
    { id: 'ref', numeric: false, disablePadding: false, label: 'REF' },
    { id: 'type', numeric: false, disablePadding: false, label: 'TIPO' },
    { id: 'parameters', numeric: true, disablePadding: false, label: 'PARAMETROS' },
    { id: 'localization', numeric: true, disablePadding: false, label: 'LOCALIZACIÓN' },
    { id: 'result', numeric: true, disablePadding: false, label: 'RESULTADOS' },
];

export interface SamplesTableProps {
    classes: ReturnType<typeof useStyles>;
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof ISampleRow) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

export const useToolbarStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: 0,
        },
        title: {
            flex: '1 1 100%',
        },
    }),
);

export interface SamplesTableToolbarProps {
    numSelected: number;
}

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        paper: {
            width: '100%',
            marginBottom: theme.spacing(2),
        },
        table: {
            minWidth: 750,
        },
        visuallyHidden: {
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: 1,
            margin: -1,
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            top: 20,
            width: 1,
        },
        subtitle: {
            marginLeft: 20,
            fontSize: 14,
        },
        dialog: {
          width: '80%',
          maxHeight: 435,
        },
    }),
);

export const createRow = (item: ISampleModel) => {
    let date = item.createdAt;
    let ref = item.reference;
    let type = item.result_type;
    let parameters = item.type;
    let localization = "n/a";
    let result = "n/a";
    let _id = item._id
    return { date, ref, type, parameters, localization, result, _id };
  }