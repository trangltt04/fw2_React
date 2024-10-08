import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, InputNumber, Layout, Select, Switch } from "antd";
import TextArea from "antd/es/input/TextArea";

const AddProduct = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: async (product) => {
      await axios.post("http://localhost:3000/products", product);
    },
    onSuccess: () => {
      navigate("/admin/products");
    },
  });
  const onFinish = (values) => {
    mutate(values);
  };
  return (
    <div>
      <h1 className="text-4xl my-8">Them moi san pham</h1>
      <Form
        name="add-form"
        labelCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Tem san pham"
          name="name"
          rules={[
            {
              required: true,
              message: "Vui long nhap ten san pham",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Gia san pham"
          name="price"
          rules={[
            {
              required: true,
              message: "Vui long nhap gia san pham",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Anh san pham"
          name="imageUrl"
          rules={[
            {
              required: true,
              message: "Vui long nhap anh san pham",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Trang thai" name="available" initialValue={false}>
          <Switch />
        </Form.Item>

        <Form.Item label="Mo ta" name="description">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Danh muc" name="category">
          <Select>
            <Select.Option value="cate1">Danh muc 1</Select.Option>
            <Select.Option value="cate2">Danh muc 2</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit">Button</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProduct;
