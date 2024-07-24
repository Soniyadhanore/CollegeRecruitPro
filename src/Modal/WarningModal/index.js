import { Modal, Result } from "antd";
const WarningModal = ({ isOpen, onOk, onCancel }) => {
  return (
    <>
      <Modal
        title="Warning Message"
        centered
        open={isOpen}
        onCancel={onCancel}
        onOk={onOk}
      >
        <Result
          status="warning"
          title="Please check your password & try again!"
        />
      </Modal>
    </>
  );
};
export default WarningModal;