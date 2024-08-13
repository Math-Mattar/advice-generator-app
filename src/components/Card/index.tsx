import { Button } from '../Button';
import HorizontalDiv from '../HorizontalDiv';
import VerticalDiv from '../VerticalDiv';

export function Card() {
  return (
    <section className="relative rounded-2xl bg-dark-grayish-blue px-6 pb-16 pt-10 font-extrabold">
      <h2 className="text-sm tracking-md text-neon-green">advice</h2>
      <h1 className="text-md tracking-sm text-light-cyan">Text</h1>
      <Button />
      <div className="flex items-center gap-4">
        <HorizontalDiv />
        <div className="flex items-center gap-2">
          <VerticalDiv />
          <VerticalDiv />
        </div>
        <HorizontalDiv />
      </div>
    </section>
  );
}
