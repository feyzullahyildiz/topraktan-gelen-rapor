import React from "react";

import {
  DatePicker,
  Show,
  Typography,
  Edit,
  Form,
  useForm,
  Input,
} from "@pankod/refine-antd";
import dayjs from "dayjs";

// import { useForm } from "@pankod/refine-core";

export const AnalizEdit = () => {
  const { saveButtonProps, queryResult, formProps } = useForm<IAnaliz>();
  // const { data, isLoading } = queryResult;
  // const item = data?.data;
  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="Su" name="su">
          <Input />
        </Form.Item>
        <Form.Item label="Azot" name="azot">
          <Input />
        </Form.Item>
        <Form.Item label="Potasyum" name="potasyum">
          <Input />
        </Form.Item>
        <Form.Item label="Fosfat" name="fosfat">
          <Input />
        </Form.Item>
        <Form.Item
          label="Analiz Tarihi"
          name="analiz_date"
          getValueProps={(value) => ({
            value: value ? dayjs(value) : "",
          })}
        >
          <DatePicker  />
        </Form.Item>
      </Form>
      {/* <Title level={5}>Su</Title>
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
      <DateField format="LLL" value={item?.createdAt} /> */}
    </Edit>
  );
};
