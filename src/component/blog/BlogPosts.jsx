import React from "react";
import { SlCalender } from "react-icons/sl";
import "./blog.css";

function BlogPosts() {
  const blogposts = [
    {
      id: 1,
      image: "https://www.thedailymeal.com/img/gallery/heinz-is-rolling-out-a-brand-new-line-of-spicy-ketchup-here-are-the-flavors/intro-1680620311.jpg",
      date: "12 August, 2023",
      title: "Announcing if attachment resolution sentiments.",
      description:
        "Indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now.",
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34fWSV3i3k0EhhXY_zyz-nDZvYcDGGZrcOg&s",
      date: "13 August, 2023",
      title: "Overcame breeding point concerns has terminate.",
      description:
        "Indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now.",
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc1Pbxc-tQPs-4Md3WgnXXOw7Zd1TuW9CZvPymQAiA1TqlVK9KFa4lJKySZKaUkHBZuL0&usqp=CAU",
      date: "14 September, 2025",
      title: "Announcing if attachment resolution sentiments.",
      description:
        "Indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now.",
    },
  ];

  return (
    <div className="blog-container">
      {blogposts.map((post) => (
        <div className="blog-card" key={post.id}>
          <img src={post.image} alt={post.title} />
          <div className="blog-content">
            <div className="blog-meta">
              <span>
                <SlCalender /> {post.date}
              </span>
            </div>
            <h2 className="b-h2">{post.title}</h2>
            <p className="b-paragraph">{post.description}</p>
            <button type="button" className="learnmore-btn">
              LEARN MORE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogPosts;
