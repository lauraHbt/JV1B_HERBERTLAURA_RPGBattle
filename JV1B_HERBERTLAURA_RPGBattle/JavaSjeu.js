//Purple
var p = true
var tourp
var viepurple = true;
var defp = false
var viep = document.getElementById('viep');
var manap = document.getElementById('manap');
var imgp = document.getElementById('purple');
//Blue
var b = true
var tourb
var vieblue = true;
var defb = false
var vieb = document.getElementById('vieb');
var manab = document.getElementById('manab');
var imgb = document.getElementById('blue');
//Green
var g = true
var tourg
var viegreen = true;
var defg = false
var vieg = document.getElementById('vieg');
var manag = document.getElementById('manag');
var imgg = document.getElementById('green');
//Pink
var pi = true
var tourpi
var viepink = true;
var defpi = false
var viepi = document.getElementById('viepi');
var manapi = document.getElementById('manapi');
var imgpi = document.getElementById('pink');

//monstres
var vieimposteur = document.getElementById('impov');
var imposteur = document.getElementById('imposteur');
var viebat1 = document.getElementById('bat1v');;
var bat1 = document.getElementById('bat1');
var viebat2 = document.getElementById('bat2v');;
var bat2 = document.getElementById('bat2');

//Boutons
var a = document.getElementById('a');
var d = document.getElementById('d');
var s = document.getElementById('s');
var spe = false
start = document.querySelector('#start');

var dialogue = document.getElementById('text');
var numeroDeTour = 0;
var attaquego = false;
var tour = false;
var max = 4
var min = 1
var aleo = 0

