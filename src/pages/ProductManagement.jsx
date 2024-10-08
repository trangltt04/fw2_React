import React from "react";
import { Space, Table, Tag } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const columns = [
  {
    title: "Ten san pham",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Gia san pham",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Anh san pham",
    dataIndex: "imageUrl",
    key: "imageUrl",
  },
  {
    title: "Tinh trang",
    key: "available",
    dataIndex: "available",
  },
  {
    title: "Danh muc",
    key: "category",
    dataIndex: "category",
  },
  {
    title: "Hanh dong",
    key: "action",
  },
];

const ProductManagement = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:3000/products`);
      return response.data.map((product) => ({ ...product, key: product.id }));
    },
  });
  return (
    <>
      <h1>Product Management</h1>
      <Table columns={columns} dataSource={data} />
    </>
  );
};
export default ProductManagement;
