import { useEditor, EditorContent } from '@tiptap/react';
import Placeholder from '@tiptap/extension-placeholder';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import Image from '@tiptap/extension-image';
import { RichTextOptions } from './richTextOptions';

export const TextEditor = () => {
	const editor = useEditor({
		extensions: [StarterKit, Link, Underline, Image, Placeholder],
		autofocus: 'end',
	});

	return (
		<>
			<RichTextOptions editor={editor} />
			<EditorContent onKeyDown={() => {}} editor={editor} />
		</>
	);
};
