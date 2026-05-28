import Menu from '../components/menu';

export default function MenuPage({ onBookTable }) {
  return (
    <main className="pt-24 bg-jungle-950 min-h-screen">
      <Menu onBookTable={onBookTable} />
    </main>
  );
}