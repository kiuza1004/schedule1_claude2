import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(__dirname, '../data.json');

// Clear data.json before tests
beforeAll(() => {
  if (fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([]));
  }
});