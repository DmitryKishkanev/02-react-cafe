import css from 'components/App/App.module.css';
import CafeInfo from 'components/Cofeinfo/CafeInfo';
// import type { Votes, VoteType } from 'types/votes';
import VoteOptions from 'components/VoteOptions/VoteOptions';
import VoteStats from 'components/VoteStats/VoteStats';
import Notification from 'components/Notification/Notification';

// const votes: Votes = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

// function handleVote(type: VoteType) {}

// function resetVotes() {}

export default function App() {
  return (
    <div className={css.app}>
      <CafeInfo
        title="Sip Happens Café"
        description=" Please rate our service by selecting one of the options below."
      />
      <VoteOptions />
      <VoteStats />
      <Notification />
    </div>
    // <>

    //   <h1>Products</h1>

    //   <Product
    //     name="Tacos With Lime"
    //     imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
    //     price={10.99}
    //   />
    //   <Product
    //     name="Tacos With Lime"
    //     imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
    //     price={14.29}
    //   />
    // </>
  );
}
