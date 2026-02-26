import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';
import PageNav from '../components/PageNav';
import { TerminalOutput } from '../components/GithubMockup';

export default function Branch() {
  return (
    <>
      <h1>Branch</h1>
      <p>브랜치를 사용하면 기존 코드에 영향 없이 새로운 작업을 할 수 있습니다.</p>

      <h2 id="what-is-branch">브랜치란?</h2>
      <p>
        <strong>main</strong> 브랜치 = 안정된 코드.
        새 기능이나 수정은 별도 브랜치에서 작업한 뒤, 완료되면 main에 합칩니다.
      </p>

      <h2 id="why-branch">왜 브랜치를 쓰나요?</h2>
      <ul>
        <li><strong>안전한 실험</strong> — main 코드를 건드리지 않고 새 기능을 시도할 수 있습니다</li>
        <li><strong>동시 작업</strong> — 여러 사람이 각자 브랜치에서 독립적으로 개발할 수 있습니다</li>
        <li><strong>깔끔한 이력</strong> — 기능별로 브랜치를 나누면 변경 이력을 추적하기 쉽습니다</li>
        <li><strong>쉬운 롤백</strong> — 문제가 생기면 해당 브랜치만 버리면 됩니다</li>
      </ul>

      <div style={{
        background: '#161b22', border: '1px solid #30363d', borderRadius: 8,
        padding: '1.25rem', marginBottom: '1.25rem', textAlign: 'center',
        fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: 2.2,
      }}>
        <div>
          <span style={{ color: '#3fb950' }}>● ── ● ── ●</span>
          <span style={{ color: '#8b949e' }}> ─── </span>
          <span style={{ color: '#3fb950' }}>● ── ●</span>
          <span style={{ color: '#8b949e', fontSize: '0.78rem' }}> (main)</span>
        </div>
        <div style={{ color: '#8b949e' }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╲
        </div>
        <div>
          <span style={{ color: '#8b949e' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span style={{ color: '#58a6ff' }}>● ── ●</span>
          <span style={{ color: '#8b949e', fontSize: '0.78rem' }}> (feature/hello)</span>
        </div>
      </div>

      {/* ===== 1 ===== */}
      <h2 id="create-branch">1. 브랜치 만들기 & 전환</h2>
      <CodeBlock>git checkout -b feature/hello</CodeBlock>
      <p>
        <code>-b</code> 옵션은 브랜치 생성 + 전환을 한번에 합니다.
      </p>

      <TerminalOutput command="git checkout -b feature/hello">
        <div style={{ color: '#e6edf3' }}>Switched to a new branch <span style={{ color: '#58a6ff' }}>'feature/hello'</span></div>
      </TerminalOutput>

      {/* ===== 2 ===== */}
      <h2 id="check-branch">2. 현재 브랜치 확인</h2>
      <CodeBlock>git branch</CodeBlock>

      <TerminalOutput command="git branch">
        <div style={{ color: '#3fb950' }}>* feature/hello</div>
        <div style={{ color: '#e6edf3' }}>&nbsp; main</div>
      </TerminalOutput>

      <p>별표(<code>*</code>)와 초록색이 현재 브랜치입니다.</p>

      {/* ===== 3 ===== */}
      <h2 id="work-on-branch">3. 브랜치에서 작업 & 커밋</h2>
      <CodeBlock>{`echo "새 기능 추가" >> README.md
git add .
git commit -m "feature: 인사 기능 추가"`}</CodeBlock>

      <TerminalOutput command='git commit -m "feature: 인사 기능 추가"'>
        <div style={{ color: '#e6edf3' }}>[feature/hello c3d4e5f] feature: 인사 기능 추가</div>
        <div style={{ color: '#e6edf3' }}>&nbsp;1 file changed, 1 insertion(+)</div>
      </TerminalOutput>

      {/* ===== 4 ===== */}
      <h2 id="switch-branch">4. 브랜치 전환</h2>
      <CodeBlock>git checkout main</CodeBlock>

      <TerminalOutput command="git checkout main">
        <div style={{ color: '#e6edf3' }}>Switched to branch <span style={{ color: '#3fb950' }}>'main'</span></div>
      </TerminalOutput>

      <Callout type="info">
        main으로 돌아오면 방금 수정한 내용은 보이지 않습니다. 브랜치가 분리되어 있기 때문입니다.
        다시 <code>git checkout feature/hello</code>하면 수정 내용이 돌아옵니다.
      </Callout>

      {/* ===== 5 ===== */}
      <h2 id="push-branch">5. 브랜치 push</h2>
      <CodeBlock>git push -u origin feature/hello</CodeBlock>

      <TerminalOutput command="git push -u origin feature/hello">
        <div style={{ color: '#e6edf3' }}>Total 3 (delta 1), reused 0 (delta 0)</div>
        <div style={{ color: '#e6edf3' }}>remote:</div>
        <div style={{ color: '#e6edf3' }}>remote: Create a pull request for 'feature/hello' on GitHub by visiting:</div>
        <div style={{ color: '#58a6ff' }}>remote:&nbsp;&nbsp;https://github.com/your-username/my-first-repo/pull/new/feature/hello</div>
        <div style={{ color: '#e6edf3' }}>remote:</div>
        <div style={{ color: '#e6edf3' }}>To https://github.com/your-username/my-first-repo.git</div>
        <div style={{ color: '#e6edf3' }}>&nbsp;* [new branch]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#3fb950' }}>feature/hello → feature/hello</span></div>
        <div style={{ color: '#e6edf3' }}>Branch 'feature/hello' set up to track remote branch 'feature/hello' from 'origin'.</div>
      </TerminalOutput>

      <Callout type="tip">
        브랜치 이름은 <code>feature/기능명</code>, <code>fix/버그명</code> 형식을 추천합니다.
      </Callout>

      <PageNav current="/branch" />
    </>
  );
}
