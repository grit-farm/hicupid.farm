import BookIndex from "./components/BookIndex";
import EmailForm from "./components/EmailForm";
import HomeArticle from "./components/HomeArticle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4">
      <HomeArticle />
      <BookIndex />
      <EmailForm />
    </main>
  );
}
