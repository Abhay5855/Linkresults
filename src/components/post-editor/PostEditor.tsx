import { EditorContent, Editor } from '@tiptap/react';
import { FC } from 'react';

type EditorProps = {
	editor: Editor | null;
};

const PostEditor: FC<EditorProps> = ({ editor }) => {
	if (!editor) return null;

	return (
		<div className='h-full flex flex-col'>
			<EditorContent
				className='flex-1 bg-white border border-border rounded-b1 p-2 overflow-auto'
				editor={editor}
			/>
		</div>
	);
};

export default PostEditor;
