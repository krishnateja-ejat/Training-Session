/**
 * Created by MINNU on 5/2/2017.
 */
var Customer = (function () {
    function Customer() {
        this.Name = "";
        this.age = 0;
        this.address = "";
        this.phone = null;
    }
    Customer.prototype.validate = function () {
        if (this.Name == null || this.age == 0 || this.address == null || this.phone == 0) {
            throw "All The Fields Are Requried";
            return false;
        }
        return true;
    };
    Customer.prototype.len = function () {
        return this.Name.length;
    };
    Customer.prototype.concat = function () {
        return "My name is " + this.Name + ",age is " + this.age + ",address is " + this.address + "and my phone number is " + this.phone;
    };
    return Customer;
})();
//# sourceMappingURL=Customer.js.map