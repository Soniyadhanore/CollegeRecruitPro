import { useState } from "react";
import { Tooltip, Card, Typography, Switch } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import SortingArrow from "../../Common/SortingArrow";
import ConfirmationModal from "../../Modal/ConfirmationModal";
const ManageAthlete = () => {
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
              Manage Athlete
            </Typography>
          </div>
          <div>
            <Search
              placeholder="Search by name or mail address..."
              onSearch={onSearch}
              style={{
                width: 250,
              }}
              className="mx-1.5 cursor-pointer"
            />
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full  text-left	 text-sm  text-gray-500">
            <thead className=" text-gray-700 capitalize text-xs	 bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-3 whitespace-nowrap">
                  Athlete ID <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Full Name <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Email ID <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Sports <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Gender <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Subscription <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Registered Date
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
                >
                  C212
                </th>
                <td className="px-3 py-4 vertical-top">Joseph</td>
                <td className="px-3 py-4 vertical-top">joseph@gmail.com</td>
                <td className="px-3 py-4 vertical-top">Baseball</td>
                <td className="px-3 py-4 vertical-top">Male</td>
                <td className="px-3 py-4 vertical-top">Free</td>
                <td className="px-3 py-4 vertical-top">1st May 24</td>
                <td className="px-3 py-4 vertical-top">
                  <Switch />
                </td>
                <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                  <Tooltip title="View Athlete">
                    <EyeOutlined className="mx-1.5 cursor-pointer" onClick={() => navigate("/view-athlete")}/>
                  </Tooltip>
                  <Tooltip title="Edit">
                    <EditOutlined
                      onClick={() => navigate("/edit-athlete")}
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
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top cursor-pointer"
                >
                  H212
                </th>
                <td className="px-3 py-4 vertical-top">Suzzane</td>
                <td className="px-3 py-4 vertical-top">Suzzane@gmail.com</td>
                <td className="px-3 py-4 vertical-top">
                  Baseball{" "}
                  <Tooltip title="Once the user will click on i icon, he will see all the sports chosen by the athlete">
                    <ExclamationCircleOutlined className="mx-1.5 cursor-pointer" />
                  </Tooltip>
                </td>
                <td className="px-3 py-4 vertical-top">Female</td>
                <td className="px-3 py-4 vertical-top">Premium</td>
                <td className="px-3 py-4 vertical-top">31st Apr 24</td>
                <td className="px-3 py-4 vertical-top">
                  <Switch />
                </td>
                <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                  <Tooltip title="View Athlete">
                    <EyeOutlined className="mx-1.5 cursor-pointer"  onClick={() => navigate("/view-athlete")}/>
                  </Tooltip>
                  <Tooltip title="Edit">
                    <EditOutlined
                      onClick={() => navigate("/edit-athlete")}
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
        ConfirmationParagraph="Are you sure you want to delete this Athlete"
        isOpen={isDeleteModalOpen}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
      />
    </>
  );
};
export default ManageAthlete;