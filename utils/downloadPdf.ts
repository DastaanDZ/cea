// utils/downloadPdf.ts

const downloadPdf = async (link : string): Promise<void> => {
    try {
      const response: Response = await fetch(link);
      const blob: Blob = await response.blob();
  
      // Create a URL for the blob object
      const url: string = window.URL.createObjectURL(blob);
  
      // Create a hidden anchor element
      const a: HTMLAnchorElement = document.createElement('a');
      a.href = url;
      a.download = 'your_pdf_file_name.pdf'; // Set the filename for download
      document.body.appendChild(a);
      
      // Trigger the click event on the anchor element
      a.click();
  
      // Remove the anchor element from the DOM
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };
  
  export default downloadPdf;
  