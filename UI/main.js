const objectTasks = [
  {
    id: '1',
    name: 'Создать логотип приложения',
    description: 'Формат изображения – svg, размеры - 100х100px',
    createdAt: new Date('2023-02-09T23:00:00'),
    assignee: 'Saruman',
    status: 'In progress',
    priority: 'High',
    isPrivate: true,
    comments: [],
  },
  {
    id: '2',
    name: 'Переименовать константу DELAY#TIME',
    description:
      'Необходимо переименовать константу с DELAY#TIME на DELAY#API#TIME',
    createdAt: new Date('2023-02-10T23:00:00'),
    assignee: 'Frodo Baggins',
    status: 'To do',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '1',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-10T23:00:05'),
        author: 'Frodo Baggins',
      },
    ],
  },
  {
    id: '3',
    name: 'Lorem, ipsum dolor.',
    description:
      'Lorem, ipsum dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    createdAt: new Date('2023-02-11T23:00:00'),
    assignee: 'Frodo Baggins',
    status: 'To do',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '2',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-11T23:00:05'),
        author: 'Frodo Baggins',
      },
    ],
  },
  {
    id: '4',
    name: 'Lorem, ipsum.',
    description:
      'Lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.',
    createdAt: new Date('2023-02-12T23:00:00'),
    assignee: 'Frodo Baggins',
    status: 'Complete',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '3',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-12T23:00:05'),
        author: 'Frodo Baggins',
      },
    ],
  },
  {
    id: '5',
    name: 'Lorem ipsum dolor sit.',
    description:
      'Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing.',
    createdAt: new Date('2023-02-13T23:00:00'),
    assignee: 'Frodo Baggins',
    status: 'In progress',
    priority: 'High',
    isPrivate: true,
    comments: [
      {
        id: '4',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-13T23:00:05'),
        author: 'Frodo Baggins',
      },
    ],
  },
  {
    id: '6',
    name: 'Lorem, ipsum dolor.',
    description:
      'Lorem, ipsum dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    createdAt: new Date('2023-02-14T23:00:00'),
    assignee: 'Frodo Baggins',
    status: 'To do',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-14T23:00:05'),
        author: 'Frodo Baggins',
      },
    ],
  },
  {
    id: '7',
    name: 'Lorem, ipsum.',
    description:
      'Lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.',
    createdAt: new Date('2023-02-15T23:00:00'),
    assignee: 'Saruman',
    status: 'Complete',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '6',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-15T23:00:05'),
        author: 'Frodo Baggins',
      },
    ],
  },
  {
    id: '8',
    name: 'Lorem ipsum dolor sit.',
    description:
      'Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing.',
    createdAt: new Date('2023-02-16T23:00:00'),
    assignee: 'Frodo Baggins',
    status: 'In progress',
    priority: 'High',
    isPrivate: true,
    comments: [
      {
        id: '7',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-16T23:00:05'),
        author: 'Saruman',
      },
    ],
  },
  {
    id: '9',
    name: 'Lorem, ipsum dolor.',
    description:
      'Lorem, ipsum dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    createdAt: new Date('2023-02-17T23:00:00'),
    assignee: 'Frodo Baggins',
    status: 'To do',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '8',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-17T23:00:05'),
        author: 'Frodo Baggins',
      },
    ],
  },
  {
    id: '10',
    name: 'Lorem, ipsum.',
    description:
      'Lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.',
    createdAt: new Date('2023-02-18T23:00:00'),
    assignee: 'Frodo Baggins',
    status: 'Complete',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '9',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-18T23:00:05'),
        author: 'Frodo Baggins',
      },
    ],
  },
  {
    id: '11',
    name: 'Lorem ipsum dolor sit.',
    description:
      'Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing.',
    createdAt: new Date('2023-02-19T23:00:00'),
    assignee: 'Frodo Baggins',
    status: 'In progress',
    priority: 'High',
    isPrivate: true,
    comments: [
      {
        id: '10',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-19T23:00:05'),
        author: 'Frodo Baggins',
      },
    ],
  },
  {
    id: '12',
    name: 'Lorem, ipsum dolor.',
    description:
      'Lorem, ipsum dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    createdAt: new Date('2023-02-20T23:00:00'),
    assignee: 'Frodo Baggins',
    status: 'To do',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '11',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-20T23:00:05'),
        author: 'Frodo Baggins',
      },
    ],
  },
  {
    id: '13',
    name: 'Lorem, ipsum.',
    description:
      'Lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.',
    createdAt: new Date('2023-02-21T23:00:00'),
    assignee: 'Saruman',
    status: 'Complete',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '12',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-21T23:00:05'),
        author: 'Saruman',
      },
    ],
  },
  {
    id: '14',
    name: 'Lorem ipsum dolor sit.',
    description:
      'Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing.',
    createdAt: new Date('2023-02-22T23:00:00'),
    assignee: 'Frodo Baggins',
    status: 'In progress',
    priority: 'High',
    isPrivate: true,
    comments: [
      {
        id: '13',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-22T23:00:05'),
        author: 'Frodo Baggins',
      },
    ],
  },
  {
    id: '15',
    name: 'Lorem, ipsum dolor.',
    description:
      'Lorem, ipsum dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    createdAt: new Date('2023-02-23T23:00:00'),
    assignee: 'Frodo Baggins',
    status: 'To do',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '14',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-23T23:00:05'),
        author: 'Frodo Baggins',
      },
    ],
  },
  {
    id: '16',
    name: 'Lorem, ipsum.',
    description:
      'Lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.',
    createdAt: new Date('2023-02-24T23:00:00'),
    assignee: 'Frodo Baggins',
    status: 'Complete',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '15',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-24T23:00:05'),
        author: 'Frodo Baggins',
      },
    ],
  },
  {
    id: '17',
    name: 'Lorem ipsum dolor sit.',
    description:
      'Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing.',
    createdAt: new Date('2023-02-25T23:00:00'),
    assignee: 'Frodo Baggins',
    status: 'In progress',
    priority: 'High',
    isPrivate: true,
    comments: [
      {
        id: '16',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-25T23:00:05'),
        author: 'Frodo Baggins',
      },
    ],
  },
  {
    id: '18',
    name: 'Lorem, ipsum dolor.',
    description:
      'Lorem, ipsum dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    createdAt: new Date('2023-02-26T23:00:00'),
    assignee: 'Frodo Baggins',
    status: 'To do',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '17',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-26T23:00:05'),
        author: 'Frodo Baggins',
      },
    ],
  },
  {
    id: '19',
    name: 'Lorem, ipsum.',
    description:
      'Lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.',
    createdAt: new Date('2023-02-27T23:00:00'),
    assignee: 'Frodo Baggins',
    status: 'Complete',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '18',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-27T23:00:05'),
        author: 'Frodo Baggins',
      },
    ],
  },
  {
    id: '20',
    name: 'Lorem ipsum dolor sit.',
    description:
      'Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing.',
    createdAt: new Date('2023-02-28T23:00:00'),
    assignee: 'Frodo Baggins',
    status: 'In progress',
    priority: 'High',
    isPrivate: true,
    comments: [
      {
        id: '19',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-28T23:00:05'),
        author: 'Frodo Baggins',
      },
    ],
  },
];

// 1
class Task {
  #id;

  #name;

  #description;

  #createdAt;

  #assignee;

  #status;

  #priority;

  #isPrivate;

  #comments;

  constructor(
    name,
    description,
    assignee,
    status,
    priority,
    isPrivate,
    id,
    createdAt,
  ) {
    this.#id = id ?? `${Math.floor(Math.random() * 1000000000)}`;
    this.#name = name;
    this.#description = description;
    this.#createdAt = createdAt ?? new Date();
    this.#assignee = assignee;
    this.#status = status;
    this.#priority = priority;
    this.#isPrivate = isPrivate;
    this.#comments = [];
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    if (value.length > 100) {
      throw new Error('Name is too long');
    }
    this.#name = value;
  }

  get description() {
    return this.#description;
  }

  set description(value) {
    if (value.length > 280) {
      throw new Error('Description is too long');
    }
    this.#description = value;
  }

  get createdAt() {
    return this.#createdAt;
  }

  get assignee() {
    return this.#assignee;
  }

  set assignee(value) {
    if (!value) {
      throw new Error('Assignee is required');
    }
    this.#assignee = value;
  }

  get status() {
    return this.#status;
  }

  set status(value) {
    if (!value || !['To do', 'In progress', 'Complete'].includes(value)) {
      throw new Error('Invalid status');
    }
    this.#status = value;
  }

  get priority() {
    return this.#priority;
  }

  set priority(value) {
    if (!value || !['High', 'Medium', 'Low'].includes(value)) {
      throw new Error('Invalid priority');
    }
    this.#priority = value;
  }

  get isPrivate() {
    return this.#isPrivate;
  }

  set isPrivate(value) {
    if (typeof value !== 'boolean') {
      throw new Error('Invalid isPrivate value');
    }
    this.#isPrivate = value;
  }

  get comments() {
    return this.#comments;
  }

  set comments(value) {
    if (!Array.isArray(value)) {
      throw new Error('Comments must be an array');
    }
    this.#comments = value;
  }

  static validate(task) {
    return !(!task.id || typeof task.id !== 'string'
      || !task.name
      || typeof task.name !== 'string'
      || task.name.length > 100
      || !task.description
      || typeof task.description !== 'string'
      || task.description.length > 280
      || !task.createdAt
      || !(task.createdAt instanceof Date)
      || !task.assignee
      || typeof task.assignee !== 'string'
      || task.assignee.trim() === ''
      || !task.status
      || typeof task.status !== 'string'
      || !['To do', 'In progress', 'Complete'].includes(task.status)
      || !task.priority
      || typeof task.priority !== 'string'
      || !['High', 'Medium', 'Low'].includes(task.priority)
      || typeof task.isPrivate !== 'boolean'
      || !task.comments
      || !Array.isArray(task.comments));
  }
}

// 2

class Comment {
  #id;

  #text;

  #createdAt;

  #author;

  #currentUser = document.getElementById('current-user').innerHTML;

  constructor(text) {
    this.#id = `${Math.floor(Math.random() * 1000000000)}`;
    this.#text = text;
    this.#createdAt = new Date();
    this.#author = this.#currentUser;
  }

  get id() {
    return this.#id;
  }

  get text() {
    return this.#text;
  }

  set text(value) {
    this.#text = value;
  }

  get createdAt() {
    return this.#createdAt;
  }

  get author() {
    return this.#author;
  }

  set author(value) {
    this.#author = value;
  }

  static validate(comment) {
    return !(
      typeof comment.id !== 'string'
      || comment.id.trim().length === 0
      || typeof comment.text !== 'string'
      || comment.text.trim().length === 0
      || comment.text.trim().length > 280
      || !(comment.createdAt instanceof Date)
      || typeof comment.author !== 'string'
      || comment.author.trim().length === 0
    );
  }
}

// 3

const tasks = objectTasks.map((obj) => new Task(
  obj.name,
  obj.description,
  obj.assignee,
  obj.status,
  obj.priority,
  obj.isPrivate,
));

class TaskCollection {
  #tasks = tasks;

  #currentUser = document.getElementById('current-user').innerHTML;

  getPage(skip = 0, top = 10, filterConfig = {}) {
    const sortedTasks = this.#tasks.slice().sort(
      (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
    );

    const filteredTasks = sortedTasks.filter((task) => {
      if (
        typeof filterConfig?.id === 'string'
        && !task.id.includes(filterConfig.id)
      ) {
        return false;
      }
      if (
        typeof filterConfig?.name === 'string'
        && !(task.name === filterConfig.name)
      ) {
        return false;
      }
      if (
        typeof filterConfig?.assignee === 'string'
        && !task.assignee.includes(filterConfig.assignee)
      ) {
        return false;
      }
      if (
        filterConfig?.dateFrom !== undefined
        && filterConfig.dateFrom.getTime() > task.createdAt.getTime()
      ) {
        return false;
      }
      if (
        filterConfig?.dateTo !== undefined
        && filterConfig.dateTo.getTime() < task.createdAt.getTime()
      ) {
        return false;
      }
      if (
        filterConfig?.status !== undefined
        && filterConfig.status !== task.status
      ) {
        return false;
      }
      if (
        filterConfig?.priority !== undefined
        && filterConfig.priority !== task.priority
      ) {
        return false;
      }
      if (
        filterConfig?.isPrivate !== undefined
        && filterConfig.isPrivate !== task.isPrivate
      ) {
        return false;
      }
      if (
        typeof filterConfig?.description === 'string'
        && !task.description.includes(filterConfig.description)
      ) {
        return false;
      }
      return true;
    });

    return filteredTasks.slice(skip, skip + top);
  }

  get tasks() {
    return this.#tasks;
  }

  get(id) {
    return this.#tasks.find((task) => task.id === id);
  }

  isUniqueTask(task) {
    return this.#tasks.findIndex((value) => value.id === task.id) === -1;
  }

  add(name, description, assignee, status, priority, isPrivate) {
    const task = new Task(name, description, assignee, status, priority, isPrivate);

    if (Task.validate(task)) {
      this.#tasks.push(task);
      return true;
    }

    return false;
  }

  edit(id, name, description, assignee, status, priority, isPrivate) {
    const taskId = this.#tasks.findIndex((task) => task.id === id);
    if (taskId === -1) {
      return false;
    }

    if (this.#currentUser !== this.#tasks[taskId].assignee) {
      return false;
    }

    const newTask = new Task(
      name ?? this.#tasks[taskId].name,
      description ?? this.#tasks[taskId].description,
      assignee ?? this.#tasks[taskId].assignee,
      status ?? this.#tasks[taskId].status,
      priority ?? this.#tasks[taskId].priority,
      isPrivate ?? this.#tasks[taskId].isPrivate,
      this.#tasks[taskId].id,
      this.#tasks[taskId].createdAt,
    );

    if (Task.validate(newTask)) {
      this.#tasks[taskId] = newTask;
      return true;
    }

    return false;
  }

  remove(id) {
    const taskId = this.#tasks.findIndex((task) => task.id === id);
    if (taskId === -1) {
      return false;
    }

    if (this.#currentUser !== this.#tasks[taskId].assignee) {
      return false;
    }

    this.#tasks.splice(taskId, 1);
    return true;
  }

  isUniqueComment(comment) {
    return (
      this.#tasks.findIndex(
        (task) => task.comments.findIndex((com) => com.id === comment.id) !== -1,
      ) === -1
    );
  }

  addComment(idOfTask, comText) {
    const taskId = this.#tasks.findIndex((task) => task.id === idOfTask);
    if (taskId === -1) {
      return false;
    }

    const newComment = new Comment(comText);
    if (Comment.validate(newComment)) {
      this.#tasks[taskId].comments.push(newComment);
      return true;
    }
    return false;
  }

  addAll(newTasks) {
    const invalidTasks = [];
    newTasks.forEach((task) => {
      if (Task.validate(task)) {
        this.#tasks.push(task);
      } else {
        invalidTasks.push(task);
      }
    });
    return invalidTasks;
  }

  clear() {
    this.#tasks = [];
  }

  get currentUser() {
    return this.#currentUser;
  }

  set currentUser(name) {
    this.#currentUser = name;
  }
}

// const collection = new TaskCollection();

// console.log(collection.getPage(0, 10));
// console.log(collection.getPage(3, 5, { priority: 'High' }));
// console.log(collection.getPage(0, 3, { name: 'Lorem, ipsum dolor.' }));

// const tempId = collection.getPage(0, 10)[0].id;

// console.log(collection.get(tempId));
// console.log(collection.get('52'));

// console.log(collection.add('Add color', 'Add color in this', 'Frodo Baggins', 'To do', 'Low', true));
// console.log(collection.add('Add data', 'Add data in this', 'Frodo Baggins', 'To do', 'Low', 'true'));

// console.log(collection.edit(tempId, 'Add data', 'Add data in this', 'Frodo Baggins', 'To do', 'Low', true));
// collection.currentUser = 'Saruman';
// console.log(collection.edit(tempId, 'Add data', 'Add data in this', 'Saruman', 'To do', 'Low', true));

// console.log(collection.get(tempId).comments);
// console.log(collection.addComment(tempId, 'Add data'));
// console.log(collection.get(tempId).comments);
// console.log(collection.addComment(tempId, true));
// console.log(collection.get(tempId).comments);

// console.log('remove');
// collection.currentUser = 'Frodo Baggins';
// console.log(collection.remove(tempId));
// collection.currentUser = 'Saruman';
// console.log(collection.remove(tempId));
// console.log(collection.get(tempId));

// console.log('clear');
// console.log(collection.clear());
// console.log(collection.getPage(0, 10));

// console.log('addAll');
// console.log(collection.addAll(tasks));
// console.log(collection.getPage(0, 10));

class HeaderView {
  constructor(containerId = 'current-user') {
    this.container = document.getElementById(containerId);
  }

  display(currentUser) {
    if (currentUser) {
      this.container.innerHTML = currentUser;
    } else {
      this.container.innerHTML = '';
    }
  }
}

class TaskFeedView {
  constructor(containerId = 'main') {
    this.container = document.getElementById(containerId);
  }

