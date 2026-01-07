import domtoimage from "dom-to-image-more";
import jsPDF from "jspdf";

export default function DownloadPDFButton({ pageRefs }) {
  const downloadPDF = async () => {
    const pdf = new jsPDF("p", "mm", "a4");

    document.body.classList.add("pdf-export");

    try {
      for (let i = 0; i < pageRefs.current.length; i++) {
        const node = pageRefs.current[i];
        if (!node) continue;

        const dataUrl = await domtoimage.toPng(node, {
          bgcolor: "#ffffff",
          scale: 2,
          cacheBust: true,
        });

        if (i > 0) pdf.addPage();

        pdf.addImage(dataUrl, "PNG", 0, 0, 210, 297);
      }

      pdf.save("id-cards.pdf");
    } catch (err) {
      console.error(err);
      alert("PDF generation failed.");
    } finally {
      document.body.classList.remove("pdf-export");
    }
  };

  return (
    <button
      onClick={downloadPDF}
      className="px-6 py-2 bg-blue-600 text-white rounded"
    >
      Download PDF
    </button>
  );
}
