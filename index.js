window.onload = function(){
	document.getElementById('qfield').focus();

	var flist = document.getElementById('flist');
	for (var i in favorites) {
		var item = document.createElement('li');
		flist.appendChild(item);
		var link = document.createElement('a');
		link.setAttribute('href', favorites[i].url);
		item.appendChild(link)
		// var name = document.createTextNode(favorites[i].name);
		// link.appendChild(name)
		var icon = document.createElement('img');
		icon.setAttribute('src', 'icons/'+favorites[i].name.toLowerCase().replace(/\s/g,'')+".png");
		icon.setAttribute('alt', favorites[i].name);
		link.appendChild(icon)
	};
}