import { Typography, Button, Input, Form, Layout, Card, Flex } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;
const ForgotPassword = () => {
  return (
    <>
      <Layout>
        <Flex
          gap="middle"
          align="center"
          justify="center"
          vertical
          style={{ minHeight: "100vh" }}
        >
          <Card className="relative">
            <img
              width={450}
              src="logo.png"
              alt=""
              className="mx-auto absolute top-[-90px] left-0 right-0"
            />
            <Title level={3} align={"center"}>
              Forgot Password
            </Title>
            <Form
              layout="vertical"
              style={{
                maxWidth: 400,
                minWidth: 400,
                marginTop: 24,
              }}
              initialValues={{
                remember: true,
              }}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Email address"
                name="Email address"
                rules={[
                  {
                    required: true,
                    message: "Please enter your registered email ID.",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
              <Button
                className="w-full mt-4"
                size="large"
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form>
            <div className="flex items-center justify-center mt-4">
              <h5 className="hello">Go back to </h5> 
              <Link to="/"> &nbsp;
                <Button className="p-0 font-semibold" type="link">
                    Login
                </Button>
              </Link>
            </div>
          </Card>
        </Flex>
      </Layout>
    </>
  );
};
export default ForgotPassword;