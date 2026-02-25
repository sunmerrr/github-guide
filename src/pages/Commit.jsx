import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';
import PageNav from '../components/PageNav';
import { TerminalOutput } from '../components/GithubMockup';

export default function Commit() {
  return (
    <>
      <h1>Commit</h1>
      <p>파일을 수정하고, 변경 사항을 기록하는 과정입니다.</p>

      <h2>커밋의 흐름</h2>
      <p>
        <strong>파일 수정 → <code>git add</code> → <code>git commit</code></strong>
      </p>

      {/* ===== 1 ===== */}
      <h2>1. 파일 수정</h2>
      <p>README.md에 한 줄을 추가해봅시다.</p>
      <CodeBlock>{`echo "Hello, Git!" >> README.md`}</CodeBlock>

      {/* ===== 2 ===== */}
      <h2>2. 상태 확인</h2>
      <CodeBlock>git status</CodeBlock>
      <p>수정된 파일이 <strong style={{ color: '#f85149' }}>빨간색</strong>으로 표시됩니다. (아직 스테이징 안 됨)</p>

      <TerminalOutput command="git status">
        <div style={{ color: '#e6edf3' }}>On branch main</div>
        <div style={{ color: '#e6edf3' }}>Changes not staged for commit:</div>
        <div style={{ color: '#e6edf3' }}>&nbsp;&nbsp;(use "git add &lt;file&gt;..." to update what will be committed)</div>
        <div style={{ color: '#e6edf3' }}>&nbsp;</div>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#f85149' }}>modified:   README.md</span>
        </div>
      </TerminalOutput>

      {/* ===== 3 ===== */}
      <h2>3. 스테이징 (add)</h2>
      <CodeBlock>git add README.md</CodeBlock>
      <p>커밋할 파일을 선택합니다. 전체 파일을 추가하려면:</p>
      <CodeBlock>git add .</CodeBlock>

      <p>add 후 다시 status를 보면 <strong style={{ color: '#3fb950' }}>초록색</strong>으로 바뀝니다.</p>

      <TerminalOutput command="git status">
        <div style={{ color: '#e6edf3' }}>On branch main</div>
        <div style={{ color: '#e6edf3' }}>Changes to be committed:</div>
        <div style={{ color: '#e6edf3' }}>&nbsp;&nbsp;(use "git restore --staged &lt;file&gt;..." to unstage)</div>
        <div style={{ color: '#e6edf3' }}>&nbsp;</div>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#3fb950' }}>modified:   README.md</span>
        </div>
      </TerminalOutput>

      {/* ===== 4 ===== */}
      <h2>4. 커밋</h2>
      <CodeBlock>git commit -m "README에 인사 추가"</CodeBlock>

      <TerminalOutput command='git commit -m "README에 인사 추가"'>
        <div style={{ color: '#e6edf3' }}>[main a1b2c3d] README에 인사 추가</div>
        <div style={{ color: '#e6edf3' }}>&nbsp;1 file changed, 1 insertion(+)</div>
      </TerminalOutput>

      <Callout type="tip">
        커밋 메시지는 <strong>무엇을 왜 변경했는지</strong> 간결하게 적습니다.
      </Callout>

      {/* ===== 5 ===== */}
      <h2>5. 커밋 기록 확인</h2>
      <CodeBlock>git log --oneline</CodeBlock>

      <TerminalOutput command="git log --oneline">
        <div><span style={{ color: '#d29922' }}>a1b2c3d</span> <span style={{ color: '#e6edf3' }}>README에 인사 추가</span></div>
        <div><span style={{ color: '#d29922' }}>f4e5d6c</span> <span style={{ color: '#e6edf3' }}>first commit</span></div>
      </TerminalOutput>

      <p>한 줄씩 커밋 기록을 볼 수 있습니다. 노란색 코드가 커밋 ID(해시)입니다.</p>

      <PageNav current="/commit" />
    </>
  );
}
