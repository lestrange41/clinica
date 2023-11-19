// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Carousel from '../components/carousel';
import Comment from '../components/comment'
// import CommentsSection from '../components/comment-box'
import '../styles/navbar.css';
import '../styles/footer.css';
import '../styles/inicio.css';




const Inicio = () => {
    return(
        <div>
            <Navbar /> 
            <Carousel />
            <Comment />
            <Footer />
            
            
        </div>
    )
}

export default Inicio;