import path from 'path';
import jsonfile from 'jsonfile';

import dirpath from './dirname';

export default function celebs(views, cat) {
  let end;
  if (cat === 'all') {
    end = 'pantheon.json';
  } else {
    end = `individual/${cat}.json`;
  }
  const file = path.join(dirpath, `/data/json/${views}/${end}`);
  return jsonfile.readFileSync(`${file}`);
}
