import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Button } from "./components/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const [isActive, setActive] = useState({
		available: true,
	});
	const [players, setPlayer] = useState([]);

	const handleButton = (status) => {
		setActive({
			available: status === "available",
		});
	};

	const handleDelete = (id) => {
		const newPlayer = players.filter((p) => p.id !== id);
		setPlayer(newPlayer);
		toast.warn("player removed", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	};

	const handlePlayer = (player) => {
		const isExist = players.find((p) => p.id === player.id);
		const coinValue = document.getElementById("coin");
		const value = parseFloat(coinValue.innerText);

		if (isExist) {
			toast.error("Sorry this player is already in your squad.", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			return;
		}

		if (value < player.price) {
			toast.error("Not enough money to buy this player. Claim some Credit.", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			return;
		}

		if (players.length < 6) {
			const newPlayer = [...players, player];
			setPlayer(newPlayer);
			coinValue.innerText = value - player.price;

			toast.success(`Congratulations!! ${player.name} is in your squad.`, {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		} else {
			toast.error("You can only have up to 6 players in your squad.", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
	};

	return (
		<>
			<Navbar />
			<Hero />
			<Button
				isActive={isActive}
				handleButton={handleButton}
				handlePlayer={handlePlayer}
				players={players}
				handleDelete={handleDelete}
			/>
			<Footer />
		</>
	);
}

export default App;
