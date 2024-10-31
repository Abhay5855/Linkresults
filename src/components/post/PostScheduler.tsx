import { Modal, ModalBody, ModalHeader } from 'flowbite-react';
import { SquarePen } from 'lucide-react';
import { FC } from 'react';
import PostEditor from '../post-editor/PostEditor';
import EditorToolbarButton from '../post-editor/EditorToolbarButton';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ListItem from '@tiptap/extension-list-item';

const PostScheduler: FC = () => {
	const extensions = [StarterKit, ListItem];

	const content = ``;
	const editor = useEditor({
		extensions,
		content,
	});

	return (
		<>
			<Modal size='8xl' show={true}>
				<ModalHeader>
					<div className='flex items-center gap-2 text-primary font-semibold'>
						LinkedIn Post Formatter
						<SquarePen className='w-6 h-6 text-primary' />
					</div>
				</ModalHeader>
				<ModalBody>
					<div className='flex items-stretch flex-1 gap-4'>
						<div className='flex flex-col w-full gap-5'>
							<EditorToolbarButton editor={editor} />
							<PostEditor editor={editor} />
						</div>
						<div className='w-full'></div>
					</div>
				</ModalBody>
			</Modal>
		</>
	);
};

export default PostScheduler;
