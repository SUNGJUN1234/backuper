const fs = require('fs');
const path = require('path');

const desktopPath = path.join(require('os').homedir(), 'Desktop'); // 바탕화면 경로 가져오기

const folderName = '새로운폴더'; // 만들고자 하는 폴더 이름

const folderPath = path.join(desktopPath, folderName); // 폴더 경로 생성

// 폴더가 이미 존재하는지 확인 후 없으면 폴더 생성
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
  console.log(`'${folderName}' 폴더가 바탕화면에 생성되었습니다.`);
} else {
  console.log(`'${folderName}' 폴더는 이미 존재합니다.`);
}