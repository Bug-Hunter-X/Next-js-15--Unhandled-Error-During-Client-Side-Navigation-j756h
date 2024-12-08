```javascript
// pages/about.js

export default function About() {
  throw new Error('Intentional error');
}
```
```javascript
// pages/index.js
import Link from 'next/link';
import {ErrorBoundary} from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Link href="/about">
          <a>Go to About</a>
        </Link>
      </ErrorBoundary>
    </div>
  );
}
```