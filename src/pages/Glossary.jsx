import PageNav from '../components/PageNav';

const TERMS = [
  {
    category: 'Git 기본',
    items: [
      { term: 'Repository (저장소)', desc: '프로젝트 파일과 변경 이력을 저장하는 공간. 줄여서 repo라고 부릅니다.' },
      { term: 'Commit (커밋)', desc: '파일 변경 사항을 저장소에 기록하는 것. 하나의 "저장 포인트"라고 생각하면 됩니다.' },
      { term: 'Stage (스테이징)', desc: '커밋할 파일을 선택하는 단계. git add를 하면 스테이징 영역에 올라갑니다.' },
      { term: 'Branch (브랜치)', desc: '독립적인 작업 공간. 기존 코드에 영향 없이 새로운 기능을 개발할 수 있습니다.' },
      { term: 'Merge (머지)', desc: '하나의 브랜치를 다른 브랜치에 합치는 것.' },
      { term: 'HEAD', desc: '현재 작업 중인 브랜치의 최신 커밋을 가리키는 포인터.' },
      { term: 'Hash (해시)', desc: '각 커밋의 고유 ID. a1b2c3d 같은 문자열로 표시됩니다.' },
    ],
  },
  {
    category: '원격 저장소',
    items: [
      { term: 'Remote (리모트)', desc: '원격 서버에 있는 저장소. 보통 GitHub에 있는 저장소를 말합니다.' },
      { term: 'Origin', desc: '기본 원격 저장소의 이름. git clone이나 git remote add로 설정됩니다.' },
      { term: 'Push (푸시)', desc: '로컬 커밋을 원격 저장소에 업로드하는 것.' },
      { term: 'Pull (풀)', desc: '원격 저장소의 변경 사항을 로컬로 가져와서 합치는 것.' },
      { term: 'Fetch (페치)', desc: '원격 저장소의 변경 사항을 가져오기만 하고 합치지는 않는 것. pull = fetch + merge.' },
      { term: 'Clone (클론)', desc: '원격 저장소를 로컬에 복제하는 것. 프로젝트를 처음 가져올 때 사용합니다.' },
    ],
  },
  {
    category: 'GitHub',
    items: [
      { term: 'Pull Request (PR)', desc: '브랜치의 변경 사항을 다른 브랜치에 합쳐달라고 요청하는 것. 코드 리뷰의 기본 단위.' },
      { term: 'Fork (포크)', desc: '다른 사람의 저장소를 내 계정으로 복사하는 것. 오픈소스 기여 시 사용합니다.' },
      { term: 'Issue (이슈)', desc: '버그 제보, 기능 요청, 할 일 등을 관리하는 게시판.' },
      { term: 'Star (스타)', desc: '마음에 드는 저장소에 누르는 "좋아요". 북마크 역할도 합니다.' },
      { term: 'README', desc: '저장소에 들어가면 가장 먼저 보이는 설명 파일. 보통 프로젝트 소개를 적습니다.' },
      { term: '.gitignore', desc: 'Git이 추적하지 않을 파일 목록. node_modules, .env 같은 파일을 여기에 적습니다.' },
    ],
  },
  {
    category: '상태 & 되돌리기',
    items: [
      { term: 'Untracked', desc: 'Git이 아직 추적하지 않는 새 파일.' },
      { term: 'Modified', desc: '추적 중인 파일이 수정된 상태. 아직 스테이징되지 않음.' },
      { term: 'Staged', desc: 'git add로 다음 커밋에 포함되도록 선택된 상태.' },
      { term: 'Conflict (충돌)', desc: '두 브랜치에서 같은 부분을 다르게 수정해서 자동 병합이 안 되는 상태.' },
      { term: 'Revert', desc: '특정 커밋의 변경을 취소하는 새 커밋을 만드는 것.' },
      { term: 'Reset', desc: '커밋을 되돌리는 것. --soft는 변경을 유지, --hard는 변경을 삭제합니다.' },
    ],
  },
];

export default function Glossary() {
  return (
    <>
      <h1>용어 사전</h1>
      <p>Git과 GitHub에서 자주 나오는 용어를 정리했습니다.</p>

      {TERMS.map((section) => (
        <div key={section.category}>
          <h2 id={section.category.replace(/\s+/g, '-').replace(/[\/]/g, '-').toLowerCase()}>{section.category}</h2>
          <table className="cheat-table">
            <thead>
              <tr>
                <th style={{ whiteSpace: 'nowrap' }}>용어</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              {section.items.map(({ term, desc }) => (
                <tr key={term}>
                  <td><strong style={{ color: '#e6edf3' }}>{term}</strong></td>
                  <td>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <PageNav current="/glossary" />
    </>
  );
}
