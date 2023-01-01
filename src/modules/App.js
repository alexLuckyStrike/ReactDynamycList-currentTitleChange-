    import React from "react";

    import {Component} from 'react';

    import {render} from 'react-dom';

    import Car from "./Car/Car";

    export default class App extends Component{

    state = {
        
        cars:[
            
            {name:'Ford',year:2015},
            
            {name:'Mazda',year:2016},
            
            {name:'Acura',year:2017}
            
        ],
        
        pageTitle:'ReactComponent',

        showCars:false
    }

    changeTitleHandler = (newTitle) => {

        this.setState({

            pageTitle:newTitle

        })

    }

    changeInputHandler = (e) => {

        this.setState({

            pageTitle: e.target.value

        })

    }


    toggleCarsHandler = () => {

        this.setState({

            showCars: !this.state.showCars

        })
    }


        changeLocalNameHandler(e,index){

        e.preventDefault();

        let c = document.querySelectorAll('.text')

        this.setState({

         pageTitle:c[index].value

        })

            c[index].value = ''

        }

    render(){

        const divStyle = {

            minWidth:'300px',

            minHeight:'150px',

            boxShadow:'0 0 2px 2px black',

            margin:'auto'
        }



        let cars = null;

        if(this.state.showCars){

            cars = this.state.cars.map((item,index) => {

                    return(

                        <Car

                            key = {index}

                            name = {item.name}

                            year = {item.year}

                            onChangeTitle = {() => this.changeTitleHandler(item.name)}

                            onToggle = {(e) => this.changeLocalNameHandler(e,index)}

                        />

                    )

                })
            }

        return(

               <div style={divStyle}>

               <h1 style={{textAlign:'center'}}>{this.state.pageTitle}</h1>

               <div style={{ width:'20%', margin:'auto'}}>

               <input type="text" onChange={this.changeInputHandler} />

               <button onClick={this.changeTitleHandler.bind(this,'Changed')}>Change title</button>

               </div>

                <button onClick={this.toggleCarsHandler} style={{display:'block',margin:'20px auto 0'}}>Toggle cars</button>
                   {cars}
           </div>
        )
    }
}