  display(tasks = []) {
    if (document.querySelector('.main--lists-task-board')) {
      const el1 = document.querySelector('.main--lists-task-board');
      const el2 = document.querySelector('.main--columns-task-board');

      el1.remove();
      el2.remove();
    }

      const listTaskBoard = document.createElement('div');
      listTaskBoard.classList.add('main--lists-task-board', 'beauty-scroll');
      this.container.appendChild(listTaskBoard);

        const toDoListConcealerInput = document.createElement('input');
        toDoListConcealerInput.classList.add('main--list--hide-toggle', 'display-none');
        toDoListConcealerInput.type = 'radio';
        toDoListConcealerInput.id = 'to-do-list-0-closed';
        toDoListConcealerInput.name = 'to-do-list-0';
        listTaskBoard.appendChild(toDoListConcealerInput);

        const tasksListToDo = document.createElement('div');
        tasksListToDo.classList.add('main--tasks--list', 'beauty-scroll');
        listTaskBoard.appendChild(tasksListToDo);

          const tasksListToDoToggleActions = document.createElement('div');
          tasksListToDoToggleActions.classList.add('main--list--toggle-actions');
          tasksListToDo.appendChild(tasksListToDoToggleActions);

            const toDoListOpenerInput = document.createElement('input');
            toDoListOpenerInput.classList.add('main--list--open-toggle', 'display-none');
            toDoListOpenerInput.type = 'radio';
            toDoListOpenerInput.id = 'to-do-list-0-open';
            toDoListOpenerInput.name = 'to-do-list-0';
            toDoListOpenerInput.checked = true;
            tasksListToDoToggleActions.appendChild(toDoListOpenerInput);

            const toDoListOpenLabel = document.createElement('label');
            toDoListOpenLabel.classList.add('main--list--open');
            toDoListOpenLabel.setAttribute('for', 'to-do-list-0-open');
            tasksListToDoToggleActions.appendChild(toDoListOpenLabel);

              const toDoListArrowDown = document.createElement('img');
              toDoListArrowDown.classList.add('main--list--arrow-down');
              toDoListArrowDown.src = '/UI/assets/arrow-down.svg';
              toDoListArrowDown.alt = '';
              toDoListOpenLabel.appendChild(toDoListArrowDown);

            const toDoListHideLabel = document.createElement('label');
            toDoListHideLabel.classList.add('main--list--hide');
            toDoListHideLabel.setAttribute('for', 'to-do-list-0-closed');
            tasksListToDoToggleActions.appendChild(toDoListHideLabel);

              const toDoListArrowUp = document.createElement('img');
              toDoListArrowUp.classList.add('main--list--arrow-down', 'reverse');
              toDoListArrowUp.src = '/UI/assets/arrow-down.svg';
              toDoListArrowUp.alt = '';
              toDoListHideLabel.appendChild(toDoListArrowUp);
          
          const toDoListTitle = document.createElement('div');
          toDoListTitle.classList.add('main--column-title');
          tasksListToDo.appendChild(toDoListTitle);

            const toDoListTitleStatus = document.createElement('h1');
            toDoListTitleStatus.classList.add('main--column-status');
            toDoListTitleStatus.innerHTML = 'To do';
            toDoListTitle.appendChild(toDoListTitleStatus);

            const toDoFiltersConcealerInput = document.createElement('input');
            toDoFiltersConcealerInput.classList.add('main--column--filters-hide-toggle', 'display-none');
            toDoFiltersConcealerInput.type = 'radio';
            toDoFiltersConcealerInput.id = 'to-do-filters-close';
            toDoFiltersConcealerInput.name = 'to-do-filters';
            toDoFiltersConcealerInput.checked = true;
            toDoListTitle.appendChild(toDoFiltersConcealerInput);

            const toDoListTitleBurger = document.createElement('div');
            toDoListTitleBurger.classList.add('main--burgers');
            toDoListTitle.appendChild(toDoListTitleBurger);

              const toDoFiltersOpenLabel = document.createElement('label');
              toDoFiltersOpenLabel.classList.add('main--column--filters-open');
              toDoFiltersOpenLabel.setAttribute('for', 'to-do-filters-open');
              toDoListTitleBurger.appendChild(toDoFiltersOpenLabel);

                const toDoFiltersArrowDown = document.createElement('img');
                toDoFiltersArrowDown.classList.add('main--burger-open');
                toDoFiltersArrowDown.src = '/UI/assets/burger.svg';
                toDoFiltersArrowDown.alt = '';
                toDoFiltersOpenLabel.appendChild(toDoFiltersArrowDown);

              const toDoFiltersHideLabel = document.createElement('label');
              toDoFiltersHideLabel.classList.add('main--column--filters-hide');
              toDoFiltersHideLabel.setAttribute('for', 'to-do-filters-close');
              toDoListTitleBurger.appendChild(toDoFiltersHideLabel);

                const toDoFiltersArrowUp = document.createElement('img');
                toDoFiltersArrowUp.classList.add('main--burger-close');
                toDoFiltersArrowUp.src = '/UI/assets/burger.svg';
                toDoFiltersArrowUp.alt = '';
                toDoFiltersHideLabel.appendChild(toDoFiltersArrowUp);

          const toDoFiltersOpenerInput = document.createElement('input');
          toDoFiltersOpenerInput.classList.add('main--column--filters-open-toggle', 'display-none');
          toDoFiltersOpenerInput.type = 'radio';
          toDoFiltersOpenerInput.id = 'to-do-filters-open';
          toDoFiltersOpenerInput.name = 'to-do-filters';
          tasksListToDo.appendChild(toDoFiltersOpenerInput);
          
          const toDoListFilters = document.createElement('div');
          toDoListFilters.classList.add('main--filters-container');
          tasksListToDo.appendChild(toDoListFilters);

            const toDoListFiltersResetContainer = document.createElement('div');
            toDoListFiltersResetContainer.classList.add('main--filters--container-title-and-reset-button');
            toDoListFilters.appendChild(toDoListFiltersResetContainer);

              const toDoListFiltersTitle = document.createElement('b');
              toDoListFiltersTitle.classList.add('main--filters--title');
              toDoListFiltersTitle.innerHTML = 'Filters';
              toDoListFiltersResetContainer.appendChild(toDoListFiltersTitle);

              const toDoListFiltersResetImg = document.createElement('img');
              toDoListFiltersResetImg.classList.add('main--filters--reset-icon');
              toDoListFiltersResetImg.src = '/UI/assets/reset_icone.svg';
              toDoListFiltersResetImg.alt = '';
              toDoListFiltersResetContainer.appendChild(toDoListFiltersResetImg);

            const toDoListFiltersAssignee = document.createElement('div');
            toDoListFiltersAssignee.classList.add('main--filters--assignee-name-filtering');
            toDoListFilters.appendChild(toDoListFiltersAssignee);

              const toDoListFiltersAssigneeNameInput = document.createElement('input');
              toDoListFiltersAssigneeNameInput.classList.add('main--filters--assignee-name-input');
              toDoListFiltersAssigneeNameInput.type = 'text';
              toDoListFiltersAssigneeNameInput.placeholder = 'Write here...';
              toDoListFiltersAssignee.appendChild(toDoListFiltersAssigneeNameInput);

              const toDoListFiltersAssigneeSupportingText = document.createElement('p');
              toDoListFiltersAssigneeSupportingText.classList.add('main--filters--input-supporting-text');
              toDoListFiltersAssigneeSupportingText.innerHTML = 'Search by assignee name';
              toDoListFiltersAssignee.appendChild(toDoListFiltersAssigneeSupportingText);

            const toDoListFiltersTime = document.createElement('div');
            toDoListFiltersTime.classList.add('main--filters--time-filtering');
            toDoListFilters.appendChild(toDoListFiltersTime);

              const toDoListFiltersTimeFrom = document.createElement('div');
              toDoListFiltersTimeFrom.classList.add('main--filters--time--from-plate');
              toDoListFiltersTime.appendChild(toDoListFiltersTimeFrom);

                const toDoListFiltersTimeFromSupportingText = document.createElement('p');
                toDoListFiltersTimeFromSupportingText.classList.add('main--filters--supporting-text-from');
                toDoListFiltersTimeFromSupportingText.innerHTML = 'From';
                toDoListFiltersTimeFrom.appendChild(toDoListFiltersTimeFromSupportingText);
              
                const toDoListFiltersTimeFromInput = document.createElement('input');
                toDoListFiltersTimeFromInput.classList.add('main--filters--from');
                toDoListFiltersTimeFromInput.type = 'datetime-local';
                toDoListFiltersTimeFrom.appendChild(toDoListFiltersTimeFromInput);

              const toDoListFiltersTimeTo = document.createElement('div');
              toDoListFiltersTimeTo.classList.add('main--filters--time--to-plate');
              toDoListFiltersTime.appendChild(toDoListFiltersTimeTo);

                const toDoListFiltersTimeToSupportingText = document.createElement('p');
                toDoListFiltersTimeToSupportingText.classList.add('main--filters--supporting-text-to');
                toDoListFiltersTimeToSupportingText.innerHTML = 'To';
                toDoListFiltersTimeTo.appendChild(toDoListFiltersTimeToSupportingText);

                const toDoListFiltersTimeToInput = document.createElement('input');
                toDoListFiltersTimeToInput.classList.add('main--filters--to');
                toDoListFiltersTimeToInput.type = 'datetime-local';
                toDoListFiltersTimeTo.appendChild(toDoListFiltersTimeToInput);

            const toDoListFiltersTaskName = document.createElement('div');
            toDoListFiltersTaskName.classList.add('main--filters--task-name-filtering');
            toDoListFilters.appendChild(toDoListFiltersTaskName);

              const toDoListFiltersTaskNameInput = document.createElement('input');
              toDoListFiltersTaskNameInput.classList.add('main--filters--task-name-input');
              toDoListFiltersTaskNameInput.type = 'text';
              toDoListFiltersTaskNameInput.placeholder = 'Write here...';
              toDoListFiltersTaskName.appendChild(toDoListFiltersTaskNameInput);

              const toDoListFiltersTaskNameSupportingText = document.createElement('p');
              toDoListFiltersTaskNameSupportingText.classList.add('main--filters--input-supporting-text');
              toDoListFiltersTaskNameSupportingText.innerHTML = 'Search by task name';
              toDoListFiltersTaskName.appendChild(toDoListFiltersTaskNameSupportingText);

            const toDoListFiltersPriority = document.createElement('div');
            toDoListFiltersPriority.classList.add('main--filters--priority-filtering');
            toDoListFilters.appendChild(toDoListFiltersPriority);

              const toDoListFiltersPrioritySupportingText = document.createElement('p');
              toDoListFiltersPrioritySupportingText.classList.add('main--filters--supporting-text');
              toDoListFiltersPrioritySupportingText.innerHTML = 'Filter by priority';
              toDoListFiltersPriority.appendChild(toDoListFiltersPrioritySupportingText);

              const toDoListFiltersPriorityBtns = document.createElement('div');
              toDoListFiltersPriorityBtns.classList.add('main--filters--buttons');
              toDoListFiltersPriority.appendChild(toDoListFiltersPriorityBtns);

                const toDoListFiltersPriorityHigh = document.createElement('div');
                toDoListFiltersPriorityHigh.classList.add('btn-s', 'main--filters--priority-high');
                toDoListFiltersPriorityBtns.appendChild(toDoListFiltersPriorityHigh);

                  const toDoListFiltersPriorityHighText = document.createElement('p');
                  toDoListFiltersPriorityHighText.innerHTML = 'High';
                  toDoListFiltersPriorityHigh.appendChild(toDoListFiltersPriorityHighText);
                  
                const toDoListFiltersPriorityMedium = document.createElement('div');
                toDoListFiltersPriorityMedium.classList.add('btn-s', 'main--filters--priority-medium');
                toDoListFiltersPriorityBtns.appendChild(toDoListFiltersPriorityMedium);

                  const toDoListFiltersPriorityMediumText = document.createElement('p');
                  toDoListFiltersPriorityMediumText.innerHTML = 'Medium';
                  toDoListFiltersPriorityMedium.appendChild(toDoListFiltersPriorityMediumText);
                  
                const toDoListFiltersPriorityLow = document.createElement('div');
                toDoListFiltersPriorityLow.classList.add('btn-s', 'main--filters--priority-low');
                toDoListFiltersPriorityBtns.appendChild(toDoListFiltersPriorityLow);

                  const toDoListFiltersPriorityLowText = document.createElement('p');
                  toDoListFiltersPriorityLowText.innerHTML = 'Low';
                  toDoListFiltersPriorityLow.appendChild(toDoListFiltersPriorityLowText);

            const toDoListFiltersPrivacy = document.createElement('div');
            toDoListFiltersPrivacy.classList.add('main--filters--privacy-filtering');
            toDoListFilters.appendChild(toDoListFiltersPrivacy);

              const toDoListFiltersPrivacySupportingText = document.createElement('p');
              toDoListFiltersPrivacySupportingText.classList.add('main--filters--supporting-text');
              toDoListFiltersPrivacySupportingText.innerHTML = 'Filter by privacy';
              toDoListFiltersPrivacy.appendChild(toDoListFiltersPrivacySupportingText);

              const toDoListFiltersPrivacyBtns = document.createElement('div');
              toDoListFiltersPrivacyBtns.classList.add('main--filters--buttons');
              toDoListFiltersPrivacy.appendChild(toDoListFiltersPrivacyBtns);

                const toDoListFiltersPrivacyPublic = document.createElement('div');
                toDoListFiltersPrivacyPublic.classList.add('btn-s', 'main--filters--privacy-public');
                toDoListFiltersPrivacyBtns.appendChild(toDoListFiltersPrivacyPublic);

                  const toDoListFiltersPrivacyPublicText = document.createElement('p');
                  toDoListFiltersPrivacyPublicText.innerHTML = 'public';
                  toDoListFiltersPrivacyPublic.appendChild(toDoListFiltersPrivacyPublicText);
                  
                const toDoListFiltersPrivacyPrivate = document.createElement('div');
                toDoListFiltersPrivacyPrivate.classList.add('btn-s', 'main--filters--privacy-private');
                toDoListFiltersPrivacyBtns.appendChild(toDoListFiltersPrivacyPrivate);

                  const toDoListFiltersPrivacyPrivateText = document.createElement('p');
                  toDoListFiltersPrivacyPrivateText.innerHTML = 'private';
                  toDoListFiltersPrivacyPrivate.appendChild(toDoListFiltersPrivacyPrivateText);

          const tasksListToDoContainer = document.createElement('div');
          tasksListToDoContainer.classList.add('main--ilst--tasks-container', 'beauty-scroll');
          tasksListToDoContainer.id = 'tasksListToDoContainer';
          tasksListToDo.appendChild(tasksListToDoContainer);

            const tasksListToDoTitles = document.createElement('div');
            tasksListToDoTitles.classList.add('main--tasks-list--titles');
            tasksListToDoContainer.appendChild(tasksListToDoTitles);

              const tasksListToDoTitleDate = document.createElement('div');
              tasksListToDoTitleDate.classList.add('main--tasks-list--title-date');
              tasksListToDoTitles.appendChild(tasksListToDoTitleDate);

                const tasksListToDoTitleDateText = document.createElement('p');
                tasksListToDoTitleDateText.innerHTML = 'Date';
                tasksListToDoTitleDate.appendChild(tasksListToDoTitleDateText);

              const tasksListToDoTitleTaskName = document.createElement('div');
              tasksListToDoTitleTaskName.classList.add('main--tasks-list--title-task-name');
              tasksListToDoTitles.appendChild(tasksListToDoTitleTaskName);

                const tasksListToDoTitleTaskNameText = document.createElement('p');
                tasksListToDoTitleTaskNameText.innerHTML = 'Task name';
                tasksListToDoTitleTaskName.appendChild(tasksListToDoTitleTaskNameText);

              const tasksListToDoTitleComments = document.createElement('div');
              tasksListToDoTitleComments.classList.add('main--tasks-list--title-comments');
              tasksListToDoTitles.appendChild(tasksListToDoTitleComments);

                const tasksListToDoTitleCommentsText = document.createElement('p');
                tasksListToDoTitleCommentsText.innerHTML = 'Comments';
                tasksListToDoTitleComments.appendChild(tasksListToDoTitleCommentsText);

              const tasksListToDoTitleStatus = document.createElement('div');
              tasksListToDoTitleStatus.classList.add('main--tasks-list--title-status');
              tasksListToDoTitles.appendChild(tasksListToDoTitleStatus);

                const tasksListToDoTitleStatusText = document.createElement('p');
                tasksListToDoTitleStatusText.innerHTML = 'Status';
                tasksListToDoTitleStatus.appendChild(tasksListToDoTitleStatusText);

              const tasksListToDoTitlePriority = document.createElement('div');
              tasksListToDoTitlePriority.classList.add('main--tasks-list--title-priority');
              tasksListToDoTitles.appendChild(tasksListToDoTitlePriority);

                const tasksListToDoTitlePriorityText = document.createElement('p');
                tasksListToDoTitlePriorityText.innerHTML = 'Priority';
                tasksListToDoTitlePriority.appendChild(tasksListToDoTitlePriorityText);

              const tasksListToDoTitlePrivacy = document.createElement('div');
              tasksListToDoTitlePrivacy.classList.add('main--tasks-list--title-privacy');
              tasksListToDoTitles.appendChild(tasksListToDoTitlePrivacy);

                const tasksListToDoTitlePrivacyText = document.createElement('p');
                tasksListToDoTitlePrivacyText.innerHTML = 'Privacy';
                tasksListToDoTitlePrivacy.appendChild(tasksListToDoTitlePrivacyText);

              const tasksListToDoTitleAssignee = document.createElement('div');
              tasksListToDoTitleAssignee.classList.add('main--tasks-list--title-assignee');
              tasksListToDoTitles.appendChild(tasksListToDoTitleAssignee);

                const tasksListToDoTitleAssigneeText = document.createElement('p');
                tasksListToDoTitleAssigneeText.innerHTML = 'Assignee';
                tasksListToDoTitleAssignee.appendChild(tasksListToDoTitleAssigneeText);

        const inProgressListConcealerInput = document.createElement('input');
        inProgressListConcealerInput.classList.add('main--list--hide-toggle', 'display-none');
        inProgressListConcealerInput.type = 'radio';
        inProgressListConcealerInput.id = 'to-do-list-1-closed';
        inProgressListConcealerInput.name = 'to-do-list-1';
        listTaskBoard.appendChild(inProgressListConcealerInput);

        const tasksListInProgress = document.createElement('div');
        tasksListInProgress.classList.add('main--tasks--list', 'beauty-scroll');
        listTaskBoard.appendChild(tasksListInProgress);

          const tasksListInProgressToggleActions = document.createElement('div');
          tasksListInProgressToggleActions.classList.add('main--list--toggle-actions');
          tasksListInProgress.appendChild(tasksListInProgressToggleActions);

            const inProgressListOpenerInput = document.createElement('input');
            inProgressListOpenerInput.classList.add('main--list--open-toggle', 'display-none');
            inProgressListOpenerInput.type = 'radio';
            inProgressListOpenerInput.id = 'to-do-list-1-open';
            inProgressListOpenerInput.name = 'to-do-list-1';
            inProgressListOpenerInput.checked = true;
            tasksListInProgressToggleActions.appendChild(inProgressListOpenerInput);

            const inProgressListOpenLabel = document.createElement('label');
            inProgressListOpenLabel.classList.add('main--list--open');
            inProgressListOpenLabel.setAttribute('for', 'to-do-list-1-open');
            tasksListInProgressToggleActions.appendChild(inProgressListOpenLabel);

              const inProgressListArrowDown = document.createElement('img');
              inProgressListArrowDown.classList.add('main--list--arrow-down');
              inProgressListArrowDown.src = '/UI/assets/arrow-down.svg';
              inProgressListArrowDown.alt = '';
              inProgressListOpenLabel.appendChild(inProgressListArrowDown);

            const inProgressListHideLabel = document.createElement('label');
            inProgressListHideLabel.classList.add('main--list--hide');
            inProgressListHideLabel.setAttribute('for', 'to-do-list-1-closed');
            tasksListInProgressToggleActions.appendChild(inProgressListHideLabel);

              const inProgressListArrowUp = document.createElement('img');
              inProgressListArrowUp.classList.add('main--list--arrow-down', 'reverse');
              inProgressListArrowUp.src = '/UI/assets/arrow-down.svg';
              inProgressListArrowUp.alt = '';
              inProgressListHideLabel.appendChild(inProgressListArrowUp);
          
          const inProgressListTitle = document.createElement('div');
          inProgressListTitle.classList.add('main--column-title');
          tasksListInProgress.appendChild(inProgressListTitle);

            const inProgressListTitleStatus = document.createElement('h1');
            inProgressListTitleStatus.classList.add('main--column-status');
            inProgressListTitleStatus.innerHTML = 'In progress';
            inProgressListTitle.appendChild(inProgressListTitleStatus);

            const inProgressFiltersConcealerInput = document.createElement('input');
            inProgressFiltersConcealerInput.classList.add('main--column--filters-hide-toggle', 'display-none');
            inProgressFiltersConcealerInput.type = 'radio';
            inProgressFiltersConcealerInput.id = 'in-progress-filters-close';
            inProgressFiltersConcealerInput.name = 'in-progress-filters';
            inProgressFiltersConcealerInput.checked = true;
            inProgressListTitle.appendChild(inProgressFiltersConcealerInput);

            const inProgressListTitleBurger = document.createElement('div');
            inProgressListTitleBurger.classList.add('main--burgers');
            inProgressListTitle.appendChild(inProgressListTitleBurger);

              const inProgressFiltersOpenLabel = document.createElement('label');
              inProgressFiltersOpenLabel.classList.add('main--column--filters-open');
              inProgressFiltersOpenLabel.setAttribute('for', 'in-progress-filters-open');
              inProgressListTitleBurger.appendChild(inProgressFiltersOpenLabel);

                const inProgressFiltersArrowDown = document.createElement('img');
                inProgressFiltersArrowDown.classList.add('main--burger-open');
                inProgressFiltersArrowDown.src = '/UI/assets/burger.svg';
                inProgressFiltersArrowDown.alt = '';
                inProgressFiltersOpenLabel.appendChild(inProgressFiltersArrowDown);

              const inProgressFiltersHideLabel = document.createElement('label');
              inProgressFiltersHideLabel.classList.add('main--column--filters-hide');
              inProgressFiltersHideLabel.setAttribute('for', 'in-progress-filters-close');
              inProgressListTitleBurger.appendChild(inProgressFiltersHideLabel);

                const inProgressFiltersArrowUp = document.createElement('img');
                inProgressFiltersArrowUp.classList.add('main--burger-close');
                inProgressFiltersArrowUp.src = '/UI/assets/burger.svg';
                inProgressFiltersArrowUp.alt = '';
                inProgressFiltersHideLabel.appendChild(inProgressFiltersArrowUp);

          const inProgressFiltersOpenerInput = document.createElement('input');
          inProgressFiltersOpenerInput.classList.add('main--column--filters-open-toggle', 'display-none');
          inProgressFiltersOpenerInput.type = 'radio';
          inProgressFiltersOpenerInput.id = 'in-progress-filters-open';
          inProgressFiltersOpenerInput.name = 'in-progress-filters';
          tasksListInProgress.appendChild(inProgressFiltersOpenerInput);
          
          const inProgressListFilters = document.createElement('div');
          inProgressListFilters.classList.add('main--filters-container');
          tasksListInProgress.appendChild(inProgressListFilters);

            const inProgressListFiltersResetContainer = document.createElement('div');
            inProgressListFiltersResetContainer.classList.add('main--filters--container-title-and-reset-button');
            inProgressListFilters.appendChild(inProgressListFiltersResetContainer);

              const inProgressListFiltersTitle = document.createElement('b');
              inProgressListFiltersTitle.classList.add('main--filters--title');
              inProgressListFiltersTitle.innerHTML = 'Filters';
              inProgressListFiltersResetContainer.appendChild(inProgressListFiltersTitle);

              const inProgressListFiltersResetImg = document.createElement('img');
              inProgressListFiltersResetImg.classList.add('main--filters--reset-icon');
              inProgressListFiltersResetImg.src = '/UI/assets/reset_icone.svg';
              inProgressListFiltersResetImg.alt = '';
              inProgressListFiltersResetContainer.appendChild(inProgressListFiltersResetImg);

            const inProgressListFiltersAssignee = document.createElement('div');
            inProgressListFiltersAssignee.classList.add('main--filters--assignee-name-filtering');
            inProgressListFilters.appendChild(inProgressListFiltersAssignee);

              const inProgressListFiltersAssigneeNameInput = document.createElement('input');
              inProgressListFiltersAssigneeNameInput.classList.add('main--filters--assignee-name-input');
              inProgressListFiltersAssigneeNameInput.type = 'text';
              inProgressListFiltersAssigneeNameInput.placeholder = 'Write here...';
              inProgressListFiltersAssignee.appendChild(inProgressListFiltersAssigneeNameInput);

              const inProgressListFiltersAssigneeSupportingText = document.createElement('p');
              inProgressListFiltersAssigneeSupportingText.classList.add('main--filters--input-supporting-text');
              inProgressListFiltersAssigneeSupportingText.innerHTML = 'Search by assignee name';
              inProgressListFiltersAssignee.appendChild(inProgressListFiltersAssigneeSupportingText);

            const inProgressListFiltersTime = document.createElement('div');
            inProgressListFiltersTime.classList.add('main--filters--time-filtering');
            inProgressListFilters.appendChild(inProgressListFiltersTime);

              const inProgressListFiltersTimeFrom = document.createElement('div');
              inProgressListFiltersTimeFrom.classList.add('main--filters--time--from-plate');
              inProgressListFiltersTime.appendChild(inProgressListFiltersTimeFrom);

                const inProgressListFiltersTimeFromSupportingText = document.createElement('p');
                inProgressListFiltersTimeFromSupportingText.classList.add('main--filters--supporting-text-from');
                inProgressListFiltersTimeFromSupportingText.innerHTML = 'From';
                inProgressListFiltersTimeFrom.appendChild(inProgressListFiltersTimeFromSupportingText);
              
                const inProgressListFiltersTimeFromInput = document.createElement('input');
                inProgressListFiltersTimeFromInput.classList.add('main--filters--from');
                inProgressListFiltersTimeFromInput.type = 'datetime-local';
                inProgressListFiltersTimeFrom.appendChild(inProgressListFiltersTimeFromInput);

              const inProgressListFiltersTimeTo = document.createElement('div');
              inProgressListFiltersTimeTo.classList.add('main--filters--time--to-plate');
              inProgressListFiltersTime.appendChild(inProgressListFiltersTimeTo);

                const inProgressListFiltersTimeToSupportingText = document.createElement('p');
                inProgressListFiltersTimeToSupportingText.classList.add('main--filters--supporting-text-to');
                inProgressListFiltersTimeToSupportingText.innerHTML = 'To';
                inProgressListFiltersTimeTo.appendChild(inProgressListFiltersTimeToSupportingText);

                const inProgressListFiltersTimeToInput = document.createElement('input');
                inProgressListFiltersTimeToInput.classList.add('main--filters--to');
                inProgressListFiltersTimeToInput.type = 'datetime-local';
                inProgressListFiltersTimeTo.appendChild(inProgressListFiltersTimeToInput);

            const inProgressListFiltersTaskName = document.createElement('div');
            inProgressListFiltersTaskName.classList.add('main--filters--task-name-filtering');
            inProgressListFilters.appendChild(inProgressListFiltersTaskName);

              const inProgressListFiltersTaskNameInput = document.createElement('input');
              inProgressListFiltersTaskNameInput.classList.add('main--filters--task-name-input');
              inProgressListFiltersTaskNameInput.type = 'text';
              inProgressListFiltersTaskNameInput.placeholder = 'Write here...';
              inProgressListFiltersTaskName.appendChild(inProgressListFiltersTaskNameInput);

              const inProgressListFiltersTaskNameSupportingText = document.createElement('p');
              inProgressListFiltersTaskNameSupportingText.classList.add('main--filters--input-supporting-text');
              inProgressListFiltersTaskNameSupportingText.innerHTML = 'Search by task name';
              inProgressListFiltersTaskName.appendChild(inProgressListFiltersTaskNameSupportingText);

            const inProgressListFiltersPriority = document.createElement('div');
            inProgressListFiltersPriority.classList.add('main--filters--priority-filtering');
            inProgressListFilters.appendChild(inProgressListFiltersPriority);

              const inProgressListFiltersPrioritySupportingText = document.createElement('p');
              inProgressListFiltersPrioritySupportingText.classList.add('main--filters--supporting-text');
              inProgressListFiltersPrioritySupportingText.innerHTML = 'Filter by priority';
              inProgressListFiltersPriority.appendChild(inProgressListFiltersPrioritySupportingText);

              const inProgressListFiltersPriorityBtns = document.createElement('div');
              inProgressListFiltersPriorityBtns.classList.add('main--filters--buttons');
              inProgressListFiltersPriority.appendChild(inProgressListFiltersPriorityBtns);

                const inProgressListFiltersPriorityHigh = document.createElement('div');
                inProgressListFiltersPriorityHigh.classList.add('btn-s', 'main--filters--priority-high');
                inProgressListFiltersPriorityBtns.appendChild(inProgressListFiltersPriorityHigh);

                  const inProgressListFiltersPriorityHighText = document.createElement('p');
                  inProgressListFiltersPriorityHighText.innerHTML = 'High';
                  inProgressListFiltersPriorityHigh.appendChild(inProgressListFiltersPriorityHighText);
                  
                const inProgressListFiltersPriorityMedium = document.createElement('div');
                inProgressListFiltersPriorityMedium.classList.add('btn-s', 'main--filters--priority-medium');
                inProgressListFiltersPriorityBtns.appendChild(inProgressListFiltersPriorityMedium);

                  const inProgressListFiltersPriorityMediumText = document.createElement('p');
                  inProgressListFiltersPriorityMediumText.innerHTML = 'Medium';
                  inProgressListFiltersPriorityMedium.appendChild(inProgressListFiltersPriorityMediumText);
                  
                const inProgressListFiltersPriorityLow = document.createElement('div');
                inProgressListFiltersPriorityLow.classList.add('btn-s', 'main--filters--priority-low');
                inProgressListFiltersPriorityBtns.appendChild(inProgressListFiltersPriorityLow);

                  const inProgressListFiltersPriorityLowText = document.createElement('p');
                  inProgressListFiltersPriorityLowText.innerHTML = 'Low';
                  inProgressListFiltersPriorityLow.appendChild(inProgressListFiltersPriorityLowText);

            const inProgressListFiltersPrivacy = document.createElement('div');
            inProgressListFiltersPrivacy.classList.add('main--filters--privacy-filtering');
            inProgressListFilters.appendChild(inProgressListFiltersPrivacy);

              const inProgressListFiltersPrivacySupportingText = document.createElement('p');
              inProgressListFiltersPrivacySupportingText.classList.add('main--filters--supporting-text');
              inProgressListFiltersPrivacySupportingText.innerHTML = 'Filter by privacy';
              inProgressListFiltersPrivacy.appendChild(inProgressListFiltersPrivacySupportingText);

              const inProgressListFiltersPrivacyBtns = document.createElement('div');
              inProgressListFiltersPrivacyBtns.classList.add('main--filters--buttons');
              inProgressListFiltersPrivacy.appendChild(inProgressListFiltersPrivacyBtns);

                const inProgressListFiltersPrivacyPublic = document.createElement('div');
                inProgressListFiltersPrivacyPublic.classList.add('btn-s', 'main--filters--privacy-public');
                inProgressListFiltersPrivacyBtns.appendChild(inProgressListFiltersPrivacyPublic);

                  const inProgressListFiltersPrivacyPublicText = document.createElement('p');
                  inProgressListFiltersPrivacyPublicText.innerHTML = 'public';
                  inProgressListFiltersPrivacyPublic.appendChild(inProgressListFiltersPrivacyPublicText);
                  
                const inProgressListFiltersPrivacyPrivate = document.createElement('div');
                inProgressListFiltersPrivacyPrivate.classList.add('btn-s', 'main--filters--privacy-private');
                inProgressListFiltersPrivacyBtns.appendChild(inProgressListFiltersPrivacyPrivate);

                  const inProgressListFiltersPrivacyPrivateText = document.createElement('p');
                  inProgressListFiltersPrivacyPrivateText.innerHTML = 'private';
                  inProgressListFiltersPrivacyPrivate.appendChild(inProgressListFiltersPrivacyPrivateText);

          const tasksListInProgressContainer = document.createElement('div');
          tasksListInProgressContainer.classList.add('main--ilst--tasks-container', 'beauty-scroll');
          tasksListInProgressContainer.id = 'tasksListInProgressContainer';
          tasksListInProgress.appendChild(tasksListInProgressContainer);

            const tasksListInProgressTitles = document.createElement('div');
            tasksListInProgressTitles.classList.add('main--tasks-list--titles');
            tasksListInProgressContainer.appendChild(tasksListInProgressTitles);

              const tasksListInProgressTitleDate = document.createElement('div');
              tasksListInProgressTitleDate.classList.add('main--tasks-list--title-date');
              tasksListInProgressTitles.appendChild(tasksListInProgressTitleDate);

                const tasksListInProgressTitleDateText = document.createElement('p');
                tasksListInProgressTitleDateText.innerHTML = 'Date';
                tasksListInProgressTitleDate.appendChild(tasksListInProgressTitleDateText);

              const tasksListInProgressTitleTaskName = document.createElement('div');
              tasksListInProgressTitleTaskName.classList.add('main--tasks-list--title-task-name');
              tasksListInProgressTitles.appendChild(tasksListInProgressTitleTaskName);

                const tasksListInProgressTitleTaskNameText = document.createElement('p');
                tasksListInProgressTitleTaskNameText.innerHTML = 'Task name';
                tasksListInProgressTitleTaskName.appendChild(tasksListInProgressTitleTaskNameText);

              const tasksListInProgressTitleComments = document.createElement('div');
              tasksListInProgressTitleComments.classList.add('main--tasks-list--title-comments');
              tasksListInProgressTitles.appendChild(tasksListInProgressTitleComments);

                const tasksListInProgressTitleCommentsText = document.createElement('p');
                tasksListInProgressTitleCommentsText.innerHTML = 'Comments';
                tasksListInProgressTitleComments.appendChild(tasksListInProgressTitleCommentsText);

              const tasksListInProgressTitleStatus = document.createElement('div');
              tasksListInProgressTitleStatus.classList.add('main--tasks-list--title-status');
              tasksListInProgressTitles.appendChild(tasksListInProgressTitleStatus);

                const tasksListInProgressTitleStatusText = document.createElement('p');
                tasksListInProgressTitleStatusText.innerHTML = 'Status';
                tasksListInProgressTitleStatus.appendChild(tasksListInProgressTitleStatusText);

              const tasksListInProgressTitlePriority = document.createElement('div');
              tasksListInProgressTitlePriority.classList.add('main--tasks-list--title-priority');
              tasksListInProgressTitles.appendChild(tasksListInProgressTitlePriority);

                const tasksListInProgressTitlePriorityText = document.createElement('p');
                tasksListInProgressTitlePriorityText.innerHTML = 'Priority';
                tasksListInProgressTitlePriority.appendChild(tasksListInProgressTitlePriorityText);

              const tasksListInProgressTitlePrivacy = document.createElement('div');
              tasksListInProgressTitlePrivacy.classList.add('main--tasks-list--title-privacy');
              tasksListInProgressTitles.appendChild(tasksListInProgressTitlePrivacy);

                const tasksListInProgressTitlePrivacyText = document.createElement('p');
                tasksListInProgressTitlePrivacyText.innerHTML = 'Privacy';
                tasksListInProgressTitlePrivacy.appendChild(tasksListInProgressTitlePrivacyText);

              const tasksListInProgressTitleAssignee = document.createElement('div');
              tasksListInProgressTitleAssignee.classList.add('main--tasks-list--title-assignee');
              tasksListInProgressTitles.appendChild(tasksListInProgressTitleAssignee);

                const tasksListInProgressTitleAssigneeText = document.createElement('p');
                tasksListInProgressTitleAssigneeText.innerHTML = 'Assignee';
                tasksListInProgressTitleAssignee.appendChild(tasksListInProgressTitleAssigneeText);

        const completeListConcealerInput = document.createElement('input');
        completeListConcealerInput.classList.add('main--list--hide-toggle', 'display-none');
        completeListConcealerInput.type = 'radio';
        completeListConcealerInput.id = 'to-do-list-02-closed';
        completeListConcealerInput.name = 'to-do-list-02';
        listTaskBoard.appendChild(completeListConcealerInput);

        const tasksListComplete = document.createElement('div');
        tasksListComplete.classList.add('main--tasks--list', 'beauty-scroll');
        listTaskBoard.appendChild(tasksListComplete);

          const tasksListCompleteToggleActions = document.createElement('div');
          tasksListCompleteToggleActions.classList.add('main--list--toggle-actions');
          tasksListComplete.appendChild(tasksListCompleteToggleActions);

            const completeListOpenerInput = document.createElement('input');
            completeListOpenerInput.classList.add('main--list--open-toggle', 'display-none');
            completeListOpenerInput.type = 'radio';
            completeListOpenerInput.id = 'to-do-list-02-open';
            completeListOpenerInput.name = 'to-do-list-02';
            completeListOpenerInput.checked = true;
            tasksListCompleteToggleActions.appendChild(completeListOpenerInput);

            const completeListOpenLabel = document.createElement('label');
            completeListOpenLabel.classList.add('main--list--open');
            completeListOpenLabel.setAttribute('for', 'to-do-list-02-open');
            tasksListCompleteToggleActions.appendChild(completeListOpenLabel);

              const completeListArrowDown = document.createElement('img');
              completeListArrowDown.classList.add('main--list--arrow-down');
              completeListArrowDown.src = '/UI/assets/arrow-down.svg';
              completeListArrowDown.alt = '';
              completeListOpenLabel.appendChild(completeListArrowDown);

            const completeListHideLabel = document.createElement('label');
            completeListHideLabel.classList.add('main--list--hide');
            completeListHideLabel.setAttribute('for', 'to-do-list-02-closed');
            tasksListCompleteToggleActions.appendChild(completeListHideLabel);

              const completeListArrowUp = document.createElement('img');
              completeListArrowUp.classList.add('main--list--arrow-down', 'reverse');
              completeListArrowUp.src = '/UI/assets/arrow-down.svg';
              completeListArrowUp.alt = '';
              completeListHideLabel.appendChild(completeListArrowUp);
          
          const completeListTitle = document.createElement('div');
          completeListTitle.classList.add('main--column-title');
          tasksListComplete.appendChild(completeListTitle);

            const completeListTitleStatus = document.createElement('h1');
            completeListTitleStatus.classList.add('main--column-status');
            completeListTitleStatus.innerHTML = 'Complete';
            completeListTitle.appendChild(completeListTitleStatus);

            const completeFiltersConcealerInput = document.createElement('input');
            completeFiltersConcealerInput.classList.add('main--column--filters-hide-toggle', 'display-none');
            completeFiltersConcealerInput.type = 'radio';
            completeFiltersConcealerInput.id = 'complete-filters-close';
            completeFiltersConcealerInput.name = 'complete-filters';
            completeFiltersConcealerInput.checked = true;
            completeListTitle.appendChild(completeFiltersConcealerInput);

            const completeListTitleBurger = document.createElement('div');
            completeListTitleBurger.classList.add('main--burgers');
            completeListTitle.appendChild(completeListTitleBurger);

              const completeFiltersOpenLabel = document.createElement('label');
              completeFiltersOpenLabel.classList.add('main--column--filters-open');
              completeFiltersOpenLabel.setAttribute('for', 'complete-filters-open');
              completeListTitleBurger.appendChild(completeFiltersOpenLabel);

                const completeFiltersArrowDown = document.createElement('img');
                completeFiltersArrowDown.classList.add('main--burger-open');
                completeFiltersArrowDown.src = '/UI/assets/burger.svg';
                completeFiltersArrowDown.alt = '';
                completeFiltersOpenLabel.appendChild(completeFiltersArrowDown);

              const completeFiltersHideLabel = document.createElement('label');
              completeFiltersHideLabel.classList.add('main--column--filters-hide');
              completeFiltersHideLabel.setAttribute('for', 'complete-filters-close');
              completeListTitleBurger.appendChild(completeFiltersHideLabel);

                const completeFiltersArrowUp = document.createElement('img');
                completeFiltersArrowUp.classList.add('main--burger-close');
                completeFiltersArrowUp.src = '/UI/assets/burger.svg';
                completeFiltersArrowUp.alt = '';
                completeFiltersHideLabel.appendChild(completeFiltersArrowUp);

          const completeFiltersOpenerInput = document.createElement('input');
          completeFiltersOpenerInput.classList.add('main--column--filters-open-toggle', 'display-none');
          completeFiltersOpenerInput.type = 'radio';
          completeFiltersOpenerInput.id = 'complete-filters-open';
          completeFiltersOpenerInput.name = 'complete-filters';
          tasksListComplete.appendChild(completeFiltersOpenerInput);
          
          const completeListFilters = document.createElement('div');
          completeListFilters.classList.add('main--filters-container');
          tasksListComplete.appendChild(completeListFilters);

            const completeListFiltersResetContainer = document.createElement('div');
            completeListFiltersResetContainer.classList.add('main--filters--container-title-and-reset-button');
            completeListFilters.appendChild(completeListFiltersResetContainer);

              const completeListFiltersTitle = document.createElement('b');
              completeListFiltersTitle.classList.add('main--filters--title');
              completeListFiltersTitle.innerHTML = 'Filters';
              completeListFiltersResetContainer.appendChild(completeListFiltersTitle);

              const completeListFiltersResetImg = document.createElement('img');
              completeListFiltersResetImg.classList.add('main--filters--reset-icon');
              completeListFiltersResetImg.src = '/UI/assets/reset_icone.svg';
              completeListFiltersResetImg.alt = '';
              completeListFiltersResetContainer.appendChild(completeListFiltersResetImg);

            const completeListFiltersAssignee = document.createElement('div');
            completeListFiltersAssignee.classList.add('main--filters--assignee-name-filtering');
            completeListFilters.appendChild(completeListFiltersAssignee);

              const completeListFiltersAssigneeNameInput = document.createElement('input');
              completeListFiltersAssigneeNameInput.classList.add('main--filters--assignee-name-input');
              completeListFiltersAssigneeNameInput.type = 'text';
              completeListFiltersAssigneeNameInput.placeholder = 'Write here...';
              completeListFiltersAssignee.appendChild(completeListFiltersAssigneeNameInput);

              const completeListFiltersAssigneeSupportingText = document.createElement('p');
              completeListFiltersAssigneeSupportingText.classList.add('main--filters--input-supporting-text');
              completeListFiltersAssigneeSupportingText.innerHTML = 'Search by assignee name';
              completeListFiltersAssignee.appendChild(completeListFiltersAssigneeSupportingText);

            const completeListFiltersTime = document.createElement('div');
            completeListFiltersTime.classList.add('main--filters--time-filtering');
            completeListFilters.appendChild(completeListFiltersTime);

              const completeListFiltersTimeFrom = document.createElement('div');
              completeListFiltersTimeFrom.classList.add('main--filters--time--from-plate');
              completeListFiltersTime.appendChild(completeListFiltersTimeFrom);

                const completeListFiltersTimeFromSupportingText = document.createElement('p');
                completeListFiltersTimeFromSupportingText.classList.add('main--filters--supporting-text-from');
                completeListFiltersTimeFromSupportingText.innerHTML = 'From';
                completeListFiltersTimeFrom.appendChild(completeListFiltersTimeFromSupportingText);
              
                const completeListFiltersTimeFromInput = document.createElement('input');
                completeListFiltersTimeFromInput.classList.add('main--filters--from');
                completeListFiltersTimeFromInput.type = 'datetime-local';
                completeListFiltersTimeFrom.appendChild(completeListFiltersTimeFromInput);

              const completeListFiltersTimeTo = document.createElement('div');
              completeListFiltersTimeTo.classList.add('main--filters--time--to-plate');
              completeListFiltersTime.appendChild(completeListFiltersTimeTo);

                const completeListFiltersTimeToSupportingText = document.createElement('p');
                completeListFiltersTimeToSupportingText.classList.add('main--filters--supporting-text-to');
                completeListFiltersTimeToSupportingText.innerHTML = 'To';
                completeListFiltersTimeTo.appendChild(completeListFiltersTimeToSupportingText);

                const completeListFiltersTimeToInput = document.createElement('input');
                completeListFiltersTimeToInput.classList.add('main--filters--to');
                completeListFiltersTimeToInput.type = 'datetime-local';
                completeListFiltersTimeTo.appendChild(completeListFiltersTimeToInput);

            const completeListFiltersTaskName = document.createElement('div');
            completeListFiltersTaskName.classList.add('main--filters--task-name-filtering');
            completeListFilters.appendChild(completeListFiltersTaskName);

              const completeListFiltersTaskNameInput = document.createElement('input');
              completeListFiltersTaskNameInput.classList.add('main--filters--task-name-input');
              completeListFiltersTaskNameInput.type = 'text';
              completeListFiltersTaskNameInput.placeholder = 'Write here...';
              completeListFiltersTaskName.appendChild(completeListFiltersTaskNameInput);

              const completeListFiltersTaskNameSupportingText = document.createElement('p');
              completeListFiltersTaskNameSupportingText.classList.add('main--filters--input-supporting-text');
              completeListFiltersTaskNameSupportingText.innerHTML = 'Search by task name';
              completeListFiltersTaskName.appendChild(completeListFiltersTaskNameSupportingText);

            const completeListFiltersPriority = document.createElement('div');
            completeListFiltersPriority.classList.add('main--filters--priority-filtering');
            completeListFilters.appendChild(completeListFiltersPriority);

              const completeListFiltersPrioritySupportingText = document.createElement('p');
              completeListFiltersPrioritySupportingText.classList.add('main--filters--supporting-text');
              completeListFiltersPrioritySupportingText.innerHTML = 'Filter by priority';
              completeListFiltersPriority.appendChild(completeListFiltersPrioritySupportingText);

              const completeListFiltersPriorityBtns = document.createElement('div');
              completeListFiltersPriorityBtns.classList.add('main--filters--buttons');
              completeListFiltersPriority.appendChild(completeListFiltersPriorityBtns);

                const completeListFiltersPriorityHigh = document.createElement('div');
                completeListFiltersPriorityHigh.classList.add('btn-s', 'main--filters--priority-high');
                completeListFiltersPriorityBtns.appendChild(completeListFiltersPriorityHigh);

                  const completeListFiltersPriorityHighText = document.createElement('p');
                  completeListFiltersPriorityHighText.innerHTML = 'High';
                  completeListFiltersPriorityHigh.appendChild(completeListFiltersPriorityHighText);
                  
                const completeListFiltersPriorityMedium = document.createElement('div');
                completeListFiltersPriorityMedium.classList.add('btn-s', 'main--filters--priority-medium');
                completeListFiltersPriorityBtns.appendChild(completeListFiltersPriorityMedium);

                  const completeListFiltersPriorityMediumText = document.createElement('p');
                  completeListFiltersPriorityMediumText.innerHTML = 'Medium';
                  completeListFiltersPriorityMedium.appendChild(completeListFiltersPriorityMediumText);
                  
                const completeListFiltersPriorityLow = document.createElement('div');
                completeListFiltersPriorityLow.classList.add('btn-s', 'main--filters--priority-low');
                completeListFiltersPriorityBtns.appendChild(completeListFiltersPriorityLow);

                  const completeListFiltersPriorityLowText = document.createElement('p');
                  completeListFiltersPriorityLowText.innerHTML = 'Low';
                  completeListFiltersPriorityLow.appendChild(completeListFiltersPriorityLowText);

            const completeListFiltersPrivacy = document.createElement('div');
            completeListFiltersPrivacy.classList.add('main--filters--privacy-filtering');
            completeListFilters.appendChild(completeListFiltersPrivacy);

              const completeListFiltersPrivacySupportingText = document.createElement('p');
              completeListFiltersPrivacySupportingText.classList.add('main--filters--supporting-text');
              completeListFiltersPrivacySupportingText.innerHTML = 'Filter by privacy';
              completeListFiltersPrivacy.appendChild(completeListFiltersPrivacySupportingText);

              const completeListFiltersPrivacyBtns = document.createElement('div');
              completeListFiltersPrivacyBtns.classList.add('main--filters--buttons');
              completeListFiltersPrivacy.appendChild(completeListFiltersPrivacyBtns);

                const completeListFiltersPrivacyPublic = document.createElement('div');
                completeListFiltersPrivacyPublic.classList.add('btn-s', 'main--filters--privacy-public');
                completeListFiltersPrivacyBtns.appendChild(completeListFiltersPrivacyPublic);

                  const completeListFiltersPrivacyPublicText = document.createElement('p');
                  completeListFiltersPrivacyPublicText.innerHTML = 'public';
                  completeListFiltersPrivacyPublic.appendChild(completeListFiltersPrivacyPublicText);
                  
                const completeListFiltersPrivacyPrivate = document.createElement('div');
                completeListFiltersPrivacyPrivate.classList.add('btn-s', 'main--filters--privacy-private');
                completeListFiltersPrivacyBtns.appendChild(completeListFiltersPrivacyPrivate);

                  const completeListFiltersPrivacyPrivateText = document.createElement('p');
                  completeListFiltersPrivacyPrivateText.innerHTML = 'private';
                  completeListFiltersPrivacyPrivate.appendChild(completeListFiltersPrivacyPrivateText);

          const tasksListCompleteContainer = document.createElement('div');
          tasksListCompleteContainer.classList.add('main--ilst--tasks-container', 'beauty-scroll');
          tasksListCompleteContainer.id = 'tasksListCompleteContainer';
          tasksListComplete.appendChild(tasksListCompleteContainer);

            const tasksListCompleteTitles = document.createElement('div');
            tasksListCompleteTitles.classList.add('main--tasks-list--titles');
            tasksListCompleteContainer.appendChild(tasksListCompleteTitles);

              const tasksListCompleteTitleDate = document.createElement('div');
              tasksListCompleteTitleDate.classList.add('main--tasks-list--title-date');
              tasksListCompleteTitles.appendChild(tasksListCompleteTitleDate);

                const tasksListCompleteTitleDateText = document.createElement('p');
                tasksListCompleteTitleDateText.innerHTML = 'Date';
                tasksListCompleteTitleDate.appendChild(tasksListCompleteTitleDateText);

              const tasksListCompleteTitleTaskName = document.createElement('div');
              tasksListCompleteTitleTaskName.classList.add('main--tasks-list--title-task-name');
              tasksListCompleteTitles.appendChild(tasksListCompleteTitleTaskName);

                const tasksListCompleteTitleTaskNameText = document.createElement('p');
                tasksListCompleteTitleTaskNameText.innerHTML = 'Task name';
                tasksListCompleteTitleTaskName.appendChild(tasksListCompleteTitleTaskNameText);

              const tasksListCompleteTitleComments = document.createElement('div');
              tasksListCompleteTitleComments.classList.add('main--tasks-list--title-comments');
              tasksListCompleteTitles.appendChild(tasksListCompleteTitleComments);

                const tasksListCompleteTitleCommentsText = document.createElement('p');
                tasksListCompleteTitleCommentsText.innerHTML = 'Comments';
                tasksListCompleteTitleComments.appendChild(tasksListCompleteTitleCommentsText);

              const tasksListCompleteTitleStatus = document.createElement('div');
              tasksListCompleteTitleStatus.classList.add('main--tasks-list--title-status');
              tasksListCompleteTitles.appendChild(tasksListCompleteTitleStatus);

                const tasksListCompleteTitleStatusText = document.createElement('p');
                tasksListCompleteTitleStatusText.innerHTML = 'Status';
                tasksListCompleteTitleStatus.appendChild(tasksListCompleteTitleStatusText);

              const tasksListCompleteTitlePriority = document.createElement('div');
              tasksListCompleteTitlePriority.classList.add('main--tasks-list--title-priority');
              tasksListCompleteTitles.appendChild(tasksListCompleteTitlePriority);

                const tasksListCompleteTitlePriorityText = document.createElement('p');
                tasksListCompleteTitlePriorityText.innerHTML = 'Priority';
                tasksListCompleteTitlePriority.appendChild(tasksListCompleteTitlePriorityText);

              const tasksListCompleteTitlePrivacy = document.createElement('div');
              tasksListCompleteTitlePrivacy.classList.add('main--tasks-list--title-privacy');
              tasksListCompleteTitles.appendChild(tasksListCompleteTitlePrivacy);

                const tasksListCompleteTitlePrivacyText = document.createElement('p');
                tasksListCompleteTitlePrivacyText.innerHTML = 'Privacy';
                tasksListCompleteTitlePrivacy.appendChild(tasksListCompleteTitlePrivacyText);

              const tasksListCompleteTitleAssignee = document.createElement('div');
              tasksListCompleteTitleAssignee.classList.add('main--tasks-list--title-assignee');
              tasksListCompleteTitles.appendChild(tasksListCompleteTitleAssignee);

                const tasksListCompleteTitleAssigneeText = document.createElement('p');
                tasksListCompleteTitleAssigneeText.innerHTML = 'Assignee';
                tasksListCompleteTitleAssignee.appendChild(tasksListCompleteTitleAssigneeText);

              
        const columnsTaskBoard = document.createElement('div');
        columnsTaskBoard.classList.add('main--columns-task-board');
        this.container.appendChild(columnsTaskBoard);

          const tasksToDoColumn = document.createElement('div');
          tasksToDoColumn.classList.add('main--column');
          columnsTaskBoard.appendChild(tasksToDoColumn);

            const tasksToDoColumnTitle = document.createElement('div');
            tasksToDoColumnTitle.classList.add('main--column-title');
            tasksToDoColumn.appendChild(tasksToDoColumnTitle);

              const tasksToDoColumnStatus = document.createElement('h1');
              tasksToDoColumnStatus.classList.add('main--column-status');
              tasksToDoColumnStatus.innerHTML = 'To do';
              tasksToDoColumnTitle.appendChild(tasksToDoColumnStatus);

              const toDoColumnFiltersConcealerInput = document.createElement('input');
              toDoColumnFiltersConcealerInput.classList.add('main--column--filters-hide-toggle', 'display-none');
              toDoColumnFiltersConcealerInput.type = 'radio';
              toDoColumnFiltersConcealerInput.id = 'to-do-filters-col-close';
              toDoColumnFiltersConcealerInput.name = 'to-do-filters-col';
              toDoColumnFiltersConcealerInput.checked = true;
              tasksToDoColumnTitle.appendChild(toDoColumnFiltersConcealerInput);

              const toDoColumnTitleBurger = document.createElement('div');
              toDoColumnTitleBurger.classList.add('main--burgers');
              tasksToDoColumnTitle.appendChild(toDoColumnTitleBurger);

                const toDoColumnFiltersOpenLabel = document.createElement('label');
                toDoColumnFiltersOpenLabel.classList.add('main--column--filters-open');
                toDoColumnFiltersOpenLabel.setAttribute('for', 'to-do-filters-col-open');
                toDoColumnTitleBurger.appendChild(toDoColumnFiltersOpenLabel);

                  const toDoColumnFiltersBurgerOpen = document.createElement('img');
                  toDoColumnFiltersBurgerOpen.classList.add('main--burger-open');
                  toDoColumnFiltersBurgerOpen.src = '/UI/assets/burger.svg';
                  toDoColumnFiltersBurgerOpen.alt = '';
                  toDoColumnFiltersOpenLabel.appendChild(toDoColumnFiltersBurgerOpen);

                const toDoColumnFiltersHideLabel = document.createElement('label');
                toDoColumnFiltersHideLabel.classList.add('main--column--filters-hide');
                toDoColumnFiltersHideLabel.setAttribute('for', 'to-do-filters-col-close');
                toDoColumnTitleBurger.appendChild(toDoColumnFiltersHideLabel);

                  const toDoColumnFiltersBurgerClose = document.createElement('img');
                  toDoColumnFiltersBurgerClose.classList.add('main--burger-close');
                  toDoColumnFiltersBurgerClose.src = '/UI/assets/burger.svg';
                  toDoColumnFiltersBurgerClose.alt = '';
                  toDoColumnFiltersHideLabel.appendChild(toDoColumnFiltersBurgerClose);

            const toDoColumnFiltersOpenerInput = document.createElement('input');
            toDoColumnFiltersOpenerInput.classList.add('main--column--filters-open-toggle', 'display-none');
            toDoColumnFiltersOpenerInput.type = 'radio';
            toDoColumnFiltersOpenerInput.id = 'to-do-filters-col-open';
            toDoColumnFiltersOpenerInput.name = 'to-do-filters-col';
            tasksToDoColumn.appendChild(toDoColumnFiltersOpenerInput);
            
            const toDoColumnFilters = document.createElement('div');
            toDoColumnFilters.classList.add('main--filters-container');
            tasksToDoColumn.appendChild(toDoColumnFilters);

              const toDoColumnFiltersResetContainer = document.createElement('div');
              toDoColumnFiltersResetContainer.classList.add('main--filters--container-title-and-reset-button');
              toDoColumnFilters.appendChild(toDoColumnFiltersResetContainer);

                const toDoColumnFiltersTitle = document.createElement('b');
                toDoColumnFiltersTitle.classList.add('main--filters--title');
                toDoColumnFiltersTitle.innerHTML = 'Filters';
                toDoColumnFiltersResetContainer.appendChild(toDoColumnFiltersTitle);

                const toDoColumnFiltersResetImg = document.createElement('img');
                toDoColumnFiltersResetImg.classList.add('main--filters--reset-icon');
                toDoColumnFiltersResetImg.src = '/UI/assets/reset_icone.svg';
                toDoColumnFiltersResetImg.alt = '';
                toDoColumnFiltersResetContainer.appendChild(toDoColumnFiltersResetImg);

              const toDoColumnFiltersAssignee = document.createElement('div');
              toDoColumnFiltersAssignee.classList.add('main--filters--assignee-name-filtering');
              toDoColumnFilters.appendChild(toDoColumnFiltersAssignee);

                const toDoColumnFiltersAssigneeNameInput = document.createElement('input');
                toDoColumnFiltersAssigneeNameInput.classList.add('main--filters--assignee-name-input');
                toDoColumnFiltersAssigneeNameInput.type = 'text';
                toDoColumnFiltersAssigneeNameInput.placeholder = 'Write here...';
                toDoColumnFiltersAssignee.appendChild(toDoColumnFiltersAssigneeNameInput);

                const toDoColumnFiltersAssigneeSupportingText = document.createElement('p');
                toDoColumnFiltersAssigneeSupportingText.classList.add('main--filters--input-supporting-text');
                toDoColumnFiltersAssigneeSupportingText.innerHTML = 'Search by assignee name';
                toDoColumnFiltersAssignee.appendChild(toDoColumnFiltersAssigneeSupportingText);

              const toDoColumnFiltersTime = document.createElement('div');
              toDoColumnFiltersTime.classList.add('main--filters--time-filtering');
              toDoColumnFilters.appendChild(toDoColumnFiltersTime);

                const toDoColumnFiltersTimeFrom = document.createElement('div');
                toDoColumnFiltersTimeFrom.classList.add('main--filters--time--from-plate');
                toDoColumnFiltersTime.appendChild(toDoColumnFiltersTimeFrom);

                  const toDoColumnFiltersTimeFromSupportingText = document.createElement('p');
                  toDoColumnFiltersTimeFromSupportingText.classList.add('main--filters--supporting-text-from');
                  toDoColumnFiltersTimeFromSupportingText.innerHTML = 'From';
                  toDoColumnFiltersTimeFrom.appendChild(toDoColumnFiltersTimeFromSupportingText);
                
                  const toDoColumnFiltersTimeFromInput = document.createElement('input');
                  toDoColumnFiltersTimeFromInput.classList.add('main--filters--from');
                  toDoColumnFiltersTimeFromInput.type = 'datetime-local';
                  toDoColumnFiltersTimeFrom.appendChild(toDoColumnFiltersTimeFromInput);

                const toDoColumnFiltersTimeTo = document.createElement('div');
                toDoColumnFiltersTimeTo.classList.add('main--filters--time--to-plate');
                toDoColumnFiltersTime.appendChild(toDoColumnFiltersTimeTo);

                  const toDoColumnFiltersTimeToSupportingText = document.createElement('p');
                  toDoColumnFiltersTimeToSupportingText.classList.add('main--filters--supporting-text-to');
                  toDoColumnFiltersTimeToSupportingText.innerHTML = 'To';
                  toDoColumnFiltersTimeTo.appendChild(toDoColumnFiltersTimeToSupportingText);

                  const toDoColumnFiltersTimeToInput = document.createElement('input');
                  toDoColumnFiltersTimeToInput.classList.add('main--filters--to');
                  toDoColumnFiltersTimeToInput.type = 'datetime-local';
                  toDoColumnFiltersTimeTo.appendChild(toDoColumnFiltersTimeToInput);

              const toDoColumnFiltersTaskName = document.createElement('div');
              toDoColumnFiltersTaskName.classList.add('main--filters--task-name-filtering');
              toDoColumnFilters.appendChild(toDoColumnFiltersTaskName);

                const toDoColumnFiltersTaskNameInput = document.createElement('input');
                toDoColumnFiltersTaskNameInput.classList.add('main--filters--task-name-input');
                toDoColumnFiltersTaskNameInput.type = 'text';
                toDoColumnFiltersTaskNameInput.placeholder = 'Write here...';
                toDoColumnFiltersTaskName.appendChild(toDoColumnFiltersTaskNameInput);

                const toDoColumnFiltersTaskNameSupportingText = document.createElement('p');
                toDoColumnFiltersTaskNameSupportingText.classList.add('main--filters--input-supporting-text');
                toDoColumnFiltersTaskNameSupportingText.innerHTML = 'Search by task name';
                toDoColumnFiltersTaskName.appendChild(toDoColumnFiltersTaskNameSupportingText);

              const toDoColumnFiltersPriority = document.createElement('div');
              toDoColumnFiltersPriority.classList.add('main--filters--priority-filtering');
              toDoColumnFilters.appendChild(toDoColumnFiltersPriority);

                const toDoColumnFiltersPrioritySupportingText = document.createElement('p');
                toDoColumnFiltersPrioritySupportingText.classList.add('main--filters--supporting-text');
                toDoColumnFiltersPrioritySupportingText.innerHTML = 'Filter by priority';
                toDoColumnFiltersPriority.appendChild(toDoColumnFiltersPrioritySupportingText);

                const toDoColumnFiltersPriorityBtns = document.createElement('div');
                toDoColumnFiltersPriorityBtns.classList.add('main--filters--buttons');
                toDoColumnFiltersPriority.appendChild(toDoColumnFiltersPriorityBtns);

                  const toDoColumnFiltersPriorityHigh = document.createElement('div');
                  toDoColumnFiltersPriorityHigh.classList.add('btn-s', 'main--filters--priority-high');
                  toDoColumnFiltersPriorityBtns.appendChild(toDoColumnFiltersPriorityHigh);

                    const toDoColumnFiltersPriorityHighText = document.createElement('p');
                    toDoColumnFiltersPriorityHighText.innerHTML = 'High';
                    toDoColumnFiltersPriorityHigh.appendChild(toDoColumnFiltersPriorityHighText);
                    
                  const toDoColumnFiltersPriorityMedium = document.createElement('div');
                  toDoColumnFiltersPriorityMedium.classList.add('btn-s', 'main--filters--priority-medium');
                  toDoColumnFiltersPriorityBtns.appendChild(toDoColumnFiltersPriorityMedium);

                    const toDoColumnFiltersPriorityMediumText = document.createElement('p');
                    toDoColumnFiltersPriorityMediumText.innerHTML = 'Medium';
                    toDoColumnFiltersPriorityMedium.appendChild(toDoColumnFiltersPriorityMediumText);
                    
                  const toDoColumnFiltersPriorityLow = document.createElement('div');
                  toDoColumnFiltersPriorityLow.classList.add('btn-s', 'main--filters--priority-low');
                  toDoColumnFiltersPriorityBtns.appendChild(toDoColumnFiltersPriorityLow);

                    const toDoColumnFiltersPriorityLowText = document.createElement('p');
                    toDoColumnFiltersPriorityLowText.innerHTML = 'Low';
                    toDoColumnFiltersPriorityLow.appendChild(toDoColumnFiltersPriorityLowText);

              const toDoColumnFiltersPrivacy = document.createElement('div');
              toDoColumnFiltersPrivacy.classList.add('main--filters--privacy-filtering');
              toDoColumnFilters.appendChild(toDoColumnFiltersPrivacy);

                const toDoColumnFiltersPrivacySupportingText = document.createElement('p');
                toDoColumnFiltersPrivacySupportingText.classList.add('main--filters--supporting-text');
                toDoColumnFiltersPrivacySupportingText.innerHTML = 'Filter by privacy';
                toDoColumnFiltersPrivacy.appendChild(toDoColumnFiltersPrivacySupportingText);

                const toDoColumnFiltersPrivacyBtns = document.createElement('div');
                toDoColumnFiltersPrivacyBtns.classList.add('main--filters--buttons');
                toDoColumnFiltersPrivacy.appendChild(toDoColumnFiltersPrivacyBtns);

                  const toDoColumnFiltersPrivacyPublic = document.createElement('div');
                  toDoColumnFiltersPrivacyPublic.classList.add('btn-s', 'main--filters--privacy-public');
                  toDoColumnFiltersPrivacyBtns.appendChild(toDoColumnFiltersPrivacyPublic);

                    const toDoColumnFiltersPrivacyPublicText = document.createElement('p');
                    toDoColumnFiltersPrivacyPublicText.innerHTML = 'public';
                    toDoColumnFiltersPrivacyPublic.appendChild(toDoColumnFiltersPrivacyPublicText);
                    
                  const toDoColumnFiltersPrivacyPrivate = document.createElement('div');
                  toDoColumnFiltersPrivacyPrivate.classList.add('btn-s', 'main--filters--privacy-private');
                  toDoColumnFiltersPrivacyBtns.appendChild(toDoColumnFiltersPrivacyPrivate);

                    const toDoColumnFiltersPrivacyPrivateText = document.createElement('p');
                    toDoColumnFiltersPrivacyPrivateText.innerHTML = 'private';
                    toDoColumnFiltersPrivacyPrivate.appendChild(toDoColumnFiltersPrivacyPrivateText);

            const toDoColumnContainer = document.createElement('div');
            toDoColumnContainer.classList.add('main--column-container', 'beauty-scroll');
            toDoColumnContainer.id = 'toDoColumnContainer';
            tasksToDoColumn.appendChild(toDoColumnContainer);

          const tasksInProgressColumn = document.createElement('div');
          tasksInProgressColumn.classList.add('main--column');
          columnsTaskBoard.appendChild(tasksInProgressColumn);

            const tasksInProgressColumnTitle = document.createElement('div');
            tasksInProgressColumnTitle.classList.add('main--column-title');
            tasksInProgressColumn.appendChild(tasksInProgressColumnTitle);

              const tasksInProgressColumnStatus = document.createElement('h1');
              tasksInProgressColumnStatus.classList.add('main--column-status');
              tasksInProgressColumnStatus.innerHTML = 'In progress';
              tasksInProgressColumnTitle.appendChild(tasksInProgressColumnStatus);

              const inProgressColumnFiltersConcealerInput = document.createElement('input');
              inProgressColumnFiltersConcealerInput.classList.add('main--column--filters-hide-toggle', 'display-none');
              inProgressColumnFiltersConcealerInput.type = 'radio';
              inProgressColumnFiltersConcealerInput.id = 'in-progress-filters-col-close';
              inProgressColumnFiltersConcealerInput.name = 'in-progress-filters-col';
              inProgressColumnFiltersConcealerInput.checked = true;
              tasksInProgressColumnTitle.appendChild(inProgressColumnFiltersConcealerInput);

              const inProgressColumnTitleBurger = document.createElement('div');
              inProgressColumnTitleBurger.classList.add('main--burgers');
              tasksInProgressColumnTitle.appendChild(inProgressColumnTitleBurger);

                const inProgressColumnFiltersOpenLabel = document.createElement('label');
                inProgressColumnFiltersOpenLabel.classList.add('main--column--filters-open');
                inProgressColumnFiltersOpenLabel.setAttribute('for', 'in-progress-filters-col-open');
                inProgressColumnTitleBurger.appendChild(inProgressColumnFiltersOpenLabel);

                  const inProgressColumnFiltersBurgerOpen = document.createElement('img');
                  inProgressColumnFiltersBurgerOpen.classList.add('main--burger-open');
                  inProgressColumnFiltersBurgerOpen.src = '/UI/assets/burger.svg';
                  inProgressColumnFiltersBurgerOpen.alt = '';
                  inProgressColumnFiltersOpenLabel.appendChild(inProgressColumnFiltersBurgerOpen);

                const inProgressColumnFiltersHideLabel = document.createElement('label');
                inProgressColumnFiltersHideLabel.classList.add('main--column--filters-hide');
                inProgressColumnFiltersHideLabel.setAttribute('for', 'in-progress-filters-col-close');
                inProgressColumnTitleBurger.appendChild(inProgressColumnFiltersHideLabel);

                  const inProgressColumnFiltersBurgerClose = document.createElement('img');
                  inProgressColumnFiltersBurgerClose.classList.add('main--burger-close');
                  inProgressColumnFiltersBurgerClose.src = '/UI/assets/burger.svg';
                  inProgressColumnFiltersBurgerClose.alt = '';
                  inProgressColumnFiltersHideLabel.appendChild(inProgressColumnFiltersBurgerClose);

            const inProgressColumnFiltersOpenerInput = document.createElement('input');
            inProgressColumnFiltersOpenerInput.classList.add('main--column--filters-open-toggle', 'display-none');
            inProgressColumnFiltersOpenerInput.type = 'radio';
            inProgressColumnFiltersOpenerInput.id = 'in-progress-filters-col-open';
            inProgressColumnFiltersOpenerInput.name = 'in-progress-filters-col';
            tasksInProgressColumn.appendChild(inProgressColumnFiltersOpenerInput);
            
            const inProgressColumnFilters = document.createElement('div');
            inProgressColumnFilters.classList.add('main--filters-container');
            tasksInProgressColumn.appendChild(inProgressColumnFilters);

              const inProgressColumnFiltersResetContainer = document.createElement('div');
              inProgressColumnFiltersResetContainer.classList.add('main--filters--container-title-and-reset-button');
              inProgressColumnFilters.appendChild(inProgressColumnFiltersResetContainer);

                const inProgressColumnFiltersTitle = document.createElement('b');
                inProgressColumnFiltersTitle.classList.add('main--filters--title');
                inProgressColumnFiltersTitle.innerHTML = 'Filters';
                inProgressColumnFiltersResetContainer.appendChild(inProgressColumnFiltersTitle);

                const inProgressColumnFiltersResetImg = document.createElement('img');
                inProgressColumnFiltersResetImg.classList.add('main--filters--reset-icon');
                inProgressColumnFiltersResetImg.src = '/UI/assets/reset_icone.svg';
                inProgressColumnFiltersResetImg.alt = '';
                inProgressColumnFiltersResetContainer.appendChild(inProgressColumnFiltersResetImg);

              const inProgressColumnFiltersAssignee = document.createElement('div');
              inProgressColumnFiltersAssignee.classList.add('main--filters--assignee-name-filtering');
              inProgressColumnFilters.appendChild(inProgressColumnFiltersAssignee);

                const inProgressColumnFiltersAssigneeNameInput = document.createElement('input');
                inProgressColumnFiltersAssigneeNameInput.classList.add('main--filters--assignee-name-input');
                inProgressColumnFiltersAssigneeNameInput.type = 'text';
                inProgressColumnFiltersAssigneeNameInput.placeholder = 'Write here...';
                inProgressColumnFiltersAssignee.appendChild(inProgressColumnFiltersAssigneeNameInput);

                const inProgressColumnFiltersAssigneeSupportingText = document.createElement('p');
                inProgressColumnFiltersAssigneeSupportingText.classList.add('main--filters--input-supporting-text');
                inProgressColumnFiltersAssigneeSupportingText.innerHTML = 'Search by assignee name';
                inProgressColumnFiltersAssignee.appendChild(inProgressColumnFiltersAssigneeSupportingText);

              const inProgressColumnFiltersTime = document.createElement('div');
              inProgressColumnFiltersTime.classList.add('main--filters--time-filtering');
              inProgressColumnFilters.appendChild(inProgressColumnFiltersTime);

                const inProgressColumnFiltersTimeFrom = document.createElement('div');
                inProgressColumnFiltersTimeFrom.classList.add('main--filters--time--from-plate');
                inProgressColumnFiltersTime.appendChild(inProgressColumnFiltersTimeFrom);

                  const inProgressColumnFiltersTimeFromSupportingText = document.createElement('p');
                  inProgressColumnFiltersTimeFromSupportingText.classList.add('main--filters--supporting-text-from');
                  inProgressColumnFiltersTimeFromSupportingText.innerHTML = 'From';
                  inProgressColumnFiltersTimeFrom.appendChild(inProgressColumnFiltersTimeFromSupportingText);
                
                  const inProgressColumnFiltersTimeFromInput = document.createElement('input');
                  inProgressColumnFiltersTimeFromInput.classList.add('main--filters--from');
                  inProgressColumnFiltersTimeFromInput.type = 'datetime-local';
                  inProgressColumnFiltersTimeFrom.appendChild(inProgressColumnFiltersTimeFromInput);

                const inProgressColumnFiltersTimeTo = document.createElement('div');
                inProgressColumnFiltersTimeTo.classList.add('main--filters--time--to-plate');
                inProgressColumnFiltersTime.appendChild(inProgressColumnFiltersTimeTo);

                  const inProgressColumnFiltersTimeToSupportingText = document.createElement('p');
                  inProgressColumnFiltersTimeToSupportingText.classList.add('main--filters--supporting-text-to');
                  inProgressColumnFiltersTimeToSupportingText.innerHTML = 'To';
                  inProgressColumnFiltersTimeTo.appendChild(inProgressColumnFiltersTimeToSupportingText);

                  const inProgressColumnFiltersTimeToInput = document.createElement('input');
                  inProgressColumnFiltersTimeToInput.classList.add('main--filters--to');
                  inProgressColumnFiltersTimeToInput.type = 'datetime-local';
                  inProgressColumnFiltersTimeTo.appendChild(inProgressColumnFiltersTimeToInput);

              const inProgressColumnFiltersTaskName = document.createElement('div');
              inProgressColumnFiltersTaskName.classList.add('main--filters--task-name-filtering');
              inProgressColumnFilters.appendChild(inProgressColumnFiltersTaskName);

                const inProgressColumnFiltersTaskNameInput = document.createElement('input');
                inProgressColumnFiltersTaskNameInput.classList.add('main--filters--task-name-input');
                inProgressColumnFiltersTaskNameInput.type = 'text';
                inProgressColumnFiltersTaskNameInput.placeholder = 'Write here...';
                inProgressColumnFiltersTaskName.appendChild(inProgressColumnFiltersTaskNameInput);

                const inProgressColumnFiltersTaskNameSupportingText = document.createElement('p');
                inProgressColumnFiltersTaskNameSupportingText.classList.add('main--filters--input-supporting-text');
                inProgressColumnFiltersTaskNameSupportingText.innerHTML = 'Search by task name';
                inProgressColumnFiltersTaskName.appendChild(inProgressColumnFiltersTaskNameSupportingText);

              const inProgressColumnFiltersPriority = document.createElement('div');
              inProgressColumnFiltersPriority.classList.add('main--filters--priority-filtering');
              inProgressColumnFilters.appendChild(inProgressColumnFiltersPriority);

                const inProgressColumnFiltersPrioritySupportingText = document.createElement('p');
                inProgressColumnFiltersPrioritySupportingText.classList.add('main--filters--supporting-text');
                inProgressColumnFiltersPrioritySupportingText.innerHTML = 'Filter by priority';
                inProgressColumnFiltersPriority.appendChild(inProgressColumnFiltersPrioritySupportingText);

                const inProgressColumnFiltersPriorityBtns = document.createElement('div');
                inProgressColumnFiltersPriorityBtns.classList.add('main--filters--buttons');
                inProgressColumnFiltersPriority.appendChild(inProgressColumnFiltersPriorityBtns);

                  const inProgressColumnFiltersPriorityHigh = document.createElement('div');
                  inProgressColumnFiltersPriorityHigh.classList.add('btn-s', 'main--filters--priority-high');
                  inProgressColumnFiltersPriorityBtns.appendChild(inProgressColumnFiltersPriorityHigh);

                    const inProgressColumnFiltersPriorityHighText = document.createElement('p');
                    inProgressColumnFiltersPriorityHighText.innerHTML = 'High';
                    inProgressColumnFiltersPriorityHigh.appendChild(inProgressColumnFiltersPriorityHighText);
                    
                  const inProgressColumnFiltersPriorityMedium = document.createElement('div');
                  inProgressColumnFiltersPriorityMedium.classList.add('btn-s', 'main--filters--priority-medium');
                  inProgressColumnFiltersPriorityBtns.appendChild(inProgressColumnFiltersPriorityMedium);

                    const inProgressColumnFiltersPriorityMediumText = document.createElement('p');
                    inProgressColumnFiltersPriorityMediumText.innerHTML = 'Medium';
                    inProgressColumnFiltersPriorityMedium.appendChild(inProgressColumnFiltersPriorityMediumText);
                    
                  const inProgressColumnFiltersPriorityLow = document.createElement('div');
                  inProgressColumnFiltersPriorityLow.classList.add('btn-s', 'main--filters--priority-low');
                  inProgressColumnFiltersPriorityBtns.appendChild(inProgressColumnFiltersPriorityLow);

                    const inProgressColumnFiltersPriorityLowText = document.createElement('p');
                    inProgressColumnFiltersPriorityLowText.innerHTML = 'Low';
                    inProgressColumnFiltersPriorityLow.appendChild(inProgressColumnFiltersPriorityLowText);

              const inProgressColumnFiltersPrivacy = document.createElement('div');
              inProgressColumnFiltersPrivacy.classList.add('main--filters--privacy-filtering');
              inProgressColumnFilters.appendChild(inProgressColumnFiltersPrivacy);

                const inProgressColumnFiltersPrivacySupportingText = document.createElement('p');
                inProgressColumnFiltersPrivacySupportingText.classList.add('main--filters--supporting-text');
                inProgressColumnFiltersPrivacySupportingText.innerHTML = 'Filter by privacy';
                inProgressColumnFiltersPrivacy.appendChild(inProgressColumnFiltersPrivacySupportingText);

                const inProgressColumnFiltersPrivacyBtns = document.createElement('div');
                inProgressColumnFiltersPrivacyBtns.classList.add('main--filters--buttons');
                inProgressColumnFiltersPrivacy.appendChild(inProgressColumnFiltersPrivacyBtns);

                  const inProgressColumnFiltersPrivacyPublic = document.createElement('div');
                  inProgressColumnFiltersPrivacyPublic.classList.add('btn-s', 'main--filters--privacy-public');
                  inProgressColumnFiltersPrivacyBtns.appendChild(inProgressColumnFiltersPrivacyPublic);

                    const inProgressColumnFiltersPrivacyPublicText = document.createElement('p');
                    inProgressColumnFiltersPrivacyPublicText.innerHTML = 'public';
                    inProgressColumnFiltersPrivacyPublic.appendChild(inProgressColumnFiltersPrivacyPublicText);
                    
                  const inProgressColumnFiltersPrivacyPrivate = document.createElement('div');
                  inProgressColumnFiltersPrivacyPrivate.classList.add('btn-s', 'main--filters--privacy-private');
                  inProgressColumnFiltersPrivacyBtns.appendChild(inProgressColumnFiltersPrivacyPrivate);

                    const inProgressColumnFiltersPrivacyPrivateText = document.createElement('p');
                    inProgressColumnFiltersPrivacyPrivateText.innerHTML = 'private';
                    inProgressColumnFiltersPrivacyPrivate.appendChild(inProgressColumnFiltersPrivacyPrivateText);

            const inProgressColumnContainer = document.createElement('div');
            inProgressColumnContainer.classList.add('main--column-container', 'beauty-scroll');
            inProgressColumnContainer.id = 'inProgressColumnContainer';
            tasksInProgressColumn.appendChild(inProgressColumnContainer);



          const tasksCompleteColumn = document.createElement('div');
          tasksCompleteColumn.classList.add('main--column');
          columnsTaskBoard.appendChild(tasksCompleteColumn);

            const tasksCompleteColumnTitle = document.createElement('div');
            tasksCompleteColumnTitle.classList.add('main--column-title');
            tasksCompleteColumn.appendChild(tasksCompleteColumnTitle);

              const tasksCompleteColumnStatus = document.createElement('h1');
              tasksCompleteColumnStatus.classList.add('main--column-status');
              tasksCompleteColumnStatus.innerHTML = 'Complete';
              tasksCompleteColumnTitle.appendChild(tasksCompleteColumnStatus);

              const completeColumnFiltersConcealerInput = document.createElement('input');
              completeColumnFiltersConcealerInput.classList.add('main--column--filters-hide-toggle', 'display-none');
              completeColumnFiltersConcealerInput.type = 'radio';
              completeColumnFiltersConcealerInput.id = 'complete-filters-col-close';
              completeColumnFiltersConcealerInput.name = 'complete-filters-col';
              completeColumnFiltersConcealerInput.checked = true;
              tasksCompleteColumnTitle.appendChild(completeColumnFiltersConcealerInput);

              const completeColumnTitleBurger = document.createElement('div');
              completeColumnTitleBurger.classList.add('main--burgers');
              tasksCompleteColumnTitle.appendChild(completeColumnTitleBurger);

                const completeColumnFiltersOpenLabel = document.createElement('label');
                completeColumnFiltersOpenLabel.classList.add('main--column--filters-open');
                completeColumnFiltersOpenLabel.setAttribute('for', 'complete-filters-col-open');
                completeColumnTitleBurger.appendChild(completeColumnFiltersOpenLabel);

                  const completeColumnFiltersBurgerOpen = document.createElement('img');
                  completeColumnFiltersBurgerOpen.classList.add('main--burger-open');
                  completeColumnFiltersBurgerOpen.src = '/UI/assets/burger.svg';
                  completeColumnFiltersBurgerOpen.alt = '';
                  completeColumnFiltersOpenLabel.appendChild(completeColumnFiltersBurgerOpen);

                const completeColumnFiltersHideLabel = document.createElement('label');
                completeColumnFiltersHideLabel.classList.add('main--column--filters-hide');
                completeColumnFiltersHideLabel.setAttribute('for', 'complete-filters-col-close');
                completeColumnTitleBurger.appendChild(completeColumnFiltersHideLabel);

                  const completeColumnFiltersBurgerClose = document.createElement('img');
                  completeColumnFiltersBurgerClose.classList.add('main--burger-close');
                  completeColumnFiltersBurgerClose.src = '/UI/assets/burger.svg';
                  completeColumnFiltersBurgerClose.alt = '';
                  completeColumnFiltersHideLabel.appendChild(completeColumnFiltersBurgerClose);

            const completeColumnFiltersOpenerInput = document.createElement('input');
            completeColumnFiltersOpenerInput.classList.add('main--column--filters-open-toggle', 'display-none');
            completeColumnFiltersOpenerInput.type = 'radio';
            completeColumnFiltersOpenerInput.id = 'complete-filters-col-open';
            completeColumnFiltersOpenerInput.name = 'complete-filters-col';
            tasksCompleteColumn.appendChild(completeColumnFiltersOpenerInput);
            
            const completeColumnFilters = document.createElement('div');
            completeColumnFilters.classList.add('main--filters-container');
            tasksCompleteColumn.appendChild(completeColumnFilters);

              const completeColumnFiltersResetContainer = document.createElement('div');
              completeColumnFiltersResetContainer.classList.add('main--filters--container-title-and-reset-button');
              completeColumnFilters.appendChild(completeColumnFiltersResetContainer);

                const completeColumnFiltersTitle = document.createElement('b');
                completeColumnFiltersTitle.classList.add('main--filters--title');
                completeColumnFiltersTitle.innerHTML = 'Filters';
                completeColumnFiltersResetContainer.appendChild(completeColumnFiltersTitle);

                const completeColumnFiltersResetImg = document.createElement('img');
                completeColumnFiltersResetImg.classList.add('main--filters--reset-icon');
                completeColumnFiltersResetImg.src = '/UI/assets/reset_icone.svg';
                completeColumnFiltersResetImg.alt = '';
                completeColumnFiltersResetContainer.appendChild(completeColumnFiltersResetImg);

              const completeColumnFiltersAssignee = document.createElement('div');
              completeColumnFiltersAssignee.classList.add('main--filters--assignee-name-filtering');
              completeColumnFilters.appendChild(completeColumnFiltersAssignee);

                const completeColumnFiltersAssigneeNameInput = document.createElement('input');
                completeColumnFiltersAssigneeNameInput.classList.add('main--filters--assignee-name-input');
                completeColumnFiltersAssigneeNameInput.type = 'text';
                completeColumnFiltersAssigneeNameInput.placeholder = 'Write here...';
                completeColumnFiltersAssignee.appendChild(completeColumnFiltersAssigneeNameInput);

                const completeColumnFiltersAssigneeSupportingText = document.createElement('p');
                completeColumnFiltersAssigneeSupportingText.classList.add('main--filters--input-supporting-text');
                completeColumnFiltersAssigneeSupportingText.innerHTML = 'Search by assignee name';
                completeColumnFiltersAssignee.appendChild(completeColumnFiltersAssigneeSupportingText);

              const completeColumnFiltersTime = document.createElement('div');
              completeColumnFiltersTime.classList.add('main--filters--time-filtering');
              completeColumnFilters.appendChild(completeColumnFiltersTime);

                const completeColumnFiltersTimeFrom = document.createElement('div');
                completeColumnFiltersTimeFrom.classList.add('main--filters--time--from-plate');
                completeColumnFiltersTime.appendChild(completeColumnFiltersTimeFrom);

                  const completeColumnFiltersTimeFromSupportingText = document.createElement('p');
                  completeColumnFiltersTimeFromSupportingText.classList.add('main--filters--supporting-text-from');
                  completeColumnFiltersTimeFromSupportingText.innerHTML = 'From';
                  completeColumnFiltersTimeFrom.appendChild(completeColumnFiltersTimeFromSupportingText);
                
                  const completeColumnFiltersTimeFromInput = document.createElement('input');
                  completeColumnFiltersTimeFromInput.classList.add('main--filters--from');
                  completeColumnFiltersTimeFromInput.type = 'datetime-local';
                  completeColumnFiltersTimeFrom.appendChild(completeColumnFiltersTimeFromInput);

                const completeColumnFiltersTimeTo = document.createElement('div');
                completeColumnFiltersTimeTo.classList.add('main--filters--time--to-plate');
                completeColumnFiltersTime.appendChild(completeColumnFiltersTimeTo);

                  const completeColumnFiltersTimeToSupportingText = document.createElement('p');
                  completeColumnFiltersTimeToSupportingText.classList.add('main--filters--supporting-text-to');
                  completeColumnFiltersTimeToSupportingText.innerHTML = 'To';
                  completeColumnFiltersTimeTo.appendChild(completeColumnFiltersTimeToSupportingText);

                  const completeColumnFiltersTimeToInput = document.createElement('input');
                  completeColumnFiltersTimeToInput.classList.add('main--filters--to');
                  completeColumnFiltersTimeToInput.type = 'datetime-local';
                  completeColumnFiltersTimeTo.appendChild(completeColumnFiltersTimeToInput);

              const completeColumnFiltersTaskName = document.createElement('div');
              completeColumnFiltersTaskName.classList.add('main--filters--task-name-filtering');
              completeColumnFilters.appendChild(completeColumnFiltersTaskName);

                const completeColumnFiltersTaskNameInput = document.createElement('input');
                completeColumnFiltersTaskNameInput.classList.add('main--filters--task-name-input');
                completeColumnFiltersTaskNameInput.type = 'text';
                completeColumnFiltersTaskNameInput.placeholder = 'Write here...';
                completeColumnFiltersTaskName.appendChild(completeColumnFiltersTaskNameInput);

                const completeColumnFiltersTaskNameSupportingText = document.createElement('p');
                completeColumnFiltersTaskNameSupportingText.classList.add('main--filters--input-supporting-text');
                completeColumnFiltersTaskNameSupportingText.innerHTML = 'Search by task name';
                completeColumnFiltersTaskName.appendChild(completeColumnFiltersTaskNameSupportingText);

              const completeColumnFiltersPriority = document.createElement('div');
              completeColumnFiltersPriority.classList.add('main--filters--priority-filtering');
              completeColumnFilters.appendChild(completeColumnFiltersPriority);

                const completeColumnFiltersPrioritySupportingText = document.createElement('p');
                completeColumnFiltersPrioritySupportingText.classList.add('main--filters--supporting-text');
                completeColumnFiltersPrioritySupportingText.innerHTML = 'Filter by priority';
                completeColumnFiltersPriority.appendChild(completeColumnFiltersPrioritySupportingText);

                const completeColumnFiltersPriorityBtns = document.createElement('div');
                completeColumnFiltersPriorityBtns.classList.add('main--filters--buttons');
                completeColumnFiltersPriority.appendChild(completeColumnFiltersPriorityBtns);

                  const completeColumnFiltersPriorityHigh = document.createElement('div');
                  completeColumnFiltersPriorityHigh.classList.add('btn-s', 'main--filters--priority-high');
                  completeColumnFiltersPriorityBtns.appendChild(completeColumnFiltersPriorityHigh);

                    const completeColumnFiltersPriorityHighText = document.createElement('p');
                    completeColumnFiltersPriorityHighText.innerHTML = 'High';
                    completeColumnFiltersPriorityHigh.appendChild(completeColumnFiltersPriorityHighText);
                    
                  const completeColumnFiltersPriorityMedium = document.createElement('div');
                  completeColumnFiltersPriorityMedium.classList.add('btn-s', 'main--filters--priority-medium');
                  completeColumnFiltersPriorityBtns.appendChild(completeColumnFiltersPriorityMedium);

                    const completeColumnFiltersPriorityMediumText = document.createElement('p');
                    completeColumnFiltersPriorityMediumText.innerHTML = 'Medium';
                    completeColumnFiltersPriorityMedium.appendChild(completeColumnFiltersPriorityMediumText);
                    
                  const completeColumnFiltersPriorityLow = document.createElement('div');
                  completeColumnFiltersPriorityLow.classList.add('btn-s', 'main--filters--priority-low');
                  completeColumnFiltersPriorityBtns.appendChild(completeColumnFiltersPriorityLow);

                    const completeColumnFiltersPriorityLowText = document.createElement('p');
                    completeColumnFiltersPriorityLowText.innerHTML = 'Low';
                    completeColumnFiltersPriorityLow.appendChild(completeColumnFiltersPriorityLowText);

              const completeColumnFiltersPrivacy = document.createElement('div');
              completeColumnFiltersPrivacy.classList.add('main--filters--privacy-filtering');
              completeColumnFilters.appendChild(completeColumnFiltersPrivacy);

                const completeColumnFiltersPrivacySupportingText = document.createElement('p');
                completeColumnFiltersPrivacySupportingText.classList.add('main--filters--supporting-text');
                completeColumnFiltersPrivacySupportingText.innerHTML = 'Filter by privacy';
                completeColumnFiltersPrivacy.appendChild(completeColumnFiltersPrivacySupportingText);

                const completeColumnFiltersPrivacyBtns = document.createElement('div');
                completeColumnFiltersPrivacyBtns.classList.add('main--filters--buttons');
                completeColumnFiltersPrivacy.appendChild(completeColumnFiltersPrivacyBtns);

                  const completeColumnFiltersPrivacyPublic = document.createElement('div');
                  completeColumnFiltersPrivacyPublic.classList.add('btn-s', 'main--filters--privacy-public');
                  completeColumnFiltersPrivacyBtns.appendChild(completeColumnFiltersPrivacyPublic);

                    const completeColumnFiltersPrivacyPublicText = document.createElement('p');
                    completeColumnFiltersPrivacyPublicText.innerHTML = 'public';
                    completeColumnFiltersPrivacyPublic.appendChild(completeColumnFiltersPrivacyPublicText);
                    
                  const completeColumnFiltersPrivacyPrivate = document.createElement('div');
                  completeColumnFiltersPrivacyPrivate.classList.add('btn-s', 'main--filters--privacy-private');
                  completeColumnFiltersPrivacyBtns.appendChild(completeColumnFiltersPrivacyPrivate);

                    const completeColumnFiltersPrivacyPrivateText = document.createElement('p');
                    completeColumnFiltersPrivacyPrivateText.innerHTML = 'private';
                    completeColumnFiltersPrivacyPrivate.appendChild(completeColumnFiltersPrivacyPrivateText);

            const completeColumnContainer = document.createElement('div');
            completeColumnContainer.classList.add('main--column-container', 'beauty-scroll');
            completeColumnContainer.id = 'completeColumnContainer';
            tasksCompleteColumn.appendChild(completeColumnContainer);

            tasks.forEach(task => {
              if (!task || !task.status) return;
              if (task.status === 'To do') {
                const tasksListToDoTask = document.createElement('div');
                tasksListToDoTask.classList.add('main--tasks-list--task');
                document.getElementById('tasksListToDoContainer').appendChild(tasksListToDoTask);
          
                  const taskIdList = document.createElement('div');
                  taskIdList.classList.add('task-id', 'display-none');
                  taskIdList.innerHTML = task.id;
                  tasksListToDoTask.appendChild(taskIdList);
          
                  const tasksListToDoTaskDate = document.createElement('div');
                  tasksListToDoTaskDate.classList.add('main--tasks-list--title-date');
                  tasksListToDoTask.appendChild(tasksListToDoTaskDate);
          
                    const tasksListToDoTaskDateText = document.createElement('p');
                    tasksListToDoTaskDateText.innerHTML = task.createdAt.toLocaleString();
                    tasksListToDoTaskDate.appendChild(tasksListToDoTaskDateText);
          
                  const tasksListToDoTaskTaskName = document.createElement('div');
                  tasksListToDoTaskTaskName.classList.add('main--tasks-list--title-task-name');
                  tasksListToDoTask.appendChild(tasksListToDoTaskTaskName);
          
                    const tasksListToDoTaskTaskNameText = document.createElement('p');
                    tasksListToDoTaskTaskNameText.innerHTML = task.name;
                    tasksListToDoTaskTaskName.appendChild(tasksListToDoTaskTaskNameText);
          
                  const tasksListToDoTaskComments = document.createElement('div');
                  tasksListToDoTaskComments.classList.add('main--tasks-list--title-comments');
                  tasksListToDoTask.appendChild(tasksListToDoTaskComments);
          
                    const tasksListToDoTaskCommentsText = document.createElement('p');
                    tasksListToDoTaskCommentsText.innerHTML = task.comments.length;
                    tasksListToDoTaskComments.appendChild(tasksListToDoTaskCommentsText);
          
                  const tasksListToDoTaskStatus = document.createElement('div');
                  tasksListToDoTaskStatus.classList.add('main--tasks-list--title-status');
                  tasksListToDoTask.appendChild(tasksListToDoTaskStatus);
          
                    const tasksListToDoTaskStatusText = document.createElement('p');
                    tasksListToDoTaskStatusText.innerHTML = 'To do';
                    tasksListToDoTaskStatus.appendChild(tasksListToDoTaskStatusText);
          
                  const tasksListToDoTaskPriority = document.createElement('div');
                  tasksListToDoTaskPriority.classList.add('main--tasks-list--title-priority');
                  tasksListToDoTask.appendChild(tasksListToDoTaskPriority);
          
                    const tasksListToDoTaskPriorityText = document.createElement('p');
                    tasksListToDoTaskPriorityText.innerHTML = task.priority;
                    tasksListToDoTaskPriority.appendChild(tasksListToDoTaskPriorityText);
          
                  const tasksListToDoTaskPrivacy = document.createElement('div');
                  tasksListToDoTaskPrivacy.classList.add('main--tasks-list--title-privacy');
                  tasksListToDoTask.appendChild(tasksListToDoTaskPrivacy);
          
                    const tasksListToDoTaskPrivacyText = document.createElement('p');
                    tasksListToDoTaskPrivacyText.innerHTML = task.isPrivate ? 'Private' : 'Public';
                    tasksListToDoTaskPrivacy.appendChild(tasksListToDoTaskPrivacyText);
          
                  const tasksListToDoTaskAssignee = document.createElement('div');
                  tasksListToDoTaskAssignee.classList.add('main--tasks-list--title-assignee');
                  tasksListToDoTask.appendChild(tasksListToDoTaskAssignee);
          
                    const tasksListToDoTaskAssigneeText = document.createElement('p');
                    tasksListToDoTaskAssigneeText.innerHTML = task.assignee;
                    tasksListToDoTaskAssignee.appendChild(tasksListToDoTaskAssigneeText);
          
                const toDoColumnTask = document.createElement('div');
                toDoColumnTask.classList.add('main--task');
                document.getElementById('toDoColumnContainer').appendChild(toDoColumnTask);
          
                  const taskId = document.createElement('div');
                  taskId.classList.add('task-id', 'display-none');
                  taskId.innerHTML = task.id;
                  toDoColumnTask.appendChild(taskId);
          
                  const toDoColumnTaskTimeAndButtons = document.createElement('div');
                  toDoColumnTaskTimeAndButtons.classList.add('main--time-and-buttons');
                  toDoColumnTask.appendChild(toDoColumnTaskTimeAndButtons);
          
                    const toDoColumnTaskTime = document.createElement('p');
                    toDoColumnTaskTime.classList.add('main--task-add-time');
                    toDoColumnTaskTime.innerHTML = task.createdAt.toLocaleString();
                    toDoColumnTaskTimeAndButtons.appendChild(toDoColumnTaskTime);
          
                    const toDoColumnTaskButtons = document.createElement('div');
                    toDoColumnTaskButtons.classList.add('main--time-and-buttons');
                    toDoColumnTaskTimeAndButtons.appendChild(toDoColumnTaskButtons);
                    
                      const toDoColumnTaskEditButton = document.createElement('img');
                      toDoColumnTaskEditButton.classList.add('main--edit-button');
                      toDoColumnTaskEditButton.src = '/UI/assets/edit.svg';
                      toDoColumnTaskEditButton.alt = '';
                      toDoColumnTaskButtons.appendChild(toDoColumnTaskEditButton);
                    
                      const toDoColumnTaskDeleteButton = document.createElement('img');
                      toDoColumnTaskDeleteButton.classList.add('main--delete-button');
                      toDoColumnTaskDeleteButton.src = '/UI/assets/delete.svg';
                      toDoColumnTaskDeleteButton.alt = '';
                      toDoColumnTaskButtons.appendChild(toDoColumnTaskDeleteButton);
          
                  const toDoColumnTaskInfo = document.createElement('div');
                  toDoColumnTaskInfo.classList.add('main--task-info');
                  toDoColumnTask.appendChild(toDoColumnTaskInfo);
                  
                    const toDoColumnTaskName = document.createElement('p');
                    toDoColumnTaskName.classList.add('main--task-name');
                    toDoColumnTaskName.innerHTML = task.name;
                    toDoColumnTaskInfo.appendChild(toDoColumnTaskName);
          
                    const toDoColumnTaskOpener = document.createElement('input');
                    toDoColumnTaskOpener.classList.add('main--task--additional-toggle', 'display-none');
                    toDoColumnTaskOpener.type = 'radio';
                    toDoColumnTaskOpener.id = 'to-do-task-' + taskOpenersInputsCount + '-open';
                    toDoColumnTaskOpener.name = 'to-do-task-' + taskOpenersInputsCount;
                    toDoColumnTaskInfo.appendChild(toDoColumnTaskOpener);
          
                    const toDoColumnTaskInfoAdditional = document.createElement('div');
                    toDoColumnTaskInfoAdditional.classList.add('main--additional-task-info');
                    toDoColumnTaskInfo.appendChild(toDoColumnTaskInfoAdditional);
          
                      const toDoColumnTaskDescription = document.createElement('p');
                      toDoColumnTaskDescription.classList.add('main--task-description');
                      toDoColumnTaskDescription.innerHTML = task.description;
                      toDoColumnTaskInfoAdditional.appendChild(toDoColumnTaskDescription);
          
                      const toDoColumnTaskMedia = document.createElement('img');
                      toDoColumnTaskMedia.classList.add('main--media');
                      toDoColumnTaskMedia.src = '/UI/assets/media.svg';
                      toDoColumnTaskMedia.alt = '';
                      toDoColumnTaskInfoAdditional.appendChild(toDoColumnTaskMedia);
          
                      const toDoColumnTaskInfoContainer = document.createElement('div');
                      toDoColumnTaskInfoContainer.classList.add('main--task-info-container');
                      toDoColumnTaskInfoAdditional.appendChild(toDoColumnTaskInfoContainer);
          
                        const toDoColumnTaskInfoLeftBar = document.createElement('div');
                        toDoColumnTaskInfoLeftBar.classList.add('main--task-info--left-bar');
                        toDoColumnTaskInfoContainer.appendChild(toDoColumnTaskInfoLeftBar);
          
                          const toDoColumnTaskComments = document.createElement('p');
                          toDoColumnTaskComments.classList.add('main--task--comments');
                          toDoColumnTaskComments.innerHTML = ('Comments: ' + task.comments.length);
                          toDoColumnTaskInfoLeftBar.appendChild(toDoColumnTaskComments);  
          
                          const toDoColumnTaskStatus = document.createElement('p');
                          toDoColumnTaskStatus.classList.add('main--task--status');
                          toDoColumnTaskStatus.innerHTML = ('Status: ' + task.status);
                          toDoColumnTaskInfoLeftBar.appendChild(toDoColumnTaskStatus);  
          
                        const toDoColumnTaskInfoRightBar = document.createElement('div');
                        toDoColumnTaskInfoRightBar.classList.add('main--task-info--right-bar');
                        toDoColumnTaskInfoContainer.appendChild(toDoColumnTaskInfoRightBar);
          
                          const toDoColumnTaskPriority = document.createElement('p');
                          toDoColumnTaskPriority.classList.add('main--task--priority');
                          toDoColumnTaskPriority.innerHTML = ('Priority: ' + task.priority);
                          toDoColumnTaskInfoRightBar.appendChild(toDoColumnTaskPriority);  
          
                          const toDoColumnTaskPrivacy = document.createElement('p');
                          toDoColumnTaskPrivacy.classList.add('main--task--priority');
                          toDoColumnTaskPrivacy.innerHTML = ('Privacy: ' + (task.isPrivate ? 'Private' : 'Public'));
                          toDoColumnTaskInfoRightBar.appendChild(toDoColumnTaskPrivacy);
                          
                    const toDoColumnTaskAssigneeContainer = document.createElement('div');
                    toDoColumnTaskAssigneeContainer.classList.add('main--assignee-plate');
                    toDoColumnTaskInfo.appendChild(toDoColumnTaskAssigneeContainer);
          
                      const toDoColumnTaskAssigneeInfo = document.createElement('div');
                      toDoColumnTaskAssigneeInfo.classList.add('main--assignee-info');
                      toDoColumnTaskAssigneeContainer.appendChild(toDoColumnTaskAssigneeInfo);
          
                        const toDoColumnTaskAssigneeAvatar = document.createElement('img');
                        toDoColumnTaskAssigneeAvatar.classList.add('main--assignee-avatar');
                        toDoColumnTaskAssigneeAvatar.src = '/UI/assets/smoll_avatar.svg';
                        toDoColumnTaskAssigneeAvatar.alt = '';
                        toDoColumnTaskAssigneeInfo.appendChild(toDoColumnTaskAssigneeAvatar);
          
                        const toDoColumnTaskAssigneeName = document.createElement('p');
                        toDoColumnTaskAssigneeName.classList.add('main--assignee-name');
                        toDoColumnTaskAssigneeName.innerHTML = task.assignee;
                        toDoColumnTaskAssigneeInfo.appendChild(toDoColumnTaskAssigneeName);
          
                      const toDoColumnTaskConcealer = document.createElement('input');
                      toDoColumnTaskConcealer.classList.add('main--task--hide-toggle', 'display-none');
                      toDoColumnTaskConcealer.type = 'radio';
                      toDoColumnTaskConcealer.id = 'to-do-task-' + taskOpenersInputsCount + '-close';
                      toDoColumnTaskConcealer.name = 'to-do-task-' + taskOpenersInputsCount;
                      toDoColumnTaskConcealer.checked = true;
                      toDoColumnTaskAssigneeContainer.appendChild(toDoColumnTaskConcealer);
          
                      const toDoColumnTaskToggleActions = document.createElement('div');
                      toDoColumnTaskToggleActions.classList.add('main--task--toggle-actions');
                      toDoColumnTaskAssigneeContainer.appendChild(toDoColumnTaskToggleActions);
          
                        const toDoColumnTaskOpenLabel = document.createElement('label');
                        toDoColumnTaskOpenLabel.classList.add('main--task--open');
                        toDoColumnTaskOpenLabel.setAttribute('for', 'to-do-task-' + taskOpenersInputsCount + '-open');
                        toDoColumnTaskToggleActions.appendChild(toDoColumnTaskOpenLabel);
          
                          const toDoColumnTaskArrowDown = document.createElement('img');
                          toDoColumnTaskArrowDown.classList.add('main--task--arrow-down');
                          toDoColumnTaskArrowDown.src = '/UI/assets/arrow-down.svg';
                          toDoColumnTaskArrowDown.alt = '';
                          toDoColumnTaskOpenLabel.appendChild(toDoColumnTaskArrowDown);
          
                        const toDoColumnTaskHideLabel = document.createElement('label');
                        toDoColumnTaskHideLabel.classList.add('main--task--hide');
                        toDoColumnTaskHideLabel.setAttribute('for', 'to-do-task-' + taskOpenersInputsCount + '-close');
                        toDoColumnTaskToggleActions.appendChild(toDoColumnTaskHideLabel);
          
                          const toDoColumnTaskArrowUp = document.createElement('img');
                          toDoColumnTaskArrowUp.classList.add('main--task--arrow-down', 'reverse');
                          toDoColumnTaskArrowUp.src = '/UI/assets/arrow-down.svg';
                          toDoColumnTaskArrowUp.alt = '';
                          toDoColumnTaskHideLabel.appendChild(toDoColumnTaskArrowUp);
          
                          taskOpenersInputsCount++;

              } else if (task.status === 'In progress') {
                const tasksListInProgressTask = document.createElement('div');
                tasksListInProgressTask.classList.add('main--tasks-list--task');
                document.getElementById('tasksListInProgressContainer').appendChild(tasksListInProgressTask);
          
                  const taskIdList = document.createElement('div');
                  taskIdList.classList.add('task-id', 'display-none');
                  taskIdList.innerHTML = task.id;
                  tasksListInProgressTask.appendChild(taskIdList);
          
                  const tasksListInProgressTaskDate = document.createElement('div');
                  tasksListInProgressTaskDate.classList.add('main--tasks-list--title-date');
                  tasksListInProgressTask.appendChild(tasksListInProgressTaskDate);
          
                    const tasksListInProgressTaskDateText = document.createElement('p');
                    tasksListInProgressTaskDateText.innerHTML = task.createdAt.toLocaleString();
                    tasksListInProgressTaskDate.appendChild(tasksListInProgressTaskDateText);
          
                  const tasksListInProgressTaskTaskName = document.createElement('div');
                  tasksListInProgressTaskTaskName.classList.add('main--tasks-list--title-task-name');
                  tasksListInProgressTask.appendChild(tasksListInProgressTaskTaskName);
          
                    const tasksListInProgressTaskTaskNameText = document.createElement('p');
                    tasksListInProgressTaskTaskNameText.innerHTML = task.name;
                    tasksListInProgressTaskTaskName.appendChild(tasksListInProgressTaskTaskNameText);
          
                  const tasksListInProgressTaskComments = document.createElement('div');
                  tasksListInProgressTaskComments.classList.add('main--tasks-list--title-comments');
                  tasksListInProgressTask.appendChild(tasksListInProgressTaskComments);
          
                    const tasksListInProgressTaskCommentsText = document.createElement('p');
                    tasksListInProgressTaskCommentsText.innerHTML = task.comments.length;
                    tasksListInProgressTaskComments.appendChild(tasksListInProgressTaskCommentsText);
          
                  const tasksListInProgressTaskStatus = document.createElement('div');
                  tasksListInProgressTaskStatus.classList.add('main--tasks-list--title-status');
                  tasksListInProgressTask.appendChild(tasksListInProgressTaskStatus);
          
                    const tasksListInProgressTaskStatusText = document.createElement('p');
                    tasksListInProgressTaskStatusText.innerHTML = 'In progress';
                    tasksListInProgressTaskStatus.appendChild(tasksListInProgressTaskStatusText);
          
                  const tasksListInProgressTaskPriority = document.createElement('div');
                  tasksListInProgressTaskPriority.classList.add('main--tasks-list--title-priority');
                  tasksListInProgressTask.appendChild(tasksListInProgressTaskPriority);
          
                    const tasksListInProgressTaskPriorityText = document.createElement('p');
                    tasksListInProgressTaskPriorityText.innerHTML = task.priority;
                    tasksListInProgressTaskPriority.appendChild(tasksListInProgressTaskPriorityText);
          
                  const tasksListInProgressTaskPrivacy = document.createElement('div');
                  tasksListInProgressTaskPrivacy.classList.add('main--tasks-list--title-privacy');
                  tasksListInProgressTask.appendChild(tasksListInProgressTaskPrivacy);
          
                    const tasksListInProgressTaskPrivacyText = document.createElement('p');
                    tasksListInProgressTaskPrivacyText.innerHTML = task.isPrivate ? 'Private' : 'Public';
                    tasksListInProgressTaskPrivacy.appendChild(tasksListInProgressTaskPrivacyText);
          
                  const tasksListInProgressTaskAssignee = document.createElement('div');
                  tasksListInProgressTaskAssignee.classList.add('main--tasks-list--title-assignee');
                  tasksListInProgressTask.appendChild(tasksListInProgressTaskAssignee);
          
                    const tasksListInProgressTaskAssigneeText = document.createElement('p');
                    tasksListInProgressTaskAssigneeText.innerHTML = task.assignee;
                    tasksListInProgressTaskAssignee.appendChild(tasksListInProgressTaskAssigneeText);

                const inProgressColumnTask = document.createElement('div');
                inProgressColumnTask.classList.add('main--task');
                document.getElementById('inProgressColumnContainer').appendChild(inProgressColumnTask);
          
                  const taskId = document.createElement('div');
                  taskId.classList.add('task-id', 'display-none');
                  taskId.innerHTML = task.id;
                  inProgressColumnTask.appendChild(taskId);
          
                  const inProgressColumnTaskTimeAndButtons = document.createElement('div');
                  inProgressColumnTaskTimeAndButtons.classList.add('main--time-and-buttons');
                  inProgressColumnTask.appendChild(inProgressColumnTaskTimeAndButtons);
          
                    const inProgressColumnTaskTime = document.createElement('p');
                    inProgressColumnTaskTime.classList.add('main--task-add-time');
                    inProgressColumnTaskTime.innerHTML = task.createdAt.toLocaleString();
                    inProgressColumnTaskTimeAndButtons.appendChild(inProgressColumnTaskTime);
          
                    const inProgressColumnTaskButtons = document.createElement('div');
                    inProgressColumnTaskButtons.classList.add('main--time-and-buttons');
                    inProgressColumnTaskTimeAndButtons.appendChild(inProgressColumnTaskButtons);
                    
                      const inProgressColumnTaskEditButton = document.createElement('img');
                      inProgressColumnTaskEditButton.classList.add('main--edit-button');
                      inProgressColumnTaskEditButton.src = '/UI/assets/edit.svg';
                      inProgressColumnTaskEditButton.alt = '';
                      inProgressColumnTaskButtons.appendChild(inProgressColumnTaskEditButton);
                    
                      const inProgressColumnTaskDeleteButton = document.createElement('img');
                      inProgressColumnTaskDeleteButton.classList.add('main--delete-button');
                      inProgressColumnTaskDeleteButton.src = '/UI/assets/delete.svg';
                      inProgressColumnTaskDeleteButton.alt = '';
                      inProgressColumnTaskButtons.appendChild(inProgressColumnTaskDeleteButton);
          
                  const inProgressColumnTaskInfo = document.createElement('div');
                  inProgressColumnTaskInfo.classList.add('main--task-info');
                  inProgressColumnTask.appendChild(inProgressColumnTaskInfo);
                  
                    const inProgressColumnTaskName = document.createElement('p');
                    inProgressColumnTaskName.classList.add('main--task-name');
                    inProgressColumnTaskName.innerHTML = task.name;
                    inProgressColumnTaskInfo.appendChild(inProgressColumnTaskName);
          
                    const inProgressColumnTaskOpener = document.createElement('input');
                    inProgressColumnTaskOpener.classList.add('main--task--additional-toggle', 'display-none');
                    inProgressColumnTaskOpener.type = 'radio';
                    inProgressColumnTaskOpener.id = 'to-do-task-' + taskOpenersInputsCount + '-open';
                    inProgressColumnTaskOpener.name = 'to-do-task-' + taskOpenersInputsCount;
                    inProgressColumnTaskInfo.appendChild(inProgressColumnTaskOpener);
          
                    const inProgressColumnTaskInfoAdditional = document.createElement('div');
                    inProgressColumnTaskInfoAdditional.classList.add('main--additional-task-info');
                    inProgressColumnTaskInfo.appendChild(inProgressColumnTaskInfoAdditional);
          
                      const inProgressColumnTaskDescription = document.createElement('p');
                      inProgressColumnTaskDescription.classList.add('main--task-description');
                      inProgressColumnTaskDescription.innerHTML = task.description;
                      inProgressColumnTaskInfoAdditional.appendChild(inProgressColumnTaskDescription);
          
                      const inProgressColumnTaskMedia = document.createElement('img');
                      inProgressColumnTaskMedia.classList.add('main--media');
                      inProgressColumnTaskMedia.src = '/UI/assets/media.svg';
                      inProgressColumnTaskMedia.alt = '';
                      inProgressColumnTaskInfoAdditional.appendChild(inProgressColumnTaskMedia);
          
                      const inProgressColumnTaskInfoContainer = document.createElement('div');
                      inProgressColumnTaskInfoContainer.classList.add('main--task-info-container');
                      inProgressColumnTaskInfoAdditional.appendChild(inProgressColumnTaskInfoContainer);
          
                        const inProgressColumnTaskInfoLeftBar = document.createElement('div');
                        inProgressColumnTaskInfoLeftBar.classList.add('main--task-info--left-bar');
                        inProgressColumnTaskInfoContainer.appendChild(inProgressColumnTaskInfoLeftBar);
          
                          const inProgressColumnTaskComments = document.createElement('p');
                          inProgressColumnTaskComments.classList.add('main--task--comments');
                          inProgressColumnTaskComments.innerHTML = ('Comments: ' + task.comments.length);
                          inProgressColumnTaskInfoLeftBar.appendChild(inProgressColumnTaskComments);  
          
                          const inProgressColumnTaskStatus = document.createElement('p');
                          inProgressColumnTaskStatus.classList.add('main--task--status');
                          inProgressColumnTaskStatus.innerHTML = ('Status: ' + task.status);
                          inProgressColumnTaskInfoLeftBar.appendChild(inProgressColumnTaskStatus);  
          
                        const inProgressColumnTaskInfoRightBar = document.createElement('div');
                        inProgressColumnTaskInfoRightBar.classList.add('main--task-info--right-bar');
                        inProgressColumnTaskInfoContainer.appendChild(inProgressColumnTaskInfoRightBar);
          
                          const inProgressColumnTaskPriority = document.createElement('p');
                          inProgressColumnTaskPriority.classList.add('main--task--priority');
                          inProgressColumnTaskPriority.innerHTML = ('Priority: ' + task.priority);
                          inProgressColumnTaskInfoRightBar.appendChild(inProgressColumnTaskPriority);  
          
                          const inProgressColumnTaskPrivacy = document.createElement('p');
                          inProgressColumnTaskPrivacy.classList.add('main--task--priority');
                          inProgressColumnTaskPrivacy.innerHTML = ('Privacy: ' + (task.isPrivate ? 'Private' : 'Public'));
                          inProgressColumnTaskInfoRightBar.appendChild(inProgressColumnTaskPrivacy);
                          
                    const inProgressColumnTaskAssigneeContainer = document.createElement('div');
                    inProgressColumnTaskAssigneeContainer.classList.add('main--assignee-plate');
                    inProgressColumnTaskInfo.appendChild(inProgressColumnTaskAssigneeContainer);
          
                      const inProgressColumnTaskAssigneeInfo = document.createElement('div');
                      inProgressColumnTaskAssigneeInfo.classList.add('main--assignee-info');
                      inProgressColumnTaskAssigneeContainer.appendChild(inProgressColumnTaskAssigneeInfo);
          
                        const inProgressColumnTaskAssigneeAvatar = document.createElement('img');
                        inProgressColumnTaskAssigneeAvatar.classList.add('main--assignee-avatar');
                        inProgressColumnTaskAssigneeAvatar.src = '/UI/assets/smoll_avatar.svg';
                        inProgressColumnTaskAssigneeAvatar.alt = '';
                        inProgressColumnTaskAssigneeInfo.appendChild(inProgressColumnTaskAssigneeAvatar);
          
                        const inProgressColumnTaskAssigneeName = document.createElement('p');
                        inProgressColumnTaskAssigneeName.classList.add('main--assignee-name');
                        inProgressColumnTaskAssigneeName.innerHTML = task.assignee;
                        inProgressColumnTaskAssigneeInfo.appendChild(inProgressColumnTaskAssigneeName);
          
                      const inProgressColumnTaskConcealer = document.createElement('input');
                      inProgressColumnTaskConcealer.classList.add('main--task--hide-toggle', 'display-none');
                      inProgressColumnTaskConcealer.type = 'radio';
                      inProgressColumnTaskConcealer.id = 'to-do-task-' + taskOpenersInputsCount + '-close';
                      inProgressColumnTaskConcealer.name = 'to-do-task-' + taskOpenersInputsCount;
                      inProgressColumnTaskConcealer.checked = true;
                      inProgressColumnTaskAssigneeContainer.appendChild(inProgressColumnTaskConcealer);
          
                      const inProgressColumnTaskToggleActions = document.createElement('div');
                      inProgressColumnTaskToggleActions.classList.add('main--task--toggle-actions');
                      inProgressColumnTaskAssigneeContainer.appendChild(inProgressColumnTaskToggleActions);
          
                        const inProgressColumnTaskOpenLabel = document.createElement('label');
                        inProgressColumnTaskOpenLabel.classList.add('main--task--open');
                        inProgressColumnTaskOpenLabel.setAttribute('for', 'to-do-task-' + taskOpenersInputsCount + '-open');
                        inProgressColumnTaskToggleActions.appendChild(inProgressColumnTaskOpenLabel);
          
                          const inProgressColumnTaskArrowDown = document.createElement('img');
                          inProgressColumnTaskArrowDown.classList.add('main--task--arrow-down');
                          inProgressColumnTaskArrowDown.src = '/UI/assets/arrow-down.svg';
                          inProgressColumnTaskArrowDown.alt = '';
                          inProgressColumnTaskOpenLabel.appendChild(inProgressColumnTaskArrowDown);
          
                        const inProgressColumnTaskHideLabel = document.createElement('label');
                        inProgressColumnTaskHideLabel.classList.add('main--task--hide');
                        inProgressColumnTaskHideLabel.setAttribute('for', 'to-do-task-' + taskOpenersInputsCount + '-close');
                        inProgressColumnTaskToggleActions.appendChild(inProgressColumnTaskHideLabel);
          
                          const inProgressColumnTaskArrowUp = document.createElement('img');
                          inProgressColumnTaskArrowUp.classList.add('main--task--arrow-down', 'reverse');
                          inProgressColumnTaskArrowUp.src = '/UI/assets/arrow-down.svg';
                          inProgressColumnTaskArrowUp.alt = '';
                          inProgressColumnTaskHideLabel.appendChild(inProgressColumnTaskArrowUp);
          
                          taskOpenersInputsCount++;

              } else if (task.status === 'Complete') {
                const tasksListCompleteTask = document.createElement('div');
                tasksListCompleteTask.classList.add('main--tasks-list--task');
                document.getElementById('tasksListCompleteContainer').appendChild(tasksListCompleteTask);
          
                  const taskIdList = document.createElement('div');
                  taskIdList.classList.add('task-id', 'display-none');
                  taskIdList.innerHTML = task.id;
                  tasksListCompleteTask.appendChild(taskIdList);
          
                  const tasksListCompleteTaskDate = document.createElement('div');
                  tasksListCompleteTaskDate.classList.add('main--tasks-list--title-date');
                  tasksListCompleteTask.appendChild(tasksListCompleteTaskDate);
          
                    const tasksListCompleteTaskDateText = document.createElement('p');
                    tasksListCompleteTaskDateText.innerHTML = task.createdAt.toLocaleString();
                    tasksListCompleteTaskDate.appendChild(tasksListCompleteTaskDateText);
          
                  const tasksListCompleteTaskTaskName = document.createElement('div');
                  tasksListCompleteTaskTaskName.classList.add('main--tasks-list--title-task-name');
                  tasksListCompleteTask.appendChild(tasksListCompleteTaskTaskName);
          
                    const tasksListCompleteTaskTaskNameText = document.createElement('p');
                    tasksListCompleteTaskTaskNameText.innerHTML = task.name;
                    tasksListCompleteTaskTaskName.appendChild(tasksListCompleteTaskTaskNameText);
          
                  const tasksListCompleteTaskComments = document.createElement('div');
                  tasksListCompleteTaskComments.classList.add('main--tasks-list--title-comments');
                  tasksListCompleteTask.appendChild(tasksListCompleteTaskComments);
          
                    const tasksListCompleteTaskCommentsText = document.createElement('p');
                    tasksListCompleteTaskCommentsText.innerHTML = task.comments.length;
                    tasksListCompleteTaskComments.appendChild(tasksListCompleteTaskCommentsText);
          
                  const tasksListCompleteTaskStatus = document.createElement('div');
                  tasksListCompleteTaskStatus.classList.add('main--tasks-list--title-status');
                  tasksListCompleteTask.appendChild(tasksListCompleteTaskStatus);
          
                    const tasksListCompleteTaskStatusText = document.createElement('p');
                    tasksListCompleteTaskStatusText.innerHTML = 'Complete';
                    tasksListCompleteTaskStatus.appendChild(tasksListCompleteTaskStatusText);
          
                  const tasksListCompleteTaskPriority = document.createElement('div');
                  tasksListCompleteTaskPriority.classList.add('main--tasks-list--title-priority');
                  tasksListCompleteTask.appendChild(tasksListCompleteTaskPriority);
          
                    const tasksListCompleteTaskPriorityText = document.createElement('p');
                    tasksListCompleteTaskPriorityText.innerHTML = task.priority;
                    tasksListCompleteTaskPriority.appendChild(tasksListCompleteTaskPriorityText);
          
                  const tasksListCompleteTaskPrivacy = document.createElement('div');
                  tasksListCompleteTaskPrivacy.classList.add('main--tasks-list--title-privacy');
                  tasksListCompleteTask.appendChild(tasksListCompleteTaskPrivacy);
          
                    const tasksListCompleteTaskPrivacyText = document.createElement('p');
                    tasksListCompleteTaskPrivacyText.innerHTML = task.isPrivate ? 'Private' : 'Public';
                    tasksListCompleteTaskPrivacy.appendChild(tasksListCompleteTaskPrivacyText);
          
                  const tasksListCompleteTaskAssignee = document.createElement('div');
                  tasksListCompleteTaskAssignee.classList.add('main--tasks-list--title-assignee');
                  tasksListCompleteTask.appendChild(tasksListCompleteTaskAssignee);
          
                    const tasksListCompleteTaskAssigneeText = document.createElement('p');
                    tasksListCompleteTaskAssigneeText.innerHTML = task.assignee;
                    tasksListCompleteTaskAssignee.appendChild(tasksListCompleteTaskAssigneeText);

                const completeColumnTask = document.createElement('div');
                completeColumnTask.classList.add('main--task');
                document.getElementById('completeColumnContainer').appendChild(completeColumnTask);
          
                  const taskId = document.createElement('div');
                  taskId.classList.add('task-id', 'display-none');
                  taskId.innerHTML = task.id;
                  completeColumnTask.appendChild(taskId);
          
                  const completeColumnTaskTimeAndButtons = document.createElement('div');
                  completeColumnTaskTimeAndButtons.classList.add('main--time-and-buttons');
                  completeColumnTask.appendChild(completeColumnTaskTimeAndButtons);
          
                    const completeColumnTaskTime = document.createElement('p');
                    completeColumnTaskTime.classList.add('main--task-add-time');
                    completeColumnTaskTime.innerHTML = task.createdAt.toLocaleString();
                    completeColumnTaskTimeAndButtons.appendChild(completeColumnTaskTime);
          
                    const completeColumnTaskButtons = document.createElement('div');
                    completeColumnTaskButtons.classList.add('main--time-and-buttons');
                    completeColumnTaskTimeAndButtons.appendChild(completeColumnTaskButtons);
                    
                      const completeColumnTaskEditButton = document.createElement('img');
                      completeColumnTaskEditButton.classList.add('main--edit-button');
                      completeColumnTaskEditButton.src = '/UI/assets/edit.svg';
                      completeColumnTaskEditButton.alt = '';
                      completeColumnTaskButtons.appendChild(completeColumnTaskEditButton);
                    
                      const completeColumnTaskDeleteButton = document.createElement('img');
                      completeColumnTaskDeleteButton.classList.add('main--delete-button');
                      completeColumnTaskDeleteButton.src = '/UI/assets/delete.svg';
                      completeColumnTaskDeleteButton.alt = '';
                      completeColumnTaskButtons.appendChild(completeColumnTaskDeleteButton);
          
                  const completeColumnTaskInfo = document.createElement('div');
                  completeColumnTaskInfo.classList.add('main--task-info');
                  completeColumnTask.appendChild(completeColumnTaskInfo);
                  
                    const completeColumnTaskName = document.createElement('p');
                    completeColumnTaskName.classList.add('main--task-name');
                    completeColumnTaskName.innerHTML = task.name;
                    completeColumnTaskInfo.appendChild(completeColumnTaskName);
          
                    const completeColumnTaskOpener = document.createElement('input');
                    completeColumnTaskOpener.classList.add('main--task--additional-toggle', 'display-none');
                    completeColumnTaskOpener.type = 'radio';
                    completeColumnTaskOpener.id = 'to-do-task-' + taskOpenersInputsCount + '-open';
                    completeColumnTaskOpener.name = 'to-do-task-' + taskOpenersInputsCount;
                    completeColumnTaskInfo.appendChild(completeColumnTaskOpener);
          
                    const completeColumnTaskInfoAdditional = document.createElement('div');
                    completeColumnTaskInfoAdditional.classList.add('main--additional-task-info');
                    completeColumnTaskInfo.appendChild(completeColumnTaskInfoAdditional);
          
                      const completeColumnTaskDescription = document.createElement('p');
                      completeColumnTaskDescription.classList.add('main--task-description');
                      completeColumnTaskDescription.innerHTML = task.description;
                      completeColumnTaskInfoAdditional.appendChild(completeColumnTaskDescription);
          
                      const completeColumnTaskMedia = document.createElement('img');
                      completeColumnTaskMedia.classList.add('main--media');
                      completeColumnTaskMedia.src = '/UI/assets/media.svg';
                      completeColumnTaskMedia.alt = '';
                      completeColumnTaskInfoAdditional.appendChild(completeColumnTaskMedia);
          
                      const completeColumnTaskInfoContainer = document.createElement('div');
                      completeColumnTaskInfoContainer.classList.add('main--task-info-container');
                      completeColumnTaskInfoAdditional.appendChild(completeColumnTaskInfoContainer);
          
                        const completeColumnTaskInfoLeftBar = document.createElement('div');
                        completeColumnTaskInfoLeftBar.classList.add('main--task-info--left-bar');
                        completeColumnTaskInfoContainer.appendChild(completeColumnTaskInfoLeftBar);
          
                          const completeColumnTaskComments = document.createElement('p');
                          completeColumnTaskComments.classList.add('main--task--comments');
                          completeColumnTaskComments.innerHTML = ('Comments: ' + task.comments.length);
                          completeColumnTaskInfoLeftBar.appendChild(completeColumnTaskComments);  
          
                          const completeColumnTaskStatus = document.createElement('p');
                          completeColumnTaskStatus.classList.add('main--task--status');
                          completeColumnTaskStatus.innerHTML = ('Status: ' + task.status);
                          completeColumnTaskInfoLeftBar.appendChild(completeColumnTaskStatus);  
          
                        const completeColumnTaskInfoRightBar = document.createElement('div');
                        completeColumnTaskInfoRightBar.classList.add('main--task-info--right-bar');
                        completeColumnTaskInfoContainer.appendChild(completeColumnTaskInfoRightBar);
          
                          const completeColumnTaskPriority = document.createElement('p');
                          completeColumnTaskPriority.classList.add('main--task--priority');
                          completeColumnTaskPriority.innerHTML = ('Priority: ' + task.priority);
                          completeColumnTaskInfoRightBar.appendChild(completeColumnTaskPriority);  
          
                          const completeColumnTaskPrivacy = document.createElement('p');
                          completeColumnTaskPrivacy.classList.add('main--task--priority');
                          completeColumnTaskPrivacy.innerHTML = ('Privacy: ' + (task.isPrivate ? 'Private' : 'Public'));
                          completeColumnTaskInfoRightBar.appendChild(completeColumnTaskPrivacy);
                          
                    const completeColumnTaskAssigneeContainer = document.createElement('div');
                    completeColumnTaskAssigneeContainer.classList.add('main--assignee-plate');
                    completeColumnTaskInfo.appendChild(completeColumnTaskAssigneeContainer);
          
                      const completeColumnTaskAssigneeInfo = document.createElement('div');
                      completeColumnTaskAssigneeInfo.classList.add('main--assignee-info');
                      completeColumnTaskAssigneeContainer.appendChild(completeColumnTaskAssigneeInfo);
          
                        const completeColumnTaskAssigneeAvatar = document.createElement('img');
                        completeColumnTaskAssigneeAvatar.classList.add('main--assignee-avatar');
                        completeColumnTaskAssigneeAvatar.src = '/UI/assets/smoll_avatar.svg';
                        completeColumnTaskAssigneeAvatar.alt = '';
                        completeColumnTaskAssigneeInfo.appendChild(completeColumnTaskAssigneeAvatar);
          
                        const completeColumnTaskAssigneeName = document.createElement('p');
                        completeColumnTaskAssigneeName.classList.add('main--assignee-name');
                        completeColumnTaskAssigneeName.innerHTML = task.assignee;
                        completeColumnTaskAssigneeInfo.appendChild(completeColumnTaskAssigneeName);
          
                      const completeColumnTaskConcealer = document.createElement('input');
                      completeColumnTaskConcealer.classList.add('main--task--hide-toggle', 'display-none');
                      completeColumnTaskConcealer.type = 'radio';
                      completeColumnTaskConcealer.id = 'to-do-task-' + taskOpenersInputsCount + '-close';
                      completeColumnTaskConcealer.name = 'to-do-task-' + taskOpenersInputsCount;
                      completeColumnTaskConcealer.checked = true;
                      completeColumnTaskAssigneeContainer.appendChild(completeColumnTaskConcealer);
          
                      const completeColumnTaskToggleActions = document.createElement('div');
                      completeColumnTaskToggleActions.classList.add('main--task--toggle-actions');
                      completeColumnTaskAssigneeContainer.appendChild(completeColumnTaskToggleActions);
          
                        const completeColumnTaskOpenLabel = document.createElement('label');
                        completeColumnTaskOpenLabel.classList.add('main--task--open');
                        completeColumnTaskOpenLabel.setAttribute('for', 'to-do-task-' + taskOpenersInputsCount + '-open');
                        completeColumnTaskToggleActions.appendChild(completeColumnTaskOpenLabel);
          
                          const completeColumnTaskArrowDown = document.createElement('img');
                          completeColumnTaskArrowDown.classList.add('main--task--arrow-down');
                          completeColumnTaskArrowDown.src = '/UI/assets/arrow-down.svg';
                          completeColumnTaskArrowDown.alt = '';
                          completeColumnTaskOpenLabel.appendChild(completeColumnTaskArrowDown);
          
                        const completeColumnTaskHideLabel = document.createElement('label');
                        completeColumnTaskHideLabel.classList.add('main--task--hide');
                        completeColumnTaskHideLabel.setAttribute('for', 'to-do-task-' + taskOpenersInputsCount + '-close');
                        completeColumnTaskToggleActions.appendChild(completeColumnTaskHideLabel);
          
                          const completeColumnTaskArrowUp = document.createElement('img');
                          completeColumnTaskArrowUp.classList.add('main--task--arrow-down', 'reverse');
                          completeColumnTaskArrowUp.src = '/UI/assets/arrow-down.svg';
                          completeColumnTaskArrowUp.alt = '';
                          completeColumnTaskHideLabel.appendChild(completeColumnTaskArrowUp);
          
                          taskOpenersInputsCount++;

              }
            })
  }
}

