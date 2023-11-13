// import React from "react";
// const Child=({childern})=>{
//     return(
//         <>
//         <h1>i am a child class</h1>
//         <p>{childern}</p>
//         </>
//     )
// }
// export default Child

//defult prpos
import React from "react";
const Child=(props)=>{
    return(
        <>
        <h1>hello {props.name}</h1>
        <p>my age is {props.age}</p>
        <p>i am from {props.place}</p>
        </>
    )
}
Child.defaultProps={
    age:22,
    place:"hyd"
}
export default Child
