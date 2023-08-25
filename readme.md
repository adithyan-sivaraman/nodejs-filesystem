# Nodejs-filesystem

This project provides APIs for creating and managing text files.

## API Documentation

### Create Text File

**Endpoint**: `http://localhost:3000/createTxtFile`
**Method**: GET

Creates a new text file with a timestamp as its text content.

**Request Parameters**

Not required.

**Example Request**

**Example Response**
Text file 20-08-2023_15-30-45.txt created successfully

### Fetch Files

**Endpoint**: `http://localhost:3000/fetchFiles`
**Method**: GET

Retrieves a list of files from the specific folder.

**Request Parameters**

None required.

**Example Request**

**Example Response**
HTML table with file details

## Installation and Setup

1. Clone this repository.
2. Install packages using `npm install`.
3. Start the server using `npm start`.

## Usage

1. Make API requests using tools like Postman.
2. Refer to the API documentation for details on available endpoints (https://documenter.getpostman.com/view/28692061/2s9Y5Wy3zo)


