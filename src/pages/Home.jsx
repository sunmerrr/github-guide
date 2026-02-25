import { Link } from 'react-router-dom';

const CARDS = [
  { num: '01', path: '/setup', title: 'Setup', desc: 'GitHub 가입, Git 설치, 초기 설정' },
  { num: '02', path: '/first-repo', title: 'First Repo', desc: '첫 저장소 만들기 실습' },
  { num: '03', path: '/commit', title: 'Commit', desc: '파일 수정 → add → commit' },
  { num: '04', path: '/push-pull', title: 'Push & Pull', desc: 'GitHub와 동기화하기' },
  { num: '05', path: '/branch', title: 'Branch', desc: '브랜치 만들기 & 전환' },
  { num: '06', path: '/pull-request', title: 'Pull Request', desc: 'PR 만들기 & 머지' },
  { num: '07', path: '/cheatsheet', title: 'Cheatsheet', desc: '명령어 한눈에 보기' },
];

export default function Home() {
  return (
    <>
      <h1>GitHub 초보자 가이드</h1>
      <p>
        Git과 GitHub를 처음 시작하는 분을 위한 실습 중심 안내서입니다.
        <br />
        각 페이지는 <strong>1~2분</strong>이면 읽을 수 있도록 핵심만 담았습니다.
      </p>
      <p>순서대로 따라하면 Git의 기본 워크플로우를 익힐 수 있습니다.</p>

      <div className="home-cards">
        {CARDS.map((c) => (
          <Link key={c.path} to={c.path} className="home-card">
            <div className="card-num">{c.num}</div>
            <div className="card-title">{c.title}</div>
            <div className="card-desc">{c.desc}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
