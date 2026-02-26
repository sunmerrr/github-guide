import { Link } from 'react-router-dom';

const CARDS_MAIN = [
  { num: '01', path: '/setup', title: 'Setup', desc: 'GitHub 가입, Git 설치, 초기 설정' },
  { num: '02', path: '/first-repo', title: 'First Repo', desc: '첫 저장소 만들기 실습' },
  { num: '03', path: '/commit', title: 'Commit', desc: '파일 수정 → add → commit' },
  { num: '04', path: '/push-pull', title: 'Push & Pull', desc: 'GitHub와 동기화하기' },
];

const CARDS_ADVANCED = [
  { num: '05', path: '/branch', title: 'Branch', desc: '브랜치 만들기 & 전환' },
  { num: '06', path: '/pull-request', title: 'Pull Request', desc: 'PR 만들기 & 머지' },
  { num: '07', path: '/conflict', title: 'Conflict', desc: '충돌 해결하기' },
];

const CARDS_TIP = [
  { icon: '🤖', path: '/ai-helper', title: 'AI Helper', desc: 'AI에게 Git 작업 맡기는 법' },
  { icon: '📋', path: '/cheatsheet', title: 'Cheatsheet', desc: '명령어 한눈에 보기' },
  { icon: '📖', path: '/glossary', title: 'Glossary', desc: 'Git/GitHub 용어 사전' },
];

function CardGrid({ cards, isTip }) {
  return (
    <div className="home-cards">
      {cards.map((c) => (
        <Link key={c.path} to={c.path} className="home-card">
          <div className="card-num">{isTip ? c.icon : c.num}</div>
          <div className="card-title">{c.title}</div>
          <div className="card-desc">{c.desc}</div>
        </Link>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <h1>GitHub 초보자 가이드</h1>
      <p>
        Git과 GitHub를 처음 시작하는 분을 위한 실습 중심 안내서입니다.
        <br />
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="intro-link">GitHub 웹사이트</a>와 <span className="intro-highlight">터미널 명령어</span>를 함께 사용하며 배웁니다.
        <br />
        각 페이지는 <strong>1~2분</strong>이면 읽을 수 있도록 핵심만 담았습니다.
      </p>

      <h2 id="what-is-git">Git이 뭔가요?</h2>
      <p>
        Git은 파일의 변경 이력을 추적하는 <strong>버전 관리 시스템</strong>입니다.
        코드를 수정할 때마다 "누가, 언제, 무엇을 바꿨는지" 기록해두기 때문에
        이전 버전으로 되돌리거나, 여러 사람이 동시에 작업해도 충돌 없이 합칠 수 있습니다.
      </p>

      <h2 id="what-is-github">GitHub는요?</h2>
      <p>
        GitHub는 Git으로 관리하는 코드를 <strong>온라인에 저장하고 공유</strong>하는 플랫폼입니다.
        내 컴퓨터에만 있던 코드를 GitHub에 올리면 어디서든 접근할 수 있고,
        다른 사람과 함께 작업할 수 있습니다.
      </p>

      <h2 id="why-use">왜 쓰나요?</h2>
      <ul>
        <li><strong>백업</strong> — 코드가 내 컴퓨터에서 날아가도 GitHub에 남아있습니다</li>
        <li><strong>협업</strong> — 여러 명이 같은 프로젝트를 동시에 작업할 수 있습니다</li>
        <li><strong>버전 관리</strong> — 모든 변경 기록이 남아서 언제든 이전 버전으로 복구할 수 있습니다</li>
        <li><strong>포트폴리오</strong> — 내가 만든 프로젝트를 세상에 보여줄 수 있습니다</li>
      </ul>

      <div className="home-section">
        <div className="home-section-header">
          <h2 className="home-section-title">📌 기본</h2>
          <p className="home-section-desc">이것만 따라하면 GitHub를 쓸 수 있어요</p>
        </div>
        <CardGrid cards={CARDS_MAIN} />
      </div>

      <div className="home-section">
        <div className="home-section-header">
          <h2 className="home-section-title">🚀 심화</h2>
          <p className="home-section-desc">협업할 때 필요한 스킬입니다. 처음엔 건너뛰어도 괜찮아요.</p>
        </div>
        <CardGrid cards={CARDS_ADVANCED} />
      </div>

      <div className="home-section">
        <div className="home-section-header">
          <h2 className="home-section-title">📎 참고</h2>
          <p className="home-section-desc">필요할 때 찾아보세요</p>
        </div>
        <CardGrid cards={CARDS_TIP} isTip />
      </div>
    </>
  );
}
