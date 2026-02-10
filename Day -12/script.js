//  textInput=document . getElementById("my Input" ) ;
// textInput . addEventListener( "change", (event)=>{
// // here event is targeting the entire
// // element object node and event. target is
// // targetting the particular element.
// event . preventDefault ( )
// console. log(event. target.value) ;
const form=document . getElementById("formInput") ;
const textInput=document . getElementById("myInput")
const courseInput=document . getElementById("course")
const output=document . getElementById("output")
form. addEventListener("submit", (event)=>{
    event. preventDefault ( ) ;
    // to get the user input value
    const name=textInput. value
    const course=courseInput . value
    console.log(name) ;
    console.log(course);
    output . innerText=name+ " "+ course

})
