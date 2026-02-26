import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';
import PageNav from '../components/PageNav';

function PromptExample({ label, children }) {
  return (
    <div style={{
      background: '#161b22', border: '1px solid #30363d', borderRadius: 8,
      padding: '0.85rem 1rem', marginBottom: '0.75rem',
    }}>
      <div style={{
        color: '#8b949e', fontSize: '0.78rem', marginBottom: '0.4rem',
        fontWeight: 600,
      }}>
        {label}
      </div>
      <div style={{
        color: '#e6edf3', fontSize: '0.9rem', lineHeight: 1.7,
        fontStyle: 'italic',
      }}>
        "{children}"
      </div>
    </div>
  );
}

function StepCard({ number, title, children }) {
  return (
    <div style={{
      background: '#161b22', border: '1px solid #30363d', borderRadius: 8,
      padding: '1rem 1.25rem', marginBottom: '1rem',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.75rem',
        marginBottom: '0.75rem',
      }}>
        <div style={{
          width: 28, height: 28, borderRadius: '50%',
          background: '#58a6ff', color: '#0d1117',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 700, fontSize: '0.85rem', flexShrink: 0,
        }}>
          {number}
        </div>
        <span style={{ color: '#e6edf3', fontWeight: 600, fontSize: '0.95rem' }}>{title}</span>
      </div>
      <div style={{ color: '#8b949e', fontSize: '0.9rem', lineHeight: 1.7 }}>
        {children}
      </div>
    </div>
  );
}

