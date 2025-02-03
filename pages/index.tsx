import dynamic from "next/dynamic";

const Counter = dynamic(() => import('../components/Counter'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <main>
        <Counter />
      </main>
    </div>
  );
}
