import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';
import PageNav from '../components/PageNav';

// GitHub UI 모의 화면 컴포넌트
function GithubMockup({ title, children }) {
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

function MockField({ label, required, children, description }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{
        color: '#e6edf3', fontWeight: 600, fontSize: '0.85rem',
        marginBottom: '0.35rem',
      }}>
        {label} {required && <span style={{ color: '#f85149' }}>*</span>}
      </div>
      {description && (
        <div style={{ color: '#8b949e', fontSize: '0.8rem', marginBottom: '0.35rem' }}>
          {description}
        </div>
      )}
      {children}
    </div>
  );
}

function MockInput({ value, placeholder }) {
  return (
    <div style={{
      background: '#0d1117',
      border: '1px solid #30363d',
      borderRadius: 6,
      padding: '0.45rem 0.75rem',
      color: value ? '#e6edf3' : '#484f58',
      fontFamily: 'monospace',
      fontSize: '0.85rem',
    }}>
      {value || placeholder}
    </div>
  );
}

function MockRadio({ checked, label, description }) {
  return (
    <div style={{
      display: 'flex', gap: '0.5rem', alignItems: 'flex-start',
      padding: '0.3rem 0',
    }}>
      <div style={{
        width: 16, height: 16, borderRadius: '50%',
        border: checked ? '5px solid #58a6ff' : '2px solid #30363d',
        background: checked ? '#0d1117' : 'transparent',
        marginTop: 2, flexShrink: 0,
      }} />
      <div>
        <div style={{ color: '#e6edf3', fontSize: '0.85rem' }}>{label}</div>
        {description && (
          <div style={{ color: '#8b949e', fontSize: '0.78rem' }}>{description}</div>
        )}
      </div>
    </div>
  );
}

function MockCheckbox({ checked, label, highlight }) {
  return (
    <div style={{
      display: 'flex', gap: '0.5rem', alignItems: 'center',
      padding: '0.2rem 0',
    }}>
      <div style={{
        width: 16, height: 16, borderRadius: 3,
        border: '1px solid #30363d',
        background: checked ? '#58a6ff' : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, fontSize: '0.7rem', color: '#fff',
      }}>
        {checked && '✓'}
      </div>
      <div style={{
        color: '#e6edf3', fontSize: '0.85rem',
        ...(highlight ? { background: 'rgba(248,81,73,0.15)', padding: '0 4px', borderRadius: 3 } : {}),
      }}>
        {label}
      </div>
    </div>
  );
}

function MockButton({ children, primary, disabled }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '0.4rem 1rem',
      borderRadius: 6,
      fontWeight: 600,
      fontSize: '0.85rem',
      background: primary ? (disabled ? '#1a6d2e' : '#238636') : '#21262d',
      color: primary ? (disabled ? 'rgba(255,255,255,0.5)' : '#fff') : '#c9d1d9',
      border: primary ? '1px solid rgba(240,246,252,0.1)' : '1px solid #30363d',
      cursor: disabled ? 'default' : 'pointer',
    }}>
      {children}
    </span>
  );
}

function StepIndicator({ number, label }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '0.75rem',
      margin: '1.25rem 0 0.75rem', paddingBottom: '0.5rem',
      borderBottom: '1px solid #21262d',
    }}>
      <div style={{
        width: 28, height: 28, borderRadius: '50%',
        background: '#58a6ff', color: '#0d1117',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 700, fontSize: '0.85rem', flexShrink: 0,
      }}>
        {number}
      </div>
      <span style={{ color: '#e6edf3', fontWeight: 600 }}>{label}</span>
    </div>
  );
}

function Arrow() {
  return (
    <div style={{
      textAlign: 'center', color: '#30363d',
      fontSize: '1.2rem', margin: '0.25rem 0',
    }}>
      ▼
    </div>
  );
}

