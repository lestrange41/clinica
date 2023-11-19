/* eslint-disable no-unused-vars */
import React from 'react'
import '../styles/comment.css';



function Comment() {
  return (
    
    <div className='container-comments'>
        <h3>What people have said about us?</h3>
            <div className="comment">
              <div>
                  <img src="https://images.pexels.com/photos/9558894/pexels-photo-9558894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  <h6>Cristian Garcia</h6>
                  <p>Increíble experiencia en esta clínica dental. El equipo es amable, eficiente y brinda tratamientos de calidad. ¡Mi sonrisa nunca lució mejor!</p>
                  <p className="stars">★★★★★</p>
              </div>

              <div>
                  <img src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  <h6>Agnès Guinart</h6>
                  <p>Excelente atención y profesionalismo. La clínica ofrece un ambiente acogedor y los resultados son impecables. Recomiendo sus servicios sin dudarlo</p>
                  <p className="stars">★★★★★</p>
              </div>

              <div>
                  <img src="https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  <h6>Miquel Bellet</h6>
                  <p>Visité la clínica y quedé impresionado. El personal es experto y atento. Mis expectativas fueron superadas con creces. </p>
                  <p className="stars">★★★★★</p>
              </div>
            </div>        
    </div>
  )
}

export default Comment

// ★☆