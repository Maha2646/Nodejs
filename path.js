const path=require('path')
const filePath='C:\Users\User\OneDrive\Desktop\MERN\NODE\Nodeex\path.js'
console.log("Directory: ",path.dirname(filePath))
console.log("File Name: ",path.basename(filePath))
console.log("Extension Name: ",path.extname(filePath))
const newFilePath=path.join(__dirname,'os.js')
console.log(newFilePath)

