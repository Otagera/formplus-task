import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Template from "./Template";
import { fetchAllTemplates } from "../../redux/actions/templates";

function Templates() {
	const [page, setPage] = useState(0);
	const [screenWidth, setScreenWidth] = useState(0);
	const [offset, setOffset] = useState(0);
	const [pageCount, setPageCount] = useState(5);
	const [perPage] = useState(10);
	const [localTemplates, setLocalTemplates] = useState([]);

	const dispatch = useDispatch();
	const templatesStore = useSelector((state) => state.templates);
	const { templates, selectedCategory, loadingTemplates } = templatesStore;


	const resize = ()=> {
    setScreenWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener("resize", resize.bind(this));
    resize();
	  return () => window.removeEventListener("resize", resize.bind(this));;
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [resize]);

	useEffect(() => {
		dispatch(fetchAllTemplates());
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setPageCount(Math.ceil(templates.length / perPage));
		setLocalTemplates(
			templates.slice(offset, offset > 10 ? offset + perPage : perPage)
		);
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [templates]);

	useEffect(() => {
		setLocalTemplates(templates.slice(offset, offset + perPage));
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [offset, perPage]);

	const handlePageClick = (data) => {
		const { selected } = data;
		setPage(selected);
		let offset = Math.ceil(selected * perPage);
		setOffset(offset);
	};

	let dummy = loadingTemplates ? (
		<div className='m-auto'>
			<Loader type="ThreeDots" color="#6b7280" height={80} width={80} />
		</div>
	) : null;
	if (localTemplates?.length > 0) {
		dummy = localTemplates.map((template, i) => {
			return <Template key={i} templateData={template} />;
		});
	}
	return (
		<div>
			<section className="flex flex-row justify-between">
				<p>{selectedCategory} Templates</p>
				<p>
					{templatesStore.templates?.length} template
					{templatesStore.templates?.length > 1 ? "s" : null}
				</p>
			</section>
			<SimpleBar style={{ maxHeight: 500 }} className="w-full">
				<section className="flex flex-row flex-wrap justify-between">
					{dummy}
				</section>
			</SimpleBar>
			<ReactPaginate
				previousLabel={"Previous"}
				nextLabel={"Next"}
				breakLabel={"..."}
				breakClassName={"break-me"}
				pageCount={pageCount}
				marginPagesDisplayed={1}
				pageRangeDisplayed={screenWidth < 500? 1: 3}
				initialPage={page}
				onPageChange={handlePageClick}
				containerClassName={
					"flex flex-row justify-between px-2 lg:px-20 mt-5 font-bold"
				}
				activeClassName={"border rounded-sm px-5 lg:py-1"}
			/>
		</div>
	);
}
export default Templates;
