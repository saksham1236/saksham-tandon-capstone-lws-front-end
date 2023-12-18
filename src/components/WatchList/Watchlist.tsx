import { SkeletonEl } from "../Skeleton/Skeleton";
import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

import {
	TableBody,
	TableCell,
	TableRow,
	Table,
	TableHeader,
	TableHeaderCell,
	TableCellLayout,
} from "@fluentui/react-components";

import type { FieldProps } from "@fluentui/react-components";
import { Field, Input, Button } from "@fluentui/react-components";

import { shorthands, useId, Label } from "@fluentui/react-components";

import { ArrowRight24Filled } from "@fluentui/react-icons";

import "./WatchList.scss";

const serverUrl = `http://localhost:8080`;

const columns = [
	{ columnKey: "datePosted", label: "Date Posted" },
	{ columnKey: "companyName", label: "Company" },
	{ columnKey: "location", label: "Location" },
	{ columnKey: "workersAffected", label: "Workers Affected" },
	{ columnKey: "layoffDate", label: "Layoff Date" },
];

export const Watchlist = (props: any) => {

	const [watchListData, setWatchListData] = useState([]);

	const searchFormHandler = (e: any) => {
		e.preventDefault();
		const queryString: string = e.target.addTag.value;
		axios
		.get(`${serverUrl}/search/${queryString}`)
		.then((res) => {
			const searchResponse = res.data;
			if(!searchResponse || searchResponse.length === 0) {
				alert("Company not found");
			} else {
				setWatchListData(searchResponse);
			}
		})
		.catch((error:AxiosError) => {
			console.log(error);
		})
	};

	if (!watchListData || watchListData.length === 0) {
		return (
			<section>
				<section className='watchListForm__container'>
					<h1>Your Watchlist</h1>
					<form
						className='watchListForm'
						onSubmit={searchFormHandler}>
						<div className='watchListForm__input'>
							<Label
								htmlFor="addTag"
								disabled={props.disabled}>
								Search Company Name
							</Label>
							<Input
								id='addTag'
								{...props}
							/>
						</div>
						<Button
							icon={<ArrowRight24Filled />}
							iconPosition='after'
							appearance='primary'
							type='submit'>
							Search
						</Button>
					</form>
				</section>
				<SkeletonEl />
			</section>
		);
	} else {
		return (
			<>
				<section className='watchListForm__container'>
					<h1>Your Watchlist</h1>
					<form
						className='watchListForm'
						onSubmit={searchFormHandler}>
						<div className='watchListForm__input'>
							<Label
								htmlFor="addTag"
								disabled={props.disabled}>
								Search Company Name
							</Label>
							<Input
								id='addTag'
								{...props}
							/>
						</div>
						<Button
							icon={<ArrowRight24Filled />}
							iconPosition='after'
							appearance='primary'
							type='submit'>
							Search
						</Button>
					</form>
				</section>
				<section>
					<h2>All Warn Notices</h2>
					<div className='card-container'></div>
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
						<TableBody className='warnTable'>
							{watchListData.map((el: any, i: number) => {
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
				</section>
			</>
		);
	}
};
