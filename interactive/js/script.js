
//main
var openDiv = document.getElementById ('open');
var header = document.getElementsByTagName ('header');
var playBtn = document.getElementById ('open-btn');

//video
function videoPlay () {    
        if (video.pause) {
            video.play();
        }
       openDiv.style.opacity = '0';
       openDiv.style.transition = 'all 2s';

        setTimeout (function() {
            openDiv.style.display = 'none';
            header.style.opacity = '1';
        }, 2000);

    }

playBtn.addEventListener('click', videoPlay, false);


//image
var img1 = document.getElementById('img_1');
var img2 = document.getElementById('img_2');
var img3 = document.getElementById('img_3');
var img4 = document.getElementById('img_4');
var img5 = document.getElementById('img_5');
var img6 = document.getElementById('img_6');
var img7 = document.getElementById('img_7');
var img8 = document.getElementById('img_8');
var img9 = document.getElementById('img_9');
var img10 = document.getElementById('img_10');
var img11 = document.getElementById('img_11');

//audio
var audio11 = document.getElementById('audio');
var audio22 = document.getElementById('audio2');
var audio33 = document.getElementById('audio3');
var audio44 = document.getElementById('audio4');
var audio55 = document.getElementById('audio5');
var audio66 = document.getElementById('audio6');


function keyImgs_in(e) {
        var x = e.keyCode;
    
    //image
    
    
        if (x == 76) {  // 76 is the L key
            img1.style.opacity = '1';
        }
        if (x == 75) {  // 75 is the K key
            img2.style.opacity = '1';
        } 
        if (x == 74) {  // 74 is the J key
            img3.style.opacity = '1';
        }
        if (x == 77) {   // 77 is the M key
            img4.style.opacity = '1';
        }
        if (x == 78) {   // 78 is the N key
            img5.style.opacity = '1';
        }
        if (x == 73) {   // 73 is the I key
            img6.style.opacity = '1';
        }
        if (x == 79) {   // 79 is the O key
            img7.style.opacity = '1';
        }
        if (x == 80) {   // 80 is the P key
                img8.style.opacity = '1';
            }
        if (x == 85) {   // 85 is the U key
                img9.style.opacity = '1';
            }
        if (x == 66) {   // 66 is the B key
                img10.style.opacity = '1';
            }
        if (x == 72) {   // 72 is the H key
                    img11.style.opacity = '1';
                }
    
    
    //audio
    
    
        if (x == 65){   // 65 is the A key
                audio11.play();
            }
        if (x == 68){   // 68 is the D key
                audio22.play();
                }
        if (x == 83){   // 83 is the S key
                audio33.play();
            }
        if (x == 70){   // 70 is the F key
                audio44.play();
            }
        if (x == 81){   // 81 is the Q key
                audio55.play();
            }
        if (x == 87){   // 87 is the W key
                audio66.play();
            }
        if (x == 69){   // 69 is the E key
                audio22.play();
            }
        if (x == 82){   // 82 is the R key
                audio11.play();
            }
        if (x == 90){   // 90 is the Z key
                audio22.play();
            }
        if (x == 88){   // 88 is the X key
                audio33.play();
            }
        if (x == 67){   // 67 is the C key
                audio44.play();
            }
        if (x == 86){   // 86 is the V key
                audio55.play();
            }
        if (x == 84){   // 84 is the T key
                audio66.play();
                }
        if (x == 89){   // 89 is the Y key
                audio33.play();
                }
        if (x == 71){   // 71 is the G key
                audio11.play();
                }
        
}

function keyImgs_out(e) {
        var x = e.keyCode;
    
    //image
    
    
        if (x == 76) {  // 76 is the L key
            img1.style.opacity = '0';
        }
        if (x == 75) {  // 75 is the K key
            img2.style.opacity = '0';
        } 
        if (x == 74) {  // 74 is the J key
            img3.style.opacity = '0';
        }
        if (x == 77) {  // 77 is the M key
            img4.style.opacity = '0';
        }
        if (x == 78) {  // 78 is the N key
            img5.style.opacity = '0';
        }
        if (x == 73) {   // 73 is the I key
            img6.style.opacity = '0';
        }
        if (x == 79) {   // 79 is the O key
            img7.style.opacity = '0';
        }
    
        if (x == 80) {   // 80 is the P key
            img8.style.opacity = '0';
            }
        if (x == 85) {   // 85 is the U key
            img9.style.opacity = '0';
            }
        if (x == 66) {   // 66 is the B key
            img10.style.opacity = '0';
            }
        if (x == 72) {   // 72 is the H key
            img11.style.opacity = '0';
                }
    
    //audio
    

        if (x == 65){   // 65 is the A key
                audio11.pause();
            }
        if (x == 68){   // 68 is the D key
                audio22.pause();
            }

        if (x == 83){   // 83 is the S key
                audio33.pause();
            }

        if (x == 70){   // 70 is the F key
                audio44.pause();
            }
        if (x == 81){   // 81 is the Q key
                audio55.pause();
            }
        if (x == 87){   // 87 is the W key
                audio66.pause();
            }
        if (x == 69){   // 69 is the E key
                audio22.pause();
            }
        if (x == 82){   // 82 is the R key
                audio11.pause();
            }

        if (x == 90){   // 90 is the Z key
                audio22.pause();
            }
        if (x == 88){   // 88 is the X key
                audio33.pause();
            }
        if (x == 67){   // 67 is the C key
                audio44.pause();
            }
        if (x == 86){   // 86 is the V key
                audio55.pause();
            }
        if (x == 84){   // 84 is the T key
                audio66.pause();
                }
        if (x == 89){   // 89 is the Y key
                audio33.pause();
                }
        if (x == 71){   // 71 is the G key
                audio11.pause();
                }
        
}


window.addEventListener ('keydown', keyImgs_in, false); 
window.addEventListener ('keyup', keyImgs_out, false);  
