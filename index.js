setInterval(
    ()=>{
        d=new Date();
        htime=d.getHours();
        mtime=d.getMinutes();
        stime=d.getSeconds();
        hrotation=30*htime+mtime/2;
        mrotation=6*mtime;
        srotation=6*stime;
        // console.log(stime);
        // second.style.transform='rotate(${srotation}deg)';
        document.getElementById("second").style.transform=`rotate(${srotation}deg)`;
        document.getElementById("hour").style.transform=`rotate(${hrotation}deg)`;
        document.getElementById("minute").style.transform=`rotate(${mrotation}deg)`;
    },1000 );
    