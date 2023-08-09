import Link from "next/link";
function NewsPage() {
  return (
    <>
      <div>
        <h1>News Page</h1>
        <ul>
          <li>
            <Link href="./news/item-01">NextJS is a great framework</Link>
          </li>
          <li>React also not that bad!</li>
        </ul>
      </div>
    </>
  );
}

export default NewsPage;
