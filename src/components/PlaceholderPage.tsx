interface Props {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: Props) {
  return (
    <div className="w-full min-h-screen pt-[75px] flex flex-col items-center justify-center bg-[var(--color-cream)] px-6 text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] mb-6">
        {title}
      </h1>
      <p className="max-w-2xl text-lg text-gray-700">{description}</p>
    </div>
  );
}
