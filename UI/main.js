/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
const objectTasks = [
  {
    id: '1',
    name: 'Создать логотип приложения',
    description: 'Формат изображения – svg, размеры - 100х100px',
    createdAt: new Date('2023-02-09T23:00:00'),
    assignee: 'Иванов Иван',
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
    assignee: 'Иванов Иван',
    status: 'To Do',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '1',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-10T23:00:05'),
        author: 'Иванов Иван',
      },
    ],
  },
  {
    id: '3',
    name: 'Lorem, ipsum dolor.',
    description:
      'Lorem, ipsum dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    createdAt: new Date('2023-02-11T23:00:00'),
    assignee: 'Иванов Иван',
    status: 'To Do',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '2',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-11T23:00:05'),
        author: 'Иванов Иван',
      },
    ],
  },
  {
    id: '4',
    name: 'Lorem, ipsum.',
    description:
      'Lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.',
    createdAt: new Date('2023-02-12T23:00:00'),
    assignee: 'Иванов Иван',
    status: 'Complete',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '3',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-12T23:00:05'),
        author: 'Иванов Иван',
      },
    ],
  },
  {
    id: '5',
    name: 'Lorem ipsum dolor sit.',
    description:
      'Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing.',
    createdAt: new Date('2023-02-13T23:00:00'),
    assignee: 'Иванов Иван',
    status: 'In progress',
    priority: 'High',
    isPrivate: true,
    comments: [
      {
        id: '4',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-13T23:00:05'),
        author: 'Иванов Иван',
      },
    ],
  },
  {
    id: '6',
    name: 'Lorem, ipsum dolor.',
    description:
      'Lorem, ipsum dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    createdAt: new Date('2023-02-14T23:00:00'),
    assignee: 'Иванов Иван',
    status: 'To Do',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '5',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-14T23:00:05'),
        author: 'Иванов Иван',
      },
    ],
  },
  {
    id: '7',
    name: 'Lorem, ipsum.',
    description:
      'Lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.',
    createdAt: new Date('2023-02-15T23:00:00'),
    assignee: 'Иванов Иван',
    status: 'Complete',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '6',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-15T23:00:05'),
        author: 'Иванов Иван',
      },
    ],
  },
  {
    id: '8',
    name: 'Lorem ipsum dolor sit.',
    description:
      'Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing.',
    createdAt: new Date('2023-02-16T23:00:00'),
    assignee: 'Иванов Иван',
    status: 'In progress',
    priority: 'High',
    isPrivate: true,
    comments: [
      {
        id: '7',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-16T23:00:05'),
        author: 'Иванов Иван',
      },
    ],
  },
  {
    id: '9',
    name: 'Lorem, ipsum dolor.',
    description:
      'Lorem, ipsum dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    createdAt: new Date('2023-02-17T23:00:00'),
    assignee: 'Иванов Иван',
    status: 'To Do',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '8',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-17T23:00:05'),
        author: 'Иванов Иван',
      },
    ],
  },
  {
    id: '10',
    name: 'Lorem, ipsum.',
    description:
      'Lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.',
    createdAt: new Date('2023-02-18T23:00:00'),
    assignee: 'Иванов Иван',
    status: 'Complete',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '9',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-18T23:00:05'),
        author: 'Иванов Иван',
      },
    ],
  },
  {
    id: '11',
    name: 'Lorem ipsum dolor sit.',
    description:
      'Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing.',
    createdAt: new Date('2023-02-19T23:00:00'),
    assignee: 'Данилов Данила',
    status: 'In progress',
    priority: 'High',
    isPrivate: true,
    comments: [
      {
        id: '10',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-19T23:00:05'),
        author: 'Данилов Данила',
      },
    ],
  },
  {
    id: '12',
    name: 'Lorem, ipsum dolor.',
    description:
      'Lorem, ipsum dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    createdAt: new Date('2023-02-20T23:00:00'),
    assignee: 'Данилов Данила',
    status: 'To Do',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '11',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-20T23:00:05'),
        author: 'Данилов Данила',
      },
    ],
  },
  {
    id: '13',
    name: 'Lorem, ipsum.',
    description:
      'Lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.',
    createdAt: new Date('2023-02-21T23:00:00'),
    assignee: 'Данилов Данила',
    status: 'Complete',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '12',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-21T23:00:05'),
        author: 'Данилов Данила',
      },
    ],
  },
  {
    id: '14',
    name: 'Lorem ipsum dolor sit.',
    description:
      'Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing.',
    createdAt: new Date('2023-02-22T23:00:00'),
    assignee: 'Данилов Данила',
    status: 'In progress',
    priority: 'High',
    isPrivate: true,
    comments: [
      {
        id: '13',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-22T23:00:05'),
        author: 'Данилов Данила',
      },
    ],
  },
  {
    id: '15',
    name: 'Lorem, ipsum dolor.',
    description:
      'Lorem, ipsum dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    createdAt: new Date('2023-02-23T23:00:00'),
    assignee: 'Данилов Данила',
    status: 'To Do',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '14',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-23T23:00:05'),
        author: 'Данилов Данила',
      },
    ],
  },
  {
    id: '16',
    name: 'Lorem, ipsum.',
    description:
      'Lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.',
    createdAt: new Date('2023-02-24T23:00:00'),
    assignee: 'Данилов Данила',
    status: 'Complete',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '15',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-24T23:00:05'),
        author: 'Данилов Данила',
      },
    ],
  },
  {
    id: '17',
    name: 'Lorem ipsum dolor sit.',
    description:
      'Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing.',
    createdAt: new Date('2023-02-25T23:00:00'),
    assignee: 'Данилов Данила',
    status: 'In progress',
    priority: 'High',
    isPrivate: true,
    comments: [
      {
        id: '16',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-25T23:00:05'),
        author: 'Данилов Данила',
      },
    ],
  },
  {
    id: '18',
    name: 'Lorem, ipsum dolor.',
    description:
      'Lorem, ipsum dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    createdAt: new Date('2023-02-26T23:00:00'),
    assignee: 'Данилов Данила',
    status: 'To Do',
    priority: 'Medium',
    isPrivate: false,
    comments: [
      {
        id: '17',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-26T23:00:05'),
        author: 'Данилов Данила',
      },
    ],
  },
  {
    id: '19',
    name: 'Lorem, ipsum.',
    description:
      'Lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.',
    createdAt: new Date('2023-02-27T23:00:00'),
    assignee: 'Данилов Данила',
    status: 'Complete',
    priority: 'Low',
    isPrivate: false,
    comments: [
      {
        id: '18',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-27T23:00:05'),
        author: 'Данилов Данила',
      },
    ],
  },
  {
    id: '20',
    name: 'Lorem ipsum dolor sit.',
    description:
      'Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing.',
    createdAt: new Date('2023-02-28T23:00:00'),
    assignee: 'Данилов Данила',
    status: 'In progress',
    priority: 'High',
    isPrivate: true,
    comments: [
      {
        id: '19',
        text: 'Будет сделано!',
        createdAt: new Date('2023-02-28T23:00:05'),
        author: 'Данилов Данила',
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
    if (!value || !['To Do', 'In progress', 'Complete'].includes(value)) {
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
    if (!task.id || typeof task.id !== 'string'
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
      || !['To Do', 'In progress', 'Complete'].includes(task.status)
      || !task.priority
      || typeof task.priority !== 'string'
      || !['High', 'Medium', 'Low'].includes(task.priority)
      || typeof task.isPrivate !== 'boolean'
      || !task.comments
      || !Array.isArray(task.comments)) {
      return false;
    }
    return true;
  }
}

// 2

class Comment {
  #id;

  #text;

  #createdAt;

  #author;

  #user = 'Данилов Данила';

  constructor(text) {
    this.#id = `${Math.floor(Math.random() * 1000000000)}`;
    this.#text = text;
    this.#createdAt = new Date();
    this.#author = this.#user;
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
    if (
      typeof comment.id !== 'string'
      || comment.id.trim().length === 0
      || typeof comment.text !== 'string'
      || comment.text.trim().length === 0
      || comment.text.trim().length > 280
      || !(comment.createdAt instanceof Date)
      || typeof comment.author !== 'string'
      || comment.author.trim().length === 0
    ) {
      return false;
    }

    return true;
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

  #user = 'Данилов Данила';

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

    if (this.#user !== this.#tasks[taskId].assignee) {
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

    if (this.#user !== this.#tasks[taskId].assignee) {
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

  get user() {
    return this.#user;
  }

  set user(name) {
    this.#user = name;
  }
}

const collection = new TaskCollection();

console.log(collection.getPage(0, 10));
console.log(collection.getPage(3, 5, { priority: 'High' }));
console.log(collection.getPage(0, 3, { name: 'Lorem, ipsum dolor.' }));

const tempId = collection.getPage(0, 10)[0].id;

console.log(collection.get(tempId));
console.log(collection.get('52'));

console.log(collection.add('Add color', 'Add color in this', 'Данилов Данила', 'To Do', 'Low', true));
console.log(collection.add('Add data', 'Add data in this', 'Данилов Данила', 'To Do', 'Low', 'true'));

console.log(collection.edit(tempId, 'Add data', 'Add data in this', 'Данилов Данила', 'To Do', 'Low', true));
collection.user = 'Иванов Иван';
console.log(collection.edit(tempId, 'Add data', 'Add data in this', 'Иванов Иван', 'To Do', 'Low', true));

console.log(collection.get(tempId).comments);
console.log(collection.addComment(tempId, 'Add data'));
console.log(collection.get(tempId).comments);
console.log(collection.addComment(tempId, true));
console.log(collection.get(tempId).comments);

console.log('remove');
collection.user = 'Данилов Данила';
console.log(collection.remove(tempId));
collection.user = 'Иванов Иван';
console.log(collection.remove(tempId));
console.log(collection.get(tempId));

console.log('clear');
console.log(collection.clear());
console.log(collection.getPage(0, 10));

console.log('addAll');
console.log(collection.addAll(tasks));
console.log(collection.getPage(0, 10));
