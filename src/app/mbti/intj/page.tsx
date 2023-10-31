import IntjArticle from "@/app/mbti/components/IntjArticle";
import IntjBookIndex from "@/app/mbti/components/IntjBookIndex";
import IntjForm from "@/app/mbti/components/IntjForm";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-8">
        <IntjArticle/>
        <IntjBookIndex/>
        <IntjForm/>
    </main>
  );
}
