import { useState } from "react";
import "./App.css";

const initialTrend = {
  title: "오늘의 유행 추천을 받아보세요",
  category: "Trend Pick",
  reason: "버튼을 누르면 YouTube 인기 영상 데이터를 가져오고, 사내 LLM이 오늘 볼 만한 유행 영상/밈을 하나 추천합니다.",
  point: "실시간 YouTube API + Qwen3.6 LLM 기반으로 추천 결과를 생성합니다.",
  tags: ["#유행추천", "#YouTube", "#AI추천"],
  url: "",
};

function App() {
  const [trend, setTrend] = useState(initialTrend);
  const [loading, setLoading] = useState(false);

  const pickTrend = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/trend");

      if (!response.ok) {
        throw new Error("trend-api 호출 실패");
      }

      const data = await response.json();
      setTrend(data.recommendation);
    } catch (error) {
      setTrend({
        title: "추천을 불러오지 못했습니다",
        category: "오류",
        reason: "trend-api 호출 중 문제가 발생했습니다.",
        point: "잠시 후 다시 시도하거나 API 상태를 확인해주세요.",
        tags: ["#오류", "#API", "#확인필요"],
        url: "",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="bg-circle bg-circle-1"></div>
      <div className="bg-circle bg-circle-2"></div>

      <main className="container">
        <section className="hero">
          <span className="badge">Live AI</span>
          <h1>Trend Pick Bot</h1>
          <p className="subtitle">오늘의 유행 영상 · 밈 추천봇</p>

          <h2>🔥 오늘 뭐가 유행이야?</h2>

          <p className="desc">
            버튼을 누르면 한국 YouTube 인기 영상을 조회하고,
            <br />
            사내 LLM이 오늘 볼 만한 유행 영상/밈을 하나 추천합니다.
          </p>

          <button className="pick-btn" onClick={pickTrend} disabled={loading}>
            {loading ? "추천 가져오는 중..." : "오늘의 유행 추천받기"}
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
              <strong>볼 만한 포인트</strong>
            </p>
            <p>{trend.point}</p>
          </div>

          <div className="tags">
            {trend.tags?.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          {trend.url && (
            <a
              className="watch-link"
              href={trend.url}
              target="_blank"
              rel="noreferrer"
            >
              YouTube에서 보기 →
            </a>
          )}
        </section>

        <section className="bottom-note">
          YouTube Data API와 사내 Qwen3.6 LLM을 활용해
          <br />
          실시간 트렌드 기반 추천을 제공합니다.
        </section>
      </main>
    </div>
  );
}

export default App;
