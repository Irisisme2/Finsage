import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import ExpenseTable from "./ExpenseTable";
import IncomeTable from "./IncomeTable";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AppTable = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: "Material", path: "/material" },
            { name: "Table" },
          ]}
        />
      </Box>

      <SimpleCard title="Income Table">
        <IncomeTable />
      </SimpleCard>

      <SimpleCard title="Expense Table">
        <ExpenseTable />
      </SimpleCard>
    </Container>
  );
};

export default AppTable;
