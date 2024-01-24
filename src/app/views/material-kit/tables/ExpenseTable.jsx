import {
  Box,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";

const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const expensesList = [
  {
    date: "18 January, 2019",
    amount: 100,
    description: "Groceries",
    category: "Food",
  },
  {
    date: "15 January, 2019",
    amount: 50,
    description: "Gas",
    category: "Transportation",
  },
  // Dodaj więcej elementów według potrzeb
];

const ExpenseTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expensesList
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((expense, index) => (
              <TableRow key={index}>
                <TableCell align="center">{expense.date}</TableCell>
                <TableCell align="center">{expense.description}</TableCell>
                <TableCell align="center">{expense.category}</TableCell>
                <TableCell align="center">${expense.amount}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </StyledTable>

      <TablePagination
        sx={{ px: 2 }}
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        count={expensesList.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ "aria-label": "Next Page" }}
        backIconButtonProps={{ "aria-label": "Previous Page" }}
      />
    </Box>
  );
};

export default ExpenseTable;
