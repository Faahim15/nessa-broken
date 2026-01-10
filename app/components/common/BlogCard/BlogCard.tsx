import { Image } from "antd";
import Link from "next/link";
import { BiCalendar } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
}

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <article className="bg-[#131417] rounded-lg overflow-hidden hover:transform hover:scale-[101%] transition-all duration-300">
      <div className="relative h-96 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          preview={false}
          placeholder={false}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-400 text-sm mb-3">
          <BiCalendar style={{ marginRight: "8px" }} className="w-4 h-4 mr-2" />
          {post.date}
        </div>
        <h2 className="text-2xl font-bold text-white mb-3 hover:text-white/70 transition-colors">
          {post.title}
        </h2>
        <p className="text-[#9D9A97] mb-4 line-clamp-2">{post.description}</p>
        <Link
           href={`/blog/${post.slug}`}
         //  href={`/blog/#`}
          className="flex items-center text-white hover:text-white/70 font-medium transition-colors"
        >
          Read More
          <BsArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
