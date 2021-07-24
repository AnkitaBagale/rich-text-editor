import axios from 'axios';

export const AddMeme = ({ editor }) => {
	const tenorKey = process.env.REACT_APP_API_KEY;

	const getMeme = async () => {
		try {
			let match = '';
			let data = editor.getHTML();

			data = data.replace(/\{\{(.+?)_meme\}\}/, (_, keyword) => {
				match = keyword;
				return '';
			});

			if (match) {
				const {
					data: { results },
				} = await axios.get(
					`https://g.tenor.com/v1/search?q=${match}&key=${tenorKey}&limit=1`,
				);

				data += `<img src="${results[0].media[0]?.gif?.preview}" />`;

				editor.commands.setContent(data);
			}
		} catch (error) {
			window.alert('No meme found!');
			console.log(error);
		}
	};
	return (
		<>
			<button className='btn btn-primary-violet' onClick={getMeme}>
				Add Meme
			</button>
		</>
	);
};
