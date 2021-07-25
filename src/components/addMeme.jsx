import axios from 'axios';

//Component to add Meme based on entered text
export const AddMeme = ({ editor }) => {
	const tenorKey = process.env.REACT_APP_API_KEY;

	const getMemeFromTheServer = async ({ memeWord }) => {
		if (memeWord) {
			const {
				data: { results },
			} = await axios.get(
				`https://g.tenor.com/v1/search?q=${memeWord}&key=${tenorKey}&limit=1`,
			);

			const memeSrcUrl = results[0].media[0]?.gif?.preview;

			return { memeSrcUrl };
		}
		return { memeSrcUrl: null };
	};

	const uploadMeme = async () => {
		try {
			let match = '';

			let editorContent = editor.getHTML();

			//removes {{memeWord_meme}}
			editorContent = editorContent.replace(
				/\{\{(.+?)_meme\}\}/,
				(_, keyword) => {
					match = keyword;
					return '';
				},
			);

			const { memeSrcUrl } = await getMemeFromTheServer({ memeWord: match });

			//adds meme to the editor content
			if (memeSrcUrl) {
				editorContent += `<img height="50" src="${memeSrcUrl}" />`;

				// sets content back to editor
				editor.commands.setContent(editorContent);
			}
		} catch (error) {
			window.alert('No meme found!');
			console.log(error);
		}
	};
	return (
		<>
			<button className='btn btn-primary-violet' onClick={uploadMeme}>
				Add Meme
			</button>
		</>
	);
};
