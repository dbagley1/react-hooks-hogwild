import Hog from './Hog.js';

export default function HogList(props) {
  const { hogs } = props;

  return (
    <div>
      <ul>
        {hogs.map(hog => (
          <li key={hog.name}>
            <Hog hog={hog} />
          </li>
        ))}
      </ul>
    </div>
  );
}
