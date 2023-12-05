//const assert = require('assert'); // viene por defecto en node
const assert = require('chai').assert;
const expect = require('chai').expect;

import Todo from '../../src/classes/todo';

describe('Suit Todos', function () {

    const todos = new Todo();

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

    it('debe de eliminar un item peras', function () {

        todos.add('peras');
        todos.remove('peras');
        expect(todos.list).to.not.include.members(['peras']);

    });

    it('debe retornar un json con los todos (async/await), status code 200', async function () {

        const response = await fetch('http://localhost:3000/todo',{ method: 'GET' });
        expect(response.status).to.equal(200);

        const data = await response.json();
        expect(data).to.be.an('object');
        expect(data).to.have.property('todos');
        expect(data.todos).to.be.an('array');

    });


});