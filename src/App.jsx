import React, { useState, useEffect } from 'react';
import { Trophy, Share2, RefreshCw, Heart, ChevronRight, User, Sparkles, Wand2, Twitter, ExternalLink } from 'lucide-react';

// --- 찬열 랜덤 어록 데이터 ---
const CHANYEOL_QUOTES = [
  "누가 오늘 나한테 옷 벗으라고 소리지르더라;",
  "아멀랑~~~~~~~~",
  "이게 왜 좋아??",
  "웃겨 진짜~~~~~~",
  "초콜릿 대신 나",
  "웃겨 진짜~~~~~",
  "사랑해❤️"
];
// --- 데이터 생성 로직 (확장자가 다른 경우) ---
const generateCandidates = () => {
  // 1. 여기에 실제 파일명과 확장자를 직접 입력하세요.
  // 128장이 모두 다르다면 이 리스트를 채우는 것이 가장 확실합니다.
  const photoList = [
    { name: "#001", file: "chanyeol_1.gif" },
    { name: "#002", file: "chanyeol_2.gif" },
    { name: "#003", file: "chanyeol_3.JPG" },
    { name: "#004", file: "chanyeol_4.JPG" },
    { name: "#005", file: "chanyeol_5.JPG" },
    { name: "#006", file: "chanyeol_6.JPG" },
    { name: "#007", file: "chanyeol_7.JPG" },
    { name: "#008", file: "chanyeol_8.JPG" },
    { name: "#009", file: "chanyeol_9.JPG" },
    { name: "#010", file: "chanyeol_10.JPG" },
    { name: "#011", file: "chanyeol_11.GIF" },
    { name: "#012", file: "chanyeol_12.JPG" },
    { name: "#013", file: "chanyeol_13.JPG" },
    { name: "#014", file: "chanyeol_14.JPG" },
    { name: "#015", file: "chanyeol_15.JPG" },
    { name: "#016", file: "chanyeol_16.JPG" },
    { name: "#017", file: "chanyeol_17.JPG" },
    { name: "#018", file: "chanyeol_18.JPG" },
    { name: "#019", file: "chanyeol_19.JPG" },
    { name: "#020", file: "chanyeol_20.JPG" },
    { name: "#021", file: "chanyeol_21.JPG" },
    { name: "#022", file: "chanyeol_22.JPG" },
    { name: "#023", file: "chanyeol_23.JPG" },
    { name: "#024", file: "chanyeol_24.JPG" },
    { name: "#025", file: "chanyeol_25.JPG" },
    { name: "#026", file: "chanyeol_26.JPG" },
    { name: "#027", file: "chanyeol_27.JPG" },
    { name: "#028", file: "chanyeol_28.JPG" },
    { name: "#029", file: "chanyeol_29.JPG" },
    { name: "#030", file: "chanyeol_30.JPG" },
    { name: "#031", file: "chanyeol_31.JPG" },
    { name: "#032", file: "chanyeol_32.JPG" },
    { name: "#033", file: "chanyeol_33.JPG" },
    { name: "#034", file: "chanyeol_34.JPG" },
    { name: "#035", file: "chanyeol_35.JPG" },
    { name: "#036", file: "chanyeol_36.JPG" },
    { name: "#037", file: "chanyeol_37.JPG" },
    { name: "#038", file: "chanyeol_38.JPG" },
    { name: "#039", file: "chanyeol_39.JPG" },
    { name: "#040", file: "chanyeol_40.JPG" },
    { name: "#041", file: "chanyeol_41.JPG" },
    { name: "#042", file: "chanyeol_42.JPG" },
    { name: "#043", file: "chanyeol_43.JPG" },
    { name: "#044", file: "chanyeol_44.JPG" },
    { name: "#045", file: "chanyeol_45.JPG" },
    { name: "#046", file: "chanyeol_46.JPG" },
    { name: "#047", file: "chanyeol_47.JPG" },
    { name: "#048", file: "chanyeol_48.JPG" },
    { name: "#049", file: "chanyeol_49.JPG" },
    { name: "#050", file: "chanyeol_50.JPG" },
    { name: "#051", file: "chanyeol_51.JPG" },
    { name: "#052", file: "chanyeol_52.JPG" },
    { name: "#053", file: "chanyeol_53.JPG" },
    { name: "#054", file: "chanyeol_54.JPG" },
    { name: "#055", file: "chanyeol_55.JPG" },
    { name: "#056", file: "chanyeol_56.JPG" },
    { name: "#057", file: "chanyeol_57.JPG" },
    { name: "#058", file: "chanyeol_58.JPG" },
    { name: "#059", file: "chanyeol_59.JPG" },
    { name: "#060", file: "chanyeol_60.JPG" },
    { name: "#061", file: "chanyeol_61.JPG" },
    { name: "#062", file: "chanyeol_62.JPG" },
    { name: "#063", file: "chanyeol_63.JPG" },
    { name: "#064", file: "chanyeol_64.JPG" },
    { name: "#065", file: "chanyeol_65.JPG" },
    { name: "#066", file: "chanyeol_66.JPG" },
    { name: "#067", file: "chanyeol_67.JPG" },
    { name: "#068", file: "chanyeol_68.JPG" },
    { name: "#069", file: "chanyeol_69.JPG" },
    { name: "#070", file: "chanyeol_70.JPG" },
    { name: "#071", file: "chanyeol_71.JPG" },
    { name: "#072", file: "chanyeol_72.JPG" },
    { name: "#073", file: "chanyeol_73.JPG" },
    { name: "#074", file: "chanyeol_74.JPG" },
    { name: "#075", file: "chanyeol_75.JPG" },
    { name: "#076", file: "chanyeol_76.JPG" },
    { name: "#077", file: "chanyeol_77.JPG" },
    { name: "#078", file: "chanyeol_78.JPG" },
    { name: "#079", file: "chanyeol_79.JPG" },
    { name: "#080", file: "chanyeol_80.JPG" },
    { name: "#081", file: "chanyeol_81.JPG" },
    { name: "#082", file: "chanyeol_82.JPG" },
    { name: "#083", file: "chanyeol_83.JPG" },
    { name: "#084", file: "chanyeol_84.JPG" },
    { name: "#085", file: "chanyeol_85.JPG" },
    { name: "#086", file: "chanyeol_86.JPG" },
    { name: "#087", file: "chanyeol_87.JPG" },
    { name: "#088", file: "chanyeol_88.JPG" },
    { name: "#089", file: "chanyeol_89.JPG" },
    { name: "#090", file: "chanyeol_90.JPG" },
    { name: "#091", file: "chanyeol_91.JPG" },
    { name: "#092", file: "chanyeol_92.JPG" },
    { name: "#093", file: "chanyeol_93.JPG" },
    { name: "#094", file: "chanyeol_94.JPG" },
    { name: "#095", file: "chanyeol_95.JPG" },
    { name: "#096", file: "chanyeol_96.JPG" },
    { name: "#097", file: "chanyeol_97.JPG" },
    { name: "#098", file: "chanyeol_98.JPG" },
    { name: "#099", file: "chanyeol_99.JPG" },
    { name: "#100", file: "chanyeol_100.JPG" },
    { name: "#101", file: "chanyeol_101.JPG" },
    { name: "#102", file: "chanyeol_102.JPG" },
    { name: "#103", file: "chanyeol_103.JPG" },
    { name: "#104", file: "chanyeol_104.JPG" },
    { name: "#105", file: "chanyeol_105.JPG" },
    { name: "#106", file: "chanyeol_106.JPG" },
    { name: "#107", file: "chanyeol_107.JPG" },
    { name: "#108", file: "chanyeol_108.JPG" },
    { name: "#109", file: "chanyeol_109.JPG" },
    { name: "#110", file: "chanyeol_110.JPG" },
    { name: "#111", file: "chanyeol_111.JPG" },
    { name: "#112", file: "chanyeol_112.JPG" },
    { name: "#113", file: "chanyeol_113.JPG" },
    { name: "#114", file: "chanyeol_114.JPG" },
    { name: "#115", file: "chanyeol_115.JPG" },
    { name: "#116", file: "chanyeol_116.JPG" },
    { name: "#117", file: "chanyeol_117.JPG" },
    { name: "#118", file: "chanyeol_118.JPG" },
    { name: "#119", file: "chanyeol_119.JPG" },
    { name: "#120", file: "chanyeol_120.JPG" },
    { name: "#121", file: "chanyeol_121.JPG" },
    { name: "#122", file: "chanyeol_122.JPG" },
    { name: "#123", file: "chanyeol_123.JPG" },
    { name: "#124", file: "chanyeol_124.JPG" },
    { name: "#125", file: "chanyeol_125.JPG" },
    { name: "#126", file: "chanyeol_126.JPG" },
    { name: "#127", file: "chanyeol_127.JPG" },
    { name: "#128", file: "chanyeol_128.JPG" },
    // ... 나머지 128개까지 파일명과 확장자를 맞춰서 입력하세요.
  ];

  if (photoList.length < 128) {
    for (let i = photoList.length + 1; i <= 128; i++) {
      photoList.push({
        name: `찬열 레전드 #${i}`,
        file: `chanyeol_${i}.jpg` 
      });
    }
  }

  return photoList.map((item, index) => ({
    id: index + 1,
    name: item.name,
    imgUrl: `/images/${item.file}` 
  }));
};

