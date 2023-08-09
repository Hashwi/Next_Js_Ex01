import { useRouter } from "next/router";

function DetailsPage() {
  const router = useRouter()

 const newsId = router.query.newsId
    return (
      <div>
        <h1>Something Important</h1>
      </div>
    );
  }
  
  export default DetailsPage;
  
