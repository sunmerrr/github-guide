const TITLES = {
  tip: 'TIP',
  warn: 'WARNING',
  info: 'INFO',
};

export default function Callout({ type = 'tip', children }) {
  return (
    <div className={`callout ${type}`}>
      <div className="callout-title">{TITLES[type] || type.toUpperCase()}</div>
      <p>{children}</p>
    </div>
  );
}
