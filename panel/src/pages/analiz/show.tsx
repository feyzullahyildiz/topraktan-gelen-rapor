import React from "react";

import { DateField, Show, Typography } from "@pankod/refine-antd";

import { useShow } from "@pankod/refine-core";
const { Title, Text } = Typography;

export const AnalizShow = () => {
  const { queryResult } = useShow<IAnaliz>();
  const { data, isLoading } = queryResult;
  const item = data?.data;
  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Su</Title>
      <Text>{item?.su}</Text>

      <Title level={5}>Azot</Title>
      <Text>{item?.azot}</Text>

      <Title level={5}>Potasyum</Title>
      <Text>{item?.potasyum}</Text>

      <Title level={5}>Fosfat</Title>
      <Text>{item?.fosfat}</Text>

      <Title level={5}>Analiz Tarihi</Title>
      <DateField format="LLL" value={item?.analiz_date} />

      <Title level={5}>Kayıt Tarihi</Title>
      <DateField format="LLL" value={item?.createdAt} />
    </Show>
  );
};
