import { useState } from "react";
import "./App.css";

const trendSamples = [
  {
    title: "요즘 유행하는 숏츠 챌린지",
    category: "YouTube Shorts / 밈",
    reason: "짧고 따라 하기 쉬운 포맷이라 여러 사람이 패러디하기 좋습니다.",
    point: "댓글 반응과 변형 버전을 같이 보면 더 재미있습니다.",
    tags: ["#쇼츠", "#챌린지", "#밈"],
  },
  {
    title: "추억 소환 노래 밈",
    category: "음악 / 밈",
    reason: "익숙한 노래를 짧게 편집해서 공감형 콘텐츠로 소비하는 흐름입니다.",
    point: "세대 공감 포인트가 있어서 반응이 빠르게 퍼집니다.",
    tags: ["#추억", "#음악밈", "#공감"],
  },
  {
    title: "직장인 상황극 숏폼",
    category: "상황극 / Shorts",
    reason: "짧고 현실 공감이 강해서 직장인들 사이에서 공유가 잘 됩니다.",
    point: "점심시간, 퇴근 전 같은 키워드가 반응이 좋습니다.",
    tags: ["#직장인", "#상황극", "#공감"],
  },
];

function App() {
  const [trend, setTrend] = useState(trendSamples[0]);

  const pickTrend = () => {
    const random = trendSamples[Math.floor(Math.random() * trendSamples.length)];
    setTrend(random);
  };

  return (
    <div className="app">
      <div className="bg-circle bg-circle-1"></div>
      <div className="bg-circle bg-circle-2"></div>

      <main className="container">
        <section className="hero">
          <span className="badge">Beta</span>
          <h1>Trend Pick Bot</h1>
          <p className="subtitle">오늘의 유행 영상 · 밈 추천봇</p>
          <h2>🔥 오늘 뭐가 유행이야?</h2>
          <p className="desc">
            버튼을 누르면 오늘 볼 만한 유행 영상/밈을 하나 추천해드릴게요.
            <br />
            아직 실시간 YouTube API 연결 전이라 샘플 데이터로 동작합니다.
          </p>

          <button className="pick-btn" onClick={pickTrend}>
            오늘의 유행 추천받기
          </button>
        </section>

        <section className="result-card">
          <div className="result-top">
            <span className="category">{trend.category}</span>
            <span className="live-chip">추천 결과</span>
          </div>

          <h3>{trend.title}</h3>

          <div className="info-box">
            <p>
              <strong>왜 유행?</strong>
            </p>
            <p>{trend.reason}</p>
          </div>

          <div className="info-box">
            <p>
              <strong>볼만한 포인트</strong>
            </p>
            <p>{trend.point}</p>
          </div>

          <div className="tags">
            {trend.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="bottom-note">
          나중에 YouTube API 또는 LLM API URL을 연결하면
          <br />
          실제 트렌드 기반 추천 서비스로 확장할 수 있습니다.
        </section>
      </main>
    </div>
  );
}

export default App;
