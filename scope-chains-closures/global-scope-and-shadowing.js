function foo() {
  var bar;
  quux = 'undeclared quux';
  //bar is lexically scoped to this function, foo

  function zip() {
    var quux ='declared quux';
    //quux is lexically scoped to the function zip
  }
  //zip is lexically scoped to the function foo
}

