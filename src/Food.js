import React from 'react';

class Food extends React.Component
{
    constructor(props)
    {
        super();
        this.state={

            data:[],
            searchedFood:[],
            obj:{
                name:"-",
                count:0,
                charcter:"-",
                homes:0
            }

        }

    }

    componentDidMount()
    {
        
        fetch('http://localhost:3001/food').then((res)=>res.json()).then(data=>{
          this.setState({data:data.items})
        }
        )
    }

   

    handleChagne=(e)=>{

    
     if(e.target.value!=="")
     {
        var finalarray= this.state.data.filter((food,index)=>{
            return(
                food.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
         })
         this.setState({searchedFood:finalarray})
     }
     else{
        this.setState({searchedFood:[]})
     }
    }
  
    selectFood=(food)=>{
        
            console.log("FOOOOOD is",food);

            this.setState({obj:food})
    }
    render()
    {
       console.log("Object.name is ",this.state.obj.name);
        return(
            <div className="container">
                <h3>This is FOOD Component</h3>
                <input type="text" className="form-control"  placeholder="Enter Food Name" onChange={this.handleChagne}/>
    
               
             
                {
                    this.state.searchedFood!==0?this.state.searchedFood.map((item)=>{
                        return(
                            <div key={item.key}>
                            {
                                item.name
                            }
                            <button onClick={ ()=>{
                                this.selectFood(item)
                            }
                               
                            }>Select</button>
                            </div>
                        )
                    }): <p>Loading..... </p>

                }

                <div className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Count</th>
                                <th>Character</th>
                                <th>Homes</th>
                                
                            </tr>
                        </thead>
                             <tbody>
                                 <tr>
                                      <td>{this.state.obj.name}</td>
                                      <td>{this.state.obj.count}</td>
                                      <td>{this.state.obj.charcter}</td>
                                      <td>{this.state.obj.homes}</td>
                                     </tr>
                            </tbody>

                    </div>
             
             </div>    
        )
    }
}

export default Food;