export function decodedValue(resistors: string[]): number {
  const hashMap: { [key: string]: string } = {
    black: "0",
    brown: "1",
    red: "2",
    orange: "3",
    yellow: "4",
    green: "5",
    blue: "6",
    violet: "7",
    grey: "8",
    white: "8",
  };

  const value_one = hashMap[resistors[0]];
  const value_two = hashMap[resistors[1]];

  const concat = value_one + value_two;

  return parseInt(concat);
}
