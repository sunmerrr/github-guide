import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';
import PageNav from '../components/PageNav';
import { TerminalOutput } from '../components/GithubMockup';

export default function Conflict() {
  return (
    <>
      <h1>Conflict 해결</h1>
      <p>
        두 사람이 같은 파일의 같은 부분을 다르게 수정하면 Git은 자동으로 합칠 수 없습니다.
        이때 발생하는 것이 <strong>충돌(Conflict)</strong>이며, 사람이 직접 해결해야 합니다.
      </p>

      <h2 id="why-conflict">충돌은 왜 발생하나요?</h2>
      <p>
        브랜치 A와 브랜치 B가 같은 파일의 같은 줄을 서로 다르게 수정한 뒤
        merge하면 Git이 어느 쪽을 택해야 할지 모르기 때문입니다.
      </p>
      <div style={{
        background: '#161b22', border: '1px solid #30363d', borderRadius: 8,
        padding: '1rem 1.25rem', marginBottom: '1.25rem',
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem',
        fontSize: '0.85rem', justifyContent: 'center',
      }}>
        {['A가 1줄 수정', 'B도 같은 줄 수정', 'Merge 시도', '충돌 발생!'].map((step, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              background: '#21262d', border: '1px solid #30363d', borderRadius: 6,
              padding: '0.35rem 0.7rem', color: i === 3 ? '#f85149' : '#e6edf3', whiteSpace: 'nowrap',
              fontWeight: i === 3 ? 600 : 400,
            }}>{step}</span>
            {i < 3 && <span style={{ color: '#30363d' }}>→</span>}
          </span>
        ))}
      </div>

      <Callout type="info">
        충돌은 에러가 아닙니다. Git이 "이건 사람이 판단해달라"고 알려주는 것뿐입니다.
      </Callout>

      <h2 id="reproduce">1. 충돌 재현해보기</h2>
      <p><code>main</code>과 <code>feature</code> 브랜치에서 같은 줄을 다르게 수정합니다.</p>
      <CodeBlock title="main 브랜치에서">{`echo "Hello from main" > greeting.txt
git add greeting.txt
git commit -m "main: greeting 추가"`}</CodeBlock>

      <CodeBlock title="feature 브랜치에서">{`git checkout -b feature/greeting
echo "Hello from feature" > greeting.txt
git add greeting.txt
git commit -m "feature: greeting 수정"`}</CodeBlock>

      <CodeBlock title="main으로 돌아와서 merge">{`git checkout main
git merge feature/greeting`}</CodeBlock>

      <TerminalOutput command="git merge feature/greeting">
        <div style={{ color: '#f85149' }}>
          Auto-merging greeting.txt{'\n'}
          CONFLICT (content): Merge conflict in greeting.txt{'\n'}
          Automatic merge failed; fix conflicts and then commit the result.
        </div>
      </TerminalOutput>

      <h2 id="markers">2. 충돌 마커 읽기</h2>
      <p>
        충돌이 발생한 파일을 열면 Git이 삽입한 <strong>충돌 마커</strong>를 볼 수 있습니다.
      </p>
      <CodeBlock title="greeting.txt">{`<<<<<<< HEAD
Hello from main
=======
Hello from feature
>>>>>>> feature/greeting`}</CodeBlock>
      <ul>
        <li><code>{'<<<<<<< HEAD'}</code> — 현재 브랜치(main)의 내용 시작</li>
        <li><code>{'======='}</code> — 구분선</li>
        <li><code>{'>>>>>>> feature/greeting'}</code> — merge 대상 브랜치의 내용 끝</li>
      </ul>

      <Callout type="warn">
        충돌 마커(<code>{'<<<'}</code>, <code>{'==='}</code>, <code>{'>>>'}</code>)가 파일에 남아있으면 코드가 정상 동작하지 않습니다.
        반드시 마커를 모두 제거해야 합니다.
      </Callout>

      <h2 id="resolve">3. 충돌 해결하기</h2>
      <p>
        마커를 지우고, 최종 결과물만 남깁니다.
        두 내용 중 하나를 고르거나, 합치거나, 완전히 새로 작성할 수 있습니다.
      </p>
      <CodeBlock title="greeting.txt (해결 후)">{`Hello from main and feature`}</CodeBlock>

      <h2 id="commit-after">4. 해결 후 커밋</h2>
      <p>충돌을 해결했으면 평소처럼 <code>add</code> → <code>commit</code> 합니다.</p>
      <CodeBlock>{`git add greeting.txt
git commit -m "merge: greeting 충돌 해결"`}</CodeBlock>

      <TerminalOutput command="git log --oneline -3">
        <div style={{ color: '#e6edf3' }}>
          a1b2c3d merge: greeting 충돌 해결{'\n'}
          f4e5d6c feature: greeting 수정{'\n'}
          7g8h9i0 main: greeting 추가
        </div>
      </TerminalOutput>

      <Callout type="tip">
        VS Code에서는 충돌이 발생하면 "Accept Current Change / Accept Incoming Change / Accept Both" 버튼이
        자동으로 나타나서 클릭 한 번으로 해결할 수 있습니다.
      </Callout>

      <h2 id="conflict-commands">자주 쓰는 충돌 관련 명령어</h2>
      <table className="cheat-table">
        <thead>
          <tr><th>명령어</th><th>설명</th></tr>
        </thead>
        <tbody>
          <tr><td><code>git status</code></td><td>충돌 파일 확인 (both modified)</td></tr>
          <tr><td><code>git diff</code></td><td>충돌 내용 비교</td></tr>
          <tr><td><code>git merge --abort</code></td><td>merge 취소, 충돌 전 상태로 되돌리기</td></tr>
          <tr><td><code>git add &lt;파일&gt;</code></td><td>충돌 해결 완료 표시</td></tr>
          <tr><td><code>git commit</code></td><td>merge 커밋 생성</td></tr>
        </tbody>
      </table>

      <Callout type="info">
        충돌이 너무 복잡하면 <code>git merge --abort</code>로 merge를 취소하고
        처음부터 다시 시도할 수 있습니다. 당황하지 마세요!
      </Callout>

      <PageNav current="/conflict" />
    </>
  );
}
