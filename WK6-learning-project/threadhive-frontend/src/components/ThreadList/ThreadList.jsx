import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import './ThreadList.css';
import VoteButtons from "../Shared/VoteButtons";

export default function ThreadList({ threads, onSelect }) {
  const handleUpvote = () => {
    alert('Upvote clicked!');
  };
  const handleDownvote = () => {
    alert('Downvote clicked!');
  };



  return (
    <Container fluid className="px-0">
      {
      threads.map(
        t => (
          <div key={t.id} className="thread-card" >
            <div className="thread-card-body">
              <div className="vote-section">
                <VoteButtons
                  count={t.voteCount}
                  onUpvote={handleUpvote} onDownvote={handleDownvote}
                  btnClassName="vote-btn"
                  countClassName="vote-count" />
              </div>
              <div className="thread-content-section">
                <div className="thread-header">
                  <h5 className="thread-title">{t.title}</h5>
                  <span className="subreddit-badge">{t.subreddit}</span>
                </div>
                <p className="thread-text">{t.content}</p>
                <button className="view-thread-btn" onClick={() => onSelect(t)}>
                    View comments
                </button>
                </div>
              </div>
            </div>
          )
        )
      }
    </Container>
  );
}
