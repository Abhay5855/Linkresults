import { FC } from 'react';
import { MonitorCheck } from 'lucide-react';
import { TabletSmartphone } from 'lucide-react';
import { Avatar } from 'flowbite-react';

const PostPreview: FC = () => {
	return (
		<>
			<div className=' bg-preview w-full rounded-b1 px-[1.5rem] gap-5 overflow-y-auto h-screen-minus-16.8'>
				<div className='flex items-center justify-between'>
					<p className='capitalize font-medium'>Post Preview</p>
					<div className='flex items-center'>
						<button className='text-gray-500 hover:text-gray-800 px-2 py-2'>
							<MonitorCheck size='20' />
						</button>
						<button className='text-gray-500 hover:text-gray-800 px-2 py-2'>
							<TabletSmartphone size='20' />
						</button>
					</div>
				</div>

				<div className='flex px-4 flex-col h-fit pointer-events-none bg-white rounded-lg pt-3 w-[555px] border border-preview z-10'>
					{/* Top */}
					<div className='flex gap-2'>
						<Avatar
							img='https://media.licdn.com/dms/image/v2/D4D03AQFLahhYWD4Lkw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718312701897?e=1735776000&v=beta&t=dc7xgk2AX_ECTJS2J6Aenj6ye-3G5MZyyRDu_FrscxQ'
							rounded
						>
							<div className='space-y-1 font-medium dark:text-white'>
								<div>Abhay Patil</div>
								<div className='text-sm text-gray-500 dark:text-gray-400'>
									Software Engineer | Framework Agnostic | Open source
									contributer
								</div>
							</div>
						</Avatar>
					</div>

					{/* Body */}
					<div className='pt-2'>
						<span className='whitespace-pre-wrap break-words'>
							Had an Incredible time yesterday speaking at React JS meetup,
							pune, Where I deep dive into the concepts of accessibility and how
							to create accessible components with React, Thanks NonStop io
							Technologies.
							<strong className='cursor-pointer'>See More</strong>
						</span>
					</div>
					<div className='mt-3 flex flex-col'>
						<div className='w-full h-full'>
							<img src='https://media.licdn.com/dms/image/v2/D4D22AQHabwCoBlQjRA/feedshare-shrink_800/feedshare-shrink_800/0/1716733601715?e=1733356800&v=beta&t=RK7GxLoGNuI0xHQYytHlMIM7N7XShGXODK0n7UGhIbo' />
						</div>

						<div className='flex items-center justify-between flex-wrap'></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PostPreview;
