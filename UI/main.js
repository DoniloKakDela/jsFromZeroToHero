const tasks = [
  {
    id: "1",
    name: "Создать логотип приложения",
    description: "Формат изображения – svg, размеры - 100х100px",
    createdAt: new Date("2023-02-09T23:00:00"),
    assignee: "Иванов Иван",
    status: "In progress",
    priority: "High",
    isPrivate: true,
    comments: [],
  },
  {
    id: "2",
    name: "Переименовать константу DELAY_TIME",
    description:
      "Необходимо переименовать константу с DELAY_TIME на DELAY_API_TIME",
    createdAt: new Date("2023-02-10T23:00:00"),
    assignee: "Иванов Иван",
    status: "To Do",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "1",
        text: "Будет сделано!",
        createdAt: new Date("2023-02-10T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "3",
    name: "Lorem, ipsum dolor.",
    description:
      "Lorem, ipsum dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    createdAt: new Date("2023-02-11T23:00:00"),
    assignee: "Иванов Иван",
    status: "To Do",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "2",
        text: "Будет сделано!",
        createdAt: new Date("2023-02-11T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "4",
    name: "Lorem, ipsum.",
    description:
      "Lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.",
    createdAt: new Date("2023-02-12T23:00:00"),
    assignee: "Иванов Иван",
    status: "Complete",
    priority: "Low",
    isPrivate: false,
    comments: [
      {
        id: "3",
        text: "Будет сделано!",
        createdAt: new Date("2023-02-12T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "5",
    name: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing.",
    createdAt: new Date("2023-02-13T23:00:00"),
    assignee: "Иванов Иван",
    status: "In progress",
    priority: "High",
    isPrivate: true,
    comments: [
      {
        id: "4",
        text: "Будет сделано!",
        createdAt: new Date("2023-02-13T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "6",
    name: "Lorem, ipsum dolor.",
    description:
      "Lorem, ipsum dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    createdAt: new Date("2023-02-14T23:00:00"),
    assignee: "Иванов Иван",
    status: "To Do",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "5",
        text: "Будет сделано!",
        createdAt: new Date("2023-02-14T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "7",
    name: "Lorem, ipsum.",
    description:
      "Lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.",
    createdAt: new Date("2023-02-15T23:00:00"),
    assignee: "Иванов Иван",
    status: "Complete",
    priority: "Low",
    isPrivate: false,
    comments: [
      {
        id: "6",
        text: "Будет сделано!",
        createdAt: new Date("2023-02-15T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "8",
    name: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing.",
    createdAt: new Date("2023-02-16T23:00:00"),
    assignee: "Иванов Иван",
    status: "In progress",
    priority: "High",
    isPrivate: true,
    comments: [
      {
        id: "7",
        text: "Будет сделано!",
        createdAt: new Date("2023-02-16T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "9",
    name: "Lorem, ipsum dolor.",
    description:
      "Lorem, ipsum dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    createdAt: new Date("2023-02-17T23:00:00"),
    assignee: "Иванов Иван",
    status: "To Do",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "8",
        text: "Будет сделано!",
        createdAt: new Date("2023-02-17T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "10",
    name: "Lorem, ipsum.",
    description:
      "Lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.",
    createdAt: new Date("2023-02-18T23:00:00"),
    assignee: "Иванов Иван",
    status: "Complete",
    priority: "Low",
    isPrivate: false,
    comments: [
      {
        id: "9",
        text: "Будет сделано!",
        createdAt: new Date("2023-02-18T23:00:05"),
        author: "Иванов Иван",
      },
    ],
  },
  {
    id: "11",
    name: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing.",
    createdAt: new Date("2023-02-19T23:00:00"),
    assignee: "Данилов Данила",
    status: "In progress",
    priority: "High",
    isPrivate: true,
    comments: [
      {
        id: "10",
        text: "Будет сделано!",
        createdAt: new Date("2023-02-19T23:00:05"),
        author: "Данилов Данила",
      },
    ],
  },
  {
    id: "12",
    name: "Lorem, ipsum dolor.",
    description:
      "Lorem, ipsum dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    createdAt: new Date("2023-02-20T23:00:00"),
    assignee: "Данилов Данила",
    status: "To Do",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "11",
        text: "Будет сделано!",
        createdAt: new Date("2023-02-20T23:00:05"),
        author: "Данилов Данила",
      },
    ],
  },
  {
    id: "13",
    name: "Lorem, ipsum.",
    description:
      "Lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.",
    createdAt: new Date("2023-02-21T23:00:00"),
    assignee: "Данилов Данила",
    status: "Complete",
    priority: "Low",
    isPrivate: false,
    comments: [
      {
        id: "12",
        text: "Будет сделано!",
        createdAt: new Date("2023-02-21T23:00:05"),
        author: "Данилов Данила",
      },
    ],
  },
  {
    id: "14",
    name: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing.",
    createdAt: new Date("2023-02-22T23:00:00"),
    assignee: "Данилов Данила",
    status: "In progress",
    priority: "High",
    isPrivate: true,
    comments: [
      {
        id: "13",
        text: "Будет сделано!",
        createdAt: new Date("2023-02-22T23:00:05"),
        author: "Данилов Данила",
      },
    ],
  },
  {
    id: "15",
    name: "Lorem, ipsum dolor.",
    description:
      "Lorem, ipsum dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    createdAt: new Date("2023-02-23T23:00:00"),
    assignee: "Данилов Данила",
    status: "To Do",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "14",
        text: "Будет сделано!",
        createdAt: new Date("2023-02-23T23:00:05"),
        author: "Данилов Данила",
      },
    ],
  },
  {
    id: "16",
    name: "Lorem, ipsum.",
    description:
      "Lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.",
    createdAt: new Date("2023-02-24T23:00:00"),
    assignee: "Данилов Данила",
    status: "Complete",
    priority: "Low",
    isPrivate: false,
    comments: [
      {
        id: "15",
        text: "Будет сделано!",
        createdAt: new Date("2023-02-24T23:00:05"),
        author: "Данилов Данила",
      },
    ],
  },
  {
    id: "17",
    name: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing.",
    createdAt: new Date("2023-02-25T23:00:00"),
    assignee: "Данилов Данила",
    status: "In progress",
    priority: "High",
    isPrivate: true,
    comments: [
      {
        id: "16",
        text: "Будет сделано!",
        createdAt: new Date("2023-02-25T23:00:05"),
        author: "Данилов Данила",
      },
    ],
  },
  {
    id: "18",
    name: "Lorem, ipsum dolor.",
    description:
      "Lorem, ipsum dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    createdAt: new Date("2023-02-26T23:00:00"),
    assignee: "Данилов Данила",
    status: "To Do",
    priority: "Medium",
    isPrivate: false,
    comments: [
      {
        id: "17",
        text: "Будет сделано!",
        createdAt: new Date("2023-02-26T23:00:05"),
        author: "Данилов Данила",
      },
    ],
  },
  {
    id: "19",
    name: "Lorem, ipsum.",
    description:
      "Lorem ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.",
    createdAt: new Date("2023-02-27T23:00:00"),
    assignee: "Данилов Данила",
    status: "Complete",
    priority: "Low",
    isPrivate: false,
    comments: [
      {
        id: "18",
        text: "Будет сделано!",
        createdAt: new Date("2023-02-27T23:00:05"),
        author: "Данилов Данила",
      },
    ],
  },
  {
    id: "20",
    name: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing.",
    createdAt: new Date("2023-02-28T23:00:00"),
    assignee: "Данилов Данила",
    status: "In progress",
    priority: "High",
    isPrivate: true,
    comments: [
      {
        id: "19",
        text: "Будет сделано!",
        createdAt: new Date("2023-02-28T23:00:05"),
        author: "Данилов Данила",
      },
    ],
  },
];

const module = (function () {
  var user = "Данилов Данила";

  function getTasks(skip = 0, top = 10, filterConfig) {
    let sortedTasks = tasks;

    sortedTasks.sort(function (a, b) {
      return a.createdAt.getTime() - b.createdAt.getTime();
    });

    let filteredTasks = sortedTasks.filter((task) => {
      if (
        typeof filterConfig?.assignee === "string" &&
        !task.assignee.includes(filterConfig.assignee)
      ) {
        return false;
      }
      if (
        filterConfig?.dateFrom !== undefined &&
        filterConfig.dateFrom.getTime() > task.createdAt.getTime()
      ) {
        return false;
      }
      if (
        filterConfig?.dateTo !== undefined &&
        filterConfig.dateTo.getTime() < task.createdAt.getTime()
      ) {
        return false;
      }
      if (
        filterConfig?.status !== undefined &&
        filterConfig.status !== task.status
      ) {
        return false;
      }
      if (
        filterConfig?.priority !== undefined &&
        filterConfig.priority !== task.priority
      ) {
        return false;
      }
      if (
        filterConfig?.isPrivate !== undefined &&
        filterConfig.isPrivate !== task.isPrivate
      ) {
        return false;
      }
      if (
        typeof filterConfig?.description === "string" &&
        !task.description.includes(filterConfig.description)
      ) {
        return false;
      }
      return true;
    });

    return filteredTasks.slice(skip, skip + top);
  }

  function getTask(id) {
    return tasks.find((task) => task.id === id);
  }

  function isUniqueTask(task) {
    return tasks.findIndex((value) => value.id === task.id) === -1;
  }

  function validateTask(task) {
    return (
      Boolean(task.id) &&
      typeof task.name === "string" &&
      task.name.length <= 100 &&
      typeof task.description === "string" &&
      task.description.length <= 280 &&
      task.createdAt instanceof Date &&
      Boolean(task.assignee) &&
      typeof task.status === "string" &&
      ["To Do", "In Progress", "Complete"].includes(task.status) &&
      typeof task.priority === "string" &&
      ["High", "Medium", "Low"].includes(task.priority) &&
      typeof task.isPrivate === "boolean" &&
      task.comments instanceof Array
    );
  }

  function addTask(name, description, assignee, status, priority, isPrivate) {
    const task = {
      id: `${Math.floor(Math.random() * 1000000000)}`,
      name: name,
      description: description,
      createdAt: new Date(),
      assignee: assignee ?? user,
      status: status,
      priority: priority,
      isPrivate: isPrivate,
      comments: [],
    };

    if (validateTask(task) && isUniqueTask(task)) {
      tasks.push(task);
      return true;
    }

    return false;
  }

  function editTask(
    id,
    name,
    description,
    assignee,
    status,
    priority,
    isPrivate
  ) {
    const taskId = tasks.findIndex((task) => task.id === id);
    if (taskId === -1) {
      return false;
    }

    if (user !== tasks[taskId].assignee) {
      return false;
    }

    const newTask = {
      ...tasks[taskId],
      name: name ?? tasks[taskId].name,
      description: description ?? tasks[taskId].description,
      assignee: assignee ?? tasks[taskId].assignee,
      status: status ?? tasks[taskId].status,
      priority: priority ?? tasks[taskId].priority,
      isPrivate: isPrivate ?? tasks[taskId].isPrivate,
    };

    if (validateTask(newTask)) {
      tasks[taskId] = newTask;
      return true;
    }

    return false;
  }

  function removeTask(id) {
    const taskId = tasks.findIndex((task) => task.id === id);
    if (taskId === -1) {
      return false;
    }

    if (user !== tasks[taskId].assignee) {
      return false;
    }

    tasks.splice(taskId, 1);
    return true;
  }

  function isUniqueComment(comment) {
    return (
      tasks.findIndex(
        (task) => task.comments.findIndex((com) => com.id === comment.id) !== -1
      ) === -1
    );
  }

  function validateComment(comment) {
    return (
      Boolean(comment.id) &&
      typeof comment.text === "string" &&
      comment.text.length <= 280 &&
      comment.createdAt instanceof Date &&
      Boolean(comment.author) &&
      typeof comment.author === "string"
    );
  }

  function addComment(id, text) {
    const taskId = tasks.findIndex((task) => task.id === id);
    if (taskId === -1) {
      return false;
    }

    const newComment = {
      id: `${Math.floor(Math.random() * 1000000000)}`,
      text: text,
      createdAt: new Date(),
      author: user,
    };

    if (validateComment(newComment) && isUniqueComment(newComment)) {
      tasks[taskId].comments.push(newComment);
      return true;
    }

    return false;
  }

  function changeUser(usr) {
    user = usr;
  }

  return {
    getTasks,
    getTask,
    validate: validateTask,
    addTask,
    editTask,
    removeTask,
    validateComment,
    addComment,
    changeUser,
  };
})();

console.log("getTasks");

console.log(module.getTasks(0, 10));
console.log(module.getTasks(3, 2));
console.log(module.getTasks(0, 10, {}));
console.log(module.getTasks(0, 10, { assignee: "Данилов Данила" }));
console.log(
  module.getTasks(0, 10, {
    assignee: "Данилов Данила",
    dateFrom: new Date("2023-02-22T23:00:05"),
    dateTo: new Date("2023-02-26T23:00:05"),
    priority: "High",
    status: "In progress",
  })
);

console.log("getTask");

console.log(module.getTask("12"));
console.log(module.getTask("100000000000"));

console.log("addTask");

console.log(
  module.addTask(
    "Lorem ipsum dolor sit.",
    "Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing.",
    null,
    "In Progress",
    "High",
    true
  )
);

console.log(
  module.addTask(
    "Lorem ipsum dolor sit.",
    "Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing.",
    null,
    "Asd",
    "df",
    true
  )
);

console.log("addComment");

console.log(module.getTask("12").comments);
console.log(module.addComment("12", "Привет!"));
console.log(module.getTask("12").comments);
console.log(
  module.addComment(
    "12",
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
  )
);
console.log(module.getTask("12").comments);

console.log("editTask, getTask, changeUser");

console.log(module.getTask("12"));
console.log(module.editTask("12", "Lorem"));
console.log(module.getTask("12"));
console.log(module.changeUser("New User"));
console.log(module.editTask("12", "Lorem 2"));
console.log(module.getTask("12"));

console.log("removeTask, getTask, changeUser");

console.log(module.removeTask("12"));
console.log(module.getTask("12"));
console.log(module.changeUser("Данилов Данила"));
console.log(module.removeTask("12"));
console.log(module.getTask("12"));
