import {
	StyledBoldTitle,
	StyledHeader,
	StyledLightTitle,
	StyledText
} from './header.styles';

const Header = () => {
	return (
		<StyledHeader>
			<StyledLightTitle>Reliable, efficient delivery</StyledLightTitle>
			<StyledBoldTitle>Powered by Technology</StyledBoldTitle>
			<StyledText>
				Our Artificial Intelligence powered tools use millions of project data
				points to ensure that your project is successful
			</StyledText>
		</StyledHeader>
	);
};

export default Header;
