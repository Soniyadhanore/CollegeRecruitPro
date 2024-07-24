import { useState } from "react";
import { Tooltip, Button, Card, Typography } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Input } from "antd";
import CreateCategory from "../../Modal/CreateCategory";
import SortingArrow from "../../Common/SortingArrow";
import ConfirmationModal from "../../Modal/ConfirmationModal";
const ManageCategory = () => {
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const showAddCategoryModal = () => {
    setIsAddCategoryModalOpen(true);
  };
  const handleAddCategoryOk = () => {
    setIsAddCategoryModalOpen(false);
  };
  const handleAddCategoryCancel = () => {
    setIsAddCategoryModalOpen(false);
  };
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
              Manage Category
            </Typography>
          </div>
          <div>
            <Search
              placeholder="Search category by Name"
              onSearch={onSearch}
              style={{
                width: 250,
              }}
              className="mx-1.5 cursor-pointer"
            />
            <Button
              type="primary"
              size={14}
              onClick={showAddCategoryModal}
              className="mx-1.5 cursor-pointer"
              icon={<PlusOutlined />}
            >
              Add category
            </Button>
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full  text-left	 text-sm  text-gray-500">
            <thead className=" text-gray-700 capitalize text-xs	 bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-3 whitespace-nowrap">
                  Category Name <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Added On <SortingArrow />
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
                <td className="px-3 py-4 vertical-top">Sports</td>
                <td className="px-3 py-4 vertical-top">27th May 24</td>
                <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                  <Tooltip title="Edit">
                    <EditOutlined
                      onClick={showAddCategoryModal}
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
      <CreateCategory
        isOpen={isAddCategoryModalOpen}
        onOk={handleAddCategoryOk}
        onCancel={handleAddCategoryCancel}
      />
      {/* delete modal */}
      <ConfirmationModal
        ConfirmationHeading="Delete"
        ConfirmationParagraph="Are you sure you want to delete this category?"
        isOpen={isDeleteModalOpen}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
      />
    </>
  );
};
export default ManageCategory;