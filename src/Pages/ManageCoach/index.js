import { useState } from "react";
import { Tooltip, Button, Card, Typography, Switch } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  FileExclamationOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import SortingArrow from "../../Common/SortingArrow";
import ConfirmationModal from "../../Modal/ConfirmationModal";
const ManageCoach = () => {
  const navigate = useNavigate();
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleDeleteOk = () => {
    setIsDeleteModalOpen(false);
  };
  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };
  return (
    <>
      <Card>
        <div className="flex justify-between	mb-4 gap-5">
          <div className="">
            <Typography className="text-xl font-semibold" align={"left"}>
              Manage Coach
            </Typography>
          </div>
          <div className="flex justify-end flex-wrap gap-3">
            <Search
              placeholder="Search coach by Name or Email ID..."
              onSearch={onSearch}
              style={{
                width: 300,
              }}
              className="mx-1.5 cursor-pointer"
            />
            <Button
              type="primary"
              size={14}
              className="mx-1.5 cursor-pointer"
              icon={<PlusOutlined />}
              onClick={() => navigate("/create-coach")}
            >
              Add Coach
            </Button>
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full  text-left	 text-sm  text-gray-500">
            <thead className="text-xs text-gray-700 bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-3 whitespace-nowrap">
                  Name <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Title <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Email ID <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Major <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  College name <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Gender <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Status <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Created On
                </th>
                <th scope="col" className="text-center px-3 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top cursor-pointer"
                  onClick={() => navigate("/coach-detail")}
                >
                  {" "}
                  Johny James
                </th>
                <td className="px-3 py-4 vertical-top"></td>
                <td className="px-3 py-4 vertical-top"></td>
                <td className="px-3 py-4 vertical-top"></td>
                <td className="px-3 py-4 vertical-top"></td>
                <td className="px-3 py-4 vertical-top"></td>
                <td className="px-3 py-4 vertical-top">
                  <Switch />
                </td>
                <td className="px-3 py-4 vertical-top"></td>
                <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                  <Tooltip title="Document File">
                    <FileExclamationOutlined className="mx-1.5 cursor-pointer" />
                  </Tooltip>
                  <Tooltip title="Edit">
                    <EditOutlined
                      className="mx-1.5 cursor-pointer"
                      onClick={() => navigate("/create-coach")}
                    />
                  </Tooltip>
                  <Tooltip title="Delete">
                    <DeleteOutlined
                      className="mx-1.5 cursor-pointer"
                      onClick={() => setIsDeleteModalOpen(true)}
                    />
                  </Tooltip>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
      {/* delete modal */}
      <ConfirmationModal
        ConfirmationHeading="Delete"
        ConfirmationParagraph="Are you sure you want to delete this Coach?"
        isOpen={isDeleteModalOpen}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
      />
    </>
  );
};
export default ManageCoach;