/**
 * Created by Administrator on 2016/8/4.
 */
//��ʼ����������
$(function(){
    $('#FontScroll').FontScroll({time: 3000,num: 1});
});

//������
$('.indicatorContainer').radialIndicator({
    barColor: '#337AB7',
    radius : 20,
    initValue : 100,
    barWidth : 3,
    fontColor:'#666',
    percentage: true
});
$('.indicatorContainer-1').radialIndicator({
    barColor: '#337AB7',
    radius : 20,
    minValue:0.1,
    maxValue:100,
    initValue : 6.5,
    barWidth : 3,
    fontColor:'#666',
    percentage: true
});

//����
window.scrollReveal = new scrollReveal({ reset: true, move: '50px',delay: 500, scale: 0.9 });


//΢�� ΢�� �ֻ�ͼ�����Ч��
function jiaohuan(){
    document.getElementById('im').src="images/xl.png";
}
function huanyuan(){
    document.getElementById('im').src="images/xl-h.png";
}
function wxjiaohuan(){
    document.getElementById('ahover').src="images/wx.png";
}
function wxhuanyuan(){
    document.getElementById('ahover').src="images/wx-h.png";
}
function ipjiaohuan(){
    document.getElementById('ip').src="images/ipad.png";
}
function iphuanyuan(){
    document.getElementById('ip').src="images/ipad-h.png";
}

