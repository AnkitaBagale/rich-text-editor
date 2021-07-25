export const AboutCard = ({ setShowModal }) => {
	return (
		<div className='modal'>
			<div className='modal-content'>
				<button className='close-btn' onClick={() => setShowModal(false)}>
					<i className='fas fa-times'></i>
				</button>
				<h1 className='text-center font-weight-medium margin-top-0'>
					Welcome to <span className='primary-color'>Purple Editor</span>
				</h1>
				<h3 className='margin-bottom-0'>Instructions</h3>
				<ul className='list-style-none'>
					<li>
						<i className='fas fa-star primary-color bullet-style'></i>
						<span>
							To add/remove <b>bold</b> style, click on{' '}
							<button className='btn btn-primary-inactive' disabled>
								B
							</button>
						</span>
					</li>
					<li>
						<i className='fas fa-star primary-color bullet-style'></i>
						<span>
							To add/remove <b>italic</b> style, click on{' '}
							<button className='btn btn-primary-inactive' disabled>
								<em>I</em>
							</button>
						</span>
					</li>
					<li>
						<i className='fas fa-star primary-color bullet-style'></i>
						<span>
							To add/remove <b>underline</b> style, click on{' '}
							<button className='btn btn-primary-inactive' disabled>
								<u>U</u>
							</button>
						</span>
					</li>
					<li>
						<i className='fas fa-star primary-color bullet-style'></i>
						<span>
							To add <b>hyperlink</b> to the text, select text and click on{' '}
							<button className='btn btn-primary-inactive' disabled>
								<i className='fas fa-link'></i>
							</button>
						</span>
					</li>

					<li>
						<i className='fas fa-star primary-color bullet-style'></i>
						<span>
							To remove <b>hyperlink</b> from the text, select text and click on{' '}
							<button className='btn btn-primary-inactive' disabled>
								<i className='fas fa-unlink'></i>
							</button>
						</span>
					</li>

					<li>
						<i className='fas fa-star primary-color bullet-style'></i>
						<span>
							To add <b>image</b>, click on{' '}
							<button className='btn btn-primary-violet' disabled>
								Add Image
							</button>{' '}
							and enter the image url
						</span>
					</li>

					<li>
						<i className='fas fa-star primary-color bullet-style'></i>
						<span>
							To add <b>meme</b>, type e.g. {`{{cat_meme}}`} and click on{' '}
							<button className='btn btn-primary-violet' disabled>
								Add Meme
							</button>
						</span>
					</li>

					<li className='margin-top-2'>
						<i className='fas fa-star primary-color bullet-style'></i>
						<span>
							To remove <b>image</b>, click on image and press <b>delete</b>{' '}
							button from keyboard
						</span>
					</li>

					<li className='margin-top-2'>
						<i className='fas fa-star primary-color bullet-style'></i>
						<span>
							Drag and drop images to <b>re-order</b> the sequence
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
};
