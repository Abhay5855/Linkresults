import { FC } from 'react';
import { Avatar } from 'flowbite-react';

const PostPreview: FC = () => {
	return (
		<div className='bg-preview w-full h-full rounded-b1 px-1 py-2 sm:px-6 gap-5 overflow-y-auto'>
			<div className='flex items-center justify-between mb-4'>
				<p className='capitalize font-medium'>Post Preview</p>
				<div></div>
			</div>
			<div className='flex flex-col bg-white rounded-lg p-4 w-full border border-preview'>
				{/* Top: Avatar Section */}
				<div className='flex gap-2'>
					<Avatar
						img='https://media.licdn.com/dms/image/v2/D4D03AQFLahhYWD4Lkw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718312701897?e=1735776000&v=beta&t=dc7xgk2AX_ECTJS2J6Aenj6ye-3G5MZyyRDu_FrscxQ'
						rounded
					>
						<div className='space-y-1 font-medium'>
							<div>Abhay Patil</div>
							<div className='text-sm text-gray-500'>
								Software Engineer | Open Source Contributor
							</div>
						</div>
					</Avatar>
				</div>
				{/* Body: Post Content */}
				<div className='pt-2'>
					<span className='whitespace-pre-wrap break-words'>
						Had an incredible time yesterday speaking at React JS meetup in
						Pune, where I deep-dived into the concepts of accessibility and
						creating accessible components with React. Thanks NonStop io
						Technologies. <strong className='cursor-pointer'>See More</strong>
					</span>
				</div>
				<div className='mt-3 flex'>
					<img
						src='https://media.licdn.com/dms/image/v2/D4D22AQHabwCoBlQjRA/feedshare-shrink_800/feedshare-shrink_800/0/1716733601715?e=1733356800&v=beta&t=RK7GxLoGNuI0xHQYytHlMIM7N7XShGXODK0n7UGhIbo'
						alt='Post image'
						className='w-full h-auto rounded-md'
					/>
				</div>
			</div>
		</div>
	);
};

export default PostPreview;
