import PropTypes from "prop-types";
import { AllPlayers } from "./AllPlayers";
import { History } from "./History";
export const Button = ({ handleButton, isActive, handlePlayer, players,handleDelete }) => {
	return (
		<>
			<div className="container md:mx-auto mt-10 px-5">
				<div className="flex  md:justify-between items-center space-x-10 md:space-x-2 ">
					<h1 className="md:flex-1 text-sm md:text-xl font-extrabold"></h1>
					<div>
						<button
							onClick={() => handleButton("available")}
							className={`${isActive.available ? "bg-[#E7FE29] btn" : "btn"}`}
						>
							Available
						</button>
					</div>
					<div>
						<button
							onClick={() => handleButton("select")}
							className={`${isActive.available ? "btn" : "bg-[#E7FE29] btn"}`}
						>
							Selected <span id="btn-select">({players.length})</span>
						</button>
					</div>
				</div>
			</div>
			{isActive.available ? (
				<AllPlayers handlePlayer={handlePlayer}></AllPlayers>
			) : (
				<History players={players} isActive={isActive} handleButton={handleButton} handleDelete={handleDelete}></History>
			)}
		</>
	);
};
Button.propTypes = {
	isActive: PropTypes.object.isRequired,
	handleButton: PropTypes.object.isRequired,
	handlePlayer: PropTypes.object.isRequired,
	players: PropTypes.object.isRequired,
	handleDelete: PropTypes.object.isRequired,
};