class FilterView {
  constructor(containerId = 'main') {
      this.container = document.getElementById(containerId);
  }

  display(filters) {
    const displayMethod = document.getElementById(tasks-display-method-lists);
    if (!filters) {
      if (displayMethod.checked) {
        toDoFiltersConcealerInput.checked = false;
        toDoFiltersOpenerInput.checked = true;
        inProgressFiltersConcealerInput.checked = false;
        inProgressFiltersOpenerInput.checked = true;
        completeFiltersConcealerInput.checked = false;
        completeFiltersOpenerInput.checked = true;
      } else {
        toDoColumnFiltersConcealerInput.checked = false;
        toDoColumnFiltersOpenerInput.checked = true;
        inProgressColumnFiltersConcealerInput.checked = false;
        inProgressColumnFiltersOpenerInput.checked = true;
        completeColumnFiltersConcealerInput.checked = false;
        completeColumnFiltersOpenerInput.checked = true;
      }
    }

    if (displayMethod.checked && filters === 'To do') {
      toDoFiltersConcealerInput.checked = false;
      toDoFiltersOpenerInput.checked = true;
    }
    else if (displayMethod.checked && filters === 'In progress') {
      inProgressFiltersConcealerInput.checked = false;
      inProgressFiltersOpenerInput.checked = true;
    }
    else if (displayMethod.checked && filters === 'Complete') {
      completeFiltersConcealerInput.checked = false;
      completeFiltersOpenerInput.checked = true;
    }
    else if (!displayMethod.checked && filters === 'To do') {
      toDoColumnFiltersConcealerInput.checked = false;
      toDoColumnFiltersOpenerInput.checked = true;
    }
    else if (!displayMethod.checked && filters === 'In progress') {
      inProgressColumnFiltersConcealerInput.checked = false;
      inProgressColumnFiltersOpenerInput.checked = true;
    }
    else if (!displayMethod.checked && filters === 'Complete') {
      completeColumnFiltersConcealerInput.checked = false;
      completeColumnFiltersOpenerInput.checked = true;
    }
  }
}

