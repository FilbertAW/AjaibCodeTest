###

This project was created with assumption that I only need to meet all the functionality requirements. The gender filter and search function cannot be used at the same time and all the function was independent, and only accessing available endpoint which will not created the best UX but will meet all the requirements. For example I was not defining any seed because it will cause a bug if we also want a spesific gender at the same time, this will make us get a different data everytime we hit the endpoint.

###

============================QUESTION=================================

1. Explain how Object Oriented Programming works with a thorough understanding of the keyword this
   and the new keyword
2. What is the new class syntax and how to create instance methods, class methods?
3. Give an example of how to implement inheritance in ES2015 using extends and super
4. Imagine refactoring an ES5 application to use ES2015, how would you go about it?
5. Give an example of how you structure applications with design patterns using closure and modules
6. What are your preferred ways of testing your web application?
7. Which web server do you use? Why? Explain pros and cons of your choice.
8. What is your preferred production deployment process?
9. Give an example of clean README.md documentation.

============================ANSWER=================================

1. Object Oriented Programming is a way of programming that relies on structuring the program into pieces that we usually called classes and objects to make it reuseable. To access this classes or objects, OOP have "this" method that was bind into classes that used for accessing the data that are stored in the classes or objects. While "new" is used to create or initialze the classes.

2. I assume that by new class syntax we are discussing about the ES6 way to create an actual class like other OOP languange. for example we can do this

```
//class syntax
    class User {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        print() {
            console.log(`${this.name} has an age of
            ${this.age} and gender of ${this.gender}`);
        }
    }
//instance method
    const Roy = new User('Roy', '19', 'Male');
    Roy.print();
```

instead of functional class like ES5

```
function Greetings(greeting, name) {
  return greeting name
}

Greetings('Hello','World')
```

3.

```
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
}

class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log('flying');
    }
}
let bird = new Bird(2);
bird.walk();
bird.fly();
```

4. First of all is changing the way to write the function from traditional function into an arrow function. While we go through each file, we need to change how we declare the variable from using var to either using let or const and how we export and importing the modules. When we finish on the model of our code, we need to get into the function to simplify how we do things for example using spread operator and de-structuring objects that is new in the ES6, and also we could simplify the loop process of by using for ... of, and there's more new features that can be used to simplify the existing function. About the classes, es6 and es5 have a lot of difference about "classes" since javascript don't have class before so we just use function to declare "class" and changing from using function to class might not be that worth it, since functiion is still valid to use in the ES6

5. The important thing about closure and modules design pattern is to have a private and public variable or function that can be reveal by the modules later. By this method I would separate all the big component into each small component and make it independent. In this way we can limit which part of the component we want the user to see and could be access by the other component outside of the scope and the other private part that we want to keep it only for that component. For example if we want to have a sorting function, we would want to give public access to our result which is the one that we return but not the way we do the sorting itself.
   example:

```
const Sorting (arr)=>{
  //sorting function
  let result = arr.sort()

  return result
}

console.log(Sorting([1,2]))
```

If this was the case, we could keep the function as we want and only give access to the result of our function so the user or others couldn't mess with our sorting function.

6. My preferred ways to test my web application is the functionality test and usability testing and compatibility testing.

7. Haven't really have much experience on this, but from what i learned is that nginx is probably one of the most used web server because of the high performance, low memory consumption, and it's free and open source. The cons of the nginx is the lacks of modules.

8. Development, testing, fixing, staging monitoring, production deployment

9.Clear README.md should only consist of the purpose of the project, how to install, and where to contact or find a solution and documentation for the project itself. (definitely not this one where it was supposed to be the example)
