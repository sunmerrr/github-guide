// GitHub UI 모의 화면
export function GithubMockup({ title, children }) {
  return (
    <div style={{
      background: '#0d1117',
      border: '1px solid #30363d',
      borderRadius: 8,
      overflow: 'hidden',
      marginBottom: '1.25rem',
      fontSize: '0.875rem',
    }}>
      <div style={{
        background: '#161b22',
        borderBottom: '1px solid #30363d',
        padding: '0.6rem 1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}>
        <span style={{ color: '#8b949e', fontSize: '0.8rem' }}>{title}</span>
      </div>
      <div style={{ padding: '1rem 1.25rem' }}>
        {children}
      </div>
    </div>
  );
}

// 터미널 출력 모의 화면
export function TerminalOutput({ command, children }) {
  return (
    <div style={{
      background: '#0d1117',
      border: '1px solid #30363d',
      borderRadius: 8,
      overflow: 'hidden',
      marginBottom: '1.25rem',
      fontFamily: "'SF Mono', 'Fira Code', 'Cascadia Code', monospace",
      fontSize: '0.84rem',
      lineHeight: 1.7,
    }}>
      <div style={{
        background: '#161b22',
        borderBottom: '1px solid #30363d',
        padding: '0.4rem 0.75rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}>
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#f85149' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#d29922' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#3fb950' }} />
        <span style={{ color: '#8b949e', fontSize: '0.75rem', marginLeft: '0.25rem' }}>Terminal</span>
      </div>
      <div style={{ padding: '0.75rem 1rem' }}>
        {command && (
          <div style={{ color: '#8b949e', marginBottom: '0.5rem' }}>
            <span style={{ color: '#3fb950' }}>$</span> {command}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

// GitHub 버튼 모의
export function MockButton({ children, primary, color }) {
  const bg = color || (primary ? '#238636' : '#21262d');
  return (
    <span style={{
      display: 'inline-block',
      padding: '0.4rem 1rem',
      borderRadius: 6,
      fontWeight: 600,
      fontSize: '0.85rem',
      background: bg,
      color: primary ? '#fff' : '#c9d1d9',
      border: primary ? '1px solid rgba(240,246,252,0.1)' : '1px solid #30363d',
    }}>
      {children}
    </span>
  );
}
