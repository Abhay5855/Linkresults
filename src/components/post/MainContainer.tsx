import { FC } from 'react';
import PostScheduler from './PostScheduler';

const MainContainer: FC = () => {
	return (
		<>
			<div className='p-4 sm:ml-52'>
				<div className='p-4 mt-14'>
					<PostScheduler />
				</div>
			</div>
		</>
	);
};

export default MainContainer;
