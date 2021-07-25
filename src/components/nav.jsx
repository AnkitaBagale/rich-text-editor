import logo from '../assets/logo.png';

//Navigation bar
export const Nav = () => {
	return (
		<nav className='nav'>
			<div className='logo'>
				<img width={25} height={25} src={logo} alt='purple-editor' />
				<span className='logo-title'>purple editor</span>
			</div>
		</nav>
	);
};
