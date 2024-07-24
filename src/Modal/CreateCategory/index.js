// This page is for both add and edit
import { Form, Input, Modal, Switch } from "antd";
const CreateCategory = ({ isOpen, onOk, onCancel }) => {
  return (
    <>
      <Modal
        title="Add/Edit Category"
        centered
        open={isOpen}
        onCancel={onCancel}
        onOk={onOk}
        okText="Save"
      >
        <Form
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          style={{ marginTop: 24 }}
          autoComplete="off"
        >
          <Form.Item
            label="Enter category name"
            name="category"
            rules={[
              {
                required: true,
                message: "Please enter your category name.",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label="Status "
            name="status "
            rules={[
              {
                required: true,
                message: "Please Select your Status.",
              },
            ]}
          >
            <Switch />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default CreateCategory;