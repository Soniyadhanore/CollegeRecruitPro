import { useState } from "react";
import { Tooltip, Button, Card, Typography, Switch, Select } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import SortingArrow from "../../Common/SortingArrow";
import ConfirmationModal from "../../Modal/ConfirmationModal";
const selectUserRole = [
  {
    value: "1",
    label: "Option 1",
  },
  {
    value: "2",
    label: "Option 2",
  },
  {
    value: "3",
    label: "Option 3",
  },
];
const selectStatus = [
  {
    value: "1",
    label: "Option 1",
  },
  {
    value: "2",
    label: "Option 2",
  },
];
const ManageMediaBlog = () => {
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
              Manage Media/Blog
            </Typography>
          </div>
          <div className="flex justify-end flex-wrap gap-3">
            <Search
              placeholder="Search Blog by Title.."
              onSearch={onSearch}
              style={{
                width: 250,
              }}
              className="mx-1.5 cursor-pointer"
            />
            <Select
              style={{
                width: 150,
              }}
              placeholder="Sort by date"
              options={selectUserRole}
              className="cursor-pointer"
            />
            <Select
              style={{
                width: 150,
              }}
              placeholder="Sort by category"
              options={selectStatus}
              className="cursor-pointer"
            />
            <Button
              type="primary"
              size={14}
              className="mx-1.5 cursor-pointer"
              icon={<PlusOutlined />}
              onClick={() => navigate("/create-blog")}
            >
              Post Blog
            </Button>
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full  text-left	 text-sm  text-gray-500">
            <thead className="text-xs text-gray-700 bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-3 whitespace-nowrap">
                  Title <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Category <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Description <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Created on <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Status <SortingArrow />
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
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
                >
                  <div className="flex items-center justify-start cursor-pointer">
                    <img
                      src="images/1.png"
                      alt="profile"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="mx-2">ProviderName</span>
                  </div>
                </th>
                <td className="px-3 py-4 vertical-top">Sports</td>
                <td className="px-3 py-4 vertical-top">
                  As basketball continues to evolve
                </td>
                <td className="px-3 py-4 vertical-top">1 May 2024</td>
                <td className="px-3 py-4 vertical-top">
                  <Switch />
                </td>
                <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                  <Tooltip title="Edit">
                    <EditOutlined
                      className="mx-1.5 cursor-pointer"
                      onClick={() => navigate("/create-blog")}
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
        ConfirmationParagraph="Are you sure you want to delete this blog?"
        isOpen={isDeleteModalOpen}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
      />
    </>
  );
};
export default ManageMediaBlog;