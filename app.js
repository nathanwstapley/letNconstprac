//old code:

//var PI = 3.14;
//PI = 42; // stop me from doing this!

//correct new ES2015 code:

const PI = 3.14;

// PI = 42;
// now the variable PI cannot be redeclared or redefined to anything other than its initial value, which is good bc 
// we want it to stay constant anytime we need to use it for a calculation

/*

- What is the difference between ***var*** and ***let***?
    Var can be redeclared and redefined and it is global access anywhere,
    let can be redefined, but never redeclared and it has block scope access

- What is the difference between **var** and ***const***?
    Var can be redeclared and redefined and it is global access anywhere,
    const can not be redeclared or redefined and it has block scope access
    const and let can update reference types like arrays and objects.

- What is the difference between **let** and **const**?
    let can be redefined and const cannot, 

- What is hoisting?
    basically, if a variable is declared anywhere in your code, javascript "moves" (even thought it may not physically be moved)
    the declaration to the top of the code, but it doesnt initialize it.
*/