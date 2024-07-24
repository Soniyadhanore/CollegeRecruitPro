import { Tooltip, Card, Typography, Button } from "antd";
import { EditOutlined, FileExclamationOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import SortingArrow from "../../Common/SortingArrow";
const ManageSubscriptionPlan = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <div className="flex justify-between	mb-4 gap-5">
          <div className="">
            <Typography className="text-xl font-semibold" align={"left"}>
              Manage Subscription Plan
            </Typography>
          </div>
          <div className="flex justify-end flex-wrap gap-3">
            <Button
              className="inline-btn"
              onClick={() => navigate("/view-subscription-details")}
            >
              View Subscription Details
            </Button>
            <Button
              type="primary"
              onClick={() => navigate("/view-transaction-details")}
            >
              View Transaction Details
            </Button>
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full  text-left	 text-sm  text-gray-500">
            <thead className=" text-gray-700 capitalize text-xs	 bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-3 whitespace-nowrap">
                  Plan Name <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Amount <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Search College Limit <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Upload Video Limit <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Upload Image Limit <SortingArrow />
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
                  onClick={() => navigate("")}
                >
                  Free Plan
                </th>
                <td className="px-3 py-4 vertical-top">$123</td>
                <td className="px-3 py-4 vertical-top">3 </td>
                <td className="px-3 py-4 vertical-top">2</td>
                <td className="px-3 py-4 vertical-top">5</td>
                <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                  <Tooltip title="Document File">
                    <FileExclamationOutlined className="mx-1.5 cursor-pointer" />
                  </Tooltip>
                  <Tooltip title="Edit">
                    <EditOutlined
                      onClick={() => navigate("/edit-subscription-details")}
                      className="mx-1.5 cursor-pointer"
                    />
                  </Tooltip>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top cursor-pointer"
                  onClick={() => navigate("")}
                >
                  Premium Plan
                </th>
                <td className="px-3 py-4 vertical-top">$123</td>
                <td className="px-3 py-4 vertical-top">Unlimited </td>
                <td className="px-3 py-4 vertical-top">Unlimited</td>
                <td className="px-3 py-4 vertical-top">Unlimited</td>
                <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                  <Tooltip title="Document File">
                    <FileExclamationOutlined className="mx-1.5 cursor-pointer" />
                  </Tooltip>
                  <Tooltip title="Edit">
                    <EditOutlined
                      onClick={() => navigate("/edit-subscription-details")}
                      className="mx-1.5 cursor-pointer"
                    />
                  </Tooltip>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
};
export default ManageSubscriptionPlan;