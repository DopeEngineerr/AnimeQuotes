import React, { useEffect, useState } from "react";

const Quotes = () => {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		try {
			const response = await fetch("https://animechan.vercel.app/api/quotes");
			console.log(response);
			//const data = await response.json();
			setUsers(await response.json());
			//console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className="font">
			{users.map((currElem) => {
				return (
					<div className="xd ">
						<div className="box ">
							<div className="container  ">
								<div className="row">
									<div className="col l12 white-text bruh">
										<p className="quote">{currElem.quote}</p>
										<p className="by">
											-{currElem.character}
											<span className="from"> ({currElem.anime})</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Quotes;
