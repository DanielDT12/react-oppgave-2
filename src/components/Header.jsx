import NavBar from "./NavBar";

export default function Header() {
	return (
		<>
			<header className="primary-header">
				<a className="primary-header__logo" href="#">
					Nettside
				</a>
				<NavBar />
			</header>
		</>
	);
}
