import { useState } from 'react';
import { seats } from '../../assets/seat';
import * as S from '../styled';
import { ERoleType, ESize, ISeat } from '../interface';
import EmptyImage from '../../assets/images/basic.png';

function SeatController({ member }: { member: ISeat }) {
	if (member.part === ERoleType.Other) {
		return (
			<S.SeatBox size={ESize.Large} role={member.part}>
				<span>{member.label}</span>
			</S.SeatBox>
		);
	} else if (member.part === ERoleType.Empty) {
		return (
			<S.SeatBox size={ESize.Large} role={member.part}>
				<span>{member.label}</span>
			</S.SeatBox>
		);
	} else {
		return (
			<S.SeatBox
				size={ESize.Large}
				isNew={member.imageUrl.length === 0}
				onClick={() => window.open(member.page)}
			>
				<S.Image size={ESize.Large} isNew={member.imageUrl.length === 0}>
					<img src={member.imageUrl.length === 0 ? EmptyImage : member.imageUrl} />
				</S.Image>
				<S.Info>
					<S.Role size={ESize.Large} role={member.part}>
						{member.label}
					</S.Role>
					<S.Name size={ESize.Large} className="name">
						{member.name} <span>{member.position}</span>
					</S.Name>
				</S.Info>
			</S.SeatBox>
		);
	}
}

function Seat() {
	const [seatArr] = useState<{ [key: string]: ISeat[] }>(seats.seatInfo);

	return (
		<S.Seats>
			{Object.values(seatArr).map((obj, index) => {
				return (
					<S.SeatBoxWrap addMargin={index % 2 === 1}>
						{obj.map(member => {
							return <SeatController member={member} />;
						})}
					</S.SeatBoxWrap>
				);
			})}
		</S.Seats>
	);
}

export default Seat;
