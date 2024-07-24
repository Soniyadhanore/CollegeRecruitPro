// This page is for both add and edit
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Image,
  Input,
  Row,
  Select,
  Typography,
  Upload,
} from "antd";
import { LeftOutlined, UserOutlined, EditOutlined, CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const blogCategory = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
];
const CreateBlog = () => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(null);
  const handleChange = (info) => {
    if (info.file.status === "done") {
      const reader = new FileReader();
      reader.onload = () => setImageUrl(reader.result);
      reader.readAsDataURL(info.file.originFileObj);
    }
  };
  return (
    <>
      <Card>
        <Typography
          className="text-xl font-semibold"
          align={"left"}
        >
          <LeftOutlined
            className="text=lg text-black mr-2 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          Add/Edit Blog/Post Blog
        </Typography>
        <Divider />
        <div className="min-h-[calc(100vh_-_305px)] ">
          <Form
            layout="vertical"
            style={{
              maxWidth: 600,
              width: "100%",
            }}
            initialValues={{
              remember: true,
            }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Blog Title"
              name="Blog"
              rules={[
                {
                  required: true,
                  message: "Please enter your Blog Title.",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Category"
              name="Category"
              rules={[
                {
                  required: true,
                  message: "Please enter your Category.",
                },
              ]}
            >
              <Select size="large" options={blogCategory} />
            </Form.Item>

            <Form.Item
              label="Description"
              name="Description"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter your Description.",
                },
              ]}
            >
              <CKEditor className="" editor={ClassicEditor} />
            </Form.Item>

            <Form.Item label="Upload Image" name="Upload Image">
              <div className="flex relative">
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="relative"
                  showUploadList={false}
                  onChange={handleChange}
                >
                  <button
                    style={{ border: 0, background: "none" }}
                    type="button"
                    className="flex flex-col items-center justify-center text-gray-600 hover:text-gray-800"
                  >
                    <UserOutlined className="text-2xl" />
                    <div className="mt-2">Upload</div>
                  </button>
                  <EditOutlined className="cursor-pointer absolute right-[-8px] top-0 p-[5px] rounded-full bg-red-600 text-white" />
                </Upload>
                <div className="ml-5 upload-img">
                  <Row>
                    <Col span={6}>
                      <Image
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        className="!w-full p-2 rounded-md flex flex-col items-center justify-center text-gray-600 hover:text-gray-800"
                      />
                      <CloseOutlined className="cursor-pointer absolute left-[90px] top-0 p-[5px] rounded-full bg-red-600 text-white" />
                    </Col>
                    <Col span={6}>
                      <Image
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        className="!w-full p-2 rounded-md flex flex-col items-center justify-center text-gray-600 hover:text-gray-800"
                      />
                      <CloseOutlined className="cursor-pointer absolute left-[90px] top-0 p-[5px] rounded-full bg-red-600 text-white" />
                    </Col>
                    <Col span={6}>
                      <Image
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        className="!w-full p-2 rounded-md flex flex-col items-center justify-center text-gray-600 hover:text-gray-800"
                      />
                      <CloseOutlined className="cursor-pointer absolute left-[90px] top-0 p-[5px] rounded-full bg-red-600 text-white" />
                    </Col>
                    <Col span={6}>
                      <Image
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        className="!w-full p-2 rounded-md flex flex-col items-center justify-center text-gray-600 hover:text-gray-800"
                      />
                      <CloseOutlined className="cursor-pointer absolute left-[90px] top-0 p-[5px] rounded-full bg-red-600 text-white" />
                    </Col>
                  </Row>
                </div>
              </div>
            </Form.Item>
          </Form>
        </div>
        <Divider />
        <div className="flex justify-end flex-wrap gap-3">
          <Button className="inline-btn">Cancel</Button>
          <Button type="primary">Add</Button>
        </div>
      </Card>
    </>
  );
};
export default CreateBlog;