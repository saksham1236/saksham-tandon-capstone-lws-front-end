import {
	makeStyles,
	Body1,
	Caption1,
	Button,
	shorthands,
	Divider,
} from "@fluentui/react-components";
import "./CardList.scss";
import { Card, CardHeader, CardPreview } from "@fluentui/react-components";

function CardList(props: any) {
	const { recentWarnList } = props;

	return (
		<div className='cardList'>
			{recentWarnList.map((el: any) => {
				return (
					<Card>
						<CardHeader
							header={
								<>
									<Body1>
										<b>{el.companyName}</b> recently
										annouced layoffs for{" "}
										<b>{el.workersAffected} people</b> in{" "}
										{el.location}
									</Body1>
								</>
							}
							description={
								<Caption1>
									Posted{" "}
									{`${new Date(
										el.datePosted
									).toLocaleDateString("en-US", {
										year: "numeric",
										month: "long",
										day: "numeric",
									})}`}
								</Caption1>
							}
						/>
					</Card>
				);
			})}
		</div>
	);
}

export default CardList;
