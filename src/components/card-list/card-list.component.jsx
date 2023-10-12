import Card from '../card/card.component';
import './card-list.styles.css';
import PropTypes from 'prop-types';

const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);
CardList.propTypes = {
  monsters: <PropTypes className="ob"></PropTypes>,
  
};
export default CardList;