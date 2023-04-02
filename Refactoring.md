# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
There wasn't much I would want to change. To me it seem readable as is for the most part. The main thing that was immediately noticeable, was the lack of comments, so I added those and changed the returned variable name to `result` and changed the `TRIVIAL_PARTITION_KEY`, since that felt more appropriate. The variable name was also changed in the test file.

I also added some extra returns as there was no need to wait that long to return the result as there wasn't anything else being ran on the data/current result.