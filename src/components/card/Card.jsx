import {
	StyledCard,
	StyledCardIcon,
	StyledCardText,
	StyledCardTitle
} from './card.styles';

const Card = ({ title, text, icon, color }) => {
	return (
		<StyledCard $color={color}>
			<StyledCardTitle>{title}</StyledCardTitle>
			<StyledCardText>{text}</StyledCardText>
			<StyledCardIcon src={icon} alt={`${title} icon`} />
		</StyledCard>
	);
};

export default Card;
