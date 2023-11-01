import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'


function createData(
    title: string,
    description: number,
    category: number,
    value: number,
    date: number,
) {
    return { title, description, category, value, date,  }
}

const titles = ['Title', 'Description', 'Category', 'Value', 'Date', 'Delete']

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
]

export default function ListAccounts() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="list accounts">
                <TableHead>
                    <TableRow>
                        {titles.map((title) => (
                        <TableCell>{title}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.title}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                            <TableCell align="right">{row.category}</TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right"><AiOutlineDelete size={20} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
