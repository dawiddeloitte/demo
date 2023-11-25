import React from 'react'
import Image from '../../assets/images/Image.png'
import { Link, useParams } from 'react-router-dom';

const PostCardFigma = ({post}) => {
    return (
        <div
          className={`flex flex-col max-w-[450px] items-center relative w-[450px] bg-[#e7e7e7] rounded-[20px] overflow-hidden m-5`}
        >
          <img className="relative self-stretch w-full h-[296px] object-cover" alt="Image" src={Image} />
          <div className="flex flex-col items-start gap-[28px] p-[25px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[32px] tracking-[0] leading-[normal]">
                Title: {post.title}
              </div>
              <p className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[#514949] text-[24px] tracking-[0] leading-[36px]">
                {post.body}
              </p>
            </div>
            <button  className="inline-flex h-[48px] items-center justify-center gap-[10px] px-[32px] py-0 relative bg-[#835cdd] rounded-[4px] all-[unset] box-border">
              <Link to={`/posts/${post.id}`} state={post} className="relative w-fit [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                See more
              </Link>
            </button>
          </div>
        </div>
      );
}

export default PostCardFigma