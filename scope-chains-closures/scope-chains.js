function foo() {
  var bar;
  //bar is lexically scoped to this function, foo

  function zip() {
    var quux;
    //quux is lexically scoped to the function zip
  }
  //zip is lexically scoped to the function foo
}

