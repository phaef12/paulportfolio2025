// pages/portfolio.tsx
// import Image from "next/image";
// import Link from "next/link";
// import PageTitle from "@components/PageTitle";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Portfolio() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/"); // redirect to home
  }, [router]);

  return null; // nothing renders while redirecting
}

// const photos = [
//   { src: "/photos/bee.JPG", alt: "Mountain view" },
//   { src: "/photos/car.JPG", alt: "City skyline" },
//   { src: "/photos/cat.JPG", alt: "Forest trail" },
//   { src: "/photos/ball.JPG", alt: "Desert sunset" },
//   { src: "/photos/arch.JPG", alt: "Ocean waves" },
//   { src: "/photos/rome.JPG", alt: "Night lights" },
//     { src: "/photos/thinking.JPG", alt: "Desert sunset" },
//   { src: "/photos/locks.JPG", alt: "Ocean waves" },
//   { src: "/photos/car2.JPG", alt: "Night lights" },
// ];

// const photos = [
//   { src: "/photos/bee.JPG", alt: "Mountain view" },
//   { src: "/photos/car.JPG", alt: "City skyline" },
//   { src: "/photos/cat.JPG", alt: "Forest trail" },
//   { src: "/photos/ball.JPG", alt: "Desert sunset" },
//   { src: "/photos/arch.JPG", alt: "Ocean waves" },
//   { src: "/photos/rome.JPG", alt: "Night lights" },
//     { src: "/photos/thinking.JPG", alt: "Desert sunset" },
//   { src: "/photos/locks.JPG", alt: "Ocean waves" },
//   { src: "/photos/car2.JPG", alt: "Night lights" },
// ];

// export default function Portfolio() {
//   return (
//         <div className="flex flex-col text-white">

//     <main className="min-h-screen p-8">
//       <PageTitle>WHERE focus = 'sharp';</PageTitle>
//       <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2">
//         {photos.map((photo, idx) => (
//           <div
//             key={idx}
//             className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md hover:scale-105 transform transition"
//           >
//             <Image
//               src={photo.src}
//               alt={photo.alt}
//               fill
//               className="object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </main>
//           </div>
//   );
// }
