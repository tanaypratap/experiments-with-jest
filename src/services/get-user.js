import axios from "axios";

async function getUser() {
	try {
		const response = await axios.get("https://be-ask.tanaypratap.repl.co/test");
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const serverError = error;
			if (serverError && serverError.response) {
				return serverError.response.data;
			}
		}
		
		return { errorMessage: "something went wrong!" };
	}
}

export default getUser;
