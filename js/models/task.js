// Task Model

class Task {
  constructor(list, description, priority){
    this.list = list
    this.description = description
    this.priority = priority
    this.list.tasks.push(this)
  }
}
