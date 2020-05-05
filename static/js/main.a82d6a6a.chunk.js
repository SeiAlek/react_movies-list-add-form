(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),l=a(13),n=a.n(l),o=(a(21),a(10)),s=a(5),d=a(6),c=a(9),m=a(8),u=(a(22),a(23),a(24),function(e){var t=e.title,a=e.description,i=e.imgUrl,l=e.imdbUrl;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:i,alt:"Film logo"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-48x48"},r.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-8"},t))),r.a.createElement("div",{className:"content"},a,r.a.createElement("br",null),r.a.createElement("a",{href:l},"IMDB"))))});u.defaultProps={description:""};var h=function(e){var t=e.movies;return r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(u,Object.assign({key:e.imdbId},e))})))};h.defaultProps={movies:[]};var f=a(15),p=a(3),v=a(1),b=a(7),g=a.n(b),w=(a(12),function(e){var t=e.fieldName,a=e.fieldData,i=e.textsOfErrors,l=e.handleFieldBlur,n=e.handleFieldChange;return r.a.createElement("label",{htmlFor:t,className:"form__label"},a.fieldLabel,r.a.createElement("input",{id:t,className:g()("form__field",{"form__field--error":a.showError&&!a.isValid}),type:"text",value:a.input,onBlur:l,onChange:n}),a.showError&&!a.isValid&&r.a.createElement("div",{className:"form__error"},i[a.type]||i.default))}),E=function(e){var t=e.fieldName,a=e.fieldData,i=e.textsOfErrors,l=e.handleFieldBlur,n=e.handleFieldChange;return r.a.createElement("label",{htmlFor:t,className:"form__label"},a.fieldLabel,r.a.createElement("textarea",{id:t,className:g()("form__textarea",{"form__textarea--error":a.showError&&!a.isValid}),type:"text",value:a.input,onBlur:l,onChange:n}),a.showError&&!a.isValid&&r.a.createElement("div",{className:"form__error"},i[a.type]||i.default))},M={title:{value:"",input:"",type:"text",fieldLabel:"Title",isValid:!1,showError:!1},description:{value:"",input:"",type:"textarea",fieldLabel:"Description",isValid:!1,showError:!1},imgUrl:{value:"",input:"",type:"url",fieldLabel:"Image URL",isValid:!1,showError:!1},imdbUrl:{value:"",input:"",type:"url",fieldLabel:"IMDB URL",isValid:!1,showError:!1},imdbId:{value:"",input:"",type:"text",fieldLabel:"IMDB ID",isValid:!1,showError:!1}},y=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/,O=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state=Object(v.a)({},M),e.textsOfErrors={default:"Please fill in the field correctly.",url:"Please enter a valid URL"},e.reset=function(){e.setState((function(){return Object(v.a)({},M)}))},e.checkValid=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0;if("text"!==i&&"textarea"!==i||e.setMovieProp(t,"isValid",!!a.trim()),"url"===i){var r=y.test(a);e.setMovieProp(t,"isValid",r)}},e.checkAllValid=function(){return Object.values(e.state).every((function(e){return e.isValid}))},e.setMovieProp=function(t,a,i){e.setState((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(p.a)({},t,Object(v.a)(Object(v.a)({},e[t]),{},Object(p.a)({},a,i))))}))},e.onAdd=function(t){if(t.preventDefault(),e.checkAllValid()){var a=e.state,i=a.title,r=a.description,l=a.imgUrl,n=a.imdbUrl,o=a.imdbId,s={title:i.value,description:r.value,imgUrl:l.value,imdbUrl:n.value,imdbId:o.value};e.reset(),e.props.addMovie(s)}},e.handleFieldBlur=function(t){var a=t.target,i=a.id,r=a.value,l=e.state[i].type;e.checkValid(i,r,l),e.setMovieProp(i,"value",r.trim()),e.setMovieProp(i,"showError",!0)},e.handleFieldChange=function(t){var a=t.target,i=a.id,r=a.value,l=e.state[i].type;e.checkValid(i,r.trim(),l),e.setMovieProp(i,"input",r)},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.reset()}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:this.onAdd,className:"form"},Object.entries(this.state).map((function(t){var a=Object(f.a)(t,2),i=a[0],l=a[1];return"textarea"===l.type?r.a.createElement(E,{key:i,fieldName:i,fieldData:l,textsOfErrors:e.textsOfErrors,handleFieldBlur:e.handleFieldBlur,handleFieldChange:e.handleFieldChange}):r.a.createElement(w,{key:i,fieldName:i,fieldData:l,textsOfErrors:e.textsOfErrors,handleFieldBlur:e.handleFieldBlur,handleFieldChange:e.handleFieldChange})})),r.a.createElement("button",{type:"submit",className:"form__button",disabled:!this.checkAllValid()},"Submit"))}}]),a}(i.Component),j=a(14),N=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={movies:Object(o.a)(j)},e.addMovie=function(t){var a=t.title,i=t.description,r=t.imgUrl,l=t.imdbUrl,n=t.imdbId;e.setState((function(e){return{movies:[].concat(Object(o.a)(e.movies),[{title:a,description:i,imgUrl:r,imdbUrl:l,imdbId:n}])}}))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"page-content"},r.a.createElement(h,{movies:e})),r.a.createElement("div",{className:"sidebar"},r.a.createElement(O,{addMovie:this.addMovie})))}}]),a}(i.Component);n.a.render(r.a.createElement(N,null),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.a82d6a6a.chunk.js.map