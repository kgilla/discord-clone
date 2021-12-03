import Head from "next/head";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";

export default function Home() {
  return (
    <div>
      <Head></Head>
      <TopNav />
      <Sidebar />
    </div>
  );
}
