import { add } from './calc.js';

const operations = { add };

const form = document.getElementById('calc');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const op = operations[event.submitter?.dataset.op ?? 'add'];
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  result.textContent = String(op(a, b));
});
