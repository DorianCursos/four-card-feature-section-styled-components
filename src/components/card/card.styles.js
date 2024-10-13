import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONTS } from '../../styles/fonts';

const StyledCard = styled.div`
	padding: 1.75rem;
	box-shadow: 0 0.9375rem 1.875rem -0.6875rem ${COLORS.shadow};
	margin-bottom: 1.5625rem;
	border-top: 3px solid ${({ $color }) => $color};
	border-radius: 0.5rem;

	@media screen and (width>768px) {
		display: flex;
		flex-direction: column;
		width: 350px;
		height: 250px;
		margin-bottom: 0;
		padding: 2rem;
	}

	&:first-child {
		grid-column: 1;
		grid-row: 2;
	}

	&:nth-child(2),
	&:nth-child(3) {
		grid-column: 2;
	}

	&:nth-child(2) {
		grid-row: 1;
	}

	&:nth-child(3) {
		grid-row: 3;
	}

	&:last-child {
		grid-column: 3;
		grid-row: 2;
	}
`;

const StyledCardTitle = styled.h3`
	margin-block: 0;
	color: ${COLORS.darkBlue};
	font-size: ${FONTS.fontS};
`;

const StyledCardText = styled.p`
	color: ${COLORS.darkBlue};
	font-size: ${FONTS.fontXXS};
	opacity: 0.5;
	line-height: 1.4375rem;
`;

const StyledCardIcon = styled.img`
	width: 3.5625rem;
	margin-left: auto;

	@media screen and (width>768px) {
		width: 4rem;
		margin-top: auto;
	}
`;

export { StyledCard, StyledCardTitle, StyledCardText, StyledCardIcon };
