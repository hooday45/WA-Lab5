var app = angular.module('techStoreApp', []);

app.controller('ProductController', function ($scope) {
    $scope.products = [
        { name: 'Apple MacBook Pro', price: 1299, image: 'appleMacBookPro.jpg' },
        { name: 'Google Pixelbook Go', price: 649, image: 'googlePixelbookGo.jpeg' },
        { name: 'Microsoft Surface Laptop 4', price: 999, image: 'microsoftSurfaceLaptop4.jpeg' },
        { name: 'Samsung Galaxy Tab S7', price: 549, image: 'samsungGalaxyTabS7.jpeg' },
        { name: 'Sony WH-1000XM4 Headphones', price: 349, image: 'sonyWH-1000XM4Headphones.jpeg' },
        { name: 'Amazon Echo Show 8', price: 129, image: 'amazonEchoShow8.jpeg' }
    ];

    $scope.cartItems = [];
    $scope.cartVisible = false;

    $scope.addToCart = function (product) {
        $scope.cartItems.push(angular.copy(product));
    };

    $scope.removeFromCart = function (item) {
        var index = $scope.cartItems.indexOf(item);
        if (index !== -1) {
            $scope.cartItems.splice(index, 1);
        }
    };

    $scope.getTotal = function () {
        return $scope.cartItems.reduce(function (total, item) {
            return total + item.price;
        }, 0);
    };

    $scope.toggleCartVisibility = function () {
        $scope.cartVisible = !$scope.cartVisible;
    };
});
