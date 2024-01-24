import { Card, Grid, styled, useTheme } from "@mui/material";
import { Fragment } from "react";
import FinancialGoals from "./shared/FinancialGoals";
import ExpenseDoughnutChart from "./shared/ExpenseDoughnutChart";
import TransactionList from "./shared/TransactionList";
import FinancialSummary from "./shared/FinancialSummary";
import StatCards2 from "./shared/StatCards2";
import InvestmentHistoryTable from "./shared/InvestmentHistoryTable";
const ContentBox = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginRight: ".5rem",
  textTransform: "capitalize",
}));

const SubTitle = styled("span")(({ theme }) => ({
  fontSize: "0.875rem",
  color: theme.palette.text.secondary,
}));

const H4 = styled("h4")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginBottom: "16px",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
}));

const Analytics = () => {
  const { palette } = useTheme();

  const expenseCategories = [
    { value: 500, name: "Food" },
    { value: 300, name: "Rent" },
    { value: 200, name: "Utilities" },
  ];

  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <FinancialSummary />
            <InvestmentHistoryTable />
            <StatCards2 />

            <H4>TransactionList</H4>
            <TransactionList />
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <Title>Expense statistics</Title>
              <SubTitle>Last 30 days</SubTitle>

              <ExpenseDoughnutChart
                height="300px"
                color={[
                  palette.primary.dark,
                  palette.primary.main,
                  palette.primary.light,
                ]}
                expenseCategories={expenseCategories}
              />
            </Card>
            <FinancialGoals />
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Analytics;
