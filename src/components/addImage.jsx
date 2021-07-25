import { useState } from 'react';
import { Modal } from './modal';

//Component to add Image using image url
export const AddImage = ({ editor }) => {
	const [showModal, setShowModal] = useState(false);

	const uploadImage = (url) => {
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

			{/* Modal to enter image url */}
			{showModal && (
				<Modal
					cancelOperationHandler={() => setShowModal(false)}
					proceedOperationHandler={uploadImage}
					inputLabel='Enter image url here'
				/>
			)}
		</>
	);
};
