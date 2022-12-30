import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  setTimeout(() => {
    router.push('/');
  }, 5000);

  return (
    <div className="flex flex-col justify-center items-center" style={{ flex: 1 }}>
      <span className="text-9xl">404</span>
      <span>잘못된 페이지입니다.</span>
    </div>
  );
}
