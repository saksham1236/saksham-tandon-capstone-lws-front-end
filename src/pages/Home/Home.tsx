import "./Home.scss";
import { Warnlist } from "../../components/List/Warnlist";
import {
	makeStyles,
	Body1,
	Caption1,
	Button,
	shorthands,
} from "@fluentui/react-components";

import {
	Card,
	CardFooter,
	CardHeader,
	CardPreview,
} from "@fluentui/react-components";

function Home(props: any) {
	return (
		<>
			{/* <section>
				<div className='home'></div>
				<h1>Layoff Detector System</h1>
				<Card>
					<CardHeader
						header={
							<Body1>
								<b>Elvia Atkins</b> mentioned you
							</Body1>
						}
						description={
							<Caption1>5h ago · About us - Overview</Caption1>
						}
					/>
				</Card>
			</section> */}
			<section>
				<Warnlist />
			</section>
		</>
	);
}

export default Home;
