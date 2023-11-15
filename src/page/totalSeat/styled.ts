import styled, { css } from 'styled-components';
import { ESize, ETotalRoleType } from '../interface';

export const RoleTheme: { [key in ETotalRoleType]: { color: string; backgroundColor: string } } = {
	[ETotalRoleType.사업본부]: {
		color: '#f77',
		backgroundColor: '#ffefef',
	},
	[ETotalRoleType.고객경험부문]: {
		color: '#f77',
		backgroundColor: '#ffefef',
	},
	[ETotalRoleType.알앤디부문]: {
		color: '#f98537',
		backgroundColor: '#fff5e4',
	},
	[ETotalRoleType.마케팅부문]: {
		color: '#8679db',
		backgroundColor: '#f0ebff',
	},
	[ETotalRoleType.경영관리부문]: {
		color: '#f77',
		backgroundColor: '#fff5f6',
	},
	[ETotalRoleType.컨시어지사업부]: {
		color: '#49a5d3',
		backgroundColor: '#effafc',
	},
	[ETotalRoleType.공석]: {
		color: '#49a5d3',
		backgroundColor: '#e8fcff',
	},
};

export const SeatsWrap = styled.div`
	@font-face {
		font-family: 'GmarketSansMedium';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff')
			format('woff');
		font-weight: normal;
		font-style: normal;
	}

	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	margin: 0 auto;
	background-color: #f2f2f2;
	position: relative;
	gap: 30px;
	overflow: scroll;

	/* click 막기 */
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;

export const RoomWrap = styled.div`
	display: flex;
	gap: 10px;
`;

export const Room = styled.div<{ height?: number }>`
	width: 100%;
	height: 110px;
	border-radius: 14px;
	justify-content: center;
	background-color: rgba(255, 255, 255, 0.3);
	border: 3px solid white;
	box-sizing: border-box;
	pointer-events: none;

	> span {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14px;
		letter-spacing: -0.2px;
		color: #bebebe;
	}

	${({ height }) =>
		height &&
		css`
			height: ${height}px;
		`}
`;

export const RightSeats = styled.div<{ type?: string }>`
	height: 850px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Seats = styled.div<{ type?: string }>`
	display: flex;
	gap: 3px;

	${({ type }) => {
		if (type === 'left') {
			return css`
				flex-direction: column;
				row-gap: 7px;

				> div {
					display: flex;
					column-gap: 3px;
				}
			`;
		}
	}}
`;

export const SeatBoxWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	gap: 5px;
`;

export const SeatBox = styled.div<{
	role: ETotalRoleType;
	isNew?: boolean;
	size: ESize;
	addMargin?: Boolean;
}>`
	position: relative;
	display: flex;
	align-items: center;
	width: 170px;
	height: 72px;
	background-color: white;
	border-radius: 10px;
	box-shadow:
		rgba(0, 0, 0, 0.05) 0px 0px 5px 0px,
		rgba(0, 0, 0, 0.05) 0px 0px 1px 0px;
	cursor: pointer;
	column-gap: 5px;

	&:hover {
		transform: rotate(-3deg);

		${({ isNew }) =>
			isNew &&
			css`
				&:before {
					content: '인터뷰를 등록해주세요👏🏻\\A클릭 시 페이지로 이동합니다 :)';
					white-space: pre;
					pointer-events: none;
					line-height: 18px;
					background-color: #ffe86a;
					width: 160px;
					display: block;
					position: absolute;
					font-size: 14px;
					padding: 12px 16px;
					border-radius: 10px;
					letter-spacing: -0.5px;
					color: #424242;
					text-align: center;
					top: -54px;
					right: -1px;
					transform: rotate(3deg);
				}

				&:after {
					position: absolute;
					transform: rotate(-45deg);
					content: '';
					width: 13px;
					background-color: #ffe86a;
					top: -2px;
					height: 18px;
					right: 34px;
				}
			`}
	}

	${({ role }) => {
		if (role === ETotalRoleType.공석) {
			return css`
				justify-content: center;
				pointer-events: none;

				span {
					font-size: 14px;
					display: block;
					color: #e4e4e4;
				}
			`;

			// return css`
			// 	justify-content: center;
			// 	background-color: rgba(255, 255, 255, 0.3);
			// 	border: 3px solid white;
			// 	box-sizing: border-box;
			// 	pointer-events: none;
			//
			// 	span {
			// 		font-size: 14px;
			// 		display: block;
			// 		color: #d7d7d7;
			// 	}
			// `;
		} else {
			return css`
				// color: ${RoleTheme[role].color};
				//border: 3px solid #fff;
				border: 3px solid ${RoleTheme[role].backgroundColor};
				//background-color: ${RoleTheme[role].backgroundColor};
			`;
		}
	}}

	${({ size }) => {
		if (size === ESize.Small) {
			return css`
				width: 110px;
				height: 50px;
			`;
		}
	}}

  ${({ addMargin }) =>
		addMargin &&
		css`
			margin-top: 20px;
		`}
`;

export const Image = styled.div<{ isNew?: boolean; size: ESize }>`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin-left: 5px;

	${({ isNew }) =>
		isNew &&
		css`
			width: 43px;
			height: 43px;
			margin: 0 7px 0 12px;
		`}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	${({ size }) => {
		if (size === ESize.Small) {
			return css`
				width: 35px;
				height: 35px;
			`;
		}
	}}
`;

export const Info = styled.div`
	flex: 1;
`;

export const Role = styled.span<{ role: ETotalRoleType; size: ESize }>`
	display: flex;
	font-weight: bold;
	font-size: 12px;
	background-color: #f0ebff;
	color: #8679db;
	line-height: 13px;
	margin-bottom: 6px;
	border-radius: 3px;

	${({ role }) => {
		return css`
			color: ${RoleTheme[role].color};
			background-color: ${RoleTheme[role].backgroundColor};
		`;
	}}

	${({ size }) => {
		if (size === ESize.Small) {
			return css`
				font-size: 9px;
				margin-bottom: 2px;
			`;
		}
	}}
`;

export const Name = styled.span<{ role: ETotalRoleType; size: ESize }>`
	font-family: 'GmarketSansMedium';
	font-size: 16px;
	color: #2f2f2f;
	line-height: 20px;
	letter-spacing: -0.5px;

	> span {
		display: block;
		margin-top: 2px;
		font-size: 12px;
		line-height: 14px;
	}

	${({ size }) => {
		if (size === ESize.Small) {
			return css`
				font-size: 13px;
				line-height: 16px;

				> span {
					font-size: 10px;
					padding-left: 2px;
					color: black;
				}
			`;
		}
	}}

	${({ role }) => {
		return css`
			color: ${RoleTheme[role].color};
			background-color: ${RoleTheme[role].backgroundColor};
		`;
	}}
`;
