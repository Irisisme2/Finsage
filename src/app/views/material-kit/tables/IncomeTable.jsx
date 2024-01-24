import {
  Box,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const StyledTable = styled(Table)(({ theme }) => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const incomeList = [
  {
    date: "18 January, 2019",
    amount: 1000,
    description: "Salary",
    category: "Income",
  },
  {
    date: "10 January, 2019",
    amount: 9000,
    description: "Freelance Payment",
    category: "Income",
  },
  {
    date: "8 January, 2019",
    amount: 5000,
    description: "Investment Dividends",
    category: "Income",
  },
  {
    date: "1 January, 2019",
    amount: 89000,
    description: "Bonus",
    category: "Income",
  },
];

const IncomeTable = () => {
  return (
    <Box width="100%" overflow="auto">
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {incomeList.map((income, index) => (
            <TableRow key={index}>
              <TableCell align="center">{income.date}</TableCell>
              <TableCell align="center">{income.description}</TableCell>
              <TableCell align="center">{income.category}</TableCell>
              <TableCell align="center">${income.amount}</TableCell>
              <TableCell align="right">
                <IconButton>
                  <Icon color="error">close</Icon>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default IncomeTable;
