export const chanyeolData = [
  { id: 1, name: "무대 위 열정 찬열", src: "https://via.placeholder.com/400x600/FF007A/FFFFFF?text=CHANYEOL+1" },
  { id: 2, name: "기타 치는 감성 찬열", src: "https://via.placeholder.com/400x600/00F0FF/000000?text=CHANYEOL+2" },
  { id: 3, name: "안경 쓴 지적인 찬열", src: "https://via.placeholder.com/400x600/FF007A/FFFFFF?text=CHANYEOL+3" },
  { id: 4, name: "멍뭉미 넘치는 찬열", src: "https://via.placeholder.com/400x600/00F0FF/000000?text=CHANYEOL+4" },
  // ... 나머지는 나중에 채우더라도 일단 이 구조로 저장하세요!
  ...Array.from({ length: 124 }, (_, i) => ({
    id: i + 5,
    name: `찬열 매력 포인트 ${i + 5}`,
    src: `https://via.placeholder.com/400x600/333333/FFFFFF?text=CHANYEOL+${i+5}`
  }))
];