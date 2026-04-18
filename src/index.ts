import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(__dirname, 'data.json');

// Function to read data
function readData(): any[] {
  if (!fs.existsSync(dataFilePath)) {
    return [];
  }
  const data = fs.readFileSync(dataFilePath, 'utf-8');
  return JSON.parse(data);
}

// Function to write data
function writeData(data: any[]): void {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

// CRUD Operations
function createItem(item: any): void {
  const data = readData();
  data.push(item);
  writeData(data);
}

function readItems(): any[] {
  return readData();
}

function updateItem(index: number, newItem: any): void {
  const data = readData();
  if (index >= 0 && index < data.length) {
    data[index] = newItem;
    writeData(data);
  } else {
    console.error('Invalid index');
  }
}

function deleteItem(index: number): void {
  const data = readData();
  if (index >= 0 && index < data.length) {
    data.splice(index, 1);
    writeData(data);
  } else {
    console.error('Invalid index');
  }
}

export { readItems, createItem, updateItem, deleteItem };

// Example usage
createItem({ id: 1, name: 'Example Item' });
console.log(readItems());