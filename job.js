function job_decision() {
	var job = ['医師', 'エンジニア', '狂信者', '警察官', '芸術家', 
	'古物研究家', 'コンピューター技術者', '作家', '自衛官', 'ジャーナリスト', 
	'宗教家','店主', '私立探偵', 'スポーツ選手', '大学教授', 'タレント', 
	'超心理学者','ディレッタント', 'ドライバー', '農林業従事者', 'ビジネスマン', 
	'法律家','放浪者', '暴力団組員', 'ミュージシャン', 'メンタルセラピスト'];
	var i;
	i = Math.floor(Math.random() * job.length);

	var job_name = document.getElementById("job_name");
	job_name.innerHTML = job[i];
};