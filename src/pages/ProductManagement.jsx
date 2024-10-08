import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Image,
  message,
  Popconfirm,
  Space,
  Skeleton,
  Table,
  Tag,
} from "antd";
import axios from "axios";
import React from "react";

const ProductManagement = () => {
  const [messageApi, contextHoder] = message.useMessage();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`http://localhost:3000/products/${id}`);
    },
    onSuccess: () => {
      messageApi.open({
        type: "success",
        content: "Ban da xoa thanh cong",
      });
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
    onError: () => {
      messageApi.open({
        type: "error",
        content: "Xoa that bai, vui long thu lai sau",
      });
    },
  });
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:3000/products`);
      return response.data.map((product) => ({ ...product, key: product.id }));
    },
  });

  const columns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Giá sản phẩm",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Ảnh sản phẩm",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (_, item) => {
        return (
          <>
            <Image width={50} src={item.imageUrl} />
          </>
        );
      },
    },
    {
      title: "Tình trạng",
      key: "available",
      dataIndex: "available",
      render: (_, item) => {
        return item.available ? (
          <Tag color="green">Còn hàng</Tag>
        ) : (
          <Tag color="red">Hết hàng</Tag>
        );
      },
    },
    {
      title: "Danh mục",
      key: "category",
      dataIndex: "category",
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, item) => {
        return (
          <div>
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={() => mutate(item.id)}
              onCancel={() => {}}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>Delete</Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  return (
    <>
      {contextHoder}
      <h1>Product Management</h1>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <Table columns={columns} dataSource={data} />
      )}
    </>
  );
};

export default ProductManagement;
