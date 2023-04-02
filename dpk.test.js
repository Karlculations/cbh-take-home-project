const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const result = deterministicPartitionKey();
    expect(result).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  let event = {
    "partitionKey": "1234567890"
  };

  it("Returns the defined partition key when given the input is less than 256 in length", () => {
    const result = deterministicPartitionKey(event);
    expect(result).toBe(event.partitionKey);
  });
});

describe("deterministicPartitionKey", () => {
  let event = "1234567890";

  it("Returns the hex of the given input, when there's an event as a string", () => {
    const result = deterministicPartitionKey(event);
    expect(result).not.toBe(event);
  });
});

describe("deterministicPartitionKey", () => {
  let event = {
    "partitionKey": "123456ae01jd09wjd09w8dh9ae01jd09wjd09whd19dh91ae01jd09wjd09wqae01jd09wjd09wjd0ajr0r1jd09j01dsjojd091jd01dj1kdo1kdd"
  };

  it("Returns the hex of the defined partition key when given the input is larger than 256 in length", () => {
    const result = deterministicPartitionKey(event);
    expect(result).toBe(event.partitionKey);
  });
});

describe("deterministicPartitionKey", () => {
  let event = {
    "partitionKey": 1234567890
  };

  it("Returns the hex of the defined partition key when given the input is not a string", () => {
    const result = deterministicPartitionKey(event);
    expect(typeof result).toBe("string");
  });
});
