import React, { useEffect, useState } from "react";
import { recieveRecipes } from "../../../../actions/recieveRecipes";
import RecipeItem from "../../recipeItem";
import { useSelector, useDispatch } from "react-redux";
import "../../style.scss";
import { Pagination } from "../../pagination";

const Lunch = (props) => {
	// pagination variables
	const [perPage, setPerPage] = useState(6);
	const [leftSlice, setLeftSlice] = useState(0);
	const [rightSlice, setRightSlice] = useState(6);
	const [pageNumber, setPageNumber] = useState(0);
	const [currentPage, setCurrentPage] = useState(0);
	// sorting variables
	const [sortType, setSortType] = useState({ type: "Date", direction: "asc" });

	// getting recipes here
	const dispatch = useDispatch();
	const fetchRecipes = () => {
		dispatch(recieveRecipes());
	};
	useEffect(fetchRecipes, []);
	const recipeList = useSelector((state) => state.listPageReducer.recipes);
	// console.log(recipeList);

	// setting pagination
	const handleClick = (event) => {
		// hooks are async, hence when I use (setCurrentPage) it changes with delay
		// hence setLeftSlice runs before CurrentPage changes
		// hence I need to use the variable directly
		setCurrentPage(event.target.value);
		setLeftSlice(event.target.value * perPage);
		setRightSlice(event.target.value * perPage + perPage);
	};
	const handleSelect = (event) => {
		// same as above
		setPerPage(event.target.value);
		setLeftSlice(currentPage * event.target.value);
		setRightSlice(currentPage * event.target.value + event.target.value);
	};

	useEffect(() => {
		setPageNumber(Math.ceil(recipeList.length / perPage));
	}, [perPage, recipeList.length]);

	// sorting
	const handleSort = (event) => {
		console.log(event.target.value.split(":").slice(1, 2)[0]);
		setSortType({
			direction: event.target.value.split(":").slice(1, 2)[0],
			type: event.target.value.split(":").slice(0, 1)[0],
		});
	};

	const sortingFunc = (a, b) => {
		let id_a = a.id;
		let id_b = b.id;
		if (sortType.type === "Date" && sortType.direction === "asc") {
			if (id_a > id_b) return 1;
			if (id_a === id_b) return 0;
			else return -1;
		}
		if (sortType.type === "Date" && sortType.direction === "desc") {
			if (id_a < id_b) return 1;
			if (id_a === id_b) return 0;
			else return -1;
		}
	};

	return (
		<div className="listContainer">
			<div className="container-fluid">
				<div className="pagBorder">
					<div className="row no-gutters justify-content-center">
						<div className="col-lg-3 perPage">
							<select
								className="form-control"
								value={perPage}
								onChange={handleSelect}
							>
								<option value="3">3 recipes per page</option>
								<option value="6">6 recipes per page</option>
								<option value="12">12 recipes per page</option>
							</select>
						</div>
						<div className="col-lg-3 paginationHelper">
							<ul className="pagination justify-content-center">
								<Pagination
									props={{
										handleClick,
										recipeList,
										perPage,
										pageNumber,
									}}
								/>
							</ul>
						</div>
						<div className="col-lg-3">
							<select
								className="form-control"
								value={`${sortType.type}:${sortType.direction}`}
								onChange={handleSort}
							>
								<option value="Date:asc">Date: Ascending</option>
								<option value="Date:desc">Date: Descending</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<div className="container justify-content-centre">
				<div className="row justify-content-centre">
					{recipeList.length > 0 &&
						recipeList
							.filter((recipe) => recipe.recipe_type === "Lunch")
							.sort(sortingFunc)
							.map((recipe) => <RecipeItem {...recipe} key={recipe.id} />)
							.slice(leftSlice, rightSlice)}
				</div>
			</div>
		</div>
	);
};

export default Lunch;
