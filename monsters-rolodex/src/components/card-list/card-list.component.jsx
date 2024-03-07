import { Component } from "react";

class CardList extends Component{
    render(){
        const { monsters } = this.props;
        console.log('render from cardList');
        return (

         <div className = "card-list">
            {
                monsters
                .map((monster) => {

                    return  <div key = {monster.id} className = "card-container">
                                <h1> {monster.name} </h1>
                            </div>
                })
            }
        </div>
        );
    
        // we must have only one parent/top level html component
    }
}

export default CardList;