import React, { useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Document, Page, Text, PDFViewer } from '@react-pdf/renderer';

function App() {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setAnalysis(response.data.analysis);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleDownloadPDF = () => {
    const MyDocument = (
      <Document>
        <Page>
          <Text>Analysis Report</Text>
          {analysis && <Text>{JSON.stringify(analysis, null, 2)}</Text>}
        </Page>
      </Document>
    );

    // Open the PDF in a new tab
    const blob = new Blob([MyDocument], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    window.open(url);
  };

  const handleDownloadCSV = () => {
    const analysisCSV = JSON.stringify(analysis, null, 2);

    // Convert JSON to CSV format
    const csvContent = `data:text/csv;charset=utf-8,${analysisCSV}`;

    // Create CSV file and initiate download
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'analysis.csv');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="App">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload</button>
      
      {analysis && (
        <div>
          <h2>Analysis Results</h2>
          {/* Display analysis results */}
          <pre>{JSON.stringify(analysis, null, 2)}</pre>
        </div>
      )}

      <div>
        <h3>Download Report</h3>
        <button onClick={handleDownloadPDF}>Download PDF</button>
        <button onClick={handleDownloadCSV}>Download CSV</button>
      </div>

      {/* Add map component */}
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
