var _this = this;
var Arr = [];
var employee = (function () {
    function employee(firstname, lastname, age, address, type_work, Designation) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.address = address;
        this.add_off = function (emp) {
            Arr.push(emp);
            return Arr;
        };
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.address = address;
        this.type_work = type_work;
        this.Designation = Designation;
    }
    return employee;
}());
var c = 0;
var add = function () {
    var fname = document.getElementById("f_name").value;
    var lname = document.getElementById("l_name").value;
    var age = parseInt(document.getElementById("age").value);
    var address = document.getElementById("address").value;
    var work;
    if (document.getElementById("dev").checked) {
        work = "Developing";
    }
    else if (document.getElementById("tes").checked) {
        work = "Testing";
    }
    else if (document.getElementById("netw").checked) {
        work = "NetWorking";
    }
    var Designation = document.getElementById("select").value;
    var resetForm = document.getElementById("myForm");
    resetForm.reset();
    var emp = new employee(fname, lname, age, address, work, Designation);
    var x = emp.add_off(emp);
};
var sort = function () {
    function compare(a, b) {
        var genreA = a.firstname.toUpperCase();
        var genreB = b.firstname.toUpperCase();
        var comparison = 0;
        if (genreA > genreB) {
            comparison = 1;
        }
        else if (genreA < genreB) {
            comparison = -1;
        }
        return comparison;
    }
    Arr.sort(compare);
    _this.display();
};
var display = function () {
    for (var i = 0; i < Arr.length; i++) {
        console.log(Arr[i].firstname);
        console.log(Arr[i].lastname);
        console.log(Arr[i].age);
        console.log(Arr[i].address);
        console.log(Arr[i].type_work);
        console.log(Arr[i].Designation);
    }
};
