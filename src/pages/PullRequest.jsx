import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';
import PageNav from '../components/PageNav';
import { GithubMockup, TerminalOutput, MockButton } from '../components/GithubMockup';

export default function PullRequest() {
  return (
    <>
      <h1>Pull Request</h1>
      <p>브랜치의 변경 사항을 main에 합치기 전에 리뷰를 요청하는 과정입니다.</p>

      <h2 id="pr-flow">PR 흐름</h2>
      <div style={{
        background: '#161b22', border: '1px solid #30363d', borderRadius: 8,
        padding: '1rem 1.25rem', marginBottom: '1.25rem',
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem',
        fontSize: '0.85rem', justifyContent: 'center',
      }}>
        {['브랜치 작업 완료', 'Push', 'PR 생성', '리뷰 & 승인', 'Merge'].map((step, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              background: '#21262d', border: '1px solid #30363d', borderRadius: 6,
              padding: '0.35rem 0.7rem', color: '#e6edf3', whiteSpace: 'nowrap',
            }}>{step}</span>
            {i < 4 && <span style={{ color: '#30363d' }}>→</span>}
          </span>
        ))}
      </div>

      {/* ===== 1 ===== */}
      <h2 id="pr-push">1. 브랜치 push</h2>
      <CodeBlock>git push -u origin feature/hello</CodeBlock>
      <p>push하면 GitHub에 알림 배너가 나타납니다.</p>

      <GithubMockup title="github.com/your-username/my-first-repo">
        <div style={{
          background: '#1c2128', border: '1px solid #d29922', borderRadius: 8,
          padding: '0.6rem 1rem', marginBottom: '0.75rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '0.5rem',
        }}>
          <div style={{ color: '#e6edf3', fontSize: '0.85rem' }}>
            🔀 <strong>feature/hello</strong> had recent pushes less than a minute ago
          </div>
          <MockButton primary>Compare & pull request</MockButton>
        </div>
      </GithubMockup>

      {/* ===== 2 ===== */}
      <h2 id="create-pr">2. GitHub에서 PR 만들기</h2>
      <p><strong>Compare & pull request</strong> 버튼을 클릭하면 PR 작성 화면이 나옵니다.</p>

      <GithubMockup title="github.com — Open a pull request">
        <div style={{ marginBottom: '1rem' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            marginBottom: '1rem', fontSize: '0.82rem', flexWrap: 'wrap',
          }}>
            <span style={{
              background: '#21262d', border: '1px solid #30363d', borderRadius: 6,
              padding: '0.2rem 0.6rem', color: '#e6edf3',
            }}>base: <strong>main</strong></span>
            <span style={{ color: '#3fb950' }}>←</span>
            <span style={{
              background: '#21262d', border: '1px solid #30363d', borderRadius: 6,
              padding: '0.2rem 0.6rem', color: '#e6edf3',
            }}>compare: <strong>feature/hello</strong></span>
            <span style={{ color: '#3fb950', fontSize: '0.82rem' }}>✓ Able to merge</span>
          </div>

          <div style={{ marginBottom: '0.75rem' }}>
            <div style={{ color: '#e6edf3', fontSize: '0.82rem', marginBottom: '0.25rem' }}>Title</div>
            <div style={{
              background: '#0d1117', border: '2px solid #58a6ff', borderRadius: 6,
              padding: '0.45rem 0.75rem', color: '#e6edf3', fontSize: '0.85rem',
            }}>
              feature: 인사 기능 추가
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#e6edf3', fontSize: '0.82rem', marginBottom: '0.25rem' }}>Description</div>
            <div style={{
              background: '#0d1117', border: '1px solid #30363d', borderRadius: 6,
              padding: '0.6rem 0.75rem', color: '#8b949e', fontSize: '0.85rem',
              minHeight: 60,
            }}>
              README에 인사말을 추가했습니다.
            </div>
          </div>

          <MockButton primary>Create pull request</MockButton>
        </div>
      </GithubMockup>

      <Callout type="info">
        PR 설명에는 무엇을 왜 변경했는지 적으면 리뷰어가 이해하기 쉽습니다.
      </Callout>

      {/* ===== 3 ===== */}
      <h2 id="merge">3. Merge</h2>
      <p>리뷰가 완료되면 <strong>Merge pull request</strong> 버튼을 클릭합니다.</p>

      <GithubMockup title="github.com — Pull request #1">
        <div style={{
          border: '1px solid #30363d', borderRadius: 8, overflow: 'hidden', marginBottom: '0.75rem',
        }}>
          <div style={{
            background: '#161b22', padding: '0.6rem 0.75rem',
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            borderBottom: '1px solid #30363d',
          }}>
            <span style={{
              background: '#238636', color: '#fff', padding: '0.15rem 0.5rem',
              borderRadius: 12, fontSize: '0.75rem', fontWeight: 600,
            }}>Open</span>
            <span style={{ color: '#e6edf3', fontSize: '0.85rem' }}>
              <strong>feature: 인사 기능 추가</strong> #1
            </span>
          </div>
          <div style={{ padding: '0.75rem' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem',
              fontSize: '0.82rem',
            }}>
              <span style={{ color: '#3fb950' }}>✓</span>
              <span style={{ color: '#e6edf3' }}>This branch has no conflicts with the base branch</span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <MockButton primary>Merge pull request</MockButton>
            </div>
          </div>
        </div>
      </GithubMockup>

      <GithubMockup title="Merge 완료 후">
        <div style={{
          border: '1px solid #30363d', borderRadius: 8, overflow: 'hidden',
        }}>
          <div style={{
            background: '#161b22', padding: '0.6rem 0.75rem',
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            borderBottom: '1px solid #30363d',
          }}>
            <span style={{
              background: '#8957e5', color: '#fff', padding: '0.15rem 0.5rem',
              borderRadius: 12, fontSize: '0.75rem', fontWeight: 600,
            }}>Merged</span>
            <span style={{ color: '#e6edf3', fontSize: '0.85rem' }}>
              <strong>feature: 인사 기능 추가</strong> #1
            </span>
          </div>
          <div style={{ padding: '0.75rem', fontSize: '0.85rem' }}>
            <div style={{ color: '#8b949e' }}>
              <span style={{ color: '#8957e5' }}>🎉</span> Pull request successfully merged and closed
            </div>
          </div>
        </div>
      </GithubMockup>

      {/* ===== 4 ===== */}
      <h2 id="cleanup">4. 로컬 정리</h2>
      <p>merge가 끝났으니 로컬에서도 최신 상태로 맞추고, 다 쓴 브랜치를 삭제합니다.</p>
      <CodeBlock>{`git checkout main
git pull
git branch -d feature/hello`}</CodeBlock>

      <TerminalOutput command="git branch -d feature/hello">
        <div style={{ color: '#e6edf3' }}>Deleted branch feature/hello (was c3d4e5f).</div>
      </TerminalOutput>

      <Callout type="tip">
        혼자 작업할 때도 PR을 쓰면 변경 이력이 깔끔하게 남습니다.
      </Callout>

      <PageNav current="/pull-request" />
    </>
  );
}
