import React from 'react';




// Functional componsnts recives props
//props children are what are in betweens this component <CardList>Luke Skywalker </CardList>
export const CardList = (props) => {
console.log(props);
return (<div><h1>{props.children}</h1> </div>)
};