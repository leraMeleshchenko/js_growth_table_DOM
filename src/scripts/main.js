'use strict';

// write code here
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
// const field = document.querySelector('.field');
const tbody = document.querySelector('tbody');
const tr2 = document.querySelector('tr');

appendRow.addEventListener('click', (e) => {
  const tr = document.createElement('tr');

  for (let i = 0; i < tr2.children.length; i++) {
    const td = document.createElement('td');

    tr.appendChild(td);
  }

  if (tbody.children.length < 10) {
    tbody.appendChild(tr);
  }

  if (tbody.children.length >= 10) {
    appendRow.disabled = true;
  }

  if (tbody.children.length > 2) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', (e) => {
  if (tbody.children.length > 2) {
    tbody.removeChild(tbody.lastElementChild);
    removeRow.disabled = false;
  }

  if (tbody.children.length <= 2) {
    removeRow.disabled = true;
  }

  if (tbody.children.length < 10) {
    appendRow.disabled = false;
  }
});

appendColumn.addEventListener('click', () => {
  Array.from(tbody.children).forEach((tr) => {
    tr.appendChild(document.createElement('td'));
  });

  if (tbody.firstElementChild.children.length >= 10) {
    appendColumn.disabled = true;
  }

  if (tbody.firstElementChild.children.length > 2) {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  Array.from(tbody.children).forEach((tr) => {
    if (tr.children.length > 2) {
      tr.removeChild(tr.lastElementChild);
    }
  });

  if (tbody.firstElementChild.children.length <= 2) {
    removeColumn.disabled = true;
  }

  if (tbody.firstElementChild.children.length < 10) {
    appendColumn.disabled = false;
  }
});
