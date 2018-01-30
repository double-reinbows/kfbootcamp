// @flow

let todos: Array<Todo> = [
  {id: 1, content: 'Sarapan Pagi'},
  {id: 2, content: 'Pergi ke kampus'},
  {id: 3, content: 'Ketemu teman'},
];

type Todo = {
  id: number,
  content: string,
};

let renderTodoList = (todos: Array<Todo>) => {
  let a = '';
  return `
    <ul>
      ${renderedTodoItem(a, todos)}
    </ul>
  `;
};

function renderedTodoItem(a: string, todos: Array<Todo>): string {
  for (let item of todos) {
    a += '<li>' + item.content + '</li>';
    let [popped, ...remainder] = todos;
    return renderedTodoItem(a, remainder);
  }
  // if (todos.length === 0) {
  //   return a;
  // }
  // let [popped, ...remainder] = todos;
  // a += '<li>' + popped.content + '</li>';
  // return renderedTodoItem(a, remainder);
  return a;
}

let render = () => {
  if (document.body !== null) {
    document.body.innerHTML =
      renderTodoList && renderTodoList(todos);
  }
};

export default render;
