import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './sample.less';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

export default function Left() {
  const [file, setFile] = useState('./sample.pdf');
  const [numPages, setNumPages] = useState(null);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div className="Example">
      <div className="Example__container">
        <div className="Example__container__document">
          <Document
            file={require("./sample.pdf").default}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {
              Array.from(
                new Array(numPages),
                (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                  />
                ),
              )
            }
          </Document>
        </div>
      </div>
    </div>
  );
        }