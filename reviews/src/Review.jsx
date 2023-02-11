import React from "react";
import people from './data'
import {FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
 
function Review(){
    const [index, setIndex] = React.useState(1)
    const {name, job, image, text} = people[index]

    const checkNumber =(number)=>{
        if(number > people.length -1){
            return 0
        }
        if(number <  0){
            return people.length -1
        }
        return number 
    }

    
    const nextPerson = ()=>{
        setIndex((prevState)=>{
            let newIndex = prevState +1
            return checkNumber (newIndex)
        });
    };

    const prevPerson = ()=>{
        setIndex((prevState)=>{
            let newIndex = prevState -1
            return checkNumber ( newIndex)
        });
    };

    const randomPerson =()=>{
        let randomNumber = Math.floor (Math.random()* people.length)
        if(randomNumber === index){
            randomNumber = index + 1
        }
        setIndex(checkNumber(randomNumber))
    }

    return(
        <acticle className='review'>
            <div className="img-container">
                <img src={image} alt={name} className ='person-img' />
                <span className="quote-icon">
                    <FaQuoteRight/>
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight/>
                </button>
            </div>
            <button className="random-btn" onClick={randomPerson}>suprise </button>
        </acticle>
    )
}

export default Review