import { Link } from "@fluentui/react-components";
import { ReactComponentElement } from "react";
import { Link as LinkRs } from "react-router-dom";
import { AlertUrgent24Filled } from "@fluentui/react-icons";
import './Navbar.scss';

interface props {
	labelList: Array<{ label: string; link: string }>;
}

function Navbar(props: props) {
	const { labelList } = props;
	return (
		<section>
			<nav className='nav'>
				<div className='nav__logo'>
					<div className="nav__logo__icon">
						<AlertUrgent24Filled />
					</div>
					<div className="nav__logo__title">
						<h1>Layoff Detector System</h1>
					</div>
				</div>
				<div className='nav__link'>
					{labelList.map((el: any) => {
						return (
							<LinkRs to={el.link} className="nav__link__list">
								<Link appearance='subtle'>{el.label}</Link>
							</LinkRs>
						);
					})}
				</div>
			</nav>
		</section>
	);
}

export default Navbar;
