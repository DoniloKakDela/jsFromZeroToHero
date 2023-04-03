function createList(title, list) {
  const titleElement = document.createElement('h2');
  titleElement.textContent = title;
  document.body.appendChild(titleElement);

  const listElement = createNodeList(list, 100);
  document.body.appendChild(listElement);
}

function createNodeList(nodes, fontSize) {
  const ul = document.createElement('ul');
  
  nodes.forEach(node => {
    const li = document.createElement('li');
    li.textContent = node.value;
    li.style.fontSize = `${fontSize}%`;
    
    if (node.children) {
      const childList = createNodeList(node.children, fontSize - 10);
      li.appendChild(childList);
    }

    ul.appendChild(li);
  });

  return ul;
}

const exampleList = [
  {
    value: 'Пункт 1.',
    children: null,
  },
  {
    value: 'Пункт 2.',
    children: [
      {
        value: 'Подпункт 2.1.',
        children: null,
      },
      {
        value: 'Подпункт 2.2.',
        children: [
          {
            value: 'Подпункт 2.2.1.',
            children: null,
          },
          {
            value: 'Подпункт 2.2.2.',
            children: null,
          }
        ],
      },
      {
        value: 'Подпункт 2.3.',
        children: null,
      }
    ]
  },
  {
    value: 'Пункт 3.',
    children: null,
  }
];

createList("Список", exampleList);