import styled from 'styled-components';

const StyledCards = styled.div`
	padding: 0 2rem 1.5625rem;

	@media screen and (width>768px) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 110px);
		gap: 30px;
		width: 1110px;
		margin-inline: auto;
	}
`;

export { StyledCards };
