import React from 'react';
import {Card} from './../card/card.component'
import './card-list.styles.css'




// Functional componsnts recives props
//props children are what are in betweens this component <CardList>Luke Skywalker </CardList>
export const CardList = (props) => {
return (
    <div className='card-list'>
         {
            props.monsters.map(mon => 
                <Card key={mon.id}  monster={mon} />
        )}
    </div>
);
};