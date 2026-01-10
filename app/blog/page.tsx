"use client";

import { useState } from "react";
import BlogCard from "../components/common/BlogCard/BlogCard";
import PageHeading from "../components/common/PageHeading/PageHeading";
import Pagination from "../components/common/Pagination/Pagination";
import book2 from "@/public/images/latest.png";
import char1 from "@/public/images/char1.png";
import char3 from "@/public/images/char3.png";
import world from "@/public/images/world.png";
import { StaticImageData } from "next/image";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  image: StaticImageData;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Making of a Broken World",
    description:
      "A behind-the-scenes look at how the world of Nessa came to be, and the inspirations that shaped its fractured reality.",
    date: "December 15, 2025",
    //  image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=600&fit=crop",
    image: book2,
    slug: "making-of-broken-world",
  },
  {
    id: 2,
    title: "Character Spotlight: Nessa",
    description:
      "Diving deep into the mind of our protagonist, exploring her journey through loss, identity, and redemption.",
    date: "December 10, 2025",
    //  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop",
    image: char1,
    slug: "character-spotlight-nessa",
  },
  {
    id: 3,
    title: "Themes of Identity and Memory",
    description:
      "Exploring how memory shapes identity in a world where the past is as fluid as the present.",
    date: "November 10, 2025",
    //  image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop",
    image: char3,
    slug: "themes-identity-memory",
  },
  {
    id: 4,
    title: "The Art of World-Building",
    description:
      "How to create a fantastical world that feels emotionally real and grounded in human experience.",
    date: "November 08, 2025",
    //  image:  "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?w=800&h=600&fit=crop",
    image: world,
    slug: "art-of-world-building",
  },
];

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 3; // from API / backend

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    // 👇 if fetching data
    // fetchData(page);
  };

  return (
    <section>
        <PageHeading
          title="Blog & Updates"
          description="News and reflections from the broken world"
        />
    

      <div className="container mx-auto py-10 px-6 lg:px-0 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          siblingCount={1} // optional
        />
      </div>
    </section>
  );
}
