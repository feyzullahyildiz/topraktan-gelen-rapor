import React from "react";

import {
  List,
  Table,
  useTable,
  DateField,
  ShowButton,
  EditButton,
  DeleteButton,
} from "@pankod/refine-antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const toPercent = (decimal: number, fixed = 0) => `${decimal.toFixed(0)}%`;
export const AnalizChart = () => {
  const { tableProps } = useTable<IAnaliz>({
    initialPageSize: 1000,
  });
  const data = tableProps?.dataSource || [];
  // console.log("data", data);
  return (
    <List>
      <div
        style={{
          width: "100%",
          minHeight: "400px",
          height: "100%",
        }}
      >
        <ResponsiveContainer width="100%" height={500}>
        <LineChart
          width={800}
          height={400}
          data={data as any}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="analiz_date" tickCount={6} format='YYYY'/>
          <YAxis tickFormatter={toPercent} />
          <Tooltip />
          <Legend />
          {/* <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          /> */}
          <Line type="monotone" dataKey="su" stroke="black" />
          <Line type="monotone" dataKey="azot" stroke="orange" />
          <Line type="monotone" dataKey="potasyum" stroke="red" />
          <Line type="monotone" dataKey="fosfat" stroke="yellowgreen" />
        </LineChart>
        </ResponsiveContainer>
      </div>
      {/* <Table {...tableProps}>

      </Table> */}
    </List>
  );
};
