import Hello from './Components/Hello';
import Time from './Components/Time';
import Resume from './Components/Resume';

function App() {
  return (
    <div>
      <Hello name="개리"/>
      <Time />
      <Resume 
        greeting="안녕하세요"
        name="개릭"
        hobby="게임"
        food="고기"
        color="blue"
      />
    </div>
  );
}

export default App;
