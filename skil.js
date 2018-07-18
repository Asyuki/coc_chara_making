function skil_decision() {

	var i;
	var temp;
	var control;

	control = 0;
	//職業技能ポイント割り振り
	while(edu_p > 0 && control < 300){
		for (var cnt2 = 0; cnt2 < 8; cnt2++) {
			i = Math.floor(Math.random() * 8);
			pointing_cnt[cnt2] =i;
			for (var cnt = 0; cnt < cnt2; cnt++) {
				if (i == pointing_cnt[cnt]) {
					i = Math.floor(Math.random() * 8);
					cnt = 0;
				}
			}

			if (skil_point[i] <= 80 &&edu_p > 0) {
				temp = Math.floor(Math.random() * edu) + 1;
				if (temp > edu_p) {
					temp = edu_p;
				}
				if (temp + skil_point[i] > 80) {
					temp = 80 - skil_point[i];
				}
				skil_point[i] += temp;
				edu_p -= temp;
			}	
		}
		control++;
	}	

	control = 0;
	//興味ポイント割り振り
	while(int_p > 0 && control < 300){
		for (var cnt3 = 8; cnt3 < skil_size && int_p > 0; cnt3++) {
			if (skil_point[cnt3] <= 80 && int_p > 0) {
				temp = Math.floor(Math.random() * inte) + 1;
				if (temp > int_p) {
					temp = int_p;
				}
				if (temp + skil_point[cnt3] > 80) {
					temp = 80 - skil_point[cnt3];
				}
				skil_point[cnt3] += temp;
				int_p -= temp;
			}
		}
		control++;
	}	

	skil_name = [];


	for (var j = 0; j < skil_temp.length; j++) {
		skil_name.push(skil[skil_temp[j]], " ",skil_point[j], "<br>");
	}

	var put_skil = document.getElementById("skil");
	put_skil.innerHTML = skil_name.join("");
}