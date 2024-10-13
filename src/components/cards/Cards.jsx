import { CARD_DATA } from '../../constants/card-data';
import Card from '../card/Card';
import { StyledCards } from './cards.styles';

const Cards = () => {
	return (
		<StyledCards>
			{CARD_DATA.map(card => (
				<Card key={card.id} {...card} />
			))}
		</StyledCards>
	);
};

export default Cards;
