import { useState } from 'react'
import './App.css'

const sampleTrends = [
  {
    title: '요즘 유행하는 쇼츠 챌린지',
    type: 'YouTube Shorts / 밈',
    reason: '짧고 따라 하기 쉬운 포맷이라 여러 사람이 패러디하기 좋습니다.',
    point: '댓글 반응과 변형 버전을 같이 보면 더 재미있습니다.',
    keyword: '#쇼츠 #챌린지 #밈',
  },
  {
    title: '직장인 공감 상황극 밈',
    type: '공감형 밈',
    reason: '회의, 출근, 퇴근 같은 일상 상황을 과장해서 많은 사람이 공감합니다.',
    point: '짧은 대사와 표정 연기가 핵심 포인트입니다.',
    keyword: '#직장인 #공감 #상황극',
  },
  {
    title: 'AI가 만든 웃긴 이미지/영상 밈',
    type: 'AI 밈',
    reason: 'AI 특유의 어색함과 예상 밖 결과가 웃음 포인트로 소비되고 있습니다.',
    point: '원본보다 댓글의 재해석이 더 재미있는 경우가 많습니다.',
    keyword: '#AI밈 #생성AI #유머',
  },
]

function App() {
  const [trend, setTrend] = useState(null)

  const recommendTrend = () => {
    const randomIndex = Math.floor(Math.random() * sampleTrends.length)
    setTrend(sampleTrends[randomIndex])
  }

  return (
    <div className="page">
      <div className="trend-container">
        <div className="trend-header">
          <div>
            <h1>Trend Pick Bot</h1>
            <p>오늘의 유행 영상 · 밈 추천봇</p>
          </div>
          <span className="status">Beta</span>
        </div>

        <div className="trend-body">
          <div className="intro-card">
            <h2>🔥 오늘 뭐가 유행이야?</h2>
            <p>
              버튼을 누르면 오늘 볼 만한 유행 영상/밈을 하나 추천해드릴게요.
              아직 실시간 YouTube API 연결 전이라 샘플 데이터로 동작합니다.
            </p>
          </div>

          <button className="recommend-button" onClick={recommendTrend}>
            오늘의 유행 추천받기
          </button>

          {trend && (
            <div className="result-card">
              <div className="badge">{trend.type}</div>
              <h2>{trend.title}</h2>

              <div className="info-block">
                <strong>왜 유행?</strong>
                <p>{trend.reason}</p>
              </div>

              <div className="info-block">
                <strong>볼 만한 포인트</strong>
                <p>{trend.point}</p>
              </div>

              <div className="keyword">{trend.keyword}</div>
            </div>
          )}
        </div>

        <div className="trend-footer">
          나중에 YouTube API 또는 LLM API URL을 연결하면 실제 트렌드 기반으로 추천할 수 있습니다.
        </div>
      </div>
    </div>
  )
}

export default App
