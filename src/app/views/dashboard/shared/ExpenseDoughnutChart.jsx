import React from "react";
import { useTheme } from "@mui/material";
import ReactEcharts from "echarts-for-react";

const ExpenseDoughnutChart = ({ height, color = [], expenseCategories }) => {
  const theme = useTheme();

  const option = {
    legend: {
      show: true,
      itemGap: 20,
      icon: "circle",
      bottom: 0,
      textStyle: {
        color: theme.palette.text.secondary,
        fontSize: 13,
        fontFamily: "roboto",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    series: [
      {
        name: "Expense Categories",
        type: "pie",
        radius: ["45%", "72.55%"],
        center: ["50%", "50%"],
        avoidLabelOverlap: false,
        hoverOffset: 5,
        stillShowZeroSum: false,
        label: {
          normal: {
            show: false,
            position: "center",
            textStyle: {
              color: theme.palette.text.secondary,
              fontSize: 13,
              fontFamily: "roboto",
            },
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: "14",
              fontWeight: "normal",
            },
            formatter: "{b} \n{c} ({d}%)",
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: expenseCategories,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <ReactEcharts
      style={{ height: height }}
      option={{
        ...option,
        color: [...color],
      }}
    />
  );
};

export default ExpenseDoughnutChart;
