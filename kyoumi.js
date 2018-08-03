function int_decision() {
var cnt;
var i;
var j;

	cnt = 8;
	skil_size = Math.floor((Math.random() * (inte / 4))) + 3;
	skil_size += 8;
	while(cnt < skil_size){
		if (kaihi_check == true) {			//回避をとらない
			i = Math.floor(Math.random() * (skil.length - 1)) + 1;
		}else{
			i = Math.floor(Math.random() * skil.length);
		}
		skil_temp[cnt] = i;
		skil_point[cnt] = default_point[i];
		for(j = 0; j < cnt; j++){
			if(skil_temp[j] == i){
				cnt--;
				j = cnt;
			}
		}
		cnt++;
	}
}