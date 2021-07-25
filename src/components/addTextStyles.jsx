// Component to add basic styles(Bold, Italic, Underline) to the text

export const AddTextStyles = ({ editor }) => {
	return (
		<>
			<button
				onClick={() => {
					editor.chain().focus().toggleBold().run();
				}}
				className={
					editor.isActive('bold')
						? 'btn btn-primary-black'
						: 'btn btn-primary-inactive'
				}>
				<b>B</b>
			</button>

			<button
				onClick={() => {
					editor.chain().focus().toggleItalic().run();
				}}
				className={
					editor.isActive('italic')
						? 'btn btn-primary-black'
						: 'btn btn-primary-inactive'
				}>
				<em>I</em>
			</button>

			<button
				onClick={() => {
					editor.chain().focus().toggleUnderline().run();
				}}
				className={
					editor.isActive('underline')
						? 'btn btn-primary-black'
						: 'btn btn-primary-inactive'
				}>
				<span style={{ textDecoration: 'underline' }}>U</span>
			</button>
		</>
	);
};
