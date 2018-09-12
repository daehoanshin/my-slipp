/* disabled CSS function */
function disabledCss() {
	$('button[disabled]').addClass('btn-readonly');
}
/* readolny CSS function */
function readonlyCss() {
	$('input[readonly]').addClass('readonly');
}
/* login line CSS function */
function hrLineCss() {
	setTimeout(function(){
	    $('.trans--grow').addClass('grow');
	}, 275);
};
/* 선택한 폴더 line CSS function */
function lineColorCss(selectedNodeId){
	$('.fileName').removeClass('bg-color-cstm1');
	
	if(selectedNodeId.substring(0, 1) == 'i'){
		$('#' + selectedNodeId.substring(2, selectedNodeId.length)).addClass('bg-color-cstm1');
	} else {
		$('#' + selectedNodeId).addClass('bg-color-cstm1');
	}
}
/* folder 선택 시 icon 변경 function */
function folderCss(elementId, flag) {
	var element = $('#' + elementId).children();
	
	// folder 열기
	if(flag == 'open') {
		$(element[0]).removeClass('fa fa-plus-square-o');
		$(element[0]).addClass('fa fa-minus-square-o');
		$(element[1]).removeClass('fa fa-folder-o');
		$(element[1]).addClass('fa fa-folder-open-o');
	// folder 닫기
	} else if (flag == 'close') {
		$(element[0]).removeClass('fa fa-minus-square-o');
		$(element[0]).addClass('fa fa-plus-square-o');
		$(element[1]).removeClass('fa fa-folder-open-o');
		$(element[1]).addClass('fa fa-folder-o');
	}
}
/* Deploy, Lock에서 파일 이동 시 버튼 validation 체크 function */
function listValidation(divId, btnId) {
	if($('#' + divId).find('input:checked').length > 0) {
		$('#' + btnId).attr('disabled', false);
		$('#' + btnId).removeClass('btn-readonly');
		return 1;
	} else {
		$('#' + btnId).attr('disabled', 'disabled');
		$('#' + btnId).addClass('btn-readonly');
		return 0;
	}
}
/* Deploy, Lock에서 체크박스 클릭 시 버튼 CSS function */
function checkInputBox() {
	var lockBtnFlag = listValidation('lockListBody', 'moveDepBtn');

	// lock list에서 파일이 하나라도 있을 경우
	if(lockBtnFlag) {
		$('#lockBtn').attr('disabled', false);
		$('#lockBtn').removeClass('btn-readonly');
		
		$('#lockRtryBtn').attr('disabled', false);
		$('#lockRtryBtn').removeClass('btn-readonly');
	// lock list에서 파일이 없을 경우
	} else {
		$('#lockBtn').attr('disabled', 'disabled');
		$('#lockBtn').addClass('btn-readonly');
		
		$('#lockRtryBtn').attr('disabled', 'disabled');
		$('#lockRtryBtn').addClass('btn-readonly');
	}
	
/*	var checked = $('#LockList').find('input:checkbox:checked').length;
	var AllChkBox = $('#LockList').find('input:checkbox').length;
	var unLocked = $('#LockList').find('.unLocked').length;
	
	if(unLocked == 0) {
		$(".before-lock-btn").show();
		$(".after-lock-btn").hide();
		BtnFlag['lock'] = '0';
	}
	
	if(BtnFlag['lock'] == '1') {
		if(AllChkBox-checked == 0 && unLocked >= 0) {
			if(unLocked != 0) {
				$(".after-lock-btn").hide();
				$(".before-lock-btn").show();
			}
		} else {
			$(".before-lock-btn").hide();
			$(".after-lock-btn").show();
		}
	}
	*/
	
	listValidation('deployListBody', 'moveLckBtn');
}
$(document).ready(function() {
	// 화면 크기 CSS
	var width = window.screen.width;
	if(Number(width) > 1540){
		$(".tb-w120").css('width','155px');
		$(".tb-w100").css('width','135px');
	}
	
	$('#moveLckBtn').attr('disabled', 'disabled');
	$('#moveLckBtn').addClass('btn-readonly');
	$('#lockBtn').attr('disabled', 'disabled');
	$('#lockBtn').addClass('btn-readonly');
	$('#moveDepBtn').attr('disabled', 'disabled');
	$('#moveDepBtn').addClass('btn-readonly');
	
	// Deploy, Lock에서 change 이벤트 발생 시
	$('body').on('change', '[id$=ListBody], [id$=_checkAll]', function() {
		checkInputBox();
	});
	// Depoly에서 전체 체크박스 선택 시
	$("#dpl_checkAll").click(function(){
		var chk = $(this).prop('checked');
		$("input[name=dplChk]").prop('checked',chk);
		checkInputBox();
	});
	// Lock에서 전체 체크박스 선택 시 
	$("#lock_checkAll").click(function(){
		var chk = $(this).prop('checked');
		$("input[name=lockChk]").prop('checked',chk);
		checkInputBox();
	});
})