const INITIAL_CANDIDATES = generateCandidates();

export default function App() {
  const [step, setStep] = useState('welcome'); 
  const [nickname, setNickname] = useState('');
  const [candidates, setCandidates] = useState([]);
  const [displays, setDisplays] = useState([]); 
  const [winners, setWinners] = useState([]); 
  const [roundInfo, setRoundInfo] = useState({ round: 128, current: 1, total: 64 });
  const [finalWinner, setFinalWinner] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '' });
  const [randomQuote, setRandomQuote] = useState('');

  const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

  const startGame = () => {
    if (!nickname.trim()) {
      showToast('닉네임을 입력해주세요 ㅠㅍㅠ');
      return;
    }
    const shuffled = shuffleArray(INITIAL_CANDIDATES);
    setCandidates(shuffled);
    setDisplays([shuffled[0], shuffled[1]]);
    setWinners([]);
    setRoundInfo({ round: 128, current: 1, total: 64 });
    setStep('playing');
  };

  const handleChoice = (selected) => {
    const newWinners = [...winners, selected];
    setWinners(newWinners);
    const nextMatchIndex = roundInfo.current * 2;

    if (candidates.length <= 2) {
      setFinalWinner(selected);
      const randomIndex = Math.floor(Math.random() * CHANYEOL_QUOTES.length);
      setRandomQuote(CHANYEOL_QUOTES[randomIndex]);
      setStep('result');
    } else if (roundInfo.current < roundInfo.total) {
      setDisplays([candidates[nextMatchIndex], candidates[nextMatchIndex + 1]]);
      setRoundInfo(prev => ({ ...prev, current: prev.current + 1 }));
    } else {
      const nextRoundCandidates = newWinners;
      setCandidates(nextRoundCandidates);
      setDisplays([nextRoundCandidates[0], nextRoundCandidates[1]]);
      setWinners([]);
      setRoundInfo({ round: roundInfo.round / 2, current: 1, total: roundInfo.total / 2 });
    }
  };