imposteur.onclick = function(){
    if (vieimposteur.innerHTML >= 0){
        if (attaquego == true){
            if (spe == true){
                if (numeroDeTour == 1 && manap.innerHTML >= 10){
                    vieimposteur.innerHTML= vieimposteur.innerHTML - 25;
                    attaquego = false;
                    spe == false;
                    manap.innerHTML = manap.innerHTML - 10;
                    p = false;
                    dialogue.innerHTML = "Appuye sur le bouton rouge";
                }
                if (numeroDeTour == 2 && manab.innerHTML >= 10){
                    vieimposteur.innerHTML= vieimposteur.innerHTML - 15;
                    attaquego = false;
                    spe == false;
                    manab.innerHTML = manab.innerHTML - 10;
                    b = false;
                    dialogue.innerHTML = "Appuye sur le bouton rouge";
                }
                if (numeroDeTour == 4 && manapi.innerHTML >= 10){
                    vieimposteur.innerHTML= vieimposteur.innerHTML - 20;
                    attaquego = false;
                    spe == false;
                    manapi.innerHTML = manapi.innerHTML - 10;
                    pi = false;
                    dialogue.innerHTML = "Appuye sur le bouton rouge";
                }
            }
            else {
                if (numeroDeTour == 1 && manap.innerHTML >= 5){
                    vieimposteur.innerHTML = vieimposteur.innerHTML - 10;
                    attaquego = false;
                    manap.innerHTML = manap.innerHTML - 5;
                    p = false;
                    dialogue.innerHTML = "Appuye sur le bouton rouge";
                }
                if (numeroDeTour == 2 && manab.innerHTML >= 5){
                    vieimposteur.innerHTML = vieimposteur.innerHTML - 10;
                    attaquego = false;
                    manab.innerHTML = manab.innerHTML - 5;
                    b = false;
                    dialogue.innerHTML = "Appuye sur le bouton rouge";
                }
                if (numeroDeTour == 3 && manag.innerHTML >= 5){
                    vieimposteur.innerHTML = vieimposteur.innerHTML - 10;
                    attaquego = false;
                    manag.innerHTML = manag.innerHTML - 5;
                    g = false;
                    dialogue.innerHTML = "Appuye sur le bouton rouge";
                }
                if (numeroDeTour == 4 && manapi.innerHTML >= 5){
                    vieimposteur.innerHTML = vieimposteur.innerHTML - 10;
                    attaquego = false;
                    manapi.innerHTML = manapi.innerHTML - 5;
                    pi = false
                    dialogue.innerHTML = "Appuye sur le bouton rouge";
                }
            }
        }
    }
    else{
    imposteur.style.visibility = 'hidden'
    }
}
bat1.onclick = function(){
    if (viebat1.innerHTML >= 0){
        if (attaquego == true){
            if (spe == true){
                if (numeroDeTour == 1 && manap.innerHTML >= 10){
                    viebat1.innerHTML= viebat1.innerHTML - 25;
                    attaquego = false;
                    spe == false;
                    manap.innerHTML = manap.innerHTML - 10;
                    p = false;
                    dialogue.innerHTML = "Appuye sur le bouton rouge";
                }
                if (numeroDeTour == 2 && manab.innerHTML >= 10){
                    viebat1.innerHTML= viebat1.innerHTML - 15;
                    attaquego = false;
                    spe == false;
                    manab.innerHTML = manab.innerHTML - 10;
                    b = false;
                    dialogue.innerHTML = "Appuye sur le bouton rouge";
                }
                if (numeroDeTour == 4 && manapi.innerHTML >= 10){
                    viebat1.innerHTML= viebat1.innerHTML - 20;
                    attaquego = false;
                    spe == false;
                    manapi.innerHTML = manapi.innerHTML - 10;
                    pi = false;
                    dialogue.innerHTML = "Appuye sur le bouton rouge";
                }
            }
            else{
                if (numeroDeTour == 1 && manap.innerHTML >= 5){
                    viebat1.innerHTML = viebat1.innerHTML - 10;
                    attaquego = false;
                    manap.innerHTML = manap.innerHTML - 5
                    p = false;
                    dialogue.innerHTML = "Appuye sur le bouton rouge";
                }
                if (numeroDeTour == 2 && manab.innerHTML >= 5){
                    viebat1.innerHTML = viebat1.innerHTML - 10;
                    attaquego = false;
                    manab.innerHTML = manab.innerHTML - 5
                    b = false;
                    dialogue.innerHTML = "Appuye sur le bouton rouge";
                }
                if (numeroDeTour == 3 && manag.innerHTML >= 5){
                    viebat1.innerHTML = viebat1.innerHTML - 10;
                    attaquego = false;
                    manag.innerHTML = manag.innerHTML - 5
                    g = false;
                    dialogue.innerHTML = "Appuye sur le bouton rouge";
                }
                if (numeroDeTour == 4 && manapi.innerHTML >= 5){
                    viebat1.innerHTML = viebat1.innerHTML - 10;
                    attaquego = false;
                    manapi.innerHTML = manapi.innerHTML - 5
                    pi = false
                    dialogue.innerHTML = "Appuye sur le bouton rouge";
                }
            }
        }
    }
    else{
        bat1.style.visibility = 'hidden'
    }
}
bat2.onclick = function(){
    if (viebat2.innerHTML >= 0){
        if (attaquego == true){
            if (spe == true){
                if (numeroDeTour == 1 && manap.innerHTML >= 10){
                    viebat2.innerHTML= viebat2.innerHTML - 25;
                    attaquego = false;
                    spe == false
                    manap.innerHTML = manap.innerHTML - 10;
                    p = false;
                    dialogue.innerHTML = "Appuye sur le bouton rouge";
                }
                if (numeroDeTour == 2 && manab.innerHTML >= 10){
                    viebat2.innerHTML= viebat2.innerHTML - 15;
                    attaquego = false;
                    spe == false
                    manab.innerHTML = manab.innerHTML - 10;
                    b = false
                    dialogue.innerHTML = "Appuye sur le bouton rouge";
                }
                if (numeroDeTour == 4 && manapi.innerHTML >= 10){
                    viebat2.innerHTML= viebat2.innerHTML - 20;
                    attaquego = false;
                    spe == false
                    manapi.innerHTML = manapi.innerHTML - 10;
                    pi = false;
                    dialogue.innerHTML = "Appuye sur le bouton rouge";
                }
            }
            else{
                if (numeroDeTour == 1 && manap.innerHTML >= 5){
                    viebat2.innerHTML = viebat2.innerHTML - 10;
                    attaquego = false;
                    manap.innerHTML = manap.innerHTML - 5
                    p = false;
                    dialogue.innerHTML = "Appuye sur le bouton rouge";
                }
                if (numeroDeTour == 2 && manab.innerHTML >= 5){
                    viebat2.innerHTML = viebat2.innerHTML - 10;
                    attaquego = false;
                    manab.innerHTML = manab.innerHTML - 5
                    b = false;
                    dialogue.innerHTML = "Appuye sur le bouton rouge";
                }
                if (numeroDeTour == 3 && manag.innerHTML >= 5){
                    viebat2.innerHTML = viebat2.innerHTML - 10;
                    attaquego = false;
                    manag.innerHTML = manag.innerHTML - 5
                    g = false;
                    dialogue.innerHTML = "Appuye sur le bouton rouge";
                }
                if (numeroDeTour == 4 && manapi.innerHTML >= 5){
                    viebat2.innerHTML = viebat2.innerHTML - 10;
                    attaquego = false;
                    manapi.innerHTML = manapi.innerHTML - 5
                    pi = false
                    dialogue.innerHTML = "Appuye sur le bouton rouge";
                }
            }
        }
    }
    else{
        bat2.style.visibility = 'hidden'
    }
}
function tourp(){
    if (p == true){
        if (viepurple == true){
            dialogue.innerHTML = "Tour = Purple, choisir action";
                if (a.onclick = function(){
                    attaquego = true;
                    dialogue.innerHTML = "Tour = Purple, attaque un monstre";
                    numeroDeTour = numeroDeTour + 1
                    tour = false
                });
                if (d.onclick = function(){
                    defp = true;
                    start.innerHTML = "Purple se defend";
                    numeroDeTour = numeroDeTour + 1
                    tour = false;
                    p = false;
                    dialogue.innerHTML = "Appuye sur le bouton rouge";
                });
                if (s.onclick = function(){
                    attaquego = true;
                    spe == true
                    dialogue.innerHTML = "Tour = Purple, attaque special sur un monstre";
                    numeroDeTour = numeroDeTour + 1
                    tour = false
                });
        }
    }
    else{
        numeroDeTour = numeroDeTour + 1
    }
}
function tourb(){
    if (b == true){
        if (vieblue == true){
            dialogue.innerHTML = "Tour = Blue, choisir action";
            if (a.onclick = function(){
                attaquego = true;
                dialogue.innerHTML = "Tour = Blue, attaque un monstre";
                numeroDeTour = numeroDeTour + 1
                tour = false
            });
            if (d.onclick = function(){
                defb = true;
                start.innerHTML = "Blue se defend";
                numeroDeTour = numeroDeTour + 1
                tour = false;
                b = false;
                dialogue.innerHTML = "Appuye sur le bouton rouge";
            });
            if (s.onclick = function(){
                attaquego = true;
                spe == true
                dialogue.innerHTML = "Tour = Blue, attaque special sur un monstre";
                numeroDeTour = numeroDeTour + 1
                tour = false
            });
        }
    }
    else{
        numeroDeTour = numeroDeTour + 1
    }
}
function tourg(){
    if (g == true){
        if (viegreen == true){
            dialogue.innerHTML = "Tour = Green, choisir action";
            if (a.onclick = function(){
                attaquego = true;
                dialogue.innerHTML = "Tour = Green, attaque un monstre";
                numeroDeTour = numeroDeTour + 1
                tour = false
            });
            if (d.onclick = function(){
                defg = true;
                start.innerHTML = "Green se defend";
                numeroDeTour = numeroDeTour + 1
                tour = false;
                g = false;
                dialogue.innerHTML = "Appuye sur le bouton rouge";
            });
            if (s.onclick = function(){
                attaquego = true;
                spe = true
                dialogue.innerHTML = "Tour = Green, attaque special soins sur amis";
                if (attaquego == true && spe == true){
                    if (imgp.onclick = function(){
                        viep.innerHTML = parseInt(viep.innerHTML) + 20;
                        manag.innerHTML = manag.innerHTML - 10;
                        dialogue.innerHTML = "Appuye sur le bouton rouge";
                        attaquego = false;
                        spe = false;
                        g = false;
                    });
                    if (imgb.onclick = function(){
                        vieb.innerHTML = parseInt(vieb.innerHTML) + 20;
                        manag.innerHTML = manag.innerHTML - 10;
                        dialogue.innerHTML = "Appuye sur le bouton rouge";
                        attaquego = false;
                        spe = false;
                        g = false;
                    });
                    if (imgg.onclick = function(){
                        vieg.innerHTML = parseInt(vieg.innerHTML) + 20;
                        manag.innerHTML = manag.innerHTML - 10;
                        dialogue.innerHTML = "Appuye sur le bouton rouge";
                        attaquego = false;
                        spe = false;
                        g = false;
                    });
                    if (imgpi.onclick = function(){
                        viepi.innerHTML = parseInt(viepi.innerHTML) + 20;
                        manag.innerHTML = manag.innerHTML - 10;
                        dialogue.innerHTML = "Appuye sur le bouton rouge";
                        attaquego = false;
                        spe = false;
                        g = false;
                    });
                }
                numeroDeTour = numeroDeTour + 1
                tour = false
            });
        }
    }
    else{
        numeroDeTour = numeroDeTour + 1
    }
}
function tourpi(){
    if (pi == true){
        if (viepink == true){
            dialogue.innerHTML = "Tour = Pink, choisir action";
            if (a.onclick = function(){
                attaquego = true;
                dialogue.innerHTML = "Tour = Pink, attaque un monstre";
                numeroDeTour = numeroDeTour + 1
                tour = false
            });
            if (d.onclick = function(){
                defpi = true;
                start.innerHTML = "Pink se defend";
                numeroDeTour = numeroDeTour + 1
                tour = false;
                pi = false;
                dialogue.innerHTML = "Appuye sur le bouton rouge";
            });
            if (s.onclick = function(){
                attaquego = true;
                spe == true
                dialogue.innerHTML = "Tour = Pink, attaque special sur un monstre";
                numeroDeTour = numeroDeTour + 1
                tour = false
            });
        }
    }
    else{
        numeroDeTour = numeroDeTour + 1
    }
}

