import styled, { css } from 'styled-components';
import { ESize, ETotalRoleType } from '../interface';
import { RoleTheme } from './totalSeat';

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

export const RoomWrap = styled.div<{ width?: number; vertical?: boolean }>`
	display: flex;

	${({ width }) =>
		width &&
		css`
			width: ${width}px;
		`}

	${({ vertical }) =>
		vertical &&
		css`
			flex-flow: column;
		`}
`;

export const Empty = styled.div`
	width: 100%;
	height: 100px;
`;

export const Room = styled.div<{
	width?: number;
	height?: number;
	margin?: string;
	absolute?: boolean;
	coordinate?: { top: any; left: any; right: any; bottom: any };
}>`
	width: 100%;
	height: 106px;
	//border-radius: 14px;
	justify-content: center;
	background-color: rgba(255, 255, 255, 0.3);
	border: 3px solid white;
	box-sizing: border-box;
	pointer-events: none;

	> span {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 15px;
		letter-spacing: -0.2px;
		color: #b6b6b6;
		height: 100%;
	}

	${({ margin }) =>
		margin &&
		css`
			margin: ${margin};
		`}

	${({ width }) =>
		width &&
		css`
			width: ${width}px;
		`}

  ${({ height }) =>
		height &&
		css`
			height: ${height}px;
		`}

  ${({ coordinate }) =>
		coordinate &&
		css`
			position: absolute;
			top: ${coordinate.top}px;
			left: ${coordinate.left}px;
			right: ${coordinate.right}px;
			bottom: ${coordinate.bottom}px;
		`}
`;

export const RightSeats = styled.div<{ type?: string }>`
	position: relative;
	height: 802px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Seats = styled.div<{ type?: string }>`
	display: flex;
	gap: 1px;

	${({ type }) => {
		if (type === 'left') {
			return css`
				flex-direction: column;
				//row-gap: 7px;

				> div {
					display: flex;
					gap: 1px;
				}
			`;
		}
	}};
`;

export const SeatBoxWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	gap: 1px;
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
	//box-shadow:
	//	rgba(0, 0, 0, 0.05) 0px 0px 5px 0px,
	//	rgba(0, 0, 0, 0.05) 0px 0px 1px 0px;
	cursor: pointer;
	column-gap: 5px;

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
				transition: 0.1s background-color ease-in;

				&:hover {
					background-color: ${RoleTheme[role].backgroundColor};
				}

				// color: ${RoleTheme[role].color};
				//border: 3px solid #fff;
				//border: 3px solid ${RoleTheme[role].backgroundColor};
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
	margin: 0 7px 0 12px;

	${({ isNew }) =>
		isNew &&
		css`
			width: 43px;
			height: 43px;
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

export const legendWrap = styled.div`
	position: absolute;
	right: 0;
	display: flex;
	flex-flow: column;
	row-gap: 8px;
	background-color: #fff;
	padding: 18px 20px;
	border: 1px solid #e8e8e8;
`;

export const legend = styled.div<{ color: string; borderColor: string }>`
	> span {
		display: flex;
		font-size: 13px;
		letter-spacing: -0.2px;
		color: #717171;

		> span {
			display: inline-block;
			width: 15px;
			height: 15px;
			border-radius: 50%;
			margin-right: 6px;

			${({ borderColor }) => {
				return css`
					border: 4px solid ${borderColor};
				`;
			}};

			${({ color }) => {
				return css`
					color: ${color};
				`;
			}};
		}
	}
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
