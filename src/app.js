import React from 'react';
import ReactDom from 'react-dom';
import Component1 from './components/componet';
import Component2 from './components/component2';
import Component3 from './components/component3';
import Card from './components/card'; 
import Component4 from './components/component4';
import Component6 from './components/component6';
import Component7 from './components/comonent7';


const App =()=>{
    return(
        <div>
            {/* <h1>hsh</h1> */}
            <Component1></Component1>
           
          <Component2></Component2> 
            <Card> <Component3></Component3> </Card>
            <Card> <Component4></Component4></Card>
            <Card> <Component6></Component6></Card>
             <Component7></Component7>
        </div>

    )
}

export default App;