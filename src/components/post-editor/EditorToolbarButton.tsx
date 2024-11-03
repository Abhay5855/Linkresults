import { FC } from 'react';
import { List, Italic, ListOrdered, Undo, Redo, Bold } from 'lucide-react';
import { FileInput, Label } from 'flowbite-react';
import { Editor } from '@tiptap/react';
import { Link2 } from 'lucide-react';

type ToolbarProps = {
	editor: Editor | null;
};

const EditorToolbarButton: FC<ToolbarProps> = ({ editor }) => {
	return (
		<div className='flex flex-wrap items-center gap-3'>
			<Label
				htmlFor='dropzone-file'
				className='bg-primary px-5 rounded-md py-2.5 text-base text-text capitalize flex items-center flex-col justify-center cursor-pointer focus:bg-focus hover:bg-hover whitespace-nowrap'
			>
				Upload a File
				<FileInput id='dropzone-file' className='hidden' />
			</Label>
			<button
				onClick={() => editor?.chain().focus().toggleBold().run()}
				disabled={!editor?.can().chain().focus().toggleBold().run()}
				className={`${
					editor?.isActive('bold')
						? 'rounded-sm text-white bg-primary p-1 font-medium'
						: 'rounded-sm bg-btn p-1 font-medium hover:brightness-90 grayscale'
				}`}
			>
				<Bold size='20' />
			</button>
			<button
				onClick={() => editor?.chain().focus().toggleItalic().run()}
				disabled={!editor?.can().chain().focus().toggleItalic().run()}
				className={`${
					editor?.isActive('italic')
						? 'rounded-sm text-white bg-primary p-1 font-medium'
						: 'rounded-sm bg-btn p-1 font-medium hover:brightness-90 grayscale'
				}`}
			>
				<Italic size='20' />
			</button>
			<button
				onClick={() => editor?.chain().focus().toggleBulletList().run()}
				className={`${
					editor?.isActive('bulletList')
						? 'rounded-sm text-white bg-primary p-1 font-medium'
						: 'rounded-sm bg-btn p-1 font-medium hover:brightness-90 grayscale'
				}`}
			>
				<List size='20' />
			</button>
			<button
				onClick={() => {
					console.log('Running toggleOrderedList');
					editor?.chain().focus().toggleOrderedList().run();
				}}
				className={`${
					editor?.isActive('orderedList')
						? 'rounded-sm text-white bg-primary p-1 font-medium'
						: 'rounded-sm bg-btn p-1 font-medium hover:brightness-90 grayscale'
				}`}
			>
				<ListOrdered size='20' />
			</button>

			<button
				onClick={() => editor?.chain().focus().undo().run()}
				disabled={!editor?.can().chain().focus().undo().run()}
				className={`${
					editor?.isActive('undo')
						? 'rounded-sm text-white bg-primary p-1 font-medium'
						: 'rounded-sm bg-btn p-1 font-medium hover:brightness-90 grayscale'
				}`}
			>
				<Undo size='20' />
			</button>
			<button
				onClick={() => editor?.chain().focus().redo().run()}
				disabled={!editor?.can().chain().focus().redo().run()}
				className={`${
					editor?.isActive('redo')
						? 'rounded-sm text-white bg-primary p-1 font-medium'
						: 'rounded-sm bg-btn p-1 font-medium hover:brightness-90 grayscale'
				}`}
			>
				<Redo size='20' />
			</button>
			<button
				onClick={() => editor?.chain().focus().redo().run()}
				disabled={!editor?.can().chain().focus().redo().run()}
				className={`${
					editor?.isActive('redo')
						? 'rounded-sm text-white bg-primary p-1 font-medium'
						: 'rounded-sm bg-btn p-1 font-medium hover:brightness-90 grayscale'
				}`}
			>
				<Link2 size='20' />
			</button>
		</div>
	);
};

export default EditorToolbarButton;
