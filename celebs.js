import path from 'path';
import jsonfile from 'jsonfile';

export default function celebs(views, cat) {
  const filepath = path.basename(import.meta.url);
  const dirpath = import.meta.url.replace("file:///", "")
                                 .replace(filepath, "");
  let end;
  if(cat === "all") {
    end = "pantheon.json";
  } else {
    end = `individual/${cat}.json`;
  }
  let file = path.join(dirpath,`/data/json/${views}/${end}`);
  return jsonfile.readFileSync("/" + file);
}
