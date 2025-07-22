import css from 'components/App/App.module.css';
import CafeInfo from '../Cofeinfo/CafeInfo';

export default function App() {
  return (
    <div className={css.app}>
      <CafeInfo />
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
