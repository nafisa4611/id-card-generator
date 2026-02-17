import { PDFDownloadLink } from "@react-pdf/renderer";
import IDCardDocument from "../idCardPdf/IDCardDocument";


export default function DownloadPDFButton({ users }) {
  return (
    <PDFDownloadLink
      document={<IDCardDocument users={users} />}
      fileName="id-cards.pdf"
    >
      {({ loading }) => (
        <button className="bg-primary hover:bg-textColor text-bg font-bold py-2 px-6 rounded-full shadow-lg transition-colors duration-200 cursor-pointer flex items-center gap-2">
          {loading ? "Preparing PDF..." : "Download PDF"}
        </button>
      )}
    </PDFDownloadLink>
  );
}
