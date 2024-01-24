import React from "react";
import {
  Box,
  Card,
  Checkbox,
  Fab,
  Grid,
  Hidden,
  Icon,
  IconButton,
  styled,
  useTheme,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { format } from "date-fns";

// Dummy data for demonstration
const transactions = [
  {
    id: 1,
    title: "Grocery shopping",
    amount: -50.0,
    date: new Date().getTime(),
    category: "Food",
  },
  {
    id: 2,
    title: "Dinner at a restaurant",
    amount: -25.0,
    date: new Date().getTime(),
    category: "Food",
  },
  {
    id: 3,
    title: "ATM withdrawal",
    amount: -100.0,
    date: new Date().getTime(),
    category: "Cash Withdrawal",
  },
  {
    id: 4,
    title: "Salary deposit",
    amount: 2000.0,
    date: new Date().getTime(),
    category: "Salary",
  },
  {
    id: 5,
    title: "Electronics purchase",
    amount: -150.0,
    date: new Date().getTime(),
    category: "Shopping",
  },
  {
    id: 6,
    title: "Deposit to savings account",
    amount: 500.0,
    date: new Date().getTime(),
    category: "Savings",
  },
  // Add more transactions as needed
];

// Calculate total expenses
const totalExpenses = transactions.reduce((total, transaction) => {
  if (transaction.amount < 0) {
    total += Math.abs(transaction.amount);
  }
  return total;
}, 0);

const TransactionCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  marginBottom: theme.spacing(1),
}));

const TransactionDateRange = styled(Fab)(({ theme }) => ({
  marginLeft: 0,
  boxShadow: "none",
  color: "white !important",
  background: `${theme.palette.error.main} !important`,
}));

const TransactionMoreIcon = styled(IconButton)(({ theme }) => ({
  marginLeft: "auto",
  color: theme.palette.text.secondary,
}));

const TransactionList = () => {
  const { palette } = useTheme();
  const textMuted = palette.text.secondary;

  return (
    <div>
      {transactions.map((transaction) => (
        <TransactionCard key={transaction.id}>
          <Grid container alignItems="center">
            <Grid item md={5} xs={7}>
              <Box display="flex" alignItems="center">
                <Checkbox />
                <TransactionDateRange size="small">
                  <Icon>monetization_on</Icon>
                </TransactionDateRange>
                <Span fontWeight="500" marginLeft={1}>
                  {transaction.title}
                </Span>
              </Box>
            </Grid>

            <Grid item md={3} xs={4}>
              <Box color={textMuted}>
                {format(transaction.date, "MM/dd/yyyy hh:mma")}
              </Box>
            </Grid>

            <Hidden smDown>
              <Grid item xs={3}>
                <Box
                  display="flex"
                  position="relative"
                  marginLeft="-0.875rem !important"
                ></Box>
              </Grid>
            </Hidden>

            <Grid item xs={1}>
              <Box display="flex" justifyContent="flex-end">
                <TransactionMoreIcon>
                  <Icon>more_vert</Icon>
                </TransactionMoreIcon>
              </Box>
            </Grid>
          </Grid>
        </TransactionCard>
      ))}

      {/* Display total expenses */}
      <Box mt={2} color={textMuted}>
        Total Expenses: ${totalExpenses.toFixed(2)}
      </Box>
    </div>
  );
};

export default TransactionList;
