import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import useKeypress from "react-use-keypress";
import Layout from "../../components/layout";

const FirstPost = () => {
  const router = useRouter();

  useKeypress(["ArrowLeft", "ArrowRight"], (event) => {
    if (event.key === "ArrowLeft") {
      console.log("left");
      router.push("/");
    } else {
      console.log("right");
      router.push("/posts/first-post");
    }
  });

  return (
    <Layout>
      <div>
        <Head>
          <title>First Post</title>
        </Head>
        <div>FirstPost</div>
        <Link href="/">Back to home</Link>
        <img src="/images/profile.jpg" alt="Your Name" />

        {/* <button onClick={() => router.push("/")}> {"<"}</button>
        <button> {">"}</button> */}
      </div>
    </Layout>
  );
};

export default FirstPost;
