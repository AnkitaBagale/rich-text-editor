import { useEditor, EditorContent } from '@tiptap/react';
import Placeholder from '@tiptap/extension-placeholder';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import Image from '@tiptap/extension-image';
import { AllRichTextOptions } from './allRichTextOptions';

export const TextEditor = () => {
	const editor = useEditor({
		extensions: [StarterKit, Link, Underline, Image, Placeholder],
		autofocus: 'end',
	});

	return (
		<>
			<AllRichTextOptions editor={editor} />
			<EditorContent editor={editor} />
		</>
	);
};
