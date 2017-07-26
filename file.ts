var $btn = document.getElementById('js-submit');
var $input = document.getElementById('js-input');
var $list = document.getElementById('js-members');
$btn.addEventListener('click', function(){
	var name = $input.value;

	var $newMember = document.createElement('li');
	//$newMember.className = 'list-group-item';
	var $span = document.createElement('span');
	$span.innerHTML = name;

	var $delBtn = document.createElement('button');
	//$delBtn.className = 'btn btn-danger btn-xs pull-right';
	$delBtn.innerHTML = "Delete";
	
	$newMember.appendChild($span);
	$newMember.appendChild($delBtn);

	$list.appendChild($newMember);

	$delBtn.addEventListener('click', function(){
			var $parentElm = this.parentNode;
			$list.removeChild($parentElm);
	});

});
