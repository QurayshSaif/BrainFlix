import "./UploadPage.scss";
import UploadForm from "../../components/UploadForm/UploadForm";

export default function UploadPage({ fetchVideo }) {
  return (
    <>
      <UploadForm fetchVideo={fetchVideo} />
    </>
  );
}
