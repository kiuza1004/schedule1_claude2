import { readItems, createItem } from '../index';

describe('CRUD Operations', () => {
  it('should create and read items', () => {
    createItem({ id: 1, name: 'Test Item' });
    const items = readItems();
    expect(items).toEqual([{ id: 1, name: 'Test Item' }]);
  });
});