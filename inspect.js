'use strict'
// new inspect tab
const preLossCard = document.getElementById('preLoss');
const postLossCard = document.getElementById('postLoss');
const Btn = document.getElementById('btn');
const initialBorder = '1px solid #EEEEEE';
const border = '1px solid #FF7A00';
const option = document.getElementById('customSelect');

  preLossCard.addEventListener('click', function(){
    preLossCard.style.border = border;
    Btn.style.backgroundColor = '#FF7A00';
    postLossCard.style.border = initialBorder;
    option.addEventListener('change', function(event){
      const currentValue = event.target.value;
      console.log(currentValue)
      if(currentValue === 'property') {
        Btn.addEventListener('click', function(){
          location.href = '/preLoss.html'
        })
      } else {
        Btn.addEventListener('click', function(){
          location.href = '/preloss.html'
        })
      }
    })
  })
  postLossCard.addEventListener('click', function(){
    postLossCard.style.border = border;
    Btn.style.backgroundColor = '#FF7A00'
    preLossCard.style.border = initialBorder;
    option.addEventListener('change', function(event){
      const currentValue = event.target.value;
      console.log(currentValue)
      if(currentValue === 'property') {
        Btn.addEventListener('click', function(){
          location.href = '/postloss.html'
        })
      } else {
        Btn.addEventListener('click', function(){
          location.href = '/postloss.html'
        })
      }
    })
  })

  const RequestList = document.getElementById('request');
  const RequestImg = document.getElementById('requestImg')
  
  RequestList.style.color = '#FF7A00';
  RequestImg.style.filter= 'invert(74%) sepia(69%) saturate(6480%) hue-rotate(3deg) brightness(107%) contrast(102%)';


