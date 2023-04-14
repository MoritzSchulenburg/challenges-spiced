import "./Tag.css";

export default function Tag({ tag }) {
  // return <li className="tag">{tag}</li>;
  let tagClass = "tag";
  if (tag === "admin") tagClass = `tag tag--highlight`;
  return <li className={tagClass}>{tag}</li>;
}
