/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-10-18 16:15:20
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-18 21:12:09
 * @FilePath: /chemistry_data_manage/js/custom.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */






/*工作列提示窗*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})





// page loading

$(window).on('load',function(){
    setTimeout(function () {
    $('#loading').fadeOut(500);
  },1000);
});


//表格下載按鈕 下載中視窗

$(document).ready(function(){
  $(document).on("click", ".block_outer .ti-table-down", function () {
    $('#data_download').fadeIn();
    setTimeout(function(){
      $('#data_download').fadeOut(500);
    },1000); 
  });
});







//submenu
document.addEventListener("DOMContentLoaded", function(){
  // make it as accordion for smaller screens
  if (window.innerWidth < 992) {
  
    // close all inner dropdowns when parent is closed
    document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
      everydropdown.addEventListener('hidden.bs.dropdown', function () {
        // after dropdown is hidden, then find all submenus
          this.querySelectorAll('.submenu').forEach(function(everysubmenu){
            // hide every submenu as well
            everysubmenu.style.display = 'none';
          });
      })
    });
  
    document.querySelectorAll('.dropdown-menu a').forEach(function(element){
      element.addEventListener('click', function (e) {
          let nextEl = this.nextElementSibling;
          if(nextEl && nextEl.classList.contains('submenu')) {	
            // prevent opening link if link needs to open dropdown
            e.preventDefault();
            if(nextEl.style.display == 'block'){
              nextEl.style.display = 'none';
            } else {
              nextEl.style.display = 'block';
            }
  
          }
      });
    })
  }
  // end if innerWidth
  }); 
  // DOMContentLoaded  end




  $(function() {
    $('.table_1').bootstrapTable()
  })






//水量表

  //var cnt=document.getElementById("count"); 
  //var water=document.getElementById("water");
  //var percent=cnt.innerText;
  //var interval;
  //interval=setInterval(function(){ 
  //  percent++; 
  //  cnt.innerHTML = percent; 
  //  water.style.transform='translate(0'+','+(100-percent)+'%)';
  //  if(percent==80){
  //    clearInterval(interval);
  //  }
  //},60); 









