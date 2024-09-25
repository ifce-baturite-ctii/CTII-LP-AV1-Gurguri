const {senhaForte} = require("../main/senha-forte.js");

describe('Testes para a fun. senhaForte', () => {
    test('Senha somente letras: f("senha") => false', () => {
        expect(senhaForte('senha')).toBeFalsy().not().toBeNull();
    });

    test('Senha com tam. muito pequeno: f("A3&24") => false', () => {
        expect(senhaForte('A3&24')).toBeFalsy().not().toBeNull();
    })

    test('Senha apenas com números e especiais: f("34&23#") => false', () => {
        expect(senhaForte('34&23#')).toBeFalsy().not().toBeNull();
    });

    test('Testando uma senha segura N4l@N3t', () => {
        expect(senhaForte('N4l@N3t')).toBeTruthy().not().toBeNull();
    });
});