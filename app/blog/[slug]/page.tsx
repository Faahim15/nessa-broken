"use client";

import char3 from "@/public/images/char3.png";
import book2 from "@/public/images/latest.png";
import world from "@/public/images/world.png";
import Image, { StaticImageData } from "next/image";
import { BiCalendar } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";

interface BlogPostData {
  title: string;
  createdAt: string; // 2026-01-10T04:06:07.226Z
  content: string[];
  images: StaticImageData[];
}
const postData: BlogPostData = {
  title: "Themes of Identity and Memory",
  createdAt: "November 20, 2025",
  content: [
    "In the fractured world of Feather Fields, identity is not a fixed concept but a constantly shifting landscape shaped by memory, loss, and the choices we make. This exploration delves into how the characters navigate their sense of self in a reality where the past and present blur together.",
    "Memory serves as both anchor and burden for the inhabitants of this broken world. Each character carries fragments of who they were, struggling to piece together a coherent narrative from scattered moments. The protagonist's journey is particularly poignant as she confronts the question: when everything you knew is torn apart, what remains of who you are?",
    "The narrative weaves through multiple timelines, reflecting the non-linear nature of memory itself. Past traumas resurface unexpectedly, challenging the characters to reconcile who they thought they were with who they've become. This fragmentation mirrors the shattered landscape they inhabit, creating a powerful metaphor for the human experience of loss and reconstruction.",
    "Identity in Feather Fields is intrinsically tied to relationships and connections. As characters form new bonds and rediscover old ones, they begin to see themselves reflected through others' eyes. This interplay between self-perception and external validation becomes crucial in their journey toward wholeness.",
    "The world itself acts as a character in this exploration of identity. Its broken geography, where familiar landmarks exist alongside impossible vistas, challenges the characters' sense of reality. Just as the world is fractured, so too are the identities of those who inhabit it, forcing them to question what is real and what is remembered.",
    "Through it all, the story suggests that identity is not something to be recovered but something to be rebuilt. Like the world around them, the characters must learn to exist in this new reality, carrying their memories not as burdens but as building blocks for who they will become.",
  ],
  images: [char3, book2, world],
};

export default function BlogDetails() {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <button className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <BsArrowLeft size={20} />
          <span>Back to All Posts</span>
        </button>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6 mb-8 md:max-h-137.5 overflow-hidden">
          {/* First Image (Takes up 2 rows) */}
          <div className="col-span-1 md:row-span-2 h-full overflow-hidden rounded-lg">
            <Image
              src={postData.images[0]}
              alt="Vintage camera"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Second Image */}
          <div className="col-span-1 md:row-span-1 h-full overflow-hidden rounded-lg">
            <Image
              src={postData.images[1]}
              alt="World map"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Third Image */}
          <div className="col-span-1 md:row-span-1 h-full overflow-hidden rounded-lg">
            <Image
              src={postData.images[2]}
              alt="Open book"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-gray-400 mb-4">
          <BiCalendar size={16} />
          <span>{postData.createdAt}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 font-inter">
          {postData.title}
        </h1>

        {/* Content */}
        <div className="space-y-6 text-gray-300 leading-relaxed">
          {postData.content.map((paragraph, index) => (
            <p key={index} className="text-base md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