const shareToTwitter = () => {
    // 현재 웹사이트의 도메인을 포함한 전체 이미지 주소를 생성합니다.
    const fullImageUrl = window.location.origin + finalWinner.imgUrl;
    const url = window.location.href;
    
    // 트위터 메시지 구성 (직접 참여하기 주소 링크 다음에 태그가 뜨도록 수정)
    const text = `🍒 취향의 찬열 토너먼트 결과\n\n${nickname} 님이 선택한 취향의 찬열은 [${finalWinner.name}] 입니다!\n"${randomQuote}"\n\n💘 결과 사진: ${fullImageUrl}\n💘 직접 참여하기: ${url}\n\n#찬열 #CHANYEOL #취향의찬열`;
    
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, '_blank');
  };
  const showToast = (msg) => {
    setToast({ show: true, message: msg });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans overflow-x-hidden p-4 flex flex-col items-center justify-between">
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-pink-600 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-600 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl flex-grow flex flex-col items-center justify-center">
        {step === 'welcome' && (
          <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700 shadow-2xl text-center max-w-md mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Heart className="w-16 h-16 text-pink-500 mx-auto mb-4 animate-bounce" />
            <h1 className="text-3xl font-black mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">취향의 찬열</h1>
            <p className="text-slate-400 mb-8">내 취향의 찬열이를 골라주세요 💘</p>
            
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="찬프" 
                className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-500 transition-all text-white placeholder:text-slate-600"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
              <button 
                onClick={startGame}
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:scale-[1.02] active:scale-95 transition-all py-4 rounded-xl font-bold text-lg shadow-lg shadow-pink-500/20"
              >
                128강 시작 ㅇㅍㅇ♡
              </button>
            </div>
          </div>
        )}

        {step === 'playing' && (
          <div className="flex flex-col items-center w-full">
            <div className="mb-8 text-center">
              <span className="bg-pink-600 px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-2 inline-block shadow-lg shadow-pink-500/30">
                {roundInfo.round === 2 ? "Final" : `${roundInfo.round}강`}
              </span>
              <h2 className="text-slate-400 font-medium">({roundInfo.current} / {roundInfo.total})</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-6 w-full items-center justify-center relative">
              {[0, 1].map(idx => (
                <div 
                  key={idx}
                  className="group relative w-full md:w-1/2 aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer border-4 border-transparent hover:border-pink-500 transition-all duration-300 shadow-2xl bg-slate-800"
                  onClick={() => handleChoice(displays[idx])}
                >
                  <img 
                    src={displays[idx].imgUrl} 
                    alt={displays[idx].name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300x400?text=Image+Not+Found";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-6 left-0 right-0 text-center p-4">
                    <p className="text-xl md:text-2xl font-bold">{displays[idx].name}</p>
                  </div>
                </div>
              ))}
              <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-slate-900 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-black italic border-4 border-pink-500 shadow-xl">VS</div>
            </div>
          </div>
        )}

        {step === 'result' && (
          <div className="max-w-md mx-auto text-center animate-in fade-in zoom-in duration-500 w-full px-4">
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-6">{nickname} 님이 선택한 취향의 찬열 🍒</h2>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 mb-8 bg-slate-800">
              <img src={finalWinner.imgUrl} alt={finalWinner.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
              <div className="absolute bottom-8 left-0 right-0 text-3xl font-black">{finalWinner.name}</div>
            </div>
            
            <div className="bg-slate-800/80 p-6 rounded-2xl mb-6 border border-pink-500/30 text-slate-200 min-h-[80px] flex flex-col items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-pink-400" />
              <p className="italic font-medium text-lg">"{randomQuote}"</p>
              <p className="text-[10px] text-slate-500">- 찬열 -</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <button 
                onClick={shareToTwitter}
                className="bg-[#1DA1F2] hover:bg-[#1a8cd8] py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Twitter className="w-5 h-5" /> 트위터 공유
              </button>
              <button 
                onClick={() => setStep('welcome')}
                className="bg-slate-800 hover:bg-slate-700 py-4 rounded-xl font-bold transition-all border border-slate-600 flex items-center justify-center gap-2 active:scale-95"
              >
                <RefreshCw className="w-5 h-5" /> 다시 고르기
              </button>
            </div>
          </div>
        )}
      </div>

      <footer className="relative z-10 mt-8 mb-4 opacity-60 hover:opacity-100 transition-opacity">
        <a 
          href="https://x.com/thecityscape" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-slate-800/40 px-4 py-2 rounded-full border border-slate-700 text-xs font-medium tracking-wide hover:bg-slate-700/60 transition-colors"
        >
          <Twitter className="w-3 h-3" />
          <span>@thecityscape</span>
          <ExternalLink className="w-3 h-3 opacity-50" />
        </a>
      </footer>

      {toast.show && (
        <div className="fixed bottom-10 z-50 bg-white text-slate-900 px-6 py-3 rounded-full font-bold shadow-2xl animate-bounce">
          {toast.message}
        </div>
      )}
    </div>
  );
}