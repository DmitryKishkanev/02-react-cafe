import css from 'components/App/App.module.css';
import CafeInfo from '../Cofeinfo/CafeInfo';
import { Votes } from 'types/votes';

const votes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};
export default function App() {
  return (
    <div className={css.app}>
      <CafeInfo
        title="Sip Happens Café"
        description=" Please rate our service by selecting one of the options below."
      />
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
