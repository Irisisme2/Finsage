import {
  Box,
  Card,
  Grid,
  Icon,
  IconButton,
  styled,
  Tooltip,
} from "@mui/material";
import { Small } from "app/components/Typography";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px !important",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: { padding: "16px !important" },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  "& small": { color: theme.palette.text.secondary },
  "& .icon": {
    opacity: 0.6,
    fontSize: "44px",
    color: theme.palette.primary.main,
  },
}));

const Heading = styled("h6")(({ theme }) => ({
  margin: 0,
  marginTop: "4px",
  fontSize: "14px",
  fontWeight: "500",
  color: theme.palette.primary.main,
}));

const FinancialSummary = () => {
  const financialData = [
    {
      name: "Account Balance",
      amount: "$50,000",
      icon: "account_balance_wallet",
    },
    { name: "Total Income", amount: "$120,000", icon: "monetization_on" },
    { name: "Total Expenses", amount: "$70,000", icon: "money_off" },
  ];

  return (
    <Grid container spacing={3} sx={{ mb: "24px" }}>
      {financialData.map((item, index) => (
        <Grid item xs={12} md={4} key={index}>
          <StyledCard elevation={6}>
            <ContentBox>
              <Icon className="icon">{item.icon}</Icon>
              <Box ml="12px">
                <Small>{item.name}</Small>
                <Heading>{item.amount}</Heading>
              </Box>
            </ContentBox>

            <Tooltip title="View Details" placement="top">
              <IconButton>
                <Icon>arrow_right_alt</Icon>
              </IconButton>
            </Tooltip>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default FinancialSummary;
