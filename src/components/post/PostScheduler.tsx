import { Modal, ModalBody, ModalHeader } from 'flowbite-react';
import { SquarePen } from 'lucide-react';
import { FC } from 'react';

const PostScheduler: FC = () => {
	return (
		<>
			<Modal size='7xl' show={true}>
				<ModalHeader>
					<span className='flex items-center gap-2 text-primary font-semibold'>
						LinkedIn Post Formatter
						<SquarePen />
					</span>
				</ModalHeader>
				<ModalBody>
					<div className='flex items-stretch flex-1 gap-4'>
						{/* First Block */}
						<div className='flex flex-col w-full gap-5'>
							{/* Buttons */}
							<div></div>
							{/* Text area */}
							<div></div>
						</div>
					</div>
				</ModalBody>
			</Modal>
		</>
	);
};

export default PostScheduler;
