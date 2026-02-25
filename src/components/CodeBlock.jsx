import { useState } from 'react';

export default function CodeBlock({ lang = 'bash', children }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(children).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="code-block">
      <div className="code-block-header">
        <span>{lang}</span>
        <button className="code-block-copy" onClick={copy}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre><code>{children}</code></pre>
    </div>
  );
}
