function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
   if(this.marks === undefined){
     this.marks = [mark];
   } else {
     this.marks.push(mark);
   }
}

Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined){
     this.marks = [...mark];
   } else {
     this.marks = this.marks.concat(...mark);
   }
}

Student.prototype.getAverage = function () {
  if (this.marks != undefined) {
    return this.marks.reduce((a, b) => (a + b)) / this.marks.length;
  }
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

