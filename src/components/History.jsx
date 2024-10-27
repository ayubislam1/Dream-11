import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import { AllPlayers } from "./AllPlayers";


export const History = ({ players, handleDelete, isActive, handleButton }) => {
	if (!Array.isArray(players)) {
		return;
	}

	return (
		<>
			<div className="container mx-auto p-5 border mt-5 space-y-3">
				<div>
					<h1 className="text-sm md:text-2xl font-extrabold ml-2">
						Selected Players <span id="change">({players.length}</span>/6)
					</h1>
				</div>

				{players.map((p) => (
					<div key={p.id}>
						<div className="collapse bg-base-100 border">
							<div className="flex justify-between items-center">
								<div className="flex items-center">
									<div className="p-5">
										<img src={p.img} className="w-24 rounded-lg" alt={p.name} />
									</div>
									<div className="space-y-1">
										<h1 className="items-start  font-bold">{p.name}</h1>
										<p>{p.category}</p>
									</div>
								</div>
								<div className="mr-5">
									<button
										onClick={() => handleDelete(p.id)}
										className="btn text-red-500"
									>
										<MdDelete />
									</button>
								</div>
							</div>
						</div>
					</div>
				))}

				<button
					onClick={() => handleButton("available")}
					className="btn bg-[#E7FE29]"
				>
					Add More Players
				</button>

				{isActive.available ? <AllPlayers></AllPlayers> : ""}
			</div>
		</>
	);
};

History.propTypes = {
	players: PropTypes.array.isRequired,
	handleDelete: PropTypes.func.isRequired,
	isActive: PropTypes.object.isRequired,
	handleButton: PropTypes.func.isRequired,
};
