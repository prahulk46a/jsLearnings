function fun1() {
  console.log(this); // {}this will give some obj inside which some properties by default present
  return "This is Normal function";
}
fun1();

const fun2 = () => {
  console.log(this); //{window obj}
  return "This is Arrow Function ";
};
fun2();

// console.log(this); //This by default refers to window object

/* Conclusion:
 *     Regular Function: this depends on how the function is called. In the global context, this refers to the global object (window in browsers).
 *			Arrow Function: this is lexically bound and always refers to the this of the outer (enclosing) scope when the function is created. It doesn't have its own this
 */
