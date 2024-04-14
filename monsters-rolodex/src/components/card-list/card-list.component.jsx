import { Component } from "react";
import './card-list.styles.css';
import Card from '../card/card.component';

class CardList extends Component{
    render(){
        const { monsters } = this.props;
        console.log('render from cardList');
        return (

         <div className = "card-list">
            {
                monsters
                .map((monster) => {
                    return  <Card monster = { monster }/>;
                    
                })
            }
        </div>
        );
    
        // we must have only one parent/top level html component
    }
}

export default CardList;