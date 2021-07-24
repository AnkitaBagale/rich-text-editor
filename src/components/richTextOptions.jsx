import { TextStyles } from './textStyles';
import { LinkCoupler } from './linkCoupler';
import { AddImage } from './addImage';
import { AddMeme } from './addMeme';

export const RichTextOptions = ({ editor }) => {
	if (!editor) {
		return null;
	}

	return (
		<div className='rich-text-options-wrapper'>
			<TextStyles editor={editor} />
			<LinkCoupler editor={editor} />
			<AddImage editor={editor} />
			<AddMeme editor={editor} />
		</div>
	);
};
