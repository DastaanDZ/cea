// utils/downloadPdf.ts
interface DownloadPdfProps {
  name: string;
  link: string;
}
const downloadPdf = async (obj: any): Promise<void> => {
  try {
    if (obj.name !== "webLink") {
      const response: Response = await fetch(obj.link);
      const blob: Blob = await response.blob();

      // Create a URL for the blob object
      const url: string = window.URL.createObjectURL(blob);

      // Create a hidden anchor element
      const a: HTMLAnchorElement = document.createElement("a");
      a.href = url;
      a.download = obj.name; // Set the filename for download
      document.body.appendChild(a);

      // Trigger the click event on the anchor element
      a.click();

      // Remove the anchor element from the DOM
      document.body.removeChild(a);
    }
  } catch (error) {
    console.error("Error downloading PDF:", error);
  }
};

export default downloadPdf;
