import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import React from 'react'
import * as S from './styles'
import Input from '../Input'
import Button from '../Button'
import { Bold } from 'styled-icons/boxicons-regular'

export type ListCategoriesProps = {
    openModal: (value: boolean) => void
}

function createData(
    title: string,
    description: string,
) {
    return { title, description }
}

const titles = ['Title', 'Description', 'Delete']

const rows = [
    createData('Frozen yoghurt', 'Description'),
]

export default function ListCategories({openModal}: ListCategoriesProps) {
    return (
        <S.Wrapper>
            <S.Button>
                <Button isFilter onClick={() => openModal(true)}>
                    Adicionar
                </Button>
            </S.Button>
            <S.FiltersAndDataTable>
                <S.Filters>
                    <Input label="Data Inicial" type="date" name="initialDate" isFilter />
                    <S.Filter>
                        <Input label="Data Final" type="date" name="finalDate" isFilter />
                    </S.Filter>
                    <S.Filter>
                        <Input label="Título" type="text" placeholder='Título' name="title" isFilter />
                    </S.Filter>
                    <S.Filter>
                        <Input label="Descrição" type="text" placeholder='Descrição' name="description" isFilter />
                    </S.Filter>
                </S.Filters>
                <TableContainer component={Paper} sx={{ mt:2 }}>
                    <Table sx={{ minWidth: 650, fontSize: 60 }} aria-label="list accounts">
                        <TableHead>
                            <TableRow>
                                {titles.map((title) => (
                                    <TableCell sx={{ fontSize: 15, fontWeight: 'bold' }}>{title}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.title}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" sx={{ fontSize: 15 }}>
                                        {row.title}
                                    </TableCell>
                                    <TableCell align="left" sx={{ fontSize: 15 }}>{row.description}</TableCell>
                                    <TableCell align="left" sx={{ fontSize: 20 }}>
                                        <S.IconDelete size={20} onClick={() => console.log('delete')} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </S.FiltersAndDataTable>

        </S.Wrapper>
    )
}
