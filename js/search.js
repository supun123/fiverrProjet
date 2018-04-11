
var app = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {

        var employees = [
            { username: "Ben",business_name:"Ben12", gender: "Male", category : "Accessories", town_city: "London",state:"",about:"" },
            { username: "Supun",business_name:"supunAbc", gender: "female ", category : "Accomodation", town_city: "Matara",state:"",about:"" },
            { username: "Camal",business_name:"camal", gender: "Male", category : "Actor", town_city: "Colombo",state:"",about:"" },
            { username: "Nimal",business_name:"Nimalsnnk", gender: "female ", category : "Actor", town_city: "Dabulla",state:"",about:"" },
            { username: "Pasidu",business_name:"Pasidu123", gender: "Male", category : "Accountants & Auditors", town_city: "London",state:"",about:"" },
            {username: "Jon",business_name:"silva", gender: "Male", category : "Accessories", town_city: "London",state:"",about:"" },
            {username: "Jon",business_name:"silva", gender: "Male", category : "Accountant", town_city: "New York",state:"",about:"" },
        ];

        $scope.employees = employees;

        $scope.Categories = [{id: 1,name: 'Accessories'}, {id: 2,name: 'Accomodation'},{id: 3,name: 'Accountant'}, {id: 4,name: 'Accountants & Auditors'},{id: 5,name: 'Activewear'}, {id: 6,name: 'Actor'}];
    });