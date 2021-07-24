import { useState } from 'react';
import { Modal } from './modal';

export const AddImage = ({ editor }) => {
	const [showModal, setShowModal] = useState(false);

	const addImage = (url) => {
		if (url) {
			editor.chain().focus().setImage({ src: url }).run();
		}
		setShowModal(false);
	};
	return (
		<>
			<button
				className='btn btn-primary-violet'
				onClick={() => setShowModal(true)}>
				Add Image
			</button>
			{showModal && (
				<Modal
					cancelOperationHandler={() => setShowModal(false)}
					proceedOperationHandler={addImage}
					inputLabel='Enter image url here'
				/>
			)}
		</>
	);
};