let taskOpenersInputsCount = 0;
class TaskView {
  constructor(containerId = 'main') {
    this.containerId = containerId;
  }
  

  display(task) {
    if (!task || !task.status) return;
    if (task.status === 'To do') {
      const tasksListToDoTask = document.createElement('div');
      tasksListToDoTask.classList.add('main--tasks-list--task');
      document.getElementById('tasksListToDoContainer').appendChild(tasksListToDoTask);

        const taskIdList = document.createElement('div');
        taskIdList.classList.add('task-id', 'display-none');
        taskIdList.innerHTML = task.id;
        tasksListToDoTask.appendChild(taskIdList);

        const tasksListToDoTaskDate = document.createElement('div');
        tasksListToDoTaskDate.classList.add('main--tasks-list--title-date');
        tasksListToDoTask.appendChild(tasksListToDoTaskDate);

          const tasksListToDoTaskDateText = document.createElement('p');
          tasksListToDoTaskDateText.innerHTML = task.createdAt.toLocaleString();
          tasksListToDoTaskDate.appendChild(tasksListToDoTaskDateText);

        const tasksListToDoTaskTaskName = document.createElement('div');
        tasksListToDoTaskTaskName.classList.add('main--tasks-list--title-task-name');
        tasksListToDoTask.appendChild(tasksListToDoTaskTaskName);

          const tasksListToDoTaskTaskNameText = document.createElement('p');
          tasksListToDoTaskTaskNameText.innerHTML = task.name;
          tasksListToDoTaskTaskName.appendChild(tasksListToDoTaskTaskNameText);

        const tasksListToDoTaskComments = document.createElement('div');
        tasksListToDoTaskComments.classList.add('main--tasks-list--title-comments');
        tasksListToDoTask.appendChild(tasksListToDoTaskComments);

          const tasksListToDoTaskCommentsText = document.createElement('p');
          tasksListToDoTaskCommentsText.innerHTML = task.comments.length;
          tasksListToDoTaskComments.appendChild(tasksListToDoTaskCommentsText);

        const tasksListToDoTaskStatus = document.createElement('div');
        tasksListToDoTaskStatus.classList.add('main--tasks-list--title-status');
        tasksListToDoTask.appendChild(tasksListToDoTaskStatus);

          const tasksListToDoTaskStatusText = document.createElement('p');
          tasksListToDoTaskStatusText.innerHTML = 'To do';
          tasksListToDoTaskStatus.appendChild(tasksListToDoTaskStatusText);

        const tasksListToDoTaskPriority = document.createElement('div');
        tasksListToDoTaskPriority.classList.add('main--tasks-list--title-priority');
        tasksListToDoTask.appendChild(tasksListToDoTaskPriority);

          const tasksListToDoTaskPriorityText = document.createElement('p');
          tasksListToDoTaskPriorityText.innerHTML = task.priority;
          tasksListToDoTaskPriority.appendChild(tasksListToDoTaskPriorityText);

        const tasksListToDoTaskPrivacy = document.createElement('div');
        tasksListToDoTaskPrivacy.classList.add('main--tasks-list--title-privacy');
        tasksListToDoTask.appendChild(tasksListToDoTaskPrivacy);

          const tasksListToDoTaskPrivacyText = document.createElement('p');
          tasksListToDoTaskPrivacyText.innerHTML = task.isPrivate ? 'Private' : 'Public';
          tasksListToDoTaskPrivacy.appendChild(tasksListToDoTaskPrivacyText);

        const tasksListToDoTaskAssignee = document.createElement('div');
        tasksListToDoTaskAssignee.classList.add('main--tasks-list--title-assignee');
        tasksListToDoTask.appendChild(tasksListToDoTaskAssignee);

          const tasksListToDoTaskAssigneeText = document.createElement('p');
          tasksListToDoTaskAssigneeText.innerHTML = task.assignee;
          tasksListToDoTaskAssignee.appendChild(tasksListToDoTaskAssigneeText);

      const toDoColumnTask = document.createElement('div');
      toDoColumnTask.classList.add('main--task');
      document.getElementById('toDoColumnContainer').appendChild(toDoColumnTask);

        const taskId = document.createElement('div');
        taskId.classList.add('task-id', 'display-none');
        taskId.innerHTML = task.id;
        toDoColumnTask.appendChild(taskId);

        const toDoColumnTaskTimeAndButtons = document.createElement('div');
        toDoColumnTaskTimeAndButtons.classList.add('main--time-and-buttons');
        toDoColumnTask.appendChild(toDoColumnTaskTimeAndButtons);

          const toDoColumnTaskTime = document.createElement('p');
          toDoColumnTaskTime.classList.add('main--task-add-time');
          toDoColumnTaskTime.innerHTML = task.createdAt.toLocaleString();
          toDoColumnTaskTimeAndButtons.appendChild(toDoColumnTaskTime);

          const toDoColumnTaskButtons = document.createElement('div');
          toDoColumnTaskButtons.classList.add('main--time-and-buttons');
          toDoColumnTaskTimeAndButtons.appendChild(toDoColumnTaskButtons);
          
            const toDoColumnTaskEditButton = document.createElement('img');
            toDoColumnTaskEditButton.classList.add('main--edit-button');
            toDoColumnTaskEditButton.src = '/UI/assets/edit.svg';
            toDoColumnTaskEditButton.alt = '';
            toDoColumnTaskButtons.appendChild(toDoColumnTaskEditButton);
          
            const toDoColumnTaskDeleteButton = document.createElement('img');
            toDoColumnTaskDeleteButton.classList.add('main--delete-button');
            toDoColumnTaskDeleteButton.src = '/UI/assets/delete.svg';
            toDoColumnTaskDeleteButton.alt = '';
            toDoColumnTaskButtons.appendChild(toDoColumnTaskDeleteButton);

        const toDoColumnTaskInfo = document.createElement('div');
        toDoColumnTaskInfo.classList.add('main--task-info');
        toDoColumnTask.appendChild(toDoColumnTaskInfo);
        
          const toDoColumnTaskName = document.createElement('p');
          toDoColumnTaskName.classList.add('main--task-name');
          toDoColumnTaskName.innerHTML = task.name;
          toDoColumnTaskInfo.appendChild(toDoColumnTaskName);

          const toDoColumnTaskOpener = document.createElement('input');
          toDoColumnTaskOpener.classList.add('main--task--additional-toggle', 'display-none');
          toDoColumnTaskOpener.type = 'radio';
          toDoColumnTaskOpener.id = 'to-do-task-' + taskOpenersInputsCount + '-open';
          toDoColumnTaskOpener.name = 'to-do-task-' + taskOpenersInputsCount;
          toDoColumnTaskInfo.appendChild(toDoColumnTaskOpener);

          const toDoColumnTaskInfoAdditional = document.createElement('div');
          toDoColumnTaskInfoAdditional.classList.add('main--additional-task-info');
          toDoColumnTaskInfo.appendChild(toDoColumnTaskInfoAdditional);

            const toDoColumnTaskDescription = document.createElement('p');
            toDoColumnTaskDescription.classList.add('main--task-description');
            toDoColumnTaskDescription.innerHTML = task.description;
            toDoColumnTaskInfoAdditional.appendChild(toDoColumnTaskDescription);

            const toDoColumnTaskMedia = document.createElement('img');
            toDoColumnTaskMedia.classList.add('main--media');
            toDoColumnTaskMedia.src = '/UI/assets/media.svg';
            toDoColumnTaskMedia.alt = '';
            toDoColumnTaskInfoAdditional.appendChild(toDoColumnTaskMedia);

            const toDoColumnTaskInfoContainer = document.createElement('div');
            toDoColumnTaskInfoContainer.classList.add('main--task-info-container');
            toDoColumnTaskInfoAdditional.appendChild(toDoColumnTaskInfoContainer);

              const toDoColumnTaskInfoLeftBar = document.createElement('div');
              toDoColumnTaskInfoLeftBar.classList.add('main--task-info--left-bar');
              toDoColumnTaskInfoContainer.appendChild(toDoColumnTaskInfoLeftBar);

                const toDoColumnTaskComments = document.createElement('p');
                toDoColumnTaskComments.classList.add('main--task--comments');
                toDoColumnTaskComments.innerHTML = ('Comments: ' + task.comments.length);
                toDoColumnTaskInfoLeftBar.appendChild(toDoColumnTaskComments);  

                const toDoColumnTaskStatus = document.createElement('p');
                toDoColumnTaskStatus.classList.add('main--task--status');
                toDoColumnTaskStatus.innerHTML = ('Status: ' + task.status);
                toDoColumnTaskInfoLeftBar.appendChild(toDoColumnTaskStatus);  

              const toDoColumnTaskInfoRightBar = document.createElement('div');
              toDoColumnTaskInfoRightBar.classList.add('main--task-info--right-bar');
              toDoColumnTaskInfoContainer.appendChild(toDoColumnTaskInfoRightBar);

                const toDoColumnTaskPriority = document.createElement('p');
                toDoColumnTaskPriority.classList.add('main--task--priority');
                toDoColumnTaskPriority.innerHTML = ('Priority: ' + task.priority);
                toDoColumnTaskInfoRightBar.appendChild(toDoColumnTaskPriority);  

                const toDoColumnTaskPrivacy = document.createElement('p');
                toDoColumnTaskPrivacy.classList.add('main--task--priority');
                toDoColumnTaskPrivacy.innerHTML = ('Privacy: ' + (task.isPrivate ? 'Private' : 'Public'));
                toDoColumnTaskInfoRightBar.appendChild(toDoColumnTaskPrivacy);
                
          const toDoColumnTaskAssigneeContainer = document.createElement('div');
          toDoColumnTaskAssigneeContainer.classList.add('main--assignee-plate');
          toDoColumnTaskInfo.appendChild(toDoColumnTaskAssigneeContainer);

            const toDoColumnTaskAssigneeInfo = document.createElement('div');
            toDoColumnTaskAssigneeInfo.classList.add('main--assignee-info');
            toDoColumnTaskAssigneeContainer.appendChild(toDoColumnTaskAssigneeInfo);

              const toDoColumnTaskAssigneeAvatar = document.createElement('img');
              toDoColumnTaskAssigneeAvatar.classList.add('main--assignee-avatar');
              toDoColumnTaskAssigneeAvatar.src = '/UI/assets/smoll_avatar.svg';
              toDoColumnTaskAssigneeAvatar.alt = '';
              toDoColumnTaskAssigneeInfo.appendChild(toDoColumnTaskAssigneeAvatar);

              const toDoColumnTaskAssigneeName = document.createElement('p');
              toDoColumnTaskAssigneeName.classList.add('main--assignee-name');
              toDoColumnTaskAssigneeName.innerHTML = task.assignee;
              toDoColumnTaskAssigneeInfo.appendChild(toDoColumnTaskAssigneeName);

            const toDoColumnTaskConcealer = document.createElement('input');
            toDoColumnTaskConcealer.classList.add('main--task--hide-toggle', 'display-none');
            toDoColumnTaskConcealer.type = 'radio';
            toDoColumnTaskConcealer.id = 'to-do-task-' + taskOpenersInputsCount + '-close';
            toDoColumnTaskConcealer.name = 'to-do-task-' + taskOpenersInputsCount;
            toDoColumnTaskConcealer.checked = true;
            toDoColumnTaskAssigneeContainer.appendChild(toDoColumnTaskConcealer);

            const toDoColumnTaskToggleActions = document.createElement('div');
            toDoColumnTaskToggleActions.classList.add('main--task--toggle-actions');
            toDoColumnTaskAssigneeContainer.appendChild(toDoColumnTaskToggleActions);

              const toDoColumnTaskOpenLabel = document.createElement('label');
              toDoColumnTaskOpenLabel.classList.add('main--task--open');
              toDoColumnTaskOpenLabel.setAttribute('for', 'to-do-task-' + taskOpenersInputsCount + '-open');
              toDoColumnTaskToggleActions.appendChild(toDoColumnTaskOpenLabel);

                const toDoColumnTaskArrowDown = document.createElement('img');
                toDoColumnTaskArrowDown.classList.add('main--task--arrow-down');
                toDoColumnTaskArrowDown.src = '/UI/assets/arrow-down.svg';
                toDoColumnTaskArrowDown.alt = '';
                toDoColumnTaskOpenLabel.appendChild(toDoColumnTaskArrowDown);

              const toDoColumnTaskHideLabel = document.createElement('label');
              toDoColumnTaskHideLabel.classList.add('main--task--hide');
              toDoColumnTaskHideLabel.setAttribute('for', 'to-do-task-' + taskOpenersInputsCount + '-close');
              toDoColumnTaskToggleActions.appendChild(toDoColumnTaskHideLabel);

                const toDoColumnTaskArrowUp = document.createElement('img');
                toDoColumnTaskArrowUp.classList.add('main--task--arrow-down', 'reverse');
                toDoColumnTaskArrowUp.src = '/UI/assets/arrow-down.svg';
                toDoColumnTaskArrowUp.alt = '';
                toDoColumnTaskHideLabel.appendChild(toDoColumnTaskArrowUp);

                taskOpenersInputsCount++;

    } else if (task.status === 'In progress') {
      const tasksListInProgressTask = document.createElement('div');
      tasksListInProgressTask.classList.add('main--tasks-list--task');
      document.getElementById('tasksListInProgressContainer').appendChild(tasksListInProgressTask);

        const taskIdList = document.createElement('div');
        taskIdList.classList.add('task-id', 'display-none');
        taskIdList.innerHTML = task.id;
        tasksListInProgressTask.appendChild(taskIdList);

        const tasksListInProgressTaskDate = document.createElement('div');
        tasksListInProgressTaskDate.classList.add('main--tasks-list--title-date');
        tasksListInProgressTask.appendChild(tasksListInProgressTaskDate);

          const tasksListInProgressTaskDateText = document.createElement('p');
          tasksListInProgressTaskDateText.innerHTML = task.createdAt.toLocaleString();
          tasksListInProgressTaskDate.appendChild(tasksListInProgressTaskDateText);

        const tasksListInProgressTaskTaskName = document.createElement('div');
        tasksListInProgressTaskTaskName.classList.add('main--tasks-list--title-task-name');
        tasksListInProgressTask.appendChild(tasksListInProgressTaskTaskName);

          const tasksListInProgressTaskTaskNameText = document.createElement('p');
          tasksListInProgressTaskTaskNameText.innerHTML = task.name;
          tasksListInProgressTaskTaskName.appendChild(tasksListInProgressTaskTaskNameText);

        const tasksListInProgressTaskComments = document.createElement('div');
        tasksListInProgressTaskComments.classList.add('main--tasks-list--title-comments');
        tasksListInProgressTask.appendChild(tasksListInProgressTaskComments);

          const tasksListInProgressTaskCommentsText = document.createElement('p');
          tasksListInProgressTaskCommentsText.innerHTML = task.comments.length;
          tasksListInProgressTaskComments.appendChild(tasksListInProgressTaskCommentsText);

        const tasksListInProgressTaskStatus = document.createElement('div');
        tasksListInProgressTaskStatus.classList.add('main--tasks-list--title-status');
        tasksListInProgressTask.appendChild(tasksListInProgressTaskStatus);

          const tasksListInProgressTaskStatusText = document.createElement('p');
          tasksListInProgressTaskStatusText.innerHTML = 'In progress';
          tasksListInProgressTaskStatus.appendChild(tasksListInProgressTaskStatusText);

        const tasksListInProgressTaskPriority = document.createElement('div');
        tasksListInProgressTaskPriority.classList.add('main--tasks-list--title-priority');
        tasksListInProgressTask.appendChild(tasksListInProgressTaskPriority);

          const tasksListInProgressTaskPriorityText = document.createElement('p');
          tasksListInProgressTaskPriorityText.innerHTML = task.priority;
          tasksListInProgressTaskPriority.appendChild(tasksListInProgressTaskPriorityText);

        const tasksListInProgressTaskPrivacy = document.createElement('div');
        tasksListInProgressTaskPrivacy.classList.add('main--tasks-list--title-privacy');
        tasksListInProgressTask.appendChild(tasksListInProgressTaskPrivacy);

          const tasksListInProgressTaskPrivacyText = document.createElement('p');
          tasksListInProgressTaskPrivacyText.innerHTML = task.isPrivate ? 'Private' : 'Public';
          tasksListInProgressTaskPrivacy.appendChild(tasksListInProgressTaskPrivacyText);

        const tasksListInProgressTaskAssignee = document.createElement('div');
        tasksListInProgressTaskAssignee.classList.add('main--tasks-list--title-assignee');
        tasksListInProgressTask.appendChild(tasksListInProgressTaskAssignee);

          const tasksListInProgressTaskAssigneeText = document.createElement('p');
          tasksListInProgressTaskAssigneeText.innerHTML = task.assignee;
          tasksListInProgressTaskAssignee.appendChild(tasksListInProgressTaskAssigneeText);

      const inProgressColumnTask = document.createElement('div');
      inProgressColumnTask.classList.add('main--task');
      document.getElementById('inProgressColumnContainer').appendChild(inProgressColumnTask);

        const taskId = document.createElement('div');
        taskId.classList.add('task-id', 'display-none');
        taskId.innerHTML = task.id;
        inProgressColumnTask.appendChild(taskId);

        const inProgressColumnTaskTimeAndButtons = document.createElement('div');
        inProgressColumnTaskTimeAndButtons.classList.add('main--time-and-buttons');
        inProgressColumnTask.appendChild(inProgressColumnTaskTimeAndButtons);

          const inProgressColumnTaskTime = document.createElement('p');
          inProgressColumnTaskTime.classList.add('main--task-add-time');
          inProgressColumnTaskTime.innerHTML = task.createdAt.toLocaleString();
          inProgressColumnTaskTimeAndButtons.appendChild(inProgressColumnTaskTime);

          const inProgressColumnTaskButtons = document.createElement('div');
          inProgressColumnTaskButtons.classList.add('main--time-and-buttons');
          inProgressColumnTaskTimeAndButtons.appendChild(inProgressColumnTaskButtons);
          
            const inProgressColumnTaskEditButton = document.createElement('img');
            inProgressColumnTaskEditButton.classList.add('main--edit-button');
            inProgressColumnTaskEditButton.src = '/UI/assets/edit.svg';
            inProgressColumnTaskEditButton.alt = '';
            inProgressColumnTaskButtons.appendChild(inProgressColumnTaskEditButton);
          
            const inProgressColumnTaskDeleteButton = document.createElement('img');
            inProgressColumnTaskDeleteButton.classList.add('main--delete-button');
            inProgressColumnTaskDeleteButton.src = '/UI/assets/delete.svg';
            inProgressColumnTaskDeleteButton.alt = '';
            inProgressColumnTaskButtons.appendChild(inProgressColumnTaskDeleteButton);

        const inProgressColumnTaskInfo = document.createElement('div');
        inProgressColumnTaskInfo.classList.add('main--task-info');
        inProgressColumnTask.appendChild(inProgressColumnTaskInfo);
        
          const inProgressColumnTaskName = document.createElement('p');
          inProgressColumnTaskName.classList.add('main--task-name');
          inProgressColumnTaskName.innerHTML = task.name;
          inProgressColumnTaskInfo.appendChild(inProgressColumnTaskName);

          const inProgressColumnTaskOpener = document.createElement('input');
          inProgressColumnTaskOpener.classList.add('main--task--additional-toggle', 'display-none');
          inProgressColumnTaskOpener.type = 'radio';
          inProgressColumnTaskOpener.id = 'to-do-task-' + taskOpenersInputsCount + '-open';
          inProgressColumnTaskOpener.name = 'to-do-task-' + taskOpenersInputsCount;
          inProgressColumnTaskInfo.appendChild(inProgressColumnTaskOpener);

          const inProgressColumnTaskInfoAdditional = document.createElement('div');
          inProgressColumnTaskInfoAdditional.classList.add('main--additional-task-info');
          inProgressColumnTaskInfo.appendChild(inProgressColumnTaskInfoAdditional);

            const inProgressColumnTaskDescription = document.createElement('p');
            inProgressColumnTaskDescription.classList.add('main--task-description');
            inProgressColumnTaskDescription.innerHTML = task.description;
            inProgressColumnTaskInfoAdditional.appendChild(inProgressColumnTaskDescription);

            const inProgressColumnTaskMedia = document.createElement('img');
            inProgressColumnTaskMedia.classList.add('main--media');
            inProgressColumnTaskMedia.src = '/UI/assets/media.svg';
            inProgressColumnTaskMedia.alt = '';
            inProgressColumnTaskInfoAdditional.appendChild(inProgressColumnTaskMedia);

            const inProgressColumnTaskInfoContainer = document.createElement('div');
            inProgressColumnTaskInfoContainer.classList.add('main--task-info-container');
            inProgressColumnTaskInfoAdditional.appendChild(inProgressColumnTaskInfoContainer);

              const inProgressColumnTaskInfoLeftBar = document.createElement('div');
              inProgressColumnTaskInfoLeftBar.classList.add('main--task-info--left-bar');
              inProgressColumnTaskInfoContainer.appendChild(inProgressColumnTaskInfoLeftBar);

                const inProgressColumnTaskComments = document.createElement('p');
                inProgressColumnTaskComments.classList.add('main--task--comments');
                inProgressColumnTaskComments.innerHTML = ('Comments: ' + task.comments.length);
                inProgressColumnTaskInfoLeftBar.appendChild(inProgressColumnTaskComments);  

                const inProgressColumnTaskStatus = document.createElement('p');
                inProgressColumnTaskStatus.classList.add('main--task--status');
                inProgressColumnTaskStatus.innerHTML = ('Status: ' + task.status);
                inProgressColumnTaskInfoLeftBar.appendChild(inProgressColumnTaskStatus);  

              const inProgressColumnTaskInfoRightBar = document.createElement('div');
              inProgressColumnTaskInfoRightBar.classList.add('main--task-info--right-bar');
              inProgressColumnTaskInfoContainer.appendChild(inProgressColumnTaskInfoRightBar);

                const inProgressColumnTaskPriority = document.createElement('p');
                inProgressColumnTaskPriority.classList.add('main--task--priority');
                inProgressColumnTaskPriority.innerHTML = ('Priority: ' + task.priority);
                inProgressColumnTaskInfoRightBar.appendChild(inProgressColumnTaskPriority);  

                const inProgressColumnTaskPrivacy = document.createElement('p');
                inProgressColumnTaskPrivacy.classList.add('main--task--priority');
                inProgressColumnTaskPrivacy.innerHTML = ('Privacy: ' + (task.isPrivate ? 'Private' : 'Public'));
                inProgressColumnTaskInfoRightBar.appendChild(inProgressColumnTaskPrivacy);
                
          const inProgressColumnTaskAssigneeContainer = document.createElement('div');
          inProgressColumnTaskAssigneeContainer.classList.add('main--assignee-plate');
          inProgressColumnTaskInfo.appendChild(inProgressColumnTaskAssigneeContainer);

            const inProgressColumnTaskAssigneeInfo = document.createElement('div');
            inProgressColumnTaskAssigneeInfo.classList.add('main--assignee-info');
            inProgressColumnTaskAssigneeContainer.appendChild(inProgressColumnTaskAssigneeInfo);

              const inProgressColumnTaskAssigneeAvatar = document.createElement('img');
              inProgressColumnTaskAssigneeAvatar.classList.add('main--assignee-avatar');
              inProgressColumnTaskAssigneeAvatar.src = '/UI/assets/smoll_avatar.svg';
              inProgressColumnTaskAssigneeAvatar.alt = '';
              inProgressColumnTaskAssigneeInfo.appendChild(inProgressColumnTaskAssigneeAvatar);

              const inProgressColumnTaskAssigneeName = document.createElement('p');
              inProgressColumnTaskAssigneeName.classList.add('main--assignee-name');
              inProgressColumnTaskAssigneeName.innerHTML = task.assignee;
              inProgressColumnTaskAssigneeInfo.appendChild(inProgressColumnTaskAssigneeName);

            const inProgressColumnTaskConcealer = document.createElement('input');
            inProgressColumnTaskConcealer.classList.add('main--task--hide-toggle', 'display-none');
            inProgressColumnTaskConcealer.type = 'radio';
            inProgressColumnTaskConcealer.id = 'to-do-task-' + taskOpenersInputsCount + '-close';
            inProgressColumnTaskConcealer.name = 'to-do-task-' + taskOpenersInputsCount;
            inProgressColumnTaskConcealer.checked = true;
            inProgressColumnTaskAssigneeContainer.appendChild(inProgressColumnTaskConcealer);

            const inProgressColumnTaskToggleActions = document.createElement('div');
            inProgressColumnTaskToggleActions.classList.add('main--task--toggle-actions');
            inProgressColumnTaskAssigneeContainer.appendChild(inProgressColumnTaskToggleActions);

              const inProgressColumnTaskOpenLabel = document.createElement('label');
              inProgressColumnTaskOpenLabel.classList.add('main--task--open');
              inProgressColumnTaskOpenLabel.setAttribute('for', 'to-do-task-' + taskOpenersInputsCount + '-open');
              inProgressColumnTaskToggleActions.appendChild(inProgressColumnTaskOpenLabel);

                const inProgressColumnTaskArrowDown = document.createElement('img');
                inProgressColumnTaskArrowDown.classList.add('main--task--arrow-down');
                inProgressColumnTaskArrowDown.src = '/UI/assets/arrow-down.svg';
                inProgressColumnTaskArrowDown.alt = '';
                inProgressColumnTaskOpenLabel.appendChild(inProgressColumnTaskArrowDown);

              const inProgressColumnTaskHideLabel = document.createElement('label');
              inProgressColumnTaskHideLabel.classList.add('main--task--hide');
              inProgressColumnTaskHideLabel.setAttribute('for', 'to-do-task-' + taskOpenersInputsCount + '-close');
              inProgressColumnTaskToggleActions.appendChild(inProgressColumnTaskHideLabel);

                const inProgressColumnTaskArrowUp = document.createElement('img');
                inProgressColumnTaskArrowUp.classList.add('main--task--arrow-down', 'reverse');
                inProgressColumnTaskArrowUp.src = '/UI/assets/arrow-down.svg';
                inProgressColumnTaskArrowUp.alt = '';
                inProgressColumnTaskHideLabel.appendChild(inProgressColumnTaskArrowUp);

                taskOpenersInputsCount++;

    } else if (task.status === 'Complete') {
      const tasksListCompleteTask = document.createElement('div');
      tasksListCompleteTask.classList.add('main--tasks-list--task');
      document.getElementById('tasksListCompleteContainer').appendChild(tasksListCompleteTask);

        const taskIdList = document.createElement('div');
        taskIdList.classList.add('task-id', 'display-none');
        taskIdList.innerHTML = task.id;
        tasksListCompleteTask.appendChild(taskIdList);

        const tasksListCompleteTaskDate = document.createElement('div');
        tasksListCompleteTaskDate.classList.add('main--tasks-list--title-date');
        tasksListCompleteTask.appendChild(tasksListCompleteTaskDate);

          const tasksListCompleteTaskDateText = document.createElement('p');
          tasksListCompleteTaskDateText.innerHTML = task.createdAt.toLocaleString();
          tasksListCompleteTaskDate.appendChild(tasksListCompleteTaskDateText);

        const tasksListCompleteTaskTaskName = document.createElement('div');
        tasksListCompleteTaskTaskName.classList.add('main--tasks-list--title-task-name');
        tasksListCompleteTask.appendChild(tasksListCompleteTaskTaskName);

          const tasksListCompleteTaskTaskNameText = document.createElement('p');
          tasksListCompleteTaskTaskNameText.innerHTML = task.name;
          tasksListCompleteTaskTaskName.appendChild(tasksListCompleteTaskTaskNameText);

        const tasksListCompleteTaskComments = document.createElement('div');
        tasksListCompleteTaskComments.classList.add('main--tasks-list--title-comments');
        tasksListCompleteTask.appendChild(tasksListCompleteTaskComments);

          const tasksListCompleteTaskCommentsText = document.createElement('p');
          tasksListCompleteTaskCommentsText.innerHTML = task.comments.length;
          tasksListCompleteTaskComments.appendChild(tasksListCompleteTaskCommentsText);

        const tasksListCompleteTaskStatus = document.createElement('div');
        tasksListCompleteTaskStatus.classList.add('main--tasks-list--title-status');
        tasksListCompleteTask.appendChild(tasksListCompleteTaskStatus);

          const tasksListCompleteTaskStatusText = document.createElement('p');
          tasksListCompleteTaskStatusText.innerHTML = 'Complete';
          tasksListCompleteTaskStatus.appendChild(tasksListCompleteTaskStatusText);

        const tasksListCompleteTaskPriority = document.createElement('div');
        tasksListCompleteTaskPriority.classList.add('main--tasks-list--title-priority');
        tasksListCompleteTask.appendChild(tasksListCompleteTaskPriority);

          const tasksListCompleteTaskPriorityText = document.createElement('p');
          tasksListCompleteTaskPriorityText.innerHTML = task.priority;
          tasksListCompleteTaskPriority.appendChild(tasksListCompleteTaskPriorityText);

        const tasksListCompleteTaskPrivacy = document.createElement('div');
        tasksListCompleteTaskPrivacy.classList.add('main--tasks-list--title-privacy');
        tasksListCompleteTask.appendChild(tasksListCompleteTaskPrivacy);

          const tasksListCompleteTaskPrivacyText = document.createElement('p');
          tasksListCompleteTaskPrivacyText.innerHTML = task.isPrivate ? 'Private' : 'Public';
          tasksListCompleteTaskPrivacy.appendChild(tasksListCompleteTaskPrivacyText);

        const tasksListCompleteTaskAssignee = document.createElement('div');
        tasksListCompleteTaskAssignee.classList.add('main--tasks-list--title-assignee');
        tasksListCompleteTask.appendChild(tasksListCompleteTaskAssignee);

          const tasksListCompleteTaskAssigneeText = document.createElement('p');
          tasksListCompleteTaskAssigneeText.innerHTML = task.assignee;
          tasksListCompleteTaskAssignee.appendChild(tasksListCompleteTaskAssigneeText);

      const completeColumnTask = document.createElement('div');
      completeColumnTask.classList.add('main--task');
      document.getElementById('completeColumnContainer').appendChild(completeColumnTask);

        const taskId = document.createElement('div');
        taskId.classList.add('task-id', 'display-none');
        taskId.innerHTML = task.id;
        completeColumnTask.appendChild(taskId);

        const completeColumnTaskTimeAndButtons = document.createElement('div');
        completeColumnTaskTimeAndButtons.classList.add('main--time-and-buttons');
        completeColumnTask.appendChild(completeColumnTaskTimeAndButtons);

          const completeColumnTaskTime = document.createElement('p');
          completeColumnTaskTime.classList.add('main--task-add-time');
          completeColumnTaskTime.innerHTML = task.createdAt.toLocaleString();
          completeColumnTaskTimeAndButtons.appendChild(completeColumnTaskTime);

          const completeColumnTaskButtons = document.createElement('div');
          completeColumnTaskButtons.classList.add('main--time-and-buttons');
          completeColumnTaskTimeAndButtons.appendChild(completeColumnTaskButtons);
          
            const completeColumnTaskEditButton = document.createElement('img');
            completeColumnTaskEditButton.classList.add('main--edit-button');
            completeColumnTaskEditButton.src = '/UI/assets/edit.svg';
            completeColumnTaskEditButton.alt = '';
            completeColumnTaskButtons.appendChild(completeColumnTaskEditButton);
          
            const completeColumnTaskDeleteButton = document.createElement('img');
            completeColumnTaskDeleteButton.classList.add('main--delete-button');
            completeColumnTaskDeleteButton.src = '/UI/assets/delete.svg';
            completeColumnTaskDeleteButton.alt = '';
            completeColumnTaskButtons.appendChild(completeColumnTaskDeleteButton);

        const completeColumnTaskInfo = document.createElement('div');
        completeColumnTaskInfo.classList.add('main--task-info');
        completeColumnTask.appendChild(completeColumnTaskInfo);
        
          const completeColumnTaskName = document.createElement('p');
          completeColumnTaskName.classList.add('main--task-name');
          completeColumnTaskName.innerHTML = task.name;
          completeColumnTaskInfo.appendChild(completeColumnTaskName);

          const completeColumnTaskOpener = document.createElement('input');
          completeColumnTaskOpener.classList.add('main--task--additional-toggle', 'display-none');
          completeColumnTaskOpener.type = 'radio';
          completeColumnTaskOpener.id = 'to-do-task-' + taskOpenersInputsCount + '-open';
          completeColumnTaskOpener.name = 'to-do-task-' + taskOpenersInputsCount;
          completeColumnTaskInfo.appendChild(completeColumnTaskOpener);

          const completeColumnTaskInfoAdditional = document.createElement('div');
          completeColumnTaskInfoAdditional.classList.add('main--additional-task-info');
          completeColumnTaskInfo.appendChild(completeColumnTaskInfoAdditional);

            const completeColumnTaskDescription = document.createElement('p');
            completeColumnTaskDescription.classList.add('main--task-description');
            completeColumnTaskDescription.innerHTML = task.description;
            completeColumnTaskInfoAdditional.appendChild(completeColumnTaskDescription);

            const completeColumnTaskMedia = document.createElement('img');
            completeColumnTaskMedia.classList.add('main--media');
            completeColumnTaskMedia.src = '/UI/assets/media.svg';
            completeColumnTaskMedia.alt = '';
            completeColumnTaskInfoAdditional.appendChild(completeColumnTaskMedia);

            const completeColumnTaskInfoContainer = document.createElement('div');
            completeColumnTaskInfoContainer.classList.add('main--task-info-container');
            completeColumnTaskInfoAdditional.appendChild(completeColumnTaskInfoContainer);

              const completeColumnTaskInfoLeftBar = document.createElement('div');
              completeColumnTaskInfoLeftBar.classList.add('main--task-info--left-bar');
              completeColumnTaskInfoContainer.appendChild(completeColumnTaskInfoLeftBar);

                const completeColumnTaskComments = document.createElement('p');
                completeColumnTaskComments.classList.add('main--task--comments');
                completeColumnTaskComments.innerHTML = ('Comments: ' + task.comments.length);
                completeColumnTaskInfoLeftBar.appendChild(completeColumnTaskComments);  

                const completeColumnTaskStatus = document.createElement('p');
                completeColumnTaskStatus.classList.add('main--task--status');
                completeColumnTaskStatus.innerHTML = ('Status: ' + task.status);
                completeColumnTaskInfoLeftBar.appendChild(completeColumnTaskStatus);  

              const completeColumnTaskInfoRightBar = document.createElement('div');
              completeColumnTaskInfoRightBar.classList.add('main--task-info--right-bar');
              completeColumnTaskInfoContainer.appendChild(completeColumnTaskInfoRightBar);

                const completeColumnTaskPriority = document.createElement('p');
                completeColumnTaskPriority.classList.add('main--task--priority');
                completeColumnTaskPriority.innerHTML = ('Priority: ' + task.priority);
                completeColumnTaskInfoRightBar.appendChild(completeColumnTaskPriority);  

                const completeColumnTaskPrivacy = document.createElement('p');
                completeColumnTaskPrivacy.classList.add('main--task--priority');
                completeColumnTaskPrivacy.innerHTML = ('Privacy: ' + (task.isPrivate ? 'Private' : 'Public'));
                completeColumnTaskInfoRightBar.appendChild(completeColumnTaskPrivacy);
                
          const completeColumnTaskAssigneeContainer = document.createElement('div');
          completeColumnTaskAssigneeContainer.classList.add('main--assignee-plate');
          completeColumnTaskInfo.appendChild(completeColumnTaskAssigneeContainer);

            const completeColumnTaskAssigneeInfo = document.createElement('div');
            completeColumnTaskAssigneeInfo.classList.add('main--assignee-info');
            completeColumnTaskAssigneeContainer.appendChild(completeColumnTaskAssigneeInfo);

              const completeColumnTaskAssigneeAvatar = document.createElement('img');
              completeColumnTaskAssigneeAvatar.classList.add('main--assignee-avatar');
              completeColumnTaskAssigneeAvatar.src = '/UI/assets/smoll_avatar.svg';
              completeColumnTaskAssigneeAvatar.alt = '';
              completeColumnTaskAssigneeInfo.appendChild(completeColumnTaskAssigneeAvatar);

              const completeColumnTaskAssigneeName = document.createElement('p');
              completeColumnTaskAssigneeName.classList.add('main--assignee-name');
              completeColumnTaskAssigneeName.innerHTML = task.assignee;
              completeColumnTaskAssigneeInfo.appendChild(completeColumnTaskAssigneeName);

            const completeColumnTaskConcealer = document.createElement('input');
            completeColumnTaskConcealer.classList.add('main--task--hide-toggle', 'display-none');
            completeColumnTaskConcealer.type = 'radio';
            completeColumnTaskConcealer.id = 'to-do-task-' + taskOpenersInputsCount + '-close';
            completeColumnTaskConcealer.name = 'to-do-task-' + taskOpenersInputsCount;
            completeColumnTaskConcealer.checked = true;
            completeColumnTaskAssigneeContainer.appendChild(completeColumnTaskConcealer);

            const completeColumnTaskToggleActions = document.createElement('div');
            completeColumnTaskToggleActions.classList.add('main--task--toggle-actions');
            completeColumnTaskAssigneeContainer.appendChild(completeColumnTaskToggleActions);

              const completeColumnTaskOpenLabel = document.createElement('label');
              completeColumnTaskOpenLabel.classList.add('main--task--open');
              completeColumnTaskOpenLabel.setAttribute('for', 'to-do-task-' + taskOpenersInputsCount + '-open');
              completeColumnTaskToggleActions.appendChild(completeColumnTaskOpenLabel);

                const completeColumnTaskArrowDown = document.createElement('img');
                completeColumnTaskArrowDown.classList.add('main--task--arrow-down');
                completeColumnTaskArrowDown.src = '/UI/assets/arrow-down.svg';
                completeColumnTaskArrowDown.alt = '';
                completeColumnTaskOpenLabel.appendChild(completeColumnTaskArrowDown);

              const completeColumnTaskHideLabel = document.createElement('label');
              completeColumnTaskHideLabel.classList.add('main--task--hide');
              completeColumnTaskHideLabel.setAttribute('for', 'to-do-task-' + taskOpenersInputsCount + '-close');
              completeColumnTaskToggleActions.appendChild(completeColumnTaskHideLabel);

                const completeColumnTaskArrowUp = document.createElement('img');
                completeColumnTaskArrowUp.classList.add('main--task--arrow-down', 'reverse');
                completeColumnTaskArrowUp.src = '/UI/assets/arrow-down.svg';
                completeColumnTaskArrowUp.alt = '';
                completeColumnTaskHideLabel.appendChild(completeColumnTaskArrowUp);

                taskOpenersInputsCount++;

    }
}
}

