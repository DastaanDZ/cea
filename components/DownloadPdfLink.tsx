"use client";

import downloadPdf from "@/utils/downloadPdf";

interface DownloadPdfLinkProps {
  link: string;
  name: string | null;
  title: string;
}

const DownloadPdfLink: React.FC<DownloadPdfLinkProps> = ({
  link,
  name,
  title,
}) => {
  const handleDownloadPdf = () => {
    const obj = {
      name: name,
      link: link,
    };
    downloadPdf(obj);
  };

  return <p onClick={handleDownloadPdf}>{title}</p>;
};

export default DownloadPdfLink;
