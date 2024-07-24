// This page is for both add and edit
import { LeftOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Typography,
} from "antd";
import { useState } from "react";
const blogCategory = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
];
const CreateCollege = () => {
  const navigate = useNavigate();
  const [forms, setForms] = useState([{ id: 1 }]);
  const addForm = () => {
    setForms([...forms, { id: forms.length + 1 }]);
  };
  const removeForm = (id) => {
    setForms(forms.filter((form) => form.id !== id));
  };
  return (
    <>
      <Card>
        <div className="flex justify-between items-center mb-4 gap-3">
          <div>
            <Typography
              className="text-xl font-semibold"
              align={"left"}
            
            >
              <LeftOutlined
                className="text=lg text-black mr-2 cursor-pointer"
                onClick={() => navigate(-1)}
              />
              Add/Edit College Details
            </Typography>
          </div>
        </div>
        <Divider />
        <div>
          <Form
            layout="vertical"
            style={{
              //   maxWidth: 600,
              width: "100%",
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Row>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Name of College"
                    name="Name of College"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Name of College.",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Address"
                    name="Address"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Address.",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
        <div>
          <Row>
            <Col span={10}>
              <div className="text-base font-medium text-black">
                Contact Person Details :{" "}
              </div>
            </Col>
            <Col span={10} className="text-right">
              <Button type="primary" className="mr-4" onClick={addForm}>
                Add Contact
              </Button>
            </Col>
          </Row>
          <Form
            layout="vertical"
            style={{
              width: "100%",
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Row>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="First Name"
                    name="First Name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your First Name.",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Last Name"
                    name="Last Name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Last Name.",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Contact Number"
                    name="Contact Number"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your contact number.",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Email ID"
                    name="Email ID"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Email ID.",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Instagram Link"
                    name="Instagram Link"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Instagram Link.",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Facebook Link"
                    name="Facebook Link"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Facebook Link.",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>
              </Col>
            </Row>
          </Form>
          {forms.slice(1).map((form, index) => (
            <div key={form.id}>
              <Divider />
              <Row>
                <Col span={10}>
                  <div className="text-base font-medium text-black">
                    Contact Details {form.id}{" "}
                  </div>
                </Col>
                <Col span={10} className="text-right">
                  <CloseCircleOutlined
                    onClick={() => removeForm(form.id)}
                    style={{
                      fontSize: "24px",
                      color: "red",
                      cursor: "pointer",
                    }}
                  />
                </Col>
              </Row>
              <Form
                name={`Contact Person ${form.id}`}
                layout="vertical"
                style={{
                  width: "100%",
                }}
                initialValues={{
                  remember: true,
                }}
                autoComplete="off"
              >
                <Row>
                  <Col span={10}>
                    <div className="mr-4">
                      <Form.Item
                        label="First Name"
                        name={`First Name ${form.id}`}
                        rules={[
                          {
                            required: true,
                            message: "Please enter your First Name.",
                          },
                        ]}
                      >
                        <Input size="large" />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={10}>
                    <div className="mr-4">
                      <Form.Item
                        label="Last Name"
                        name={`Last Name ${form.id}`}
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Last Name.",
                          },
                        ]}
                      >
                        <Input size="large" />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={10}>
                    <div className="mr-4">
                      <Form.Item
                        label="Contact Number"
                        name={`Contact Number ${form.id}`}
                        rules={[
                          {
                            required: true,
                            message: "Please enter your contact number.",
                          },
                        ]}
                      >
                        <Input size="large" />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={10}>
                    <div className="mr-4">
                      <Form.Item
                        label="Email ID"
                        name={`Email ID ${form.id}`}
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Email ID.",
                          },
                        ]}
                      >
                        <Input size="large" />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={10}>
                    <div className="mr-4">
                      <Form.Item
                        label="Instagram Link"
                        name={`Instagram Link ${form.id}`}
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Instagram Link.",
                          },
                        ]}
                      >
                        <Input size="large" />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={10}>
                    <div className="mr-4">
                      <Form.Item
                        label="Facebook Link"
                        name={`Facebook Link ${form.id}`}
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Facebook Link.",
                          },
                        ]}
                      >
                        <Input size="large" />
                      </Form.Item>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          ))}
        </div>
        <div>
          <div className="font-semibold text-base mb-[10px]">
            Eligibility Criteria Details:
          </div>
          <Form
            layout="vertical"
            style={{
              //   maxWidth: 600,
              width: "100%",
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Row>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="College Type"
                    name="College Type"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your College Type.",
                      },
                    ]}
                  >
                    <Select size="large" options={blogCategory} />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Number of Under Graduates:"
                    name="Number of Under Graduates:"
                    rules={[
                      {
                        required: true,
                        message:
                          "Please enter your Number of Under Graduates:.",
                      },
                    ]}
                  >
                    <Select size="large" options={blogCategory} />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Majors offered"
                    name="Majors offered"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Majors offered.",
                      },
                    ]}
                  >
                    <Select size="large" options={blogCategory} />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Average GPA"
                    name="Average GPA"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Average GPA.",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>
              </Col>
              <Col span={10}>
                <div className="mr-4">
                  <Form.Item
                    label="Expenses"
                    name="Expenses"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your Expenses.",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="text-right">
          <Button type="primary">Add Details</Button>
        </div>
      </Card>
    </>
  );
};
export default CreateCollege;