import { useEffect, useState } from "react";
import { Player } from "./Player";
import PropTypes from "prop-types";
export const AllPlayers = ({handlePlayer}) => {
	const [player, setPlayer] = useState([]);
	useEffect(() => {
		fetch("players.json")
			.then((res) => res.json())
			.then((data) => setPlayer(data));
	
	}, []);
	return (
		<div className="container  md:-mt-10">
         <h1 className=" text-sm md:text-2xl font-extrabold mt-5 md:mt-0 md:ml-10 text-center md:text-left">Available player</h1>
			
          <div className="grid col-span-1 md:col-span-2 lg:grid-cols-3 ">
            
          {
                player.map(player=> <Player key={player.id} handlePlayer={handlePlayer} player={player}></Player>)
            }
          </div>
		</div>
	);
};
AllPlayers.propTypes = {
	
	handlePlayer: PropTypes.object.isRequired,
};