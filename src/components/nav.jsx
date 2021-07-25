import { useState } from 'react';
import logo from '../assets/logo.png';
import { AboutCard } from './aboutCard';

//Navigation bar
export const Nav = () => {
	const [showModal, setShowModal] = useState(true);
	return (
		<>
			<nav className='nav'>
				<div className='logo'>
					<button className='logo-btn' onClick={() => setShowModal(true)}>
						<img width={25} height={25} src={logo} alt='purple-editor' />
						<span className='logo-title'>purple editor</span>
					</button>
				</div>
			</nav>

			{showModal && <AboutCard setShowModal={setShowModal} />}
		</>
	);
};
