// // List Model

listIDAssigner = 0

class List{
  constructor(title){
    this.title = title
    this.tasks = []
    this.id = ++listIDAssigner
    List.all.push(this)
  }

  static find(id){
    return List.all.filter(function(list){
      return list.id === parseInt(id)
    })
  }

  static findByTitle(title){
    return List.all.filter(function(list){
      return list.title === title
    })
  }
  static delete(id){
    List.all = List.all.filter(function(list){
      return list.id !== id
    })
  }
}
List.all = []

// store = {lists: [], tasks: []}
//
// listCount = 0
//
// class List {
//   constructor(title) {
//     this.id = ++listCount
//     this.title = title
//     this.tasks = []
//     store.lists.push(this)
//
//      static all() {
//        store.lists
//      };
//
//      static find(id) {
//        List.filter((list) => {return list.id === id})
//      };
//
//      static find(id) {
//        let test = List.all.map(function(list){
//          if (list.id === id) {
//            return list
//          }
//        })
//        return test[0]
//      }
//
//      tasks() {
//        return store.tasks.filter((task) => {return task.listId === this.id})
//      }
//   }
// };
//
//
//
// // List.all = []
// //
// // newList = {
// //   this.title = 'groceries'
// //   this.tasks = []
// // }
// //
// // let newTask = new Task(description, list)
// //   List.all.find().tasks.push(this)
// //   Task.all.push(this)
// //
// // Task.all
//
// //////////////////// Example:
// // function createTeacher() {
// //   let teachersCount = 0
// //
// //   return class Teacher {
// //     constructor(name) {
// //       this.id = ++teachersCount
// //       this.name = name
// //       stores.teachers.push(this)
// //     }
// //     static find(id) {
// //       store.teachers.filter((teacher) => {return teacher.id === id})
// //     }
// //     courses() {
// //       // go to the store
// //       // find the list of courses that has relevant teacherId
// //       // use arrow function to maintain scope for 'this.id'; i.e.
// //       // so that 'this' still refers to the teacher on which we
// //       // are calling this method
// //       return store.courses.filter((course) => {
// //         return course.teacherId === this.id
// //       })
// //     }
// //   };
// // };
// //
// // let teacher = createTeacher()
// // new teacher('bob')
// //
// // function createCourse() {
// //   let coursesCount = 0
// //   return class Course {
// //     constructor(name, teacher) {
// //       this.name = name;
// //       this.id = ++coursesCount
// //       this.teacher_Id = teacher.id
// //     }
// //   }
// // }
// //
// // let course = createCourse()
