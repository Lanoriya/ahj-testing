import luhn from "../components/luhn";

describe("card check container", () => {
  test("check 1", () => {
    expect(luhn("4112344112344113")).toBe(true);
    expect(luhn("5115245895012260")).toBe(true);
    expect(luhn("2906054742715293")).toBe(true);
    expect(luhn("377457240137908")).toBe(true);
    expect(luhn("1234561239")).toBe(true);
    expect(luhn("6011748198378017578")).toBe(true);
    expect(luhn("177457240137908")).toBe(false);
    expect(luhn("601174819837801757")).toBe(false);
    expect(luhn("4112344112344112")).toBe(false);
  });
});
