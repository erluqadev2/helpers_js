var callBackSeries = function(array, callBack, err){
	var pos = -1;
	var done = function(){
		next();
	}
	var next = function(){
		pos++;
		if(pos == (array.length)){
			callBack();
		}
		else if(typeof array[pos] != 'function'){
			err(array[pos] + "is not a function");
		}
		else{
			array[pos](done , err);
		}
	};
	next();
};
