index.controller('NavController', function() {
    this.tab = 1; // always go to 1st tab
    
    this.selectNav = function(setTab) {
        this.tab = setTab;
    }
    this.isSelected = function(checkTab){
        return this.tab === checkTab;
    };
});