export default function AiHelper() {
  return (
    <>
      <h1>AI에게 맡기기</h1>
      <p>
        Git 명령어를 외울 필요 없습니다.
        AI에게 <strong>한국어로 말하면</strong> 대신 실행해줍니다.
      </p>

      <Callout type="info">
        이 페이지는 <strong>Claude Code</strong>, <strong>GitHub Copilot</strong>, <strong>Cursor</strong> 등
        터미널 명령어를 실행할 수 있는 AI 도구를 기준으로 설명합니다.
      </Callout>

      {/* ===== 사전 준비 ===== */}
      <Callout type="tip">
        GitHub 가입, Git 설치, 초기 설정은 <a href="/setup">Setup 페이지</a>에서
        다루고 있습니다.
        <strong> 이미 끝냈다면 바로{' '}
          <a href="#gh-cli">GitHub CLI 인증</a>
        으로 넘어가세요.</strong>
      </Callout>

      <h2 id="prereqs">사전 준비 (이것만 직접 하세요)</h2>
      <p>아래 항목은 계정과 설치에 관한 것이라 AI가 대신할 수 없습니다.</p>
      <ul>
        <li>GitHub 가입 (github.com)</li>
        <li>Git 설치 (brew install git 또는 Windows 설치 파일)</li>
        <li><code>git config</code>로 이름/이메일 설정</li>
      </ul>
      <p>
        자세한 방법은 <a href="/setup">Setup 페이지</a>를 참고하세요.
      </p>

      <h3 id="gh-cli">GitHub CLI 인증 (처음 한 번)</h3>
      <p>
        AI가 터미널에서 GitHub 저장소를 만들려면 <strong>GitHub CLI(gh)</strong>가 필요합니다.
        아래 명령어를 한 번만 실행하면 이후로는 AI가 알아서 저장소 생성, PR 만들기 등을 처리할 수 있습니다.
      </p>
      <CodeBlock>{`# 1. GitHub CLI 설치
# Mac
brew install gh
# Windows — https://cli.github.com 에서 다운로드

# 2. 인증 (브라우저가 열리면 로그인하세요)
gh auth login`}</CodeBlock>

      <Callout type="warn">
        <code>gh auth login</code>을 실행하면 터미널에 몇 가지 질문이 나옵니다.
        모두 기본값(Enter)으로 진행하면 브라우저가 열리고,
        GitHub에 로그인하면 인증이 완료됩니다.
        <strong> 이 과정은 처음 한 번만 하면 됩니다.</strong>
      </Callout>

      {/* ===== 말하는 법 ===== */}
      <h2 id="how-to-ask">AI에게 이렇게 말하세요</h2>
      <p>
        어려운 용어를 쓸 필요 없습니다.
        <strong> 하고 싶은 것을 그냥 말하면 됩니다.</strong>
      </p>

      <h3 id="create-repo">저장소 만들기</h3>
      <PromptExample label="처음 시작할 때">
        my-project라는 이름으로 새 폴더 만들고 Git 저장소로 초기화해줘
      </PromptExample>
      <PromptExample label="GitHub에 올릴 때">
        이 프로젝트를 GitHub에 올려줘
      </PromptExample>

      <h3 id="save-upload">저장 & 업로드</h3>
      <PromptExample label="변경사항 저장">
        지금까지 수정한 거 커밋해줘
      </PromptExample>
      <PromptExample label="GitHub에 올리기">
        커밋한 거 GitHub에 push해줘
      </PromptExample>
      <PromptExample label="한번에">
        수정한 파일 커밋하고 push까지 해줘
      </PromptExample>

      <h3 id="pull-clone">최신 코드 받기</h3>
      <PromptExample label="동기화">
        GitHub에서 최신 코드 pull 해줘
      </PromptExample>
      <PromptExample label="다른 저장소 복제">
        이 GitHub 주소에서 코드 clone해줘: https://github.com/...
      </PromptExample>

      <h3 id="branch-pr">브랜치 & PR</h3>
      <PromptExample label="새 브랜치">
        새 기능 작업할 브랜치 만들어줘
      </PromptExample>
      <PromptExample label="PR 만들기">
        지금 브랜치로 PR 만들어줘
      </PromptExample>
      <PromptExample label="main으로 돌아가기">
        main 브랜치로 전환해줘
      </PromptExample>

      <h3 id="status">상태 확인</h3>
      <PromptExample label="현재 상태">
        지금 Git 상태 확인해줘
      </PromptExample>
      <PromptExample label="기록 보기">
        최근 커밋 기록 보여줘
      </PromptExample>

      {/* ===== 실전 시나리오 ===== */}
      <h2 id="example">실전 예시: 프로젝트 처음부터 끝까지</h2>
      <p>AI에게 순서대로 말하기만 하면 됩니다.</p>

      <StepCard number="1" title="프로젝트 만들기">
        <div style={{ fontStyle: 'italic', color: '#e6edf3' }}>
          "my-website라는 폴더 만들고 Git 초기화해줘"
        </div>
      </StepCard>

      <StepCard number="2" title="파일 작업 후 저장">
        <div style={{ fontStyle: 'italic', color: '#e6edf3' }}>
          "index.html 만들어줘"
        </div>
        <div style={{ color: '#8b949e', margin: '0.3rem 0' }}>→ 파일 작업을 한 뒤...</div>
        <div style={{ fontStyle: 'italic', color: '#e6edf3' }}>
          "지금까지 한 거 커밋해줘"
        </div>
      </StepCard>

      <StepCard number="3" title="GitHub에 올리기">
        <div style={{ fontStyle: 'italic', color: '#e6edf3' }}>
          "이 프로젝트 GitHub에 올려줘"
        </div>
        <div style={{ color: '#8b949e', margin: '0.3rem 0' }}>
          → AI가 GitHub 저장소 생성, remote 연결, push를 한번에 처리합니다.
        </div>
      </StepCard>

      <StepCard number="4" title="이후 작업 반복">
        <div style={{ fontStyle: 'italic', color: '#e6edf3' }}>
          "수정한 거 커밋하고 push해줘"
        </div>
        <div style={{ color: '#8b949e', margin: '0.3rem 0' }}>
          → 이 한마디면 add → commit → push가 끝납니다.
        </div>
      </StepCard>

      {/* ===== 팁 ===== */}
      <h2 id="tips">더 잘 쓰는 팁</h2>

      <Callout type="tip">
        <strong>구체적으로 말할수록 좋습니다.</strong>{' '}
        "커밋해줘"보다 "로그인 버그 수정한 거 커밋해줘"라고 하면
        커밋 메시지도 알아서 잘 적어줍니다.
      </Callout>

      <Callout type="tip">
        <strong>모르는 건 물어보세요.</strong>{' '}
        "git status에 빨간 글씨가 뜨는데 이게 뭐야?" 같은 질문도 괜찮습니다.
        AI가 상황을 설명하고 해결 방법을 알려줍니다.
      </Callout>

      <Callout type="tip">
        <strong>실수해도 괜찮습니다.</strong>{' '}
        "방금 커밋 취소해줘", "아까 push한 거 되돌릴 수 있어?" 같은 것도 가능합니다.
        Git은 대부분의 작업을 되돌릴 수 있습니다.
      </Callout>

      <Callout type="info">
        Git 명령어가 궁금하다면 이 가이드의 나머지 페이지를 읽어보세요.
        명령어를 알면 AI에게 더 정확하게 요청할 수 있고,
        AI 없이도 직접 작업할 수 있게 됩니다.
      </Callout>

      <PageNav current="/ai-helper" />
    </>
  );
}
