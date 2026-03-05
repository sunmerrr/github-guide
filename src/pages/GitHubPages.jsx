import { Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';
import PageNav from '../components/PageNav';
import { GithubMockup } from '../components/GithubMockup';

function MockTab({ label, active }) {
  return (
    <div style={{
      padding: '0.5rem 1rem',
      fontSize: '0.85rem',
      color: active ? '#e6edf3' : '#8b949e',
      borderBottom: active ? '2px solid #f78166' : '2px solid transparent',
      fontWeight: active ? 600 : 400,
      cursor: 'pointer',
    }}>
      {label}
    </div>
  );
}

function MockSelect({ value }) {
  return (
    <div style={{
      background: '#0d1117',
      border: '1px solid #30363d',
      borderRadius: 6,
      padding: '0.4rem 0.75rem',
      color: '#e6edf3',
      fontSize: '0.85rem',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4rem',
    }}>
      {value} <span style={{ color: '#8b949e', fontSize: '0.7rem' }}>&#9662;</span>
    </div>
  );
}

export default function GitHubPages() {
  return (
    <>
      <h1>GitHub Pages 배포</h1>
      <p>
        GitHub Pages를 사용하면 저장소의 코드를 <strong>무료 웹사이트</strong>로 배포할 수 있습니다.
        별도의 서버 없이 <code>username.github.io</code> 주소로 바로 공개됩니다.
      </p>

      <Callout type="warn">
        무료 플랜에서는 <strong>Public 저장소</strong>에서만 GitHub Pages를 사용할 수 있습니다.
        Private 저장소에서 Pages를 켜려면 GitHub Pro 이상의 유료 플랜이 필요합니다.
      </Callout>

      <Callout type="info">
        GitHub Pages는 <strong>정적 사이트</strong>(HTML, CSS, JS)만 지원합니다.
        React/Vue 등은 빌드 후 결과물을 배포하면 됩니다.
      </Callout>

      {/* ===== 1. 간단한 HTML 배포 ===== */}
      <h2 id="simple-deploy">방법 1 — 간단한 HTML 배포</h2>
      <p>
        가장 간단한 방법입니다. 저장소에 <code>index.html</code> 파일이 있으면 바로 웹사이트가 됩니다.
      </p>

      <h3 id="create-html">저장소에 index.html 만들기</h3>
      <p>
        이미 있는 저장소에 <code>index.html</code>을 추가하거나, 새 저장소를 만들어도 됩니다.
        {' → '}<Link to="/first-repo">저장소 만들러 가기</Link>
      </p>
      <CodeBlock>{`echo '<!DOCTYPE html>
<html>
<head><title>My Page</title></head>
<body>
  <h1>Hello, GitHub Pages!</h1>
</body>
</html>' > index.html

git add index.html
git commit -m "add index.html"
git push`}</CodeBlock>

      <h3 id="enable-pages">GitHub Pages 켜기</h3>
      <p>
        GitHub에서 저장소 → <strong>Settings</strong> → 왼쪽 메뉴 <strong>Pages</strong>로 이동합니다.
      </p>

      <GithubMockup title="github.com/username/my-repo — Settings">
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {/* 왼쪽 사이드바 */}
          <div style={{
            width: 180, flexShrink: 0, borderRight: '1px solid #21262d',
            paddingRight: '1rem',
          }}>
            {['General', 'Collaborators', 'Branches', 'Tags', 'Rules', 'Actions', 'Pages'].map((item, i) => (
              <div key={i} style={{
                padding: '0.35rem 0.5rem',
                fontSize: '0.82rem',
                borderRadius: 6,
                marginBottom: '0.15rem',
                color: item === 'Pages' ? '#e6edf3' : '#8b949e',
                background: item === 'Pages' ? 'rgba(88,166,255,0.15)' : 'transparent',
                fontWeight: item === 'Pages' ? 600 : 400,
              }}>
                {item} {item === 'Pages' && <span style={{ color: '#58a6ff' }}> ← 클릭</span>}
              </div>
            ))}
          </div>

          {/* 오른쪽 콘텐츠 */}
          <div style={{ flex: 1 }}>
            <div style={{ color: '#e6edf3', fontWeight: 700, fontSize: '1.1rem', marginBottom: '1rem' }}>
              GitHub Pages
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ color: '#e6edf3', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                Source
              </div>
              <div style={{ color: '#8b949e', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
                GitHub Pages is currently disabled. Select a source below to enable GitHub Pages for this repository.
              </div>
              <MockSelect value="Deploy from a branch" />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ color: '#e6edf3', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                Branch
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <MockSelect value="main" />
                <MockSelect value="/ (root)" />
                <span style={{
                  display: 'inline-block',
                  padding: '0.4rem 1rem',
                  borderRadius: 6,
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  background: '#238636',
                  color: '#fff',
                  border: '1px solid rgba(240,246,252,0.1)',
                }}>
                  Save
                </span>
              </div>
            </div>
          </div>
        </div>
      </GithubMockup>

      <p>설정 방법:</p>
      <ol>
        <li><strong>Source</strong> → "Deploy from a branch" 선택</li>
        <li><strong>Branch</strong> → <code>main</code> 선택, 폴더는 <code>/ (root)</code> 그대로</li>
        <li><strong>Save</strong> 클릭</li>
      </ol>

      <Callout type="tip">
        Save를 누르면 1~2분 후 배포가 완료됩니다. 배포 주소는{' '}
        <code>https://username.github.io/저장소이름/</code> 형식입니다.
      </Callout>

      <h3 id="check-deploy">배포 확인</h3>
      <p>
        배포가 완료되면 Settings → Pages 상단에 사이트 주소가 나타납니다.
      </p>

      <GithubMockup title="github.com/username/my-repo/settings/pages — 배포 완료">
        <div style={{
          background: 'rgba(63,185,80,0.1)',
          border: '1px solid rgba(63,185,80,0.3)',
          borderRadius: 8,
          padding: '0.75rem 1rem',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}>
          <span style={{ color: '#3fb950', fontSize: '1.1rem' }}>&#10003;</span>
          <div>
            <div style={{ color: '#e6edf3', fontWeight: 600, fontSize: '0.9rem' }}>
              Your site is live at
            </div>
            <div style={{
              color: '#58a6ff', fontSize: '0.85rem', fontFamily: 'monospace',
            }}>
              https://username.github.io/my-repo/
            </div>
          </div>
        </div>
        <span style={{
          display: 'inline-block',
          padding: '0.35rem 0.85rem',
          borderRadius: 6,
          fontSize: '0.82rem',
          background: '#21262d',
          border: '1px solid #30363d',
          color: '#e6edf3',
        }}>
          Visit site
        </span>
      </GithubMockup>

      {/* ===== 2. React/Vite 프로젝트 배포 ===== */}
      <h2 id="vite-deploy">방법 2 — React/Vite 프로젝트 배포</h2>
      <p>
        React, Vue 등 빌드가 필요한 프로젝트는 <strong>GitHub Actions</strong>를 사용해서
        자동으로 빌드 + 배포할 수 있습니다.
      </p>

      <h3 id="vite-base">vite.config 수정</h3>
      <p>
        <code>vite.config.js</code>에 <code>base</code>를 저장소 이름으로 설정합니다.
      </p>
      <CodeBlock>{`// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/저장소이름/',  // ← 본인의 저장소 이름
})`}</CodeBlock>

      <Callout type="warn">
        <code>base</code>를 설정하지 않으면 CSS, JS 파일 경로가 맞지 않아 빈 화면이 나옵니다.
        저장소 이름과 정확히 일치해야 합니다.
      </Callout>

      <h3 id="github-actions">GitHub Actions 워크플로우 만들기</h3>
      <p>프로젝트 루트에 <code>.github/workflows/deploy.yml</code> 파일을 만듭니다.</p>
      <CodeBlock>{`# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install & Build
        run: |
          npm install
          npm run build

      - uses: actions/configure-pages@v4

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4`}</CodeBlock>

      <h3 id="actions-source">Pages 소스를 GitHub Actions로 변경</h3>
      <p>
        저장소 Settings → Pages에서 Source를 <strong>"GitHub Actions"</strong>로 변경합니다.
      </p>

      <GithubMockup title="github.com/username/my-repo/settings/pages — Source 설정">
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ color: '#e6edf3', fontWeight: 700, fontSize: '1.1rem', marginBottom: '1rem' }}>
            GitHub Pages
          </div>
          <div style={{ color: '#e6edf3', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.35rem' }}>
            Source
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div style={{
              background: '#0d1117',
              border: '2px solid #58a6ff',
              borderRadius: 6,
              padding: '0.4rem 0.75rem',
              color: '#e6edf3',
              fontSize: '0.85rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}>
              GitHub Actions <span style={{ color: '#8b949e', fontSize: '0.7rem' }}>&#9662;</span>
            </div>
            <span style={{ color: '#58a6ff', fontSize: '0.8rem' }}> ← 이걸로 변경!</span>
          </div>
          <div style={{ color: '#8b949e', fontSize: '0.8rem' }}>
            GitHub Actions will deploy your site automatically when the workflow runs.
          </div>
        </div>
      </GithubMockup>

      <h3 id="push-deploy">Push하면 자동 배포</h3>
      <CodeBlock>{`git add .
git commit -m "add github pages deploy"
git push`}</CodeBlock>

      <p>push하면 자동으로 빌드 & 배포가 시작됩니다. Actions 탭에서 진행 상태를 확인할 수 있습니다.</p>

      <GithubMockup title="github.com/username/my-repo — Actions 탭">
        <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid #21262d', marginBottom: '1rem' }}>
          <MockTab label="Code" />
          <MockTab label="Issues" />
          <MockTab label="Pull requests" />
          <MockTab label="Actions" active />
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.75rem',
          padding: '0.6rem 0.75rem',
          background: '#161b22', border: '1px solid #30363d',
          borderRadius: 8,
        }}>
          <span style={{
            width: 18, height: 18, borderRadius: '50%',
            background: '#3fb950',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.7rem', color: '#fff',
          }}>&#10003;</span>
          <div>
            <div style={{ color: '#e6edf3', fontSize: '0.85rem', fontWeight: 600 }}>
              Deploy to GitHub Pages
            </div>
            <div style={{ color: '#8b949e', fontSize: '0.78rem' }}>
              add github pages deploy &middot; main &middot; 45s
            </div>
          </div>
        </div>
      </GithubMockup>

      <Callout type="tip">
        초록색 체크가 나타나면 배포 성공입니다! 노란색 원은 진행 중, 빨간색 X는 실패를 의미합니다.
      </Callout>

      {/* ===== 3. 커스텀 도메인 ===== */}
      <h2 id="custom-domain">커스텀 도메인 (선택)</h2>
      <p>
        기본 주소 대신 내 도메인(<code>mysite.com</code>)을 연결할 수도 있습니다.
      </p>

      <GithubMockup title="github.com/username/my-repo/settings/pages — Custom domain">
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ color: '#e6edf3', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.35rem' }}>
            Custom domain
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <div style={{
              background: '#0d1117',
              border: '1px solid #30363d',
              borderRadius: 6,
              padding: '0.4rem 0.75rem',
              color: '#e6edf3',
              fontSize: '0.85rem',
              fontFamily: 'monospace',
              flex: 1,
            }}>
              mysite.com
            </div>
            <span style={{
              display: 'inline-block',
              padding: '0.4rem 1rem',
              borderRadius: 6,
              fontWeight: 600,
              fontSize: '0.85rem',
              background: '#238636',
              color: '#fff',
              border: '1px solid rgba(240,246,252,0.1)',
            }}>
              Save
            </span>
          </div>
          <div style={{ color: '#8b949e', fontSize: '0.78rem', marginTop: '0.35rem' }}>
            도메인 제공업체의 DNS 설정에서 CNAME 레코드를 <code style={{ color: '#e6edf3' }}>username.github.io</code>로 지정해야 합니다.
          </div>
        </div>
      </GithubMockup>

      <Callout type="info">
        커스텀 도메인을 사용하는 경우 <code>vite.config.js</code>의 <code>base</code>를 <code>'/'</code>로
        바꿔야 합니다.
      </Callout>

      {/* ===== 요약 ===== */}
      <h2 id="summary">요약</h2>
      <div style={{
        background: '#161b22', border: '1px solid #30363d', borderRadius: 8,
        padding: '1.25rem', marginBottom: '1.25rem',
        fontSize: '0.88rem', lineHeight: 1.8,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: '0.5rem 1rem',
        }}>
          <span style={{ color: '#8b949e', fontWeight: 600 }}>HTML만 있을 때</span>
          <span style={{ color: '#e6edf3' }}>Settings → Pages → Branch를 main으로 → Save</span>

          <span style={{ color: '#8b949e', fontWeight: 600 }}>React/Vite</span>
          <span style={{ color: '#e6edf3' }}>base 설정 + deploy.yml 추가 + Source를 GitHub Actions로</span>

          <span style={{ color: '#8b949e', fontWeight: 600 }}>배포 주소</span>
          <span style={{ color: '#58a6ff', fontFamily: 'monospace' }}>https://username.github.io/repo-name/</span>

          <span style={{ color: '#8b949e', fontWeight: 600 }}>업데이트</span>
          <span style={{ color: '#e6edf3' }}>push하면 자동으로 재배포</span>
        </div>
      </div>

      <PageNav current="/github-pages" />
    </>
  );
}
