import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';
import PageNav from '../components/PageNav';
import { GithubMockup, TerminalOutput } from '../components/GithubMockup';

export default function Setup() {
  return (
    <>
      <h1>Setup</h1>
      <p>GitHub 가입부터 Git 설치, 초기 설정까지 한번에 끝내기.</p>
      {/* ===== 1. GitHub 가입 ===== */}
      <h2>1. GitHub 가입</h2>
      <p>
        <a href="https://github.com" target="_blank" rel="noreferrer">github.com</a>에 접속해서 <strong>Sign up</strong>을 클릭합니다.
      </p>

      <GithubMockup title="github.com — Sign up 페이지">
        <div style={{ maxWidth: 360, margin: '0 auto' }}>
          <div style={{
            textAlign: 'center', marginBottom: '1.25rem',
          }}>
            <img src="./github.svg" alt="GitHub" style={{ width: 32, height: 32, marginBottom: '0.25rem' }} />
            <div style={{ color: '#e6edf3', fontWeight: 700, fontSize: '1.1rem' }}>
              Welcome to GitHub
            </div>
            <div style={{ color: '#8b949e', fontSize: '0.82rem' }}>
              Let's begin the adventure
            </div>
          </div>

          {[
            { label: 'Enter your email', value: 'me@example.com', active: false },
            { label: 'Create a password', value: '••••••••••', active: false },
            { label: 'Enter a username', value: 'my-username', active: true },
          ].map((field, i) => (
            <div key={i} style={{ marginBottom: '0.75rem' }}>
              <div style={{ color: '#e6edf3', fontSize: '0.82rem', marginBottom: '0.25rem' }}>
                {field.label} *
              </div>
              <div style={{
                background: '#0d1117',
                border: field.active ? '2px solid #58a6ff' : '1px solid #30363d',
                borderRadius: 6,
                padding: '0.45rem 0.75rem',
                color: '#e6edf3',
                fontSize: '0.85rem',
                fontFamily: 'monospace',
              }}>
                {field.value}
              </div>
            </div>
          ))}

          <div style={{
            background: '#238636', color: '#fff', fontWeight: 600,
            textAlign: 'center', padding: '0.55rem', borderRadius: 6,
            fontSize: '0.9rem', marginTop: '1rem',
          }}>
            Create account
          </div>
        </div>
      </GithubMockup>

      <Callout type="tip">
        username은 나중에 <code>github.com/username</code> 주소가 됩니다. 신중하게 정하세요!
      </Callout>

      {/* ===== 2. 터미널 열기 ===== */}
      <h2>2. 터미널 열기</h2>
      <p>
        이 가이드에서는 <strong>터미널</strong>에 명령어를 입력하며 진행합니다.
        먼저 터미널을 열어주세요.
      </p>

      <h3>Mac</h3>
      <p>
        Spotlight 검색(<code>Cmd + Space</code>)에서 <strong>터미널</strong>을 검색하거나,
        Finder → 응용 프로그램 → 유틸리티 → 터미널을 실행합니다.
      </p>

      <h3>Windows</h3>
      <p>
        시작 메뉴에서 <strong>터미널</strong> 또는 <strong>PowerShell</strong>을 검색해서 실행합니다.
        Git 설치 후에는 <strong>Git Bash</strong>를 사용해도 됩니다.
      </p>

      <p>
        앞으로 아래처럼 생긴 박스가 나오면, 안에 있는 명령어를 터미널에 <strong>복사·붙여넣기</strong> 하면 됩니다.
      </p>
      <CodeBlock>echo "Hello Git!"</CodeBlock>

      <Callout type="tip">
        코드 블록 오른쪽 위의 Copy 버튼을 누르면 명령어가 클립보드에 복사됩니다.
      </Callout>

      {/* ===== 3. Git 설치 ===== */}
      <h2>3. Git 설치</h2>

      <h3>Mac</h3>
      <CodeBlock>brew install git</CodeBlock>
      <p>Homebrew가 없다면 터미널에 <code>git</code>을 입력하면 Xcode 도구 설치를 안내합니다.</p>

      <h3>Windows</h3>
      <p>
        <a href="https://git-scm.com" target="_blank" rel="noreferrer">git-scm.com</a>에서 다운로드 후 설치. 설치 중 옵션은 기본값으로 두면 됩니다.
      </p>

      <h3>설치 확인</h3>
      <CodeBlock>git --version</CodeBlock>

      <TerminalOutput command="git --version">
        <div style={{ color: '#e6edf3' }}>git version 2.44.0</div>
      </TerminalOutput>
      <p>이렇게 버전 번호가 나오면 성공입니다.</p>

      {/* ===== 4. 초기 설정 ===== */}
      <h2>4. 초기 설정</h2>
      <p>Git에 내 이름과 이메일을 등록합니다. (커밋할 때 사용됩니다)</p>
      <CodeBlock>{`git config --global user.name "내 이름"
git config --global user.email "내이메일@example.com"`}</CodeBlock>

      <Callout type="tip">
        GitHub에서 사용하는 이메일과 동일하게 입력하면 커밋이 프로필에 연결됩니다.
      </Callout>

      <PageNav current="/setup" />
    </>
  );
}
