const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const DEFAULT_PARTITION_KEY = "0"; // Set the default result for when an event is null/undefined
  const MAX_PARTITION_KEY_LENGTH = 256; // Set the max key length for the partition key
  let result; // Variable to hold the result of the function

  // If the event exist, check for a partition key
  if (event) {
    // If key exists, then pass it to result, else create a string of the event data and hash the result
    if (event.partitionKey) {
      result = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      result = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }

  // If result has data then check if it's a string. If it isn't that means that the event data was empty, so return the trivial key.
  if (result) {
    if (typeof result !== "string") {
      result = JSON.stringify(result);
    }
  } else {
    return DEFAULT_PARTITION_KEY; // Just return the trivial key. No need to make unnecessary assignment.
  }

  // If result length is greater than the set max partition key length, create a hash
  if (result.length > MAX_PARTITION_KEY_LENGTH) {
    result = crypto.createHash("sha3-512").update(result).digest("hex");
  }
  return result;
};