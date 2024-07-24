import { Card, Typography, Button, Input, Tabs } from "antd";
import {
  FilterOutlined,
  LeftOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import ViewFreePlanSubscriberDetails from "./ViewSubscriptionDetailsTab/ViewFreePlanSubscriberDetails";
import ViewPremiumPlanSubscriberDetails from "./ViewSubscriptionDetailsTab/ViewPremiumPlanSubscriberDetails";
const ViewSubscriptionDetails = () => {
  const { Search } = Input;
  const { TabPane } = Tabs;
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
              Subscription Plan Details
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
        <div className="relative mt-6">
          <div className="absolute top-[4px] right-0 text-[22px]">
            {" "}
            <DownloadOutlined />
          </div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="View Free Plan Subscriber Details" key="1">
              <ViewFreePlanSubscriberDetails />
            </TabPane>
            <TabPane tab="View Premium Plan Subscriber Details " key="2">
              <ViewPremiumPlanSubscriberDetails />
            </TabPane>
          </Tabs>
        </div>
      </Card>
    </>
  );
};
export default ViewSubscriptionDetails;