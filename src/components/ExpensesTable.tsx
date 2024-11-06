import React, {useEffect, useState} from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, 
    TableContainer
 } from '@mui/material';
import './ExpensesTable.css';
import axios, { Axios, AxiosResponse } from 'axios';

interface Bill {
    id: string;
    date: string;
    vendorName: string
    amount: string;
}

interface ExpensesTableProps {
}

// API Call

// Display the data in a table

// Upload drag and drop

const ExpensesTable: React.FC<ExpensesTableProps> = () => {

    const [expenses, setExpenses] = useState<Bill[]>([]);
    // make an axios call to localhost:8080/bills
    // then set the state of the expenses to the data
    useEffect(() => {
        axios.get('http://localhost:8080/bills')
            .then((response) => {
                setExpenses(response.data.data);

            });
    }, []);

    return (
        <TableContainer >
        <Table className='expensesTable' >
            <TableHead className="tableHead">
                <TableRow>
                    <TableCell className='tableCell'>Date</TableCell>
                    <TableCell className='tableCell'>Vendor</TableCell>
                    <TableCell className='tableCell'>Amount</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {expenses.map((expense) => {
                    return (
                        <TableRow key={expense.id}>
                            <TableCell>{expense.date}</TableCell>
                            <TableCell>{expense.vendorName}</TableCell>
                            <TableCell>{expense.amount}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
        </TableContainer>
    );
};

export default ExpensesTable;