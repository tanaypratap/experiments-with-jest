import getUser from "./get-user";
import * as axios from "axios";

jest.mock("axios");

describe("get user service", () => {
    
	test("should return user when API call is successful", async () => {
		axios.get.mockResolvedValue({ data: { name: "Tanay", age: 30 } });
		const user = await getUser();

        expect(user).toEqual({ name: "Tanay", age: 30 });

	});

    test("should return errorMessage when API is call fails", async () => {
        axios.get.mockRejectedValue({ isAxiosError: true, response: { data: { errorMessage: "user not found"}}});

        axios.isAxiosError.mockImplementation((payload) => true)
        
            const user = await getUser();
            expect(user).toEqual({ errorMessage: "user not found" });

            expect(axios.isAxiosError).toBeCalledTimes(1)
        
    })
});
