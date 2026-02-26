import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';
import PageNav from '../components/PageNav';
import { GithubMockup, TerminalOutput } from '../components/GithubMockup';

export default function PushPull() {
  return (
    <>
      <h1>Push & Pull</h1>
      <p>로컬 변경 사항을 GitHub에 올리고, GitHub의 변경 사항을 내려받는 방법.</p>

      {/* ===== Push ===== */}
      <h2 id="push">Push — 올리기</h2>
      <p>로컬 커밋을 GitHub에 업로드합니다.</p>
      <CodeBlock>git push</CodeBlock>

      <TerminalOutput command="git push">
        <div style={{ color: '#e6edf3' }}>Enumerating objects: 5, done.</div>
        <div style={{ color: '#e6edf3' }}>Counting objects: 100% (5/5), done.</div>
        <div style={{ color: '#e6edf3' }}>Writing objects: 100% (3/3), 312 bytes | 312.00 KiB/s, done.</div>
        <div style={{ color: '#e6edf3' }}>Total 3 (delta 1), reused 0 (delta 0)</div>
        <div style={{ color: '#e6edf3' }}>To https://github.com/your-username/my-first-repo.git</div>
        <div style={{ color: '#e6edf3' }}>&nbsp;&nbsp; f4e5d6c..a1b2c3d  <span style={{ color: '#3fb950' }}>main → main</span></div>
      </TerminalOutput>

      <p>push가 완료되면 GitHub에서 확인할 수 있습니다.</p>

      <GithubMockup title="github.com/your-username/my-first-repo">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <span style={{
            padding: '0.2rem 0.6rem', borderRadius: 6, fontSize: '0.78rem',
            background: '#21262d', border: '1px solid #30363d', color: '#e6edf3',
            display: 'flex', alignItems: 'center', gap: '0.3rem',
          }}>
            🔀 main ▾
          </span>
          <span style={{ color: '#8b949e', fontSize: '0.8rem' }}>2 commits</span>
        </div>
        <div style={{
          border: '1px solid #30363d', borderRadius: 8, overflow: 'hidden',
        }}>
          <div style={{
            background: '#161b22', padding: '0.5rem 0.75rem',
            borderBottom: '1px solid #30363d',
            display: 'flex', justifyContent: 'space-between',
            fontSize: '0.82rem',
          }}>
            <span style={{ color: '#e6edf3' }}>your-username <span style={{ color: '#8b949e' }}>README에 인사 추가</span></span>
            <span style={{ color: '#8b949e' }}>now</span>
          </div>
          {[
            { icon: '📄', name: 'README.md', msg: 'README에 인사 추가' },
          ].map((f, i) => (
            <div key={i} style={{
              padding: '0.45rem 0.75rem',
              borderBottom: '1px solid #21262d',
              display: 'flex', justifyContent: 'space-between',
              fontSize: '0.82rem',
            }}>
              <span><span style={{ marginRight: '0.5rem' }}>{f.icon}</span><span style={{ color: '#58a6ff' }}>{f.name}</span></span>
              <span style={{ color: '#8b949e' }}>{f.msg}</span>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: '1rem', padding: '0.75rem',
          border: '1px solid #30363d', borderRadius: 8,
          fontSize: '0.9rem',
        }}>
          <div style={{ color: '#e6edf3', fontWeight: 700, fontSize: '1.1rem' }}>My First Repo</div>
          <div style={{ color: '#8b949e', marginTop: '0.25rem' }}>Hello, Git!</div>
        </div>
      </GithubMockup>

      {/* ===== Pull ===== */}
      <h2 id="pull">Pull — 내려받기</h2>
      <p>GitHub에 있는 최신 변경 사항을 로컬로 가져옵니다.</p>
      <CodeBlock>git pull</CodeBlock>

      <TerminalOutput command="git pull">
        <div style={{ color: '#e6edf3' }}>remote: Enumerating objects: 4, done.</div>
        <div style={{ color: '#e6edf3' }}>remote: Counting objects: 100% (4/4), done.</div>
        <div style={{ color: '#e6edf3' }}>Unpacking objects: 100% (2/2), done.</div>
        <div style={{ color: '#e6edf3' }}>From https://github.com/your-username/my-first-repo</div>
        <div style={{ color: '#e6edf3' }}>&nbsp;&nbsp; a1b2c3d..b2c3d4e  main → origin/main</div>
        <div style={{ color: '#e6edf3' }}>Updating a1b2c3d..b2c3d4e</div>
        <div style={{ color: '#e6edf3' }}>Fast-forward</div>
        <div style={{ color: '#e6edf3' }}>&nbsp;README.md | <span style={{ color: '#3fb950' }}>1 +</span></div>
        <div style={{ color: '#e6edf3' }}>&nbsp;1 file changed, 1 insertion(+)</div>
      </TerminalOutput>

      <Callout type="info">
        협업할 때는 항상 작업 전에 <code>git pull</code>을 먼저 실행하는 습관을 들이세요.
      </Callout>

      {/* ===== Clone ===== */}
      <h2 id="clone">Clone — 복제하기</h2>
      <p>다른 사람의 저장소(또는 내 다른 컴퓨터)에서 프로젝트를 처음 가져올 때:</p>
      <CodeBlock>git clone https://github.com/유저이름/저장소이름.git</CodeBlock>

      <TerminalOutput command="git clone https://github.com/your-username/my-first-repo.git">
        <div style={{ color: '#e6edf3' }}>Cloning into 'my-first-repo'...</div>
        <div style={{ color: '#e6edf3' }}>remote: Enumerating objects: 6, done.</div>
        <div style={{ color: '#e6edf3' }}>remote: Total 6 (delta 1), reused 6 (delta 1)</div>
        <div style={{ color: '#e6edf3' }}>Receiving objects: 100% (6/6), done.</div>
      </TerminalOutput>

      <p>clone 하면 자동으로 remote 설정까지 완료됩니다.</p>

      {/* ===== 요약 ===== */}
      <h2 id="summary">전체 흐름 요약</h2>
      <CodeBlock>{`# 1. 최신 코드 받기
git pull

# 2. 파일 수정 후 커밋
git add .
git commit -m "변경 내용"

# 3. GitHub에 올리기
git push`}</CodeBlock>

      <PageNav current="/push-pull" />
    </>
  );
}
