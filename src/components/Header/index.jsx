import { Link } from 'react-router-dom';

const Header = (props) => {
	const { title = 'Random Image Bank' } = props;

	return (
		<header className='fixed top-0 z-50 w-full bg-slate-50 py-4 shadow-sm'>
			<div className='container mx-auto flex items-center justify-between px-4'>
				<Link to='/' data-gtm='header_navigation_logo'>
					<span className='font-semibold tracking-wider'>{title}</span>
				</Link>

				<ul className='flex gap-x-4'>
					<li>
						<Link to='/' className='transition-colors hover:text-slate-400' data-gtm='header_navigation_menu_home'>
							Home
						</Link>
					</li>
					<li>
						<Link
							to='/about'
							className='transition-colors hover:text-slate-400'
							data-gtm='header_navigation_menu_about'>
							About
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
