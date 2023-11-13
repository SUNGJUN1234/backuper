const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

const sourceFolderPath = 'C:\\xampp\\mysql\\data'; // 압축하려는 폴더 경로
const now = new Date();
const formattedDate = now.toISOString().replace(/[^0-9]/g, ''); // 년월일시분초 형식의 문자열 생성
const desktopPath = path.join(require('os').homedir(), 'Desktop'); // 바탕화면 경로 가져오기

const zipFileName = `${formattedDate}.zip`; // 압축 파일 이름
const backupDirName = 'backupdata'; // 백업 폴더 이름

// 백업 디렉토리 경로 생성
const backupDirPath = path.join(desktopPath, 'backuper', backupDirName);

// 압축 생성 스트림 생성
const output = fs.createWriteStream(path.join(backupDirPath, zipFileName));
const archive = archiver('zip', {
  zlib: { level: 9 } // 압축 레벨 설정 (옵션)
});

// 압축 파일 생성
archive.directory(sourceFolderPath, false); // 폴더 내의 파일 및 하위 폴더 압축
archive.pipe(output);

output.on('close', () => {
  console.log(`'${sourceFolderPath}' 폴더를 압축하여 '${zipFileName}' 파일을 생성했습니다.`);
});

archive.on('error', (err) => {
  console.error(`압축 중 오류 발생: ${err}`);
});

archive.finalize();
