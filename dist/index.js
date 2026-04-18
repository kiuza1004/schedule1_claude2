"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dataFilePath = path_1.default.join(__dirname, 'data.json');
// Function to read data
function readData() {
    if (!fs_1.default.existsSync(dataFilePath)) {
        return [];
    }
    const data = fs_1.default.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data);
}
// Function to write data
function writeData(data) {
    fs_1.default.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}
// CRUD Operations
function createItem(item) {
    const data = readData();
    data.push(item);
    writeData(data);
}
function readItems() {
    return readData();
}
function updateItem(index, newItem) {
    const data = readData();
    if (index >= 0 && index < data.length) {
        data[index] = newItem;
        writeData(data);
    }
    else {
        console.error('Invalid index');
    }
}
function deleteItem(index) {
    const data = readData();
    if (index >= 0 && index < data.length) {
        data.splice(index, 1);
        writeData(data);
    }
    else {
        console.error('Invalid index');
    }
}
// Example usage
createItem({ id: 1, name: 'Example Item' });
console.log(readItems());
