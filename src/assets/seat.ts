import { ERoleType, ISeat } from '../page/interface';

/**
 * name: 이름
 * position: 직급
 * part: 직무 (종류: Design, Backend, Frontend, Plan)
 * label: 직무 이름
 * imageUrl: 이미지 주소
 * page: 인터뷰 주소
 * */
export const seats = {
	seatInfo: {
		'ROW-1': [
			{
				name: '',
				position: '',
				part: ERoleType.Other,
				label: '컨시어지',
				imageUrl: '',
				page: '',
			},
			{
				name: '',
				position: '',
				part: ERoleType.Other,
				label: '컨시어지',
				imageUrl: '',
				page: '',
			},
			{
				name: '',
				position: '',
				part: ERoleType.Other,
				label: '컨시어지',
				imageUrl: '',
				page: '',
			},
			{
				name: '',
				position: '',
				part: ERoleType.Other,
				label: '컨시어지',
				imageUrl: '',
				page: '',
			},
			{
				name: '장이지',
				position: '팀장',
				part: ERoleType.Design,
				label: 'Design',
				imageUrl:
					'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa%2F428f0887-dfa7-4542-8633-ebed6e308880%2FUntitled.png?table=block&id=399cceca-e298-4656-89a7-2986a0f2c4ec&spaceId=1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa&width=840&userId=540037fd-ebf3-4717-baac-c94e2683b611&cache=v2',
				page: 'https://www.notion.so/wefun-platform/about-0f51826439214db3988301ef61ac7787',
			},
			{
				name: '장문종',
				position: '매니저',
				part: ERoleType.Design,
				label: 'Design',
				imageUrl:
					'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa%2F8ba6ea7a-edcd-407f-9fb2-22bc33d90f5f%2F%25E1%2584%2589%25E1%2585%25A2_%25E1%2584%2591%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A6%25E1%2586%25A8%25E1%2584%2590%25E1%2585%25B3.png?table=block&id=bebc2592-a760-49cc-9d7c-d37cc24bfad5&spaceId=1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa&width=670&userId=540037fd-ebf3-4717-baac-c94e2683b611&cache=v2',
				page: 'https://www.notion.so/wefun-platform/about-29ee90710d1343ff875ea4a4461a9dba?pvs=4',
			},
		],
		'ROW-2': [
			{
				name: '김연희',
				position: '매니저',
				part: ERoleType.Plan,
				label: 'Plan',
				imageUrl:
					'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7fa2c72a-142d-4480-a942-ca87f3a0f0c1%2FF32B54BC-6C6F-4941-BBE5-812C4903DC88.jpeg?id=5f5a86db-fd29-4394-8668-ed2117c50fc7&table=block&spaceId=1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa&width=840&userId=540037fd-ebf3-4717-baac-c94e2683b611&cache=v2',
				page: 'https://wefun-platform.notion.site/about-194c23641d3e4b77bbd839c0312fd0fe',
			},
			{
				name: '최보름',
				position: '매니저',
				part: ERoleType.Plan,
				label: 'Plan',
				imageUrl:
					'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa%2F5a29fe37-730c-43c2-9e90-5cff40040b7d%2FUntitled.png?table=block&id=a945366a-f38c-41dc-be2b-c0401fc60ae4&spaceId=1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa&width=840&userId=540037fd-ebf3-4717-baac-c94e2683b611&cache=v2',
				page: 'https://www.notion.so/wefun-platform/about-797becf2f0914681998ffdd2e4ecab5a',
			},
			{
				name: '이슬기',
				position: '부문장',
				part: ERoleType.Plan,
				label: 'Plan',
				imageUrl:
					'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbb6e107a-6cbe-45af-850a-89d8be53f99a%2F375c46d615bf28a96f170ac846ccf5a8-sticker.png?table=block&id=e9211e95-b236-4f1a-8267-7faa83959188&spaceId=1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa&width=840&userId=540037fd-ebf3-4717-baac-c94e2683b611&cache=v2',
				page: 'https://wefun-platform.notion.site/about-16df603f785b45f78f28522447e506cf',
			},
			{
				name: '한선우',
				position: '매니저',
				part: ERoleType.Design,
				label: 'Design',
				imageUrl:
					'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Faae0829a-a606-4b66-893c-791aaa5c107d%2F1675E655-0FEE-429A-8643-A7E5D5C81887.png?table=block&id=ae323864-efff-4dd0-9b36-8a48e7f3f3ef&spaceId=1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa&width=840&userId=540037fd-ebf3-4717-baac-c94e2683b611&cache=v2',
				page: 'https://wefun-platform.notion.site/about-358debbc18834f68a7b91b9d6ac0e2b9',
			},
			{
				name: '조아라',
				position: '매니저',
				part: ERoleType.Design,
				label: 'Design',
				imageUrl:
					'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa%2Ffa85e718-1aff-4c8c-a61e-63c2a056da5d%2FUntitled.png?table=block&id=eb2bc409-a062-400b-a7e0-0c055b49d9a6&spaceId=1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa&width=840&userId=540037fd-ebf3-4717-baac-c94e2683b611&cache=v2',
				page: 'https://www.notion.so/wefun-platform/about-39859f42061a4109bfad3d10a1c76587?pvs=4',
			},
			{ name: '', position: '', part: ERoleType.Empty, label: '공석', imageUrl: '', page: '' },
		],
		'ROW-3': [
			{ name: '', position: '', part: ERoleType.Empty, label: '공석', imageUrl: '', page: '' },
			{
				name: '최상규',
				position: '매니저',
				part: ERoleType.Frontend,
				label: 'Frontend',
				imageUrl:
					'https://wefun-platform.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa%2Fddd2c586-e9d1-411d-a35b-8ed258aae919%2FUntitled.png?table=block&id=a423ee99-af04-4a7f-a488-9cca39d5065e&spaceId=1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa&width=840&userId=&cache=v2',
				page: 'https://www.notion.so/wefun-platform/about-5e94065062e448979ba871b9e5abd6f3?pvs=4',
			},
			{
				name: '김진영',
				position: '매니저',
				part: ERoleType.Frontend,
				label: 'Frontend',
				imageUrl: '',
				page: 'https://www.notion.so/wefun-platform/about-cdc4dc5e351c443db68c448e6e94f1be?pvs=4',
			},
			{
				name: '선희빈',
				position: '매니저',
				part: ERoleType.Frontend,
				label: 'Frontend',
				imageUrl:
					'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa%2F533d72d4-1a3a-4eb9-8109-7877a57fc43f%2F%25E1%2584%2589%25E1%2585%25A2_%25E1%2584%2591%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A6%25E1%2586%25A8%25E1%2584%2590%25E1%2585%25B3.png?table=block&id=20126daf-5b9d-4d97-b903-2d5060c5dc0f&spaceId=1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa&width=1680&userId=540037fd-ebf3-4717-baac-c94e2683b611&cache=v2',
				page: 'https://wefun-platform.notion.site/about-1b625dc5419a4b04bef33fb4b635a8d5',
			},
			{
				name: '황유정',
				position: '매니저',
				part: ERoleType.Frontend,
				label: 'Frontend',
				imageUrl:
					'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa%2Fb77dc164-928f-42cd-b6cd-3b3d0f10d4ca%2FUntitled.png?table=block&id=575699d1-9875-47e8-b879-1d865046a3a3&spaceId=1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa&width=840&userId=540037fd-ebf3-4717-baac-c94e2683b611&cache=v2',
				page: 'https://www.notion.so/wefun-platform/about-2b700d950f3a4af88d25281e8e36b016?pvs=4',
			},
			{
				name: '김영서',
				position: '매니저',
				part: ERoleType.Frontend,
				label: 'Frontend',
				imageUrl: '',
				page: 'https://www.notion.so/wefun-platform/about-658a45cafee54223b14fccf3ca5a266f?pvs=4',
			},
		],
		'ROW-4': [
			{
				name: '유승호',
				position: '매니저',
				part: ERoleType.Backend,
				label: 'Backend',
				imageUrl:
					'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa%2Fe9ea4c84-6471-4db0-97a7-ba134f051391%2F8beba8d6bb1790d8-sticker.png?table=block&id=9b6b5577-c573-4b35-b1d4-d847ccf0a5e1&spaceId=1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa&width=840&userId=540037fd-ebf3-4717-baac-c94e2683b611&cache=v2',
				page: 'https://www.notion.so/wefun-platform/about-a225591619d243f68f5b3e7d981bafa1?pvs=4',
			},
			{
				name: '정민식',
				position: '유닛장',
				part: ERoleType.Backend,
				label: 'Backend',
				imageUrl:
					'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa%2F9772a5f9-d5b5-48f0-ad5a-923494bb12fc%2F%25E1%2584%2589%25E1%2585%25A2_%25E1%2584%2591%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A6%25E1%2586%25A8%25E1%2584%2590%25E1%2585%25B3_(3).png?table=block&id=f52e774d-cf2e-477b-9c5b-0add0a1f3b6d&spaceId=1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa&width=1680&userId=540037fd-ebf3-4717-baac-c94e2683b611&cache=v2',
				page: 'https://wefun-platform.notion.site/about-e60d3e61956a431a85a87ea0a2e3373f',
			},
			{
				name: '양경희',
				position: '매니저',
				part: ERoleType.Backend,
				label: 'Backend',
				imageUrl:
					'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6d9f0307-3ac0-4840-9733-3845d6be7545%2FUntitled.png?table=block&id=f1bc113b-674e-48d6-8c8b-a8e58ee74d0c&spaceId=1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa&width=840&userId=540037fd-ebf3-4717-baac-c94e2683b611&cache=v2',
				page: 'https://wefun-platform.notion.site/about-5df31aea92304f1f9366190184b905a7',
			},
			{
				name: '김보민',
				position: '매니저',
				part: ERoleType.Backend,
				label: 'Backend',
				imageUrl:
					'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5324b555-617c-4513-9997-e63d59cf51eb%2FUntitled.png?id=35444428-f206-4f20-bb1e-d57a35de46f5&table=block&spaceId=1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa&width=840&userId=540037fd-ebf3-4717-baac-c94e2683b611&cache=v2',
				page: 'https://www.notion.so/wefun-platform/about-be7e18697e5d4022ab04c44aeea86cdd',
			},
			{
				name: '황도리',
				position: '유닛장',
				part: ERoleType.Backend,
				label: 'Backend',
				imageUrl:
					'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff690de25-381a-4353-828d-acefe8062191%2FUntitled.png?table=block&id=8461b434-2c48-42ac-b31f-18d5c4cde10c&spaceId=1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa&width=2000&userId=540037fd-ebf3-4717-baac-c94e2683b611&cache=v2',
				page: 'https://www.notion.so/wefun-platform/about-39155c6ea4e8422780f91ee5796607b0',
			},
			{
				name: '신애정',
				position: '매니저',
				part: ERoleType.Backend,
				label: 'Backend',
				imageUrl:
					'https://wefun-platform.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fee4204ec-281d-47c0-97f7-721862eff354%2FUntitled.png?table=block&id=fa1ed381-e5c9-4c6d-ba55-d1e6839eabe5&spaceId=1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa&width=480&userId=&cache=v2',
				page: 'https://wefun-platform.notion.site/a6f181aef96b44ff8b95255afb062a2f',
			},
		],
		'ROW-5': [
			{
				name: '',
				position: '',
				part: ERoleType.Other,
				label: '마케팅부문',
				imageUrl: '',
				page: '',
			},
			{
				name: '',
				position: '',
				part: ERoleType.Other,
				label: '마케팅부문',
				imageUrl: '',
				page: '',
			},
			{
				name: '',
				position: '',
				part: ERoleType.Other,
				label: '마케팅부문',
				imageUrl: '',
				page: '',
			},
			{
				name: '',
				position: '',
				part: ERoleType.Empty,
				label: '공석',
				imageUrl: '',
				page: '',
			},
			{
				name: '윤태성',
				position: '매니저',
				part: ERoleType.Backend,
				label: 'Backend',
				imageUrl:
					'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa%2F79eaa457-d285-4b1a-bc24-91067960ccac%2FUntitled.png?table=block&id=9e59d581-7994-4a68-9ddf-b85a0c460fca&spaceId=1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa&width=840&userId=540037fd-ebf3-4717-baac-c94e2683b611&cache=v2',
				page: 'https://wefun-platform.notion.site/about-9290e9010f1148d290503dc179e90066?pvs=4',
			},
			{
				name: '성태현',
				position: '팀장',
				part: ERoleType.Backend,
				label: 'Backend',
				imageUrl:
					'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa%2F7e564790-205c-41cf-a133-8a6d627ef0c2%2F%25E1%2584%2589%25E1%2585%25A2_%25E1%2584%2591%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25A9%25E1%2584%258C%25E1%2585%25A6%25E1%2586%25A8%25E1%2584%2590%25E1%2585%25B3_(4).png?table=block&id=434e9f3a-c3f9-4598-8fe0-3e13884193c1&spaceId=1ebe547d-01ab-4b0d-837b-fcfa2c6cadfa&width=1680&userId=540037fd-ebf3-4717-baac-c94e2683b611&cache=v2',
				page: 'https://wefun-platform.notion.site/about-c7866b1971164a1591ecdee814f30521',
			},
		],
	},
};
