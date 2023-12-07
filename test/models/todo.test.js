//const assert = require('assert'); // viene por defecto en node
import { assert, expect } from 'chai';
import Todo from '../../src/models/todo';

describe('Suit Todos', function () {

    let todos;

    // Hooks
    before(function () {
        // Se ejecuta antes de todas las pruebas del bloque
    });
    after(function () {
        // Se ejecuta después de todas las pruebas del bloque
    });
    beforeEach(function () {
        // Se ejecuta antes de cada prueba del bloque
        todos = new Todo();
    });
    afterEach(function () {
        // Se ejecuta después de cada prueba del bloque
    });

    // caos de prueba
    it('debe de ser un array el todo list', function () {

        expect(todos.list).to.be.an('array');

    });

    it('no debe de contener items el todo list', function () {

        expect(todos.list.length).to.equal(0);

    });

    it('debe de agregar un item uvas', function () {

        todos.add('uvas');
        expect(todos.list).to.include.members(['uvas']);

    });

    // La función only() hace posible ejecutar solo el bloque o el caso de prueba al cual se lo añadamos. 
    //it.only('debe de eliminar un item peras', function () {
    it('debe de eliminar un item peras', function () {

        todos.add('peras');
        todos.remove('peras');
        expect(todos.list).to.not.include.members(['peras']);

    });

    it('debe retornar un json con los todos (async/await), status code 200', async function () {

        const response = await fetch('http://localhost:3000/api/todo', { method: 'GET' });
        expect(response.status).to.equal(200);

        const data = await response.json();
        expect(data).to.be.an('object');
        expect(data).to.have.property('todos');
        expect(data.todos).to.be.an('array');

    });

});