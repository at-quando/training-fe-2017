
var $btn= document.getElementById(`js-submit`);
var $content = document.getElementById(`js-members`);
var $input = document.getElementById(`js-input`);

class Member{
   domElem : any;
	constructor(private name: string){
		this.domElem = document.createElement('li');
		this.settingContent(name);
		this.addingButton();
	}
	settingContent(name: string){
		let $span = document.createElement('span');
		$span.innerHTML = name;
		this.domElem.appendChild($span);
	}
	addingButton(){
		let $delBtn = document.createElement('button');
		$delBtn.innerHTML= "DELETE";
		$delBtn.className= "btn btn-danger";
		$delBtn.addEventListener('click', (e) => {
			let $parentElem = e.target.parentNode;
			$content.removeChild($parentElem);
		});
		this.domElem.appendChild($delBtn);
	}
}

$btn.addEventListener('click', function(){
	let name : any = $input.value;
	let member = new Member(name);
  $content.appendChild(member.domElem);
});
