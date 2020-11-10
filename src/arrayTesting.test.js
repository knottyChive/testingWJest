const create = require('./arrayTesting');

test('data assignment', () => {
    const arr = [];
    create(arr, 12);
    expect(arr).toContain(12);
});