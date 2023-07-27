// Creating a mock for localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: key => store[key] || null,
    setItem: (key, value) => (store[key] = value.toString()),
    removeItem: key => delete store[key],
    clear: () => (store = {}),
  };
})();

// Mock localStorage in the Activities class
Object.defineProperty(global, 'localStorage', {
  value: localStorageMock,
});

module.exports.localStorageMock = localStorageMock;