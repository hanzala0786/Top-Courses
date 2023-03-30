import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function likeHandler() {
      if(likedCourses.includes(course.id)){
        // This course is already liked 
        // removing from the liked likedCourses
        setLikedCourses((prev) => prev.filter(
          (cid) => (cid !== course.id)
        ))
        toast.warning("like removed");
      }
      else{
        // insert this course into liked course
        if(likedCourses.length === 0){
          setLikedCourses([course.id])
        }
        else{
          setLikedCourses((prev) => [...prev, course.id])
        }
        toast.success("liked Successfully")
      }
    }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative rounded-md'>
        <img src={course.image.url} alt="" />
        <div className='w-[40px] h-[40px] grid place-items-center bg-white rounded-full absolute left-[82%] bottom-[-15px]'>
          <button onClick={likeHandler}>
            {
              likedCourses.includes(course.id)?(<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
            }
          </button>
        </div> 
      </div>
      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='text-white mt-4'>
          {
            course.description.length >100 ? (course.description.substring(0,100)):(course.description)
          }
        </p>
      </div>
    </div>
  )
}

export default Card