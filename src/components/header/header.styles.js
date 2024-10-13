import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONTS } from '../../styles/fonts';

const StyledHeader = styled.header`
	padding: 2.5rem 2.5rem 4.75rem;
	text-align: center;
	font-size: 0.9375rem;
	line-height: 1.5625rem;
	color: ${COLORS.darkBlue};

	@media screen and (width>768px) {
		width: 37rem;
		margin-inline: auto;
	}
`;

const StyledLightTitle = styled.h2`
	margin-block: 0 0.5rem;
	font-size: ${FONTS.fontM};
	font-weight: ${FONTS.fontLight};
`;

const StyledBoldTitle = styled.h2`
	margin-block: 0 0.5rem;
	font-size: ${FONTS.fontM};
	font-weight: ${FONTS.fontBold};
`;

const StyledText = styled.p`
	font-size: ${FONTS.fontXS};
	opacity: 0.5;
`;

export { StyledHeader, StyledLightTitle, StyledBoldTitle, StyledText };
