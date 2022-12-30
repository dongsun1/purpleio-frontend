import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-between p-4 border-b md:flex-row">
      <div>
        <Link href="/" className="text-2xl">
          AWESOME FOOD STORE
        </Link>
      </div>
      <div>
        <Link href="/about" className="text-lg mr-2">
          About
        </Link>
        <Link href="/" className="text-lg">
          Store
        </Link>
      </div>
    </header>
  );
}