let collection = new TaskCollection();
const taskFeedView = new TaskFeedView('main');
const headerView = new HeaderView();
const taskView = new TaskView();

let globalSkip = 0;
let globalTop = 10;
let globalFilterConfig = {};

function setCurrentUser(user) {
  headerView.display(user);
  collection.currentUser = document.getElementById('current-user').innerHTML;
}

function addTask(task) {
  collection.add(task.name, task.description, task.assignee, task.status, task.priority, task.isPrivate);
  taskView.display(collection.tasks[collection.tasks.length - 1]);
}

function editTask(id, task) {
  if (!document.querySelectorAll('.task-id')) return false;
  const idArray = document.querySelectorAll('.task-id');
  idArray.forEach(element => {
    if (element.innerHTML === id) {
      if (element.closest('.main--task')) {
        const temp = element.closest('.main--task');
        temp.remove();
      } else if (element.closest('.main--tasks-list--task')) {
        const temp = element.closest('.main--tasks-list--task');
        temp.remove();
      }
    }
  });
  collection.edit(id, task.name, task.description, task.assignee, task.status, task.priority, task.isPrivate)
  taskView.display(collection.get(id));
}

function removeTask(id) {
  const isRemoved = collection.remove(id);
  if (isRemoved) {
    const idArray = document.querySelectorAll('.task-id');
    idArray.forEach(element => {
      if (element.innerHTML === id ) {
        if (element.closest('.main--task')) {
          const temp = element.closest('.main--task');
          temp.remove();
        } else if (element.closest('.main--tasks-list--task')) {
          const temp = element.closest('.main--tasks-list--task');
          temp.remove();
        }
      }
    });
  }
}