export default function FirstRepo() {
  return (
    <>
      <h1>첫 저장소 만들기</h1>
      <p>
        로컬(내 컴퓨터)에서 저장소를 만들고, GitHub에 올리는 전체 과정을 따라해 봅니다.
      </p>

      {/* ===== STEP 1 ===== */}
      <h2>1. 폴더 만들기</h2>
      <p>터미널을 열고 프로젝트 폴더를 만듭니다.</p>
      <CodeBlock>{`mkdir my-first-repo
cd my-first-repo`}</CodeBlock>

      {/* ===== STEP 2 ===== */}
      <h2>2. Git 저장소 초기화</h2>
      <CodeBlock>git init</CodeBlock>
      <p>이 폴더가 Git이 추적하는 저장소가 됩니다. 숨김 폴더 <code>.git</code>이 생성됩니다.</p>

      {/* ===== STEP 3 ===== */}
      <h2>3. 파일 만들고 커밋하기</h2>
      <CodeBlock>{`echo "# My First Repo" > README.md
git add README.md
git commit -m "first commit"`}</CodeBlock>
      <p>
        이제 로컬 저장소에 첫 번째 커밋이 만들어졌습니다.
        다음 단계에서 이것을 GitHub에 올립니다.
      </p>

      {/* ===== STEP 4 ===== */}
      <h2>4. GitHub에 저장소 만들기</h2>
      <p>
        GitHub 웹사이트에서 이 로컬 저장소를 업로드할 <strong>빈 저장소</strong>를 만들어야 합니다.
        아래 과정을 따라하세요.
      </p>

      <StepIndicator number="A" label="GitHub에서 New repository 페이지 열기" />
      <p>아래 두 가지 방법 중 하나를 사용합니다:</p>
      <ul>
        <li>GitHub 오른쪽 상단 <strong>+</strong> 버튼 → <strong>"New repository"</strong> 클릭</li>
        <li>또는 주소창에 <code>github.com/new</code> 직접 입력</li>
      </ul>

      <GithubMockup title="github.com — 오른쪽 상단 메뉴">
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', alignItems: 'center' }}>
          <div style={{
            background: '#21262d', border: '1px solid #30363d', borderRadius: 6,
            padding: '0.3rem 0.6rem', color: '#e6edf3', fontSize: '0.85rem',
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem'
          }}>
            <span style={{ fontWeight: 700, fontSize: '1rem' }}>+</span>
            <span style={{ fontSize: '0.7rem' }}>▾</span>
          </div>
          <div style={{
            width: 28, height: 28, borderRadius: '50%',
            background: '#30363d', display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <span style={{ fontSize: '0.75rem' }}>👤</span>
          </div>
        </div>
        <div style={{
          position: 'relative', marginTop: '0.35rem',
          display: 'flex', justifyContent: 'flex-end'
        }}>
          <div style={{
            background: '#161b22', border: '1px solid #30363d', borderRadius: 8,
            padding: '0.25rem 0', width: 200, overflow: 'hidden'
          }}>
            {['New repository', 'Import repository', 'New codespace', 'New gist'].map((item, i) => (
              <div key={i} style={{
                padding: '0.4rem 0.8rem', fontSize: '0.82rem',
                color: i === 0 ? '#58a6ff' : '#e6edf3',
                background: i === 0 ? 'rgba(88,166,255,0.1)' : 'transparent',
                fontWeight: i === 0 ? 600 : 400,
              }}>
                {item} {i === 0 && ' ← 클릭!'}
              </div>
            ))}
          </div>
        </div>
      </GithubMockup>

      <StepIndicator number="B" label="저장소 정보 입력하기" />
      <p>
        아래와 같은 화면이 나타납니다. <strong>이름만 입력</strong>하면 됩니다.
        나머지는 기본값 그대로 두세요.
      </p>

      <GithubMockup title="github.com/new — Create a new repository">
        <div style={{
          borderBottom: '1px solid #21262d',
          paddingBottom: '1rem', marginBottom: '1rem',
        }}>
          <div style={{ color: '#e6edf3', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>
            Create a new repository
          </div>

          <MockField label="Owner" required>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
            }}>
              <div style={{
                background: '#0d1117', border: '1px solid #30363d', borderRadius: 6,
                padding: '0.45rem 0.75rem', color: '#e6edf3', fontSize: '0.85rem',
                display: 'flex', alignItems: 'center', gap: '0.3rem', flex: 1
              }}>
                👤 your-username ▾
              </div>
              <span style={{ color: '#8b949e', fontSize: '1.1rem' }}>/</span>
              <div style={{
                background: '#0d1117', border: '2px solid #58a6ff', borderRadius: 6,
                padding: '0.45rem 0.75rem', color: '#e6edf3', fontSize: '0.85rem', flex: 1,
                fontFamily: 'monospace',
              }}>
                my-first-repo
              </div>
            </div>
          </MockField>

          <MockField label="Description" description="(optional)">
            <MockInput placeholder="간단한 설명 (비워둬도 OK)" />
          </MockField>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <MockRadio checked={true} label="Public" description="누구나 볼 수 있습니다. 처음엔 이걸 선택하세요." />
          <MockRadio checked={false} label="Private" description="나만 볼 수 있습니다." />
        </div>

        <div style={{
          background: '#161b22', border: '1px solid #30363d', borderRadius: 8,
          padding: '0.75rem 1rem', marginBottom: '1rem',
        }}>
          <div style={{ color: '#e6edf3', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
            Initialize this repository with:
          </div>
          <div style={{
            background: 'rgba(248,81,73,0.08)',
            border: '1px dashed rgba(248,81,73,0.3)',
            borderRadius: 6, padding: '0.5rem 0.75rem',
            marginBottom: '0.3rem',
          }}>
            <MockCheckbox checked={false} label="Add a README file" highlight />
            <div style={{
              color: '#f85149', fontSize: '0.78rem', marginLeft: '1.5rem', marginTop: '0.15rem',
            }}>
              ← 체크하지 마세요! (이미 로컬에서 만들었습니다)
            </div>
          </div>
          <MockCheckbox checked={false} label="Add .gitignore" />
          <MockCheckbox checked={false} label="Choose a license" />
        </div>

        <div style={{ borderTop: '1px solid #21262d', paddingTop: '1rem' }}>
          <MockButton primary>Create repository</MockButton>
        </div>
      </GithubMockup>

      <Callout type="warn">
        <strong>"Add a README file"을 체크하면 안 됩니다!</strong>{' '}
        이미 로컬에서 README.md를 만들고 커밋했기 때문에, GitHub에서도 README를 만들면
        서로 다른 커밋 이력이 생겨 push할 때 충돌이 발생합니다.
        <strong> 세 개의 체크박스를 모두 비운 채로</strong> Create repository를 누르세요.
      </Callout>

      <Callout type="tip">
        <strong>핵심은 "빈 저장소"를 만드는 것!</strong>{' '}
        이름만 입력하고 나머지는 전부 기본값 그대로 → Create repository 클릭.
        이게 가장 간단하고 에러 없는 방법입니다.
      </Callout>

      <StepIndicator number="C" label="생성 완료 — Quick Setup 화면 확인" />
      <p>
        저장소가 만들어지면 아래와 같은 <strong>Quick Setup</strong> 화면이 나타납니다.
        여기에 나오는 명령어를 복사해서 사용하면 됩니다.
      </p>

      <GithubMockup title="github.com/your-username/my-first-repo — Quick setup">
        <div style={{
          background: '#0d1117', border: '1px solid #30363d', borderRadius: 8,
          padding: '0.75rem 1rem', marginBottom: '1rem',
        }}>
          <div style={{ color: '#8b949e', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
            Quick setup — if you've done this kind of thing before
          </div>
          <div style={{
            display: 'flex', gap: '0.5rem', marginBottom: '0.75rem',
          }}>
            <span style={{
              padding: '0.2rem 0.6rem', borderRadius: 6, fontSize: '0.78rem',
              background: '#21262d', border: '1px solid #58a6ff', color: '#58a6ff',
            }}>HTTPS</span>
            <span style={{
              padding: '0.2rem 0.6rem', borderRadius: 6, fontSize: '0.78rem',
              background: 'transparent', border: '1px solid #30363d', color: '#8b949e',
            }}>SSH</span>
          </div>
          <div style={{
            background: '#161b22', border: '1px solid #30363d', borderRadius: 6,
            padding: '0.4rem 0.75rem', fontFamily: 'monospace', fontSize: '0.82rem',
            color: '#e6edf3',
          }}>
            https://github.com/your-username/my-first-repo.git
          </div>
        </div>

        <div style={{ marginBottom: '0.75rem' }}>
          <div style={{
            color: '#e6edf3', fontWeight: 600, fontSize: '0.9rem',
            marginBottom: '0.5rem',
          }}>
            …or push an existing repository from the command line
          </div>
          <div style={{
            background: '#161b22', border: '1px solid #30363d', borderRadius: 8,
            padding: '0.6rem 0.75rem', fontFamily: 'monospace', fontSize: '0.8rem',
            lineHeight: 1.8, color: '#e6edf3',
          }}>
            <div>git remote add origin https://github.com/your-username/my-first-repo.git</div>
            <div>git branch -M main</div>
            <div>git push -u origin main</div>
          </div>
          <div style={{
            color: '#58a6ff', fontSize: '0.8rem', marginTop: '0.35rem',
          }}>
            ↑ 이 명령어를 그대로 복사해서 터미널에 붙여넣으세요!
          </div>
        </div>
      </GithubMockup>

      {/* ===== STEP 5 ===== */}
      <h2>5. 로컬 ↔ GitHub 연결</h2>
      <p>
        위 Quick Setup 화면에 나온 명령어를 터미널에 <strong>한 줄씩</strong> 입력합니다.
        각 명령어가 무엇을 하는지 하나씩 알아봅시다.
      </p>

      <h3>5-1. 원격 저장소 주소 등록</h3>
      <CodeBlock>{`git remote add origin https://github.com/유저이름/my-first-repo.git`}</CodeBlock>
      <p>
        <code>origin</code>이라는 이름으로 GitHub 저장소 주소를 등록합니다.
        앞으로 <code>origin</code>이라고 쓰면 이 GitHub 주소를 가리킵니다.
      </p>

      <Callout type="info">
        URL은 Quick Setup 페이지에서 복사하세요. <code>유저이름</code> 부분을
        본인의 GitHub 사용자 이름으로 바꿔야 합니다.
      </Callout>

      <h3>5-2. 브랜치 이름을 main으로 변경</h3>
      <CodeBlock>git branch -M main</CodeBlock>
      <p>
        Git 버전에 따라 기본 브랜치가 <code>master</code>로 만들어질 수 있습니다.
        GitHub은 <code>main</code>을 기본으로 사용하므로, 이름을 맞춰주는 명령어입니다.
      </p>

      <Callout type="tip">
        이미 <code>main</code>인 경우에도 이 명령어를 실행해도 에러가 나지 않습니다.
        그냥 항상 실행하면 안전합니다.
      </Callout>

      <h3>5-3. GitHub에 Push (업로드)</h3>
      <CodeBlock>git push -u origin main</CodeBlock>
      <p>
        로컬의 커밋을 GitHub으로 업로드합니다.
      </p>
      <ul>
        <li><code>-u</code> (또는 <code>--set-upstream</code>) — 이후부터 <code>git push</code>만 입력해도 자동으로 origin/main에 푸시되도록 연결을 기억시킵니다.</li>
        <li><code>origin</code> — 방금 등록한 GitHub 저장소</li>
        <li><code>main</code> — 업로드할 브랜치 이름</li>
      </ul>

      <h3>5-4. 인증 (처음 한 번)</h3>
      <p>
        처음 push하면 GitHub 로그인 팝업이 뜨거나 터미널에서 인증을 요구합니다.
      </p>

      <GithubMockup title="터미널 — 인증 방법">
        <div style={{ lineHeight: 2 }}>
          <div style={{ color: '#3fb950', fontWeight: 600, marginBottom: '0.5rem' }}>
            방법 1: 브라우저 팝업 (가장 쉬움)
          </div>
          <div style={{ color: '#8b949e', fontSize: '0.82rem', marginBottom: '0.75rem' }}>
            최신 Git은 push 시 자동으로 브라우저가 열립니다.
            <br />GitHub에 로그인 → "Authorize" 클릭 → 완료!
          </div>

          <div style={{ color: '#58a6ff', fontWeight: 600, marginBottom: '0.5rem' }}>
            방법 2: Personal Access Token (PAT)
          </div>
          <div style={{ color: '#8b949e', fontSize: '0.82rem', marginBottom: '0.5rem' }}>
            터미널에서 비밀번호를 물어보면 <strong style={{ color: '#f85149' }}>GitHub 비밀번호가 아닌</strong> Personal Access Token을 입력해야 합니다.
          </div>
          <div style={{
            background: '#161b22', border: '1px solid #30363d', borderRadius: 6,
            padding: '0.5rem 0.75rem', fontSize: '0.8rem', fontFamily: 'monospace',
            color: '#8b949e', marginBottom: '0.75rem',
          }}>
            <div>Username: <span style={{ color: '#e6edf3' }}>your-username</span></div>
            <div>Password: <span style={{ color: '#e6edf3' }}>ghp_xxxxxxxxxxxxxxxxxxxx</span> ← 토큰 입력</div>
          </div>
          <div style={{ color: '#8b949e', fontSize: '0.78rem' }}>
            토큰 만들기: GitHub → Settings → Developer settings → Personal access tokens → Generate new token
          </div>
        </div>
      </GithubMockup>

      <Callout type="warn">
        터미널에서 Password를 물어볼 때 GitHub 로그인 비밀번호를 입력하면 실패합니다.
        반드시 <strong>Personal Access Token</strong>을 사용하세요.
        토큰 생성 시 <code>repo</code> 권한을 체크해야 합니다.
      </Callout>

      {/* ===== 전체 흐름 요약 ===== */}
      <h2>전체 흐름 요약</h2>

      <div style={{
        background: '#161b22', border: '1px solid #30363d', borderRadius: 8,
        padding: '1.25rem', marginBottom: '1.25rem',
        fontFamily: 'monospace', fontSize: '0.82rem', lineHeight: 1.8,
      }}>
        <div style={{ color: '#8b949e', marginBottom: '0.5rem' }}># 1. 폴더 만들기</div>
        <div style={{ color: '#e6edf3' }}>mkdir my-first-repo && cd my-first-repo</div>
        <Arrow />
        <div style={{ color: '#8b949e', marginBottom: '0.5rem' }}># 2. Git 초기화</div>
        <div style={{ color: '#e6edf3' }}>git init</div>
        <Arrow />
        <div style={{ color: '#8b949e', marginBottom: '0.5rem' }}># 3. 파일 만들고 커밋</div>
        <div style={{ color: '#e6edf3' }}>echo "# My First Repo" &gt; README.md</div>
        <div style={{ color: '#e6edf3' }}>git add README.md</div>
        <div style={{ color: '#e6edf3' }}>git commit -m "first commit"</div>
        <Arrow />
        <div style={{ color: '#d29922', marginBottom: '0.5rem' }}># 4. GitHub에서 빈 저장소 생성 (웹 브라우저)</div>
        <div style={{ color: '#8b949e' }}>→ github.com/new → 이름 입력 → Create repository</div>
        <Arrow />
        <div style={{ color: '#8b949e', marginBottom: '0.5rem' }}># 5. 연결 & 업로드</div>
        <div style={{ color: '#e6edf3' }}>git remote add origin https://github.com/유저이름/my-first-repo.git</div>
        <div style={{ color: '#e6edf3' }}>git branch -M main</div>
        <div style={{ color: '#e6edf3' }}>git push -u origin main</div>
        <div style={{ textAlign: 'center', marginTop: '0.75rem' }}>
          <span style={{
            color: '#3fb950', fontWeight: 700, fontSize: '0.9rem',
          }}>
            ✔ 완료! GitHub에서 저장소를 확인해보세요
          </span>
        </div>
      </div>

      <h2>6. 잘 되었는지 확인하기</h2>
      <p>
        push가 완료되면 <code>github.com/유저이름/my-first-repo</code>에 접속해보세요.
        로컬에서 만든 README.md 파일이 보이면 성공입니다!
      </p>

      <Callout type="info">
        다음부터는 파일을 수정한 뒤 <code>git add .</code> → <code>git commit -m "메시지"</code> → <code>git push</code>
        이 세 단계만 반복하면 됩니다.
      </Callout>

      <PageNav current="/first-repo" />
    </>
  );
}
