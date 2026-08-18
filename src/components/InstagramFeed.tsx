const posts = [
  "/team.png",
  "/ig-1.png",
  "/ig-2.png",
  "/ig-3.png",
  "/ig-4.png",
  "/ig-5.png",
];

export default function InstagramFeed() {
  return (
    <div className="w-full bg-white py-[100px] px-6">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-black">
        Follow Us
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 max-w-4xl mx-auto">
        {posts.map((src, i) => (
          <a
            key={src}
            href="https://www.instagram.com/lexingworth/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square overflow-hidden group"
          >
            <img
              src={src}
              alt={`Lexingworth Capital Instagram post ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View on Instagram
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
