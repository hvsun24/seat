import { useState } from 'react';
import { seats } from '../assets/seat';
import * as S from './styled';
import { ERoleType, ISeat } from './interface';
import EmptyImage from '../assets/images/basic.png';

function SeatController({ member }: { member: ISeat }) {
	if (member.part === ERoleType.Other) {
		return (
			<S.SeatBox role={member.part}>
				<span>{member.label}</span>
			</S.SeatBox>
		);
	} else if (member.part === ERoleType.Empty) {
		return (
			<S.SeatBox role={member.part}>
				<span>{member.label}</span>
			</S.SeatBox>
		);
	} else {
		return (
			<S.SeatBox isNew={member.web.length === 0} onClick={() => window.open(member.page)}>
				<S.Image isNew={member.web.length === 0}>
					<img src={member.web.length === 0 ? EmptyImage : member.web} />
				</S.Image>
				<S.Info>
					<S.Role role={member.part}>{member.label}</S.Role>
					<S.Name className="name">
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
			{Object.values(seatArr).map(obj => {
				return (
					<S.SeatBoxWrap>
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
