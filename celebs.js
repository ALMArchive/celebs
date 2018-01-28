import path from 'path';
import jsonfile from 'jsonfile';

export default function celebs(views, cat) {
  let end;
  if(cat === "all") {
    end = "pantheon.json";
  } else {
    end = `individual/${cat}.json`;
  }
  let file = path.join(__dirname,`/data/json/${views}/${end}`);
  return jsonfile.readFileSync(file);
}
