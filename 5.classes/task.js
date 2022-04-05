// Задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      this.state = this.state * 1.5;
    }
  
    set state(value) {
      if (value < 0) {
        this._state = 0;
      } else if (value > 100) {
        this._state = 100;
      } else {
        this._state = value;
      }
    }
  
    get state() {
      return this._state;
    }
  }
  
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
  }
  
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }
  
  
  // Задача 2
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      for (let book of this.books) {
        if (book[type] === value) {
          return book;
        }
      }
      return null;
    }
  
    giveBookByName(bookName) {
      let givenBook = this.findBookBy("name", bookName);
      let index = this.books.indexOf(givenBook);
      if (index > -1) {
         this.books.splice(index, 1);
      }
      return givenBook;
    }
  }
  
  
  // Проверки
  const library = new Library("Библиотека имени Ленина");
  
  const book1 = new NovelBook("Герман Гессе", "Демиан", 1919, 224);
  
  library.addBook(book1);
  
  library.addBook(
    new DetectiveBook(
      "Артур Конан Дойл",
      "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
      2019,
      1008
    )
  );
  
  library.addBook(
    new FantasticBook(
      "Аркадий и Борис Стругацкие",
      "Пикник на обочине",
      1972,
      168
    )
  );
  
  library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
  
  library.addBook(new Magazine("Мурзилка", 1924, 60));
  
  console.log(library.findBookBy("releaseDate", 1919));
  
  library.giveBookByName("Демиан");
  
  book1.state = 30;
  
  book1.fix();
  
  library.addBook(book1)
  
  console.log(library.books);
  

  
  // Задача 3
  class Student {
    constructor(name) {
      this.name = name;
    }
  
  
    addMark(mark, subjectName) {
      
      function Subject(subjectName) {
        this.subjectName = subjectName;
        this.marks = [];
      }
      
      if (mark < 1 || mark > 5) {
        console.log("Ошибка, оценка должна быть числом от 1 до 5")
      }
      if(this.subjects === undefined) {
        this.subjects = [new Subject(subjectName)];
      }
      if(this.subjects.find(item => item.subjectName === subjectName) === undefined) {
        this.subjects.push(new Subject(subjectName));
      }
      
      this.subjects
        .find(item => item.subjectName === subjectName).marks.push(mark);
    }
  
    getAverageBySubject(subjectName) {
      let subject = this.subjects.find(item => item.subjectName === subjectName);
      if (subject === undefined) {
        console.log("Несуществующий предмет");
      }
      let avgSubject = subject.marks.reduce((a, b) => (a + b) / subject.marks.length);
      console.log(`Средний балл по предмету ${subject.subjectName} ${avgSubject}`);
      return avgSubject;
    }
  
    getAverage() {
      let sumOfMarksAllSubjectsArr = this.subjects.map(item => item.marks.reduce((a, b) => (a + b)));
      let amountOfMarks = this.subjects.reduce((acc, item, idx, arr) => { return acc + item.marks.length }, 0);
      let avg = sumOfMarksAllSubjectsArr.reduce((a, b) => (a + b) / amountOfMarks);
      console.log(`Средний балл по всем предметам ${avg}`);
      return avg;
    }
  
  
    exclude(reason) {
      delete this.subjects;
      this.excluded = reason;
      }
  }
  
  // Проверки
  const student = new Student("Олег Никифоров");
  
  // student.addMark(5, "algebra");
  // student.addMark(5, "algebra");
  // student.addMark(5, "geometry");
  // student.addMark(4, "geometry");
  
  // student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
  
  // student.getAverageBySubject("biology"); // Несуществующий предмет

  // student.getAverage(); // Средний балл по всем предметам 4.75

  // student.exclude("Исключен за попытку подделать оценки");
  // console.log(student);


// // Средняя оценка по algebra
// student.addMark(3, "algebra");
// student.addMark(5, "algebra");
// student.getAverageBySubject("algebra");

// Средняя оценка по всем предметам
student.addMark(3, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "history");
student.addMark(5, "history");
student.getAverage();

  
  
  
  
  
  
  
  
  
  