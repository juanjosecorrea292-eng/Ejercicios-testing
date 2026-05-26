class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push({ id: Date.now(), title: task, completed: false });
  }

  getTasks() {
    return this.tasks;
  }

  completeTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.completed = true;
  }
}

module.exports = TaskManager;