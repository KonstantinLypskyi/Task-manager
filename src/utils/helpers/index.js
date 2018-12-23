export const getCompletedTasks = array => {
    const data = [];
    array.forEach(item => {
      if (item.completed) {
        data.push(item.id);
      }
    });
    return data;
};

export const sortTasks = (a, b) => {
  if (a.completed > b.completed) return 1;
  if (a.completed < b.completed) return -1;
}

export const makeId = () => {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
}
  
export const comparingArrays = (x, y) => JSON.stringify(x) === JSON.stringify(y);