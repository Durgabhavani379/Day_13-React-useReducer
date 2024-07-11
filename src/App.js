import React,{useReducer} from 'react';

const render=()=>{

}

const App = () => {
  const initialState={
  data:[
    {
      id:"eygyegfe",
      firstname:"durga",
      email:"vdurgabhavani379@gmail.com"
    },
    {
       id:"eygyegfe1",
      firstname:"durga1",
      email:"vdurgabhavani379@gmail.com"
      
    }
  ]
  }
 const [state,dispatch] = useReducer(render,initialState);
  return (
    <div>
     {
      state.data.map((eachObj)=>{
        const{id,firstname,email} = eachObj;
          return <div key={id}>
            <h1>{firstname}</h1>
            <h2>{email}</h2>
            <button>delete</button>
          </div>
      })
     }
    </div>
  );
};

export default App;