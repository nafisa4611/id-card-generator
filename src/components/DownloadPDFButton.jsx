import domtoimage from "dom-to-image-more";
import jsPDF from "jspdf";

export default function DownloadPDFButton({ targetRef, fileName }) {
  const downloadPDF = async () => {
    if (!targetRef?.current) return;

    try {
      const scale = 3; // higher = sharper
      const node = targetRef.current;

      const dataUrl = await domtoimage.toPng(node, {
        bgcolor: "#ffffff",
        width: node.scrollWidth * scale,
        height: node.scrollHeight * scale,
        style: {
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: node.scrollWidth + "px",
          height: node.scrollHeight + "px",
        },
      });

      // Create PDF
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = 210; // mm
      const pageHeight = 297; // mm

      // Use actual image dimensions for aspect ratio
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pageWidth;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      let heightLeft = pdfHeight;
      let position = 0;

      // First page
      pdf.addImage(dataUrl, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;

      // Additional pages if needed
      while (heightLeft > 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(dataUrl, "PNG", 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(fileName || "id-cards.pdf");
    } catch (err) {
      console.error("PDF generation failed:", err);
      alert("PDF generation failed. Check console.");
    }
  };

  return (
    <button
      type="button"
      onClick={downloadPDF}
      className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Download PDF
    </button>
  );
}
