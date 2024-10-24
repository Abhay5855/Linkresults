import { FC } from 'react';
import {
	Navbar,
	NavbarCollapse,
	NavbarBrand,
	NavbarToggle,
	NavbarLink,
} from 'flowbite-react';
import { ButtonWrapper } from './Button';
import { navlinks } from '../data';

const Header: FC = () => {
	const renderLinks = () => {
		return navlinks.map((link) => (
			<NavbarLink
				className='sm:text-xl font-semibold'
				key={link.id}
				to={link.link}
			>
				{link.name}
			</NavbarLink>
		));
	};

	return (
		<>
			<header className='sm:px-6 py-1 border border-b sticky top-0 left-0 z-50'>
				<Navbar fluid rounded>
					<NavbarBrand>
						<span className='block whitespace-nowrap text-xl font-semibold text-primary dark:text-white capitalize'>
							Engage pro
						</span>
					</NavbarBrand>
					<div className='md:order-2'>
						<ButtonWrapper color='primary' type='button'>
							get started
						</ButtonWrapper>
					</div>
					<NavbarToggle className='transition-all duration-300 ease-in-out rounded-lg  shadow-lg' />
					<NavbarCollapse className='z-50 '>{renderLinks()}</NavbarCollapse>
				</Navbar>
			</header>
		</>
	);
};

export default Header;
