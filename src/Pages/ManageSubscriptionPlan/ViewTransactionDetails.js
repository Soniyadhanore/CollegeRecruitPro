import { Card, Typography, Button, Input } from "antd";
import { FilterOutlined, LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import SortingArrow from "../../Common/SortingArrow";
import EmptyComponent from "../../Component/Empty";
const ViewTransactionDetails = () => {
  const { Search } = Input;
  const navigate = useNavigate();
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <>
      <Card>
        <div className="flex justify-between	mb-4 gap-5">
          <div className="">
            <Typography className="text-xl font-semibold" align={"left"}>
              <LeftOutlined
                className="text=lg text-black mr-2 cursor-pointer"
                onClick={() => navigate(-1)}
              />
              Transaction History
            </Typography>
          </div>
          <div className="flex justify-end flex-wrap gap-3">
            <Search
              placeholder="Search by athlete name...   "
              onSearch={onSearch}
              style={{
                width: 250,
              }}
              className="mx-1.5 cursor-pointer"
            />
            <Button
              size={14}
              className="mx-1.5 cursor-pointer inline-btn"
              icon={<FilterOutlined />}
            >
              Filter
            </Button>
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-left text-sm  text-gray-500">
            <thead className=" text-gray-700 capitalize text-xs	 bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-3 whitespace-nowrap">
                  Athlete name <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Plan name <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Plan price <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Transaction ID <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Transaction Date & Time <SortingArrow />
                </th>
                <th scope="col" className="px-3 py-3">
                  Transaction Status <SortingArrow />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="text-center">
                  <EmptyComponent />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
};
export default ViewTransactionDetails;