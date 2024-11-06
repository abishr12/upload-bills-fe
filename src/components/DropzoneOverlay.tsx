import React, { useCallback, useState } from 'react';
import Dropzone from 'react-dropzone';
import "./DropzoneOverlay.css";
import axios from 'axios';

interface DropzoneOverlayProps {
  setUpdateExpenseTable: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropzoneOverlay = ({ setUpdateExpenseTable }: DropzoneOverlayProps) => {

  // TODO: fix any type here
  const onDrop = useCallback((acceptedFiles: any[]) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('file', file);
    axios.post('http://localhost:8080/bills', formData)
      .then((response) => {
        console.log(response);
        setUpdateExpenseTable(true);
      });
  }, []);
  return (
    <Dropzone maxFiles={1} noClick={true} onDrop={onDrop}>
  {({getRootProps, getInputProps, isDragActive}) => (
    <div {...getRootProps({className: `dropzone ${isDragActive ? "dropzone-ready": ""}`})}>
      <input {...getInputProps()} />
      {isDragActive ? 
      <p>Drop the files here ...</p>
      : <p>Drag 'n' drop some files here, or click to select files</p>}
    </div>
  )}
</Dropzone>
  );
};

export default DropzoneOverlay;