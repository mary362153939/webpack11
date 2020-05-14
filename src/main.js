
import $ from 'jquery'

import './css/index.css'

import './css/index.less'

import './css/index.scss'

import 'bootstrap/dist/css/bootstrap.css'


import Vue from 'vue'

import login from './login.vue'


// var login = {
//     template: '<h1>这是登录组件</h1>'
// }

var vm = new Vue({
    el: '#app',
    data:{
        msg:123
    },
   render: c => c(login)
})




$(function(){
    $('li:odd').css('backgroundColor', 'pink')
    $('li:even').css('backgroundColor', function(){
        return '#' + 'D23634'
    })
})

class Person{
    static info = {name:'张三', age:'20'}
}
console.log(Person.info)

