## Next.js 15 Unhandled Error During Client-Side Navigation

This repository demonstrates a common issue in Next.js 15 applications where errors thrown on client-side navigations are not properly handled.  The `pages/about.js` intentionally throws an error. This causes a bad user experience.

**How to Reproduce:**

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`. You'll see an error in the console or a blank page.

**Solution:** The solution is shown in `bugSolution.js`. Error boundaries are used to catch and display a custom error message, preventing unexpected behavior.  This improved approach provides a better user experience.