function getFeed(skip = 0, top = 10, filterConfig = {}) {

  globalSkip = skip ?? globalSkip;
  globalTop = top ?? globalTop;
  globalFilterConfig = filterConfig ?? globalFilterConfig;

  const tasks = collection.getPage(globalSkip, globalTop, globalFilterConfig);
  taskFeedView.display(tasks);
}

function showTask(id) {
  const idArray = document.querySelectorAll('.task-id');
  idArray.forEach(element => {
    if (element.closest('.main--task')) {
      const temp = element.closest('.main--task');
      temp.remove();
    } else if (element.closest('.main--tasks-list--task')) {
      const temp = element.closest('.main--tasks-list--task');
      temp.remove();
    }
});
  taskView.display(collection.get(id));
}

setCurrentUser('Frodo Baggins');

getFeed(0, 1);

editTask((document.querySelector('.task-id').innerHTML), collection.tasks[1]); 
// // Не работает поскольку текущий пользователь не саруман

setCurrentUser('Saruman');

editTask((document.querySelector('.task-id').innerHTML), collection.tasks[5]); 

removeTask(document.querySelector('.task-id').innerHTML);
// // Не работает поскольку текущий пользователь не фродо

setCurrentUser('Frodo Baggins');
// // addTask(collection.tasks[0]);

removeTask(document.querySelector('.task-id').innerHTML);

addTask(collection.tasks[2]);

addTask(collection.tasks[16]);

getFeed(0, 10, {assignee: 'Saruman'});

getFeed(0, 10, {assignee: 'Frodo Baggins'});

getFeed(0, 10, {assignee: 'Frodo Baggins', priority: 'Low'});

showTask(collection.tasks[15].id);