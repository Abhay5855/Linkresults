import { EditorContent, Editor } from '@tiptap/react';
import { FC } from 'react';

type EditorProps = {
	editor: Editor | null;
};

const PostEditor: FC<EditorProps> = ({ editor }) => {
	if (!editor) {
		return null;
	}

	console.log(editor, 'editor');

	return (
		<div className=''>
			<div>
				<EditorContent
					className='inline-block overflow-auto flex-1 max-w-full resize-none custom-editor w-full focus:outline-none bg-white border border-border rounded-b1 h-[24.6rem] p-2'
					editor={editor}
				/>
			</div>
		</div>
	);
};

export default PostEditor;