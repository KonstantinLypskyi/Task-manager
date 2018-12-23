export const getTasks = () => JSON.parse(localStorage.getItem('@tasks'));

export const setTasks = tasks => localStorage.setItem('@tasks', JSON.stringify(tasks));