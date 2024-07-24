import { Col, Row } from "antd";
import SortingArrow from "../../../Common/SortingArrow";
const ViewFreePlanSubscriberDetails = () => {
  return (
    <>
      <Row gutter={[40, 16]} className="mt-3 mb-6">
        <Col
          className="gutter-row flex items-start justify-start"
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
        >
          <div className="text-base font-medium text-black w-[250px]">
            Plan Name :{" "}
          </div>
          <div className="text-base">Free Plan</div>
        </Col>
        <Col
          className="gutter-row flex items-start justify-start"
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
        >
          <div className="text-base font-medium text-black w-[250px]">
            Upload video limit:{" "}
          </div>
          <div className="text-base">2</div>
        </Col>
        <Col
          className="gutter-row flex items-start justify-start"
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
        >
          <div className="text-base font-medium text-black w-[250px]">
            Amount :{" "}
          </div>
          <div className="text-base">$0</div>
        </Col>
        <Col
          className="gutter-row flex items-start justify-start"
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
        >
          <div className="text-base font-medium text-black w-[250px]">
            Upload Image limit:{" "}
          </div>
          <div className="text-base">5</div>
        </Col>
        <Col
          className="gutter-row flex items-start justify-start"
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
        >
          <div className="text-base font-medium text-black w-[250px]">
            Search College Limit:{" "}
          </div>
          <div className="text-base">3</div>
        </Col>
      </Row>
      <div className="relative overflow-x-auto">
        <table className="w-full  text-left	 text-sm  text-gray-500">
          <thead className=" text-gray-700 capitalize text-xs	 bg-gray-50">
            <tr>
              <th scope="col" className="px-3 py-3 whitespace-nowrap">
                Athlete Name <SortingArrow />
              </th>
              <th scope="col" className="px-3 py-3">
                Email ID <SortingArrow />
              </th>
              <th scope="col" className="px-3 py-3">
                Subscription Plan <SortingArrow />
              </th>
              <th scope="col" className="px-3 py-3">
                Subs Start Date <SortingArrow />
              </th>
              <th scope="col" className="px-3 py-3">
                Subs End Date <SortingArrow />
              </th>
              <th scope="col" className="px-3 py-3">
                Payment Amount <SortingArrow />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-3 py-4 vertical-top">Jonnah</td>
              <td className="px-3 py-4 vertical-top">jonah@gmail.com</td>
              <td className="px-3 py-4 vertical-top">Free</td>
              <td className="px-3 py-4 vertical-top">27th May 24</td>
              <td className="px-3 py-4 vertical-top">27th May 24</td>
              <td className="px-3 py-4 vertical-top">$0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ViewFreePlanSubscriberDetails;
