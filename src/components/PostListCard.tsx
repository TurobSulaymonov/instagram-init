"use client"

import { SimplePost } from '@/model/post';
import Image from 'next/image';
import { useState } from 'react';
import ActionBar from './ActionBar';
import Avatar from './Avatar';
import CommentForm from './CommentForm';
import PostModal from './PostModal';
import ModaPortal from './ui/ModalPortal';


type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;
  const [openModal, setOpenModel] = useState(false);
  return (
    <article className='rounded-lg shadow-md border border-gray-200'>
      <div className='flex items-center p-2'>
        <Avatar image={userImage} size="medium" highlight />
        <span className='text-gray-900 font-bold ml-2'>{username}</span>
      </div>
      <Image
        className='w-full object-cover aspect-square'
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
        onClick={()=> setOpenModel(true)}
      />
        <ActionBar 
           likes={likes} 
           username={username} 
           text={text} 
           createdAt={createdAt} 
        />
      <CommentForm />
      {openModal && (
        <ModaPortal>
           <PostModal onClose={() => setOpenModel(false)}>
            <p>포스트 상세 페이즈!!!</p>
           </PostModal>
        </ModaPortal>
      ) }
    </article>
  );
}
