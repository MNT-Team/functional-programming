```javascript
function isReviewTask(task) {
  return task.type === 'RE';
}
function toTaskViewModel(task) {
  return {id: task.id, desc: task.name};
}
const tasks = [
  { id: 1, name: 'task 1', type: 'NC', content: 'new task'},
  { id: 2, name: 'task 2', type: 'RE', content: 'review task'},
  { id: 3, name: 'task 3', type: 'RD', content: '.....'},
]
var filteredTasks = tasks.filter(isReviewTask)
						 .map(toTaskViewModel);
```

> `[{id: 2, desc: 'task 2'}]`

