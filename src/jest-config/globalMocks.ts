const mock = () => {
    let storage = {};
    return {
        getItems: key => (key in storage ? storage[key] : null),
        setItems: (key, value) => (storage[key] = value || ''),
        removeItems: key => delete storage[key],
        clear: () => (storage = {})
    };
};

Object.defineProperty(window, 'localStorage', { value: mock() });
Object.defineProperty(window, 'sessionStorage', { value: mock() });
Object.defineProperty(window, 'getComputedStyle', {
    value: () => ['--webkit-appearance']
});