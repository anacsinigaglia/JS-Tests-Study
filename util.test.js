const { generateText, checkAndGenerateText } = require('./util'); //tipo de importação

//unit test: lembrar de checar falsos positivos e opostos (ex.: ausencia de dado)
test('should output name and age', () => {
    const text = generateText('Alex', 29);
    expect(text).toBe('Alex (29 years old)');
    const text2 = generateText('Ana', 22);
    expect(text2).toBe('Ana (22 years old)');
});

test('should output data-less text', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');
});

test('should output undefined', () => {
    const text = generateText();
    expect(text).toBe('undefined (undefined years old)');
});

//compõe teste integrado, pois "checkAndGenerateText" tem partes que podem falhar e fazer esse teste aqui falhar tb
test('should generate a valid text output', () => {
    const text = checkAndGenerateText('Max', 29);
    expect(text).toBe('Max (29 years old)');
})