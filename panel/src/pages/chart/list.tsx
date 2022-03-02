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
export const AnalizChart = () => {
  const { tableProps } = useTable<IAnaliz>({
    initialPageSize: 1000,
  });
  console.log("tableProps", tableProps);
  return (
    <List>
      {/* <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="su" title="Su" />
        <Table.Column dataIndex="potasyum" title="Potasyum" />
        <Table.Column dataIndex="fosfat" title="Fosfat" />
        <Table.Column dataIndex="azot" title="Azot" />
        <Table.Column
          dataIndex="analiz_date"
          title="Analiz Tarihi"
          render={(value) => <DateField format="LLL" value={value} />}
        />
        <Table.Column
          dataIndex="createdAt"
          title="Kayıt Tarihi"
          render={(value) => <DateField format="LLL" value={value} />}
        />
        <Table.Column<IAnaliz>
          title="**"
          render={(text, item) => (
            <>
              <ShowButton size="small" recordItemId={item.id} hideText />
              <EditButton size="small" recordItemId={item.id} hideText />
              <DeleteButton size="small" recordItemId={item.id} hideText />
            </>
          )}
        />
      </Table> */}
    </List>
  );
};
