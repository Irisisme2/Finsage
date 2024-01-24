import { Box } from "@mui/material";
import { MatxProgressBar, SimpleCard } from "app/components";
import { Small } from "app/components/Typography";

const FinancialGoals = () => {
  return (
    <Box>
      <SimpleCard title="Financial Goals Progress">
        <Small color="text.secondary">Goal 1</Small>
        <MatxProgressBar
          value={50}
          color="primary"
          text="Savings for Vacation ($5,000)"
        />

        <Small color="text.secondary" display="block" pt={4}>
          Goal 2
        </Small>
        <MatxProgressBar
          value={75}
          color="secondary"
          text="Emergency Fund ($10,000)"
        />

        <Small color="text.secondary" display="block" pt={4}>
          Goal 3
        </Small>
        <MatxProgressBar
          value={30}
          color="primary"
          text="Investment Portfolio Growth ($50,000)"
        />

        {/* Dodaj kolejne cele finansowe, jeśli są potrzebne */}
      </SimpleCard>
    </Box>
  );
};

export default FinancialGoals;
