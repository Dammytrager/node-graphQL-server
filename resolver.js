const db = require('./db')
const Query = {
  test: () => 'Test Success, GraphQL server is up & running !!',
  students: () => db.students.list(),
  studentById: (root, args, context, info) => {
    return db.students.get(args.id);
  },
  colleges: () => db.colleges.list(),
  primaryColor: (root, args) => `The color selected is ${args.color}`
}

const Student = {
  fullName: (root, args, context, info) => `${root.firstName} ${root.lastName}`,
  college: (root) => db.colleges.get(root.collegeId)
}

const Mutation = {
  createStudent: (root, args) => {
    const id = db.students.create({...args})
    return db.students.get(id)
  }
}

module.exports = { Query, Student, Mutation }