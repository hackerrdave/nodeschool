function foo() {
  var bar;
  quux = 'undeclared quux';
  //bar is lexically scoped to this function, foo

  function zip() {
    var quux ='declared quux';
    //quux is lexically scoped to the function zip

    bar = true;
  }
  //zip is lexically scoped to the function foo
  
  return zip;
  //returns the function zip as the result of invoking foo
}
//Summary: closed over the variable bar inside zip, then returned zip.

