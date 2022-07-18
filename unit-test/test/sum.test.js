import { sum } from "../src/sum"


test("sum test", () => {
    const result = sum(1,2);

    expect(result).toBe(3);
})