import { SkeletonEl } from "../Skeleton/Skeleton";
import { useEffect, useState } from "react";
import axios from "axios";
import CardList from "../CardList/CardList";

import {
	TableBody,
	TableCell,
	TableRow,
	Table,
	TableHeader,
	TableHeaderCell,
	TableCellLayout,
} from "@fluentui/react-components";


const serverUrl = `http://localhost:8080`;

const columns = [
	{ columnKey: "datePosted", label: "Date Posted" },
	{ columnKey: "companyName", label: "Company" },
	{ columnKey: "location", label: "Location" },
	{ columnKey: "workersAffected", label: "Workers Affected" },
	{ columnKey: "layoffDate", label: "Layoff Date" },
];

export const Warnlist = (props: any) => {
	const [warnList, setWarnList] = useState([]);
	const[recentWarnList, setRecentWarnList] = useState([])

	useEffect(() => {
		async function fetchWarnList() {
			try {
				const res = await axios.get(`${serverUrl}/list`);
				const recentList:any = [];
				setWarnList(res.data);
				for(let i = 0; i < 3; ++i){
					recentList.push(res.data[i]) 
				}

				setRecentWarnList(recentList);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}
		fetchWarnList();
	}, []);



	if (!warnList || warnList.length === 0) {
		return <SkeletonEl />;
	} else {
		return (
			<>
				<section>
                    <div className='warnList__recent'></div>
                    <h2>Recently Announced Layoffs</h2>
					<CardList recentWarnList = {recentWarnList} />
                </section>
				<h2>All Warn Notices</h2>
				<div className='card-container'>
				</div>
				<Table arial-label='Default table'>
					<TableHeader>
						<TableRow>
							{columns.map((column) => (
								<TableHeaderCell key={column.columnKey}>
									{column.label}
								</TableHeaderCell>
							))}
						</TableRow>
					</TableHeader>
					<TableBody>
						{warnList.map((el: any, i: number) => {
							return (
								<TableRow key={el.id}>
									<TableCell>
										<TableCellLayout>
											{`${new Date(
												el.datePosted
											).toLocaleDateString("en-US", {
												year: "numeric",
												month: "long",
												day: "numeric",
											})}`}
										</TableCellLayout>
									</TableCell>
									<TableCell>
										<TableCellLayout>
											{el.companyName}
										</TableCellLayout>
									</TableCell>
									<TableCell>
										<TableCellLayout>
											{el.location}
										</TableCellLayout>
									</TableCell>
									<TableCell>
										<TableCellLayout>
											{el.workersAffected}
										</TableCellLayout>
									</TableCell>
									<TableCell>
										<TableCellLayout>
											{el.layoffDate}
										</TableCellLayout>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</>
		);
	}
};
