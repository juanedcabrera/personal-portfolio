'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import ReactPlayer from 'react-player';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Resume = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      {isClient && (
        <section className={styles.resumeBlock}>
          <ReactPlayer
            className="react-player"
            url="/uploads/resume-video.mp4"
            width="100%"
            height="30em"
            controls={true}
          />
          <div >
          <Document
            file="/uploads/resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={console.error}
            className={styles.resumeDocument}
          >
            <Page pageNumber={pageNumber}/>
          </Document>
          </div>
          <div>
            Page {pageNumber} of {numPages}
          </div>
          <p>
            <button
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber(pageNumber - 1)}
            >
              Previous Page
            </button>
            <button
              disabled={pageNumber >= numPages}
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              Next Page
            </button>
          </p>
          <a href="/uploads/resume.pdf" className={styles.resumeDownload} download>
            Download Resume Here
          </a>
        </section>
      )}
    </>
  );
};

export default Resume;
