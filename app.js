const express = require('express');
const app = express();
const fs = require('fs');
const folderPath = './files';

app.get('/createTxtFile', (req, res) => {
    const dtTime = new Date();
    const year = dtTime.getFullYear();
    const month = String(dtTime.getMonth() + 1).padStart(2, '0');
    const day = String(dtTime.getDate()).padStart(2, '0');
    const hour = String(dtTime.getHours()).padStart(2, '0');
    const minute = String(dtTime.getMinutes()).padStart(2, '0');
    const second = String(dtTime.getSeconds()).padStart(2, '0');
    const filename = `${day}-${month}-${year}_${hour}-${minute}-${second}.txt`;
    
    if (!fs.existsSync(folderPath)) { // Check if folder doesn't exist
        fs.mkdirSync(folderPath);
    }
    const filepath = `${folderPath}/${filename}`;
    const content = `Current Time Stamp : ${hour}:${minute}:${second}`;
    fs.writeFile(filepath, content, (error) => {
        if (error) throw error;
        res.send(`Text file ${filename} created successfully`);
    })

})

app.get('/fetchFiles', (req, res) => {
let html = "";
fs.readdir(folderPath, (err, files) => {
   
    let tbody = "";
    if (err) throw err
    files.forEach((file,index) =>{
       const stat = fs.statSync(`${folderPath}/${file}`);
       const fileSize = Math.max(stat.size/1024,1)+' kb';
       const fileType = file.split('.').pop();
       
        tbody+=`
        <tr>
        <td style="font-size:20px;text-align:left;padding:5px;border:1px solid blue;width:50px">${index+1}</td>
        <td style="font-size:20px;text-align:left;padding:5px;border:1px solid blue;width:250px">${file}</td>
        <td style="font-size:20px;text-align:left;padding:5px;border:1px solid blue;width:100px">${fileSize}</td>
        <td style="font-size:20px;text-align:left;padding:5px;border:1px solid blue;width:100px">${fileType}</td>
        </tr>
        `
    })
    html = `
    <p style="font-size:24px;margin:20px 0px 0px 20px;font-weight:bold">List of Files</p>
    <table style="border-collapse:collapse;margin:20px 0px 0px 20px">
    <thead>
    <tr>
    <th style="font-size:20px;text-align:left;padding:5px;;border:1px solid blue;width:50px">Sl.No</th>
    <th style="font-size:20px;text-align:left;padding:5px;;border:1px solid blue;width:250px">File Name</th>
    <th style="font-size:20px;text-align:left;padding:5px;;border:1px solid blue;width:100px">File Size</th>
    <th style="font-size:20px;text-align:left;padding:5px;;border:1px solid blue;width:100px">File Type</th>
    </tr>
    </thead>
    <tbody>
    ${tbody}
    </tbody>
    </table>
    `
    res.send(html);
})

});

app.listen(3000, () => {
    console.log('listening on port 3000');
})