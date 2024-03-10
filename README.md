

# Image EXIF Analysis Web Application

## Description
This web application allows users to upload images and analyze their EXIF metadata. If an image's height is greater than 60 meters or its speed is higher than 5 meters per second, the application flags it as a potential violation. Additionally, the application provides a dashboard to display the analysis results and enables users to download the report in PDF or CSV format.

## Features
- Image upload functionality
- EXIF metadata analysis
- Detection of potential violations based on height and speed criteria
- Dashboard to display analysis results
- Downloadable reports in PDF or CSV format

## Technologies Used
- Frontend:
  - HTML, CSS, JavaScript
  - React.js
  - Axios for HTTP requests
  - Leaflet for map visualization
- Backend:
  - Node.js
  - Express.js
  - Multer for handling file uploads
  - ExifTool for extracting EXIF metadata
- Report Generation:
  - React-PDF for generating PDF reports
  - React-CSV for generating CSV reports

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/your-username/image-exif-analysis.git
   ```

2. Navigate to the project directory:
   ```
   cd image-exif-analysis
   ```

3. Install dependencies for both frontend and backend:
   ```
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

4. Run the backend server:
   ```
   npm start
   ```

5. Run the frontend application:
   ```
   cd ../frontend
   npm start
   ```

6. Access the application at `http://localhost:3000`.

## Usage
1. Upload an image using the provided interface.
2. View the analysis results on the dashboard.
3. Download the report in PDF or CSV format.

