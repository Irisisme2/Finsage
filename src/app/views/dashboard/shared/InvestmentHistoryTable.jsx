import React from "react";
import {
  Avatar,
  Box,
  Card,
  Icon,
  IconButton,
  MenuItem,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import { Paragraph } from "app/components/Typography";

const CardHeader = styled(Box)(() => ({
  display: "flex",
  paddingLeft: "24px",
  paddingRight: "24px",
  marginBottom: "12px",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  textTransform: "capitalize",
}));

const InvestmentTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: "pre",
  "& small": {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)",
  },
  "& td": { borderBottom: "none" },
  "& td:first-of-type": { paddingLeft: "16px !important" },
}));

const Small = styled("small")(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: "#fff",
  padding: "2px 8px",
  borderRadius: "4px",
  overflow: "hidden",
  background: bgcolor,
  boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)",
}));

const InvestmentHistoryTable = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;

  return (
    <Card elevation={3} sx={{ pt: "20px", mb: 3 }}>
      <CardHeader>
        <Title>investment history</Title>
        <Select size="small" defaultValue="this_month">
          <MenuItem value="this_month">This Month</MenuItem>
          <MenuItem value="last_month">Last Month</MenuItem>
        </Select>
      </CardHeader>

      <Box overflow="auto">
        <InvestmentTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 3 }} colSpan={4}>
                Name
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Investment
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Profit/Loss
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={1}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {investmentList.map((investment, index) => (
              <TableRow key={index} hover>
                <TableCell
                  colSpan={4}
                  align="left"
                  sx={{ px: 0, textTransform: "capitalize" }}
                >
                  <Box display="flex" alignItems="center">
                    <Avatar src={investment.imgUrl} />
                    <Paragraph sx={{ m: 0, ml: 4 }}>
                      {investment.name}
                    </Paragraph>
                  </Box>
                </TableCell>

                <TableCell
                  align="left"
                  colSpan={2}
                  sx={{ px: 0, textTransform: "capitalize" }}
                >
                  ${investment.amount}
                </TableCell>

                <TableCell sx={{ px: 0 }} align="left" colSpan={2}>
                  {investment.profitLoss >= 0 ? (
                    <Small bgcolor={bgPrimary}>+${investment.profitLoss}</Small>
                  ) : (
                    <Small bgcolor={bgError}>
                      -${Math.abs(investment.profitLoss)}
                    </Small>
                  )}
                </TableCell>

                <TableCell sx={{ px: 0 }} colSpan={1}>
                  <IconButton>
                    <Icon color="primary">edit</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </InvestmentTable>
      </Box>
    </Card>
  );
};

const investmentList = [
  {
    imgUrl: "/assets/images/investments/stock-1.jpg",
    name: "Tech Stocks",
    amount: 5000,
    profitLoss: 1500,
  },
  {
    imgUrl: "/assets/images/investments/bond-2.jpg",
    name: "Government Bonds",
    amount: 10000,
    profitLoss: -500,
  },
  {
    imgUrl: "/assets/images/investments/crypto-3.jpg",
    name: "Cryptocurrency",
    amount: 2000,
    profitLoss: 100,
  },
  {
    imgUrl: "/assets/images/investments/real-estate-1.jpg",
    name: "Real Estate",
    amount: 15000,
    profitLoss: 2000,
  },
  {
    imgUrl: "/assets/images/investments/mutual-fund-2.jpg",
    name: "Mutual Fund",
    amount: 8000,
    profitLoss: -200,
  },
];

export default InvestmentHistoryTable;
