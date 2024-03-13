"use client";

import downloadPdf from "@/utils/downloadPdf";

interface DownloadPdfLinkProps {
  link: string;
  name: string | null;
}

const DownloadPdfLink: React.FC<DownloadPdfLinkProps> = ({ link, name }) => {
  const handleDownloadPdf = () => {
    const obj = {
      name: name,
      link: link,
    };
    downloadPdf(obj);
  };

  return <p onClick={handleDownloadPdf}>Download PDF</p>;
};

export default DownloadPdfLink;
