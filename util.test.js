const { generateText, createElement } = require('./util'); //tipo de importação

//unit test: lembrar de checar falsos positivos e opostos (ex.: ausencia de dado)
test('should output name and age', () => {
    const text = generateText('Alex', 29);
    expect(text).toBe('Alex (29 years old)');
    const text2 = generateText('Ana', 22);
    expect(text2).toBe('Ana (22 years old)');
});

test('should output undefined', () => {
    const text = generateText();
    expect(text).toBe('undefined (undefined years old)');
})