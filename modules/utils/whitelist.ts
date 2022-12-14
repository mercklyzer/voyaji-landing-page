const whitelisted = [
  "0xBa1CFC31258Ff78a5Dc3A1589a8Ead46c01e4267",
  "0xBa5C6E7D5f786797Bf90Df628479696347704043",
];

function isWhitelisted(address: string) {
  return whitelisted.includes(address);
}

export { isWhitelisted };
