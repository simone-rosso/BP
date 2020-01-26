import React from 'react';
import TableSkeleton from '../../components/Skeleton';
import Typography from '@material-ui/core/Typography';

export default function Settings() {
    return (
        <div >
            <Typography variant="h3">Analiticas</Typography>
            <TableSkeleton />
            <TableSkeleton />
            <TableSkeleton />
            <TableSkeleton />
            <TableSkeleton />
            <TableSkeleton />
            <TableSkeleton />
            <TableSkeleton />
        </div>
    );
}