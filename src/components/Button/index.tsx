import Image from 'next/image';

export function Button({ ...props }) {
  return (
    <button
      className="hover:shadow-drop-shadow absolute bottom-[-32px] flex h-16 w-16 items-center justify-center rounded-full bg-neon-green"
      {...props}
    >
      <Image alt="Icon button" src="/icon-button.png" width={24} height={24} />
    </button>
  );
}
