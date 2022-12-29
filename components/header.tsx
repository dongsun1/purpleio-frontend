import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between px-4 pt-4">
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
