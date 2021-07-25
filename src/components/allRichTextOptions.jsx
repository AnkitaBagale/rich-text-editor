import { AddTextStyles } from './addTextStyles';
import { AddHyperlink } from './addHyperlink';
import { AddImage } from './addImage';
import { AddMeme } from './addMeme';

//Component wrapping all the Rich text editing options in single Componnet
export const AllRichTextOptions = ({ editor }) => {
	if (!editor) {
		return null;
	}

	return (
		<div className='rich-text-options-wrapper'>
			<AddTextStyles editor={editor} />
			<AddHyperlink editor={editor} />
			<AddImage editor={editor} />
			<AddMeme editor={editor} />
		</div>
	);
};
