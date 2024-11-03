import { Modal, ModalBody, ModalHeader, ModalFooter } from 'flowbite-react';
import { SquarePen } from 'lucide-react';
import { FC } from 'react';
import PostEditor from '../post-editor/PostEditor';
import EditorToolbarButton from '../post-editor/EditorToolbarButton';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import PostPreview from './PostPreview';
import Placeholder from '@tiptap/extension-placeholder';
import { ButtonWrapper } from '../base/button/Button';

const PostScheduler: FC = () => {
	const extensions = [
		StarterKit,
		Placeholder.configure({
			placeholder: 'Write your post here...',
		}),
	];
	const content = ``;
	const editor = useEditor({
		extensions,
		content,
	});

	return (
		<Modal size='7xl' show={true}>
			<ModalHeader>
				<span className='flex flex-wrap items-center gap-2 text-primary font-semibold'>
					Post Formatter
					<SquarePen className='w-6 h-6 text-primary' />
				</span>
			</ModalHeader>
			<ModalBody className='px-2 sm:px-6'>
				<div className='flex flex-col lg:flex-row gap-20 sm:gap-8 h-[80vh] sm:h-[70vh]'>
					{/* Editor Section */}
					<div className='flex flex-col gap-4 w-full lg:w-3/5 h-full min-h-[300px] lg:min-h-0'>
						<EditorToolbarButton editor={editor} />
						<PostEditor editor={editor} />
					</div>
					{/* Preview Section */}
					<div className='flex flex-col lg:flex-row gap-8 sm:gap-4  w-full lg:w-1/2 h-full min-h-[15rem] lg:min-h-0'>
						<PostPreview />
					</div>
				</div>
			</ModalBody>

			<ModalFooter className='flex w-full justify-end'>
				<div className='ml-auto flex gap-2'>
					<ButtonWrapper
						className='w-24 sm:w-32 text-white font-semibold'
						color='primary'
						onClick={() => console.log('Save Post')}
					>
						Schedule Post
					</ButtonWrapper>
					<ButtonWrapper
						className='w-24 sm:w-32 text-gray-500 font-semibold'
						color='primary'
						onClick={() => console.log('Cancel')}
					>
						Post on Linkedln
					</ButtonWrapper>
				</div>
			</ModalFooter>
		</Modal>
	);
};

export default PostScheduler;
