const TaskManager = require('../src/taskManager');

describe('TaskManager', () => {
  let manager;

  beforeEach(() => {
    manager = new TaskManager(); // Reinicia el estado antes de cada test
  });

  test('debería iniciar con un array de tareas vacío', () => {
    expect(manager.getTasks()).toHaveLength(0);
  });

  test('debería agregar una nueva tarea', () => {
    manager.addTask('Estudiar Testing');
    expect(manager.getTasks()).toHaveLength(1);
    expect(manager.getTasks()[0].title).toBe('Estudiar Testing');
  });
});