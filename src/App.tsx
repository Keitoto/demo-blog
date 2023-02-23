import { useAppSelector } from '@/app/store';
import Blog from '@/components/Blog';
import Homepage from '@/components/Homepage';
import Navbar from '@/components/Navbar';
import { selectSignedIn } from '@/features/user/userSlice';

const App = () => {
  const isSignedIn = useAppSelector(selectSignedIn);

  return (
    <div className="App">
      <Navbar />
      <Homepage />
      {isSignedIn && <Blog />}
    </div>
  );
};

export default App;
