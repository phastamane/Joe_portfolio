let count = 0

export default function scrollText() {
    
    let scroll = window.pageYOffset
    //console.log(scroll)
    
    if (window.matchMedia("(min-width: 706px) and (max-width: 1240px)").matches) {
    
       
        
        if (scroll > 1070 && scroll < 2170){

            if(count < scroll){
                document.getElementById('scroll-div').scrollBy(6,0)
                count = scroll
            }
            else if(count > scroll){
                document.getElementById('scroll-div').scrollBy(-6,0)
                count = scroll
            }

        }
} 

    else if(window.matchMedia("(max-width: 705px)").matches) {
        
        if (scroll > 2500 && scroll < 3170){

            if(count < scroll){
                document.getElementById('scroll-div').scrollBy(10,0)
                count = scroll
            }
            else if(count > scroll){
                document.getElementById('scroll-div').scrollBy(-10,0)
                count = scroll
            }

        
        }
    }

    else{
        
        if (scroll > 2500 && scroll < 3170){

            if(count < scroll){
                document.getElementById('scroll-div').scrollBy(40,0)
                count = scroll
            }
            else if(count > scroll){
                document.getElementById('scroll-div').scrollBy(-40,0)
                count = scroll
            }

        
        }
    }

}
