"use client";

import { useState } from "react";
import BlogCard from "../components/common/BlogCard/BlogCard";
import PageHeading from "../components/common/PageHeading/PageHeading";
import Pagination from "../components/common/Pagination/Pagination";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Making of a Broken World",
    description:
      "A behind-the-scenes look at how the world of Nessa came to be, and the inspirations that shaped its fractured reality.",
    date: "December 15, 2025",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=600&fit=crop",
    slug: "making-of-broken-world",
  },
  {
    id: 2,
    title: "Character Spotlight: Nessa",
    description:
      "Diving deep into the mind of our protagonist, exploring her journey through loss, identity, and redemption.",
    date: "December 10, 2025",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop",
    slug: "character-spotlight-nessa",
  },
  {
    id: 3,
    title: "Themes of Identity and Memory",
    description:
      "Exploring how memory shapes identity in a world where the past is as fluid as the present.",
    date: "November 10, 2025",
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop",
    slug: "themes-identity-memory",
  },
  {
    id: 4,
    title: "The Art of World-Building",
    description:
      "How to create a fantastical world that feels emotionally real and grounded in human experience.",
    date: "November 08, 2025",
    image:
      "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?w=800&h=600&fit=crop",
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
      <div className="container mx-auto">
        <PageHeading
          title="Blog & Updates"
          description="News and reflections from the broken world"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
