import { Card, Divider, Button, Typography } from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const TermsAndConditions = () => {
  return (
    <Card>
      <div className="min-h-[calc(100vh_-_290px)] editor-height">
        <Typography className="text-xl font-semibold mb-4" align={"left"}>
          Terms & Conditions
        </Typography>
        <CKEditor className="" editor={ClassicEditor} />
      </div>
      <Divider />
      <div className="flex justify-end gap-2">
        <Button type="primary">Save</Button>
      </div>
    </Card>
  );
};
export default TermsAndConditions;