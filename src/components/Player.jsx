import PropTypes from "prop-types";
import { FaUserLarge } from "react-icons/fa6";
import { BsFlagFill } from "react-icons/bs";

export const Player = ({ player,handlePlayer }) => {
	const { name, img, category, rating, price, teamName, type } = player;

	return (
		<>
			<div className="container mx-auto px-4 md:px-12  bottom-10 ">
				<div className="card bg-base-100 md:w-96 border mt-5">
					<figure className="px-3 pt-3 h-[200px] object-cover">
						<img src={img} alt="Shoes" className="rounded-xl w-full h-full" />
					</figure>
					<div className="card-body -m-3">
						<h2 className="card-title">
							<FaUserLarge className="mb-1" />
							{name}
						</h2>
						<div className="flex  mt-2">
							<p className="flex items-center gap-1 text-base text-gray-400">
								<BsFlagFill className="text-gray-600" /> {teamName}
							</p>
							<button className="py-1 px-3 text-sm bg-base-300 rounded-lg">
								{category}
							</button>
						</div>
						<hr />
						<div className=" justify-end">
							<p>{rating}</p>

							<div className="space-y-3 mt-2">
								<div className="flex gap-24 text-gray-400">
									<p>{type.bat}</p>
									<p>{type.ball || type.bat}</p>
								</div>
								<div className="flex items-center">
									<p>Price: {price}</p>
									<button
										onClick={() => handlePlayer(player)}
										className="btn text-sm hover:bg-[#E7FE29] "
									>
										Choose player
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
Player.propTypes = {
	player: PropTypes.object.isRequired,
	handlePlayer: PropTypes.object.isRequired,
};