//debut
start.onclick = function(){
    if (numeroDeTour == 4){
        dialogue.innerHTML = "Tour = Ennemis"
        if (numeroDeTour == 4){
            start.innerHTML = " Tour = Bat1";
            aleo = Math.floor(Math.random() * (max - min + 1)) + min;
            if (aleo == 1){
                if (defp == false){
                    if (viep.innerHTML >= 0){
                        viep.innerHTML = viep.innerHTML - 10;
                    }
                    else{
                        viepurple = false;
                        imgp.style.visibility = 'hidden'
                    }
                };
            };
            if (aleo == 2){
                if (defb ==false){
                    if (vieb.innerHTML >= 0){
                        vieb.innerHTML = vieb.innerHTML - 10;
                    }
                    else{
                        vieblue = false;
                        imgb.style.visibility = 'hidden'
                    }
                };
            };
            if (aleo == 3){
                if (defg == false){
                    if (vieg.innerHTML >= 0){
                        vieg.innerHTML = vieg.innerHTML - 10;
                    }
                    else{
                        viegreen = false;
                        imgg.style.visibility = 'hidden'
                    }
                };
            };
            if (aleo == 4){
                if (defpi == false){
                    if (viepi.innerHTML >= 0){
                        viepi.innerHTML = viepi.innerHTML - 10;
                    }
                    else{
                        viepink = false;
                        imgpi.style.visibility = 'hidden'
                    }
                };
            };
            numeroDeTour = numeroDeTour + 1
        }
        if (numeroDeTour == 5){
            start.innerHTML = " Tour = Imposteur";
            aleo = Math.floor(Math.random() * (max - min + 1)) + min;
            if (aleo == 1){
                if (defp == false){
                    if (viep.innerHTML >= 0){
                        viep.innerHTML = viep.innerHTML - 20;
                    }
                    else{
                        viepurple = false;
                        imgp.style.visibility = 'hidden'
                    }
                };
            };
            if (aleo == 2){
                if (defb == false){
                    if (vieb.innerHTML >= 0){
                        vieb.innerHTML = vieb.innerHTML - 20;
                    }
                    else{
                        vieblue = false;
                        imgb.style.visibility = 'hidden'
                    }
                };
            };
            if (aleo == 3){
                if (defg == false){
                    if (vieg.innerHTML >= 0){
                        vieg.innerHTML = vieg.innerHTML - 20;
                    }
                    else{
                        viegreen = false;
                        imgg.style.visibility = 'hidden'
                    }
                };
            };
            if (aleo == 4){
                if (defpi == false){
                    if (viepi.innerHTML >= 0){
                        viepi.innerHTML = viepi.innerHTML - 20;
                    }
                    else{
                        viepink = false;
                        imgpi.style.visibility = 'hidden'
                    }
                };
            };
            numeroDeTour = numeroDeTour + 1
        }
        if (numeroDeTour == 6){
            start.innerHTML = "Appuyer";
            aleo = Math.floor(Math.random() * (max - min + 1)) + min;
            if (aleo == 1){
                if (defp == false){
                    if (viep.innerHTML > 0){
                        viep.innerHTML = viep.innerHTML - 10;
                    }
                    else{
                        viepurple = false;
                        imgp.style.visibility = 'hidden'
                    }
                };
            };
            if (aleo == 2){
                if (defb == false){
                    if (vieb.innerHTML > 0){
                        vieb.innerHTML = vieb.innerHTML - 10;
                    }
                    else{
                        vieblue = false;
                        imgb.style.visibility = 'hidden'
                    }
                };
            };
            if (aleo == 3){
                if (defg == false){
                    if (vieg.innerHTML > 0){
                        vieg.innerHTML = vieg.innerHTML - 10;
                    }
                    else{
                        viegreen = false;
                        imgg.style.visibility = 'hidden'
                    }
                };
            };
            if (aleo == 4){
                if (defpi == false){
                    if (viepi.innerHTML > 0){
                        viepi.innerHTML = viepi.innerHTML - 10;
                    }
                    else{
                        viepink = false;
                        imgpi.style.visibility = 'hidden'
                    }
                };
            };
            numeroDeTour = 0
            p = true; b = true; g = true; pi = true
        }
        
    }
    else{
        dialogue.innerHTML = "Tour = Amis";
        tour = true
        if (numeroDeTour == 0){
            start.innerHTML = "Tour = Purple";
            if (tour == true){
                tourp();
            }
        }
        if (numeroDeTour == 1){
            start.innerHTML = "Tour = Blue";
            if (tour == true){
                tourb();
            }
        }
        if (numeroDeTour == 2){
            start.innerHTML = "Tour = Green";
            if (tour == true){
                tourg();
            }
        }
        if (numeroDeTour == 3){
            start.innerHTML = "Tour = Pink";
            if (tour == true){
                tourpi();
            }
        }

    }

}