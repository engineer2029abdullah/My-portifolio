//==================في حاجه تفريبا


let ToggleMenu=document.querySelector(".ToggleMenu");
let InContainer=document.querySelector(".InContainer");
let Main=document.querySelector(".Main");

ToggleMenu.onclick = function(){
    InContainer.classList.toggle("active");
    Main.classList.toggle("active");
};


const sidebarLinks = document.querySelectorAll('.InContainer ul li a');

sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        // إزالة Active من كل الروابط
        sidebarLinks.forEach(l => l.classList.remove('active'));

        // إضافة Active للرابط اللي اتضغط عليه
        this.classList.add('active');

        // عرض المحتوى المناسب
        const id = this.getAttribute('data-id');
        const contents = document.querySelectorAll('.ContentItem');
        contents.forEach(item => item.style.display = 'none');

        const activeContent = document.getElementById(id);
        if(activeContent) activeContent.style.display = 'block';
    });
});



import { stats } from './data.js';

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("totalEmployes").textContent = stats.totalEmployes;
    document.getElementById("totalTeams").textContent = stats.totalTeams;
    document.getElementById("totalProcessTasks").textContent = stats.totalProcessTasks;
    document.getElementById("totalCompletedTasks").textContent = stats.totalCompletedTasks;
});