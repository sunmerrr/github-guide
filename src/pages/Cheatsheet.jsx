import PageNav from '../components/PageNav';

const SECTIONS = [
  {
    title: 'Setup',
    rows: [
      ['git config --global user.name "이름"', '사용자 이름 설정'],
      ['git config --global user.email "이메일"', '이메일 설정'],
      ['git init', '현재 폴더를 Git 저장소로 초기화'],
      ['git clone <url>', '원격 저장소 복제'],
    ],
  },
  {
    title: 'Basic',
    rows: [
      ['git status', '현재 상태 확인'],
      ['git add <file>', '파일 스테이징'],
      ['git add .', '모든 변경 파일 스테이징'],
      ['git commit -m "메시지"', '스테이징된 파일 커밋'],
      ['git log --oneline', '커밋 기록 확인'],
    ],
  },
  {
    title: 'Remote',
    rows: [
      ['git remote add origin <url>', '원격 저장소 연결'],
      ['git push', '로컬 커밋을 원격에 업로드'],
      ['git push -u origin main', '최초 push (upstream 설정)'],
      ['git pull', '원격 변경 사항 내려받기'],
    ],
  },
  {
    title: 'Branch',
    rows: [
      ['git branch', '브랜치 목록 보기'],
      ['git checkout -b <name>', '새 브랜치 생성 + 전환'],
      ['git checkout <name>', '브랜치 전환'],
      ['git branch -d <name>', '브랜치 삭제'],
      ['git merge <name>', '현재 브랜치에 다른 브랜치 합치기'],
    ],
  },
  {
    title: 'Undo',
    rows: [
      ['git checkout -- <file>', '파일 변경 취소 (커밋 전)'],
      ['git reset HEAD <file>', '스테이징 취소'],
      ['git reset --soft HEAD~1', '마지막 커밋 취소 (변경 유지)'],
    ],
  },
];

export default function Cheatsheet() {
  return (
    <>
      <h1>Cheatsheet</h1>
      <p>자주 쓰는 Git 명령어를 한눈에 정리했습니다.</p>

      {SECTIONS.map((s) => (
        <div key={s.title}>
          <h2 id={s.title.toLowerCase()}>{s.title}</h2>
          <table className="cheat-table">
            <thead>
              <tr>
                <th>명령어</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              {s.rows.map(([cmd, desc]) => (
                <tr key={cmd}>
                  <td><code>{cmd}</code></td>
                  <td>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <PageNav current="/cheatsheet" />
    </>
  );
}
