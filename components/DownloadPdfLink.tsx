"use client";

import downloadPdf from "@/utils/downloadPdf";

interface DownloadPdfLinkProps {
  link: string;
}

const DownloadPdfLink: React.FC<DownloadPdfLinkProps> = ({ link }) => {
  const handleDownloadPdf = () => {
    downloadPdf(link);
  };

  return <p onClick={handleDownloadPdf}>Download PDF</p>;
};

export default DownloadPdfLink;
