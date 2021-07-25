//---la fonction playme permettra d'appliquer les changement à la page principale en cliquant sur le menu-----  
function playme(nclass, imclass, p1class, p2class, p3class, p4class, ctnclass, hdrclass, aclass, iclass) {
    //-----navbar-------
    var nav = document.querySelector('.'+nclass);
    nav.style.width = "6%";
    nav.style.borderRadius = "0px 50px 50px 0px";
    nav.style.borderRight = "3px solid rgba(0, 0, 0, 0.1)";
    nav.style.transition = "all 1.5s";
    nav.onmouseover = function() {openme(nclass, imclass, p1class, p2class, p3class, p4class)};
    nav.onmouseout = function() {closeme(nclass, imclass, p1class, p2class, p3class, p4class)};

        //-----image-----
        var img = document.querySelector('.'+imclass);
        img.style.width = "50px";
        img.style.height = "50px";

        //-----information-----
        var a = document.querySelector('.'+p1class);
        a.style.display = "none";

        var b = document.querySelector('.'+p2class);
        b.style.display = "none";

        var c = document.querySelector('.'+p3class);
        c.style.display = "none";

        var d = document.querySelector('.'+p4class);
        d.style.display = "none";

    //-----content-----
    var content = document.querySelector('.'+ctnclass);
    content.style.width = "94%";
    content.style.left = "6%";
    
        //-----header-----
        var header = document.querySelector('.'+hdrclass);
        header.style.width = "94%";
        header.style.backgroundColor = "#fff";
        header.style.transition = "width 1s";
        
        //-----section-----(ce code permettra de choisir et afficher la page html correspondante à chaque lien du menu)
        if (aclass == 'expérience') {
            var iframe = document.querySelector('.'+iclass);
            iframe.style.display = "block";
            iframe.src = "Experience.html";
        }
        else if (aclass == 'compétences') {
            var iframe = document.querySelector('.'+iclass);
            iframe.style.display = "block";
            iframe.src = "Competence.html";
        }
        else if (aclass == 'formation') {
            var iframe = document.querySelector('.'+iclass);
            iframe.style.display = "block";
            iframe.src = "Formation.html";
        }
}

//---la fonction openme permettra d'ouvrir le navbar au passage de la sourie en dessus---
function openme(nclass, imclass, p1class, p2class, p3class, p4class) {
    //-----navbar-------
    var nav = document.querySelector('.'+nclass);
    nav.style.width = "25%";

        //-----image-----
        var img = document.querySelector('.'+imclass);
        img.style.width = "150px";
        img.style.height = "150px";
        img.style.transition = "all 2s";

        //-----information-----
        var a = document.querySelector('.'+p1class);
        a.style.display = "block";

        var b = document.querySelector('.'+p2class);
        b.style.display = "block";

        var c = document.querySelector('.'+p3class);
        c.style.display = "block";

        var d = document.querySelector('.'+p4class);
        d.style.display = "block";
}

//---la fonction closeme permettra de fermer le navbar après le passage de la sourie en dessus---
function closeme(nclass, imclass, p1class, p2class, p3class, p4class) {
    //-----navbar-------
    var nav = document.querySelector('.'+nclass);
    nav.style.width = "6%";

        //-----image-----
        var img = document.querySelector('.'+imclass);
        img.style.width = "50px";
        img.style.height = "50px";
        img.style.transition = "all 2s";

        //-----information-----
        var a = document.querySelector('.'+p1class);
        a.style.display = "none";

        var b = document.querySelector('.'+p2class);
        b.style.display = "none";

        var c = document.querySelector('.'+p3class);
        c.style.display = "none";

        var d = document.querySelector('.'+p4class);
        d.style.display = "none";
}
