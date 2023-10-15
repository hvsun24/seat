import styled, { css } from 'styled-components';
import { ERoleType } from './interface';

export const RoleTheme: { [key in ERoleType]: { color: string; backgroundColor: string } } = {
	[ERoleType.Empty]: {
		color: '#f77',
		backgroundColor: '#ffefef',
	},
	[ERoleType.Other]: {
		color: '#f77',
		backgroundColor: '#ffefef',
	},
	[ERoleType.Design]: {
		color: '#f77',
		backgroundColor: '#ffefef',
	},
	[ERoleType.Plan]: {
		color: '#f98537',
		backgroundColor: '#ffecce',
	},
	[ERoleType.Backend]: {
		color: '#8679db',
		backgroundColor: '#f0ebff',
	},
	[ERoleType.Frontend]: {
		color: '#49a5d3',
		backgroundColor: '#e8fcff',
	},
};

export const Seats = styled.div`
	@font-face {
		font-family: 'GmarketSansMedium';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff')
			format('woff');
		font-weight: normal;
		font-style: normal;
	}

	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 80px;
	height: 100vh;
	flex-wrap: wrap;
	margin: 0 auto;
	background-color: #f2f2f2;
	position: relative;
	gap: 7px;

	/* click 막기 */
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;

export const SeatBoxWrap = styled.div<{ addMargin: Boolean }>`
	display: flex;
	justify-content: flex-end;
	flex-wrap: wrap;
	gap: 7px;

	${({ addMargin }) =>
		addMargin &&
		css`
			margin-top: 20px;
		`}
`;

export const SeatBox = styled.div<{ role?: ERoleType; isNew?: boolean }>`
	position: relative;
	display: flex;
	align-items: center;
	width: 170px;
	height: 72px;
	background-color: white;
	border-radius: 10px;
	box-shadow: 0 8px 11px -2px rgb(229 229 229);
	cursor: pointer;
	column-gap: 3px;

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
		if (role === ERoleType.Empty) {
			return css`
				justify-content: center;
				pointer-events: none;

				span {
					display: block;
					color: #e4e4e4;
				}
			`;
		} else if (role === ERoleType.Other) {
			return css`
				justify-content: center;
				background-color: rgba(255, 255, 255, 0.3);
				border: 3px solid white;
				box-sizing: border-box;
				pointer-events: none;

				span {
					display: block;
					color: #d7d7d7;
				}
			`;
		}
	}}
`;

export const Image = styled.div<{ isNew?: boolean }>`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin-left: 12px;

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
`;

export const Info = styled.div`
	flex: 1;
`;

export const Role = styled.span<{ role: ERoleType }>`
	display: inline-block;
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
`;

export const Name = styled.span`
	display: block;
	font-family: 'GmarketSansMedium';
	font-size: 16px;
	color: #2f2f2f;
	line-height: 20px;
	letter-spacing: -0.5px;

	> span {
		font-size: 12px;
	}
`;

// export const Info = styled.div``
