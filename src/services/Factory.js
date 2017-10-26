import Vue from 'vue'
/**
Concentra as requisicoes para a api
*/

export default class Factory{
	constructor(endpoint,  params){
		this.v = Vue;
		this.api_url ='http://192.168.0.250/CensoBackend/';
		this.endpoint = endpoint;
		this.params=params || {};
		
		//recupera os dados do user logado
		//vindo do main.js

		if(Vue.root.User !=null){
			this.params.token_api =Vue.root.User.token;
			this.params.usuario_id = Vue.root.User.id;
		}
	}


	//Monta os paramtros para get
	param_str(){
		let link = '';
		for(let key in this.params){
            if (link != "") {
                link += "&";
            }
            link += key + "=" + this.params[key];
        }
        return link;
	}


	get(opt){
		let self = this;
		let options = opt || {};
		return this.v.http.get(this.api_url + this.endpoint+'?'+this.param_str(), options);
	}
	
	post(opt){
		let self = this;
		let options = opt || {};
		return this.v.http.post(this.api_url + this.endpoint, this.params, {emulateJSON: true}, options);
	}
}