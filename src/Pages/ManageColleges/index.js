import { useState } from "react";
import { Tooltip, Card, Typography, Switch, Button } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  FileExclamationOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import SortingArrow from "../../Common/SortingArrow";
import ConfirmationModal from "../../Modal/ConfirmationModal";
const ManageCollege = () => {
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
              Manage Colleges
            </Typography>
          </div>
          <div>
            <Search
              placeholder="Search college by name...."
              onSearch={onSearch}
              style={{
                width: 250,
              }}
              className="mx-1.5 cursor-pointer"
            />
            <Button
              type="primary"
              size={14}
              className="mx-1.5 cursor-pointer"
              icon={<PlusOutlined />}
              onClick={() => navigate("/create-college")}
            >
              Add College
            </Button>
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full  text-left	 text-sm  text-gray-500">
            <thead className=" text-gray-700 capitalize text-xs	 bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-3 whitespace-nowrap">
                  College Name <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Location <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Sports <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Status <SortingArrow />
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-center whitespace-nowrap vertical-top"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top cursor-pointer"
                  onClick={() => navigate("/view-college")}
                >
                  St. Stephen Higher Secondary
                </th>
                <td className="px-3 py-4 vertical-top">Boston, USA</td>
                <td className="px-3 py-4 vertical-top">
                  Basketball{" "}
                  <Tooltip title="Once the user will click on i icon, he will see all the sports">
                    <ExclamationCircleOutlined className="mx-1.5 cursor-pointer" />
                  </Tooltip>
                </td>
                <td className="px-3 py-4 vertical-top">
                  <Switch />
                </td>
                <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                  <Tooltip title="Document File">
                    <FileExclamationOutlined className="mx-1.5 cursor-pointer" />
                  </Tooltip>
                  <Tooltip title="Edit">
                    <EditOutlined
                      onClick={() => navigate("/create-college")}
                      className="mx-1.5 cursor-pointer"
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
        ConfirmationParagraph="Are you sure you want to delete this College?"
        isOpen={isDeleteModalOpen}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
      />
    </>
  );
};
export default ManageCollege;
