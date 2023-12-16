import { SkeletonEl } from "../Skeleton/Skeleton";
import { useEffect, useState } from "react";
import axios from "axios";

import {
	TableBody,
	TableCell,
	TableRow,
	Table,
	TableHeader,
	TableHeaderCell,
	TableCellLayout,
	PresenceBadgeStatus,
	Avatar,
} from "@fluentui/react-components";

const serverUrl = `http://localhost:8080`;

const columns = [
	{ columnKey: "datePosted", label: "Date Posted" },
	{ columnKey: "companyName", label: "Company" },
	{ columnKey: "location", label: "Location" },
	{ columnKey: "workersAffected", label: "Workers Affected" },
	{ columnKey: "lastUpdate", label: "Last update" },
];

export const Warnlist = (props: any) => {
	const [warnList, setWarnList] = useState([]);

	useEffect(() => {
		async function fetchWarnList() {
			try {
				const res = await axios.get(`${serverUrl}/list`);
				setWarnList(res.data);
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
			<>  <h2>Recent Layoffs</h2>
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
											{`${new Date(el.datePosted)}`}
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
