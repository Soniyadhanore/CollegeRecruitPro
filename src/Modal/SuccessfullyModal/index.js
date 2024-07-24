import { Modal, Result } from "antd";
import { useNavigate } from "react-router-dom";
const SuccessfullyModal = ({ isOpen, onOk, onCancel }) => {
  const navigate = useNavigate();
  return (
    <>
      <Modal
        centered
        open={isOpen}
        onCancel={onCancel}
        onOk={onOk}
        closeIcon={false}
        okText={
          <>
            <span onClick={() => navigate("/")}>Login</span>
          </>
        }
      >
        <Result
          status="success"
          title="Your password has been updated successfully!"
        />
      </Modal>
    </>
  );
};
export default SuccessfullyModal;