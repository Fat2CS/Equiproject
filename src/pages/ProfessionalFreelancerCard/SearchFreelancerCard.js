import React, { useState } from "react";
import Pronavbar from "@/components/Pronavbar";
import SearchFreelancer from "@/components/SearchFreelancer";
export default function FreelancerResultSearch() {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [skill, setSkill] = useState("");
	const [level, setLevel] = useState("");
	const [receiverID, setReceiverID] = useState(null);

	const handleSkillChange = (e) => {
		setSkill(e.target.value);
	};

	const handleLevelChange = (e) => {
		setLevel(e.target.value);
	};

	
	return (
		<div className="flex">
			<div className="mr-40">
				<Pronavbar />
			</div>
			<div className="flex flex-col items-center justify-center mt-10">
				<h1 className="text-2xl font-bold text-center mb-4 text-white">
					Search for a freelancer by required skills and level
				</h1>

				<form className="w-full max-w-sm">
					<div className="mb-4">
						<input
							id="Skill"
							name="Skill"
							type="text"
							placeholder="Skill"
							value={skill}
							onChange={handleSkillChange}
							autoComplete="off"
							required
							className="block w-full rounded-full border py-3.5 px-4 text-letter-grey focus:ring-letter-orange-600 bg-black sm:text-sm sm:leading-6 placeholder-letter-orange"
						/>
					</div>

					<div className="mb-4">
						<input
							id="Level"
							name="Level"
							type="text"
							placeholder="Level"
							value={level}
							onChange={handleLevelChange}
							autoComplete="off"
							required
							className="block w-full rounded-full border py-3.5 px-4 text-letter-grey focus:ring-letter-orange-600 bg-black sm:text-sm sm:leading-6 placeholder-letter-orange"
						/>
					</div>

					<div>
						{/* <button
							className="w-full rounded-full bg-letter-orange px-3 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-letter-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-letter-orange-600"
						>
							Valider
						</button> */}
					</div>
				</form>
				<SearchFreelancer setReceiverID={setReceiverID} skill={skill} level={level} />
			</div>
		</div>
	